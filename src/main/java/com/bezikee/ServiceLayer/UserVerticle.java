package com.bezikee.ServiceLayer;


import com.bezikee.Common.DateOps;
import com.bezikee.DataAccessLayer.DaoFactory;
import com.bezikee.DataAccessLayer.User.IUserDao;
import com.bezikee.DataAccessLayer.User.UserBean;
import io.vertx.core.AbstractVerticle;
import io.vertx.core.http.HttpServerResponse;
import io.vertx.core.json.JsonArray;
import io.vertx.core.json.JsonObject;
import io.vertx.ext.web.Router;
import io.vertx.ext.web.RoutingContext;
import io.vertx.ext.web.handler.BodyHandler;

import java.util.HashMap;
import java.util.Map;

/**
 * @author <a href="http://tfox.org">Tim Fox</a>
 */
public class UserVerticle extends AbstractVerticle {

    @Override
    public void start() {

        Router router = Router.router(vertx);

        router.route().handler(BodyHandler.create());
        router.get("/user/:userId").handler(this::handleGetUser);
        router.put("/user").handler(this::handleAddUser);
        router.get("/user").handler(this::handleGetAllUsers);

        vertx.createHttpServer().requestHandler(router::accept).listen(8080);
    }

    private void handleGetUser(RoutingContext routingContext) {
        String productID = routingContext.request().getParam("userId");
        HttpServerResponse response = routingContext.response();
        if (productID == null) {
            sendError(400, response);
        } else {
            JsonObject product =null;
            if (product == null) {
                sendError(404, response);
            } else {
                response.putHeader("content-type", "application/json").end(product.encodePrettily());
            }
        }
    }

    private void handleAddUser(RoutingContext routingContext) {

        HttpServerResponse response = routingContext.response();

        UserBean user = new UserBean(
                routingContext.request().getParam("name"),
                routingContext.request().getParam("lastName"),
                routingContext.request().getParam("email"),
                routingContext.request().getParam("username"),
                routingContext.request().getParam("password"),
                DateOps.convertToMysql( routingContext.request().getParam("birthDate")),
                routingContext.request().getParam("sex")
        );


        //Comando Agregar user
        IUserDao dao = DaoFactory.instantiateUserDao();

        response.putHeader("Content-Type", "text/plain");
        response.putHeader("Content-Length", String.valueOf(20));
            if (dao.create(user) == false) {
                response.write("Failed...!");
            } else {
                response.write("OK!");
                response.end();
            }

    }

    private void handleGetAllUsers(RoutingContext routingContext) {
        JsonArray arr = new JsonArray();
        /*products.forEach((k, v) -> arr.add(v));*/
        routingContext.response().putHeader("content-type", "application/json").end("GettingAllUsers");
    }

    private void sendError(int statusCode, HttpServerResponse response) {
        response.setStatusCode(statusCode).end();
    }

}