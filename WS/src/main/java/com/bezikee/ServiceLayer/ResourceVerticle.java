package com.bezikee.ServiceLayer;

import com.bezikee.App;
import com.bezikee.Common.LoggerOps;
import com.bezikee.Common.Registry;
import io.vertx.core.AbstractVerticle;
import io.vertx.core.buffer.Buffer;
import io.vertx.core.http.HttpServerResponse;
import io.vertx.ext.web.FileUpload;
import io.vertx.ext.web.RoutingContext;
import io.vertx.ext.web.handler.BodyHandler;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.Iterator;
import java.util.Set;

public class ResourceVerticle extends AbstractVerticle {

    @Override
    public void start() {
        LoggerOps.debug("Starting resource Verticle.");


        App.router.route().handler(BodyHandler.create());
        App.router.put("/upload").handler(this::handleUpload);
        vertx.createHttpServer().requestHandler(App.router::accept).listen(8080);
    }

    private void handleUpload(RoutingContext routingContext) {
        LoggerOps.debug("ResourceVerticle - Getting file");
        Set<FileUpload> fileUploadSet = routingContext.fileUploads();
        Iterator<FileUpload> fileUploadIterator = fileUploadSet.iterator();
        while (fileUploadIterator.hasNext()){
            FileUpload fileUpload = fileUploadIterator.next();

            // To get the uploaded file do
            Buffer uploadedFile = vertx.fileSystem().readFileBlocking(fileUpload.uploadedFileName());

            String fileName="";
            try {
                fileName = URLDecoder.decode(fileUpload.fileName(), "UTF-8");
            } catch (UnsupportedEncodingException e) {
                e.printStackTrace();
            }

            String path = Registry.IMG_PATH;
            vertx.fileSystem().writeFile(path+fileName,uploadedFile,result -> {

                deleteFileUploads(routingContext);

                HttpServerResponse response = routingContext.response();
                response.putHeader("Content-Type", "application/json");

                if (result.succeeded()) {
                    LoggerOps.debug("ResourceVerticle - Success to write");
                    response.setStatusCode(200).end("Success");
                } else {
                    LoggerOps.error("ResourceVerticle - Failed to write");
                    response.setStatusCode(400).end("Fail");
                }
            });

        }



    }

    private void deleteFileUploads(RoutingContext context) {
        for (FileUpload fileUpload : context.fileUploads()) {
            context.vertx().fileSystem().delete(fileUpload.uploadedFileName(), result -> {
                if (result.failed()) {
                    LoggerOps.error("Delete of file failed :"+ fileUpload.uploadedFileName());
                } else {
                    LoggerOps.debug("Delete of file succeeded:  " + fileUpload.uploadedFileName());
                }
            });
        }
    }
}
