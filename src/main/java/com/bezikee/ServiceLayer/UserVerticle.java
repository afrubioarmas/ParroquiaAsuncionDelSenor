package com.bezikee.ServiceLayer;


import com.bezikee.Common.DateOps;
import com.bezikee.Common.GsonOps;
import com.bezikee.Common.LoggerOps;
import com.bezikee.DataAccessLayer.DaoFactory;
import com.bezikee.DataAccessLayer.User.IUserDao;
import com.bezikee.DataAccessLayer.User.UserBean;
import com.bezikee.DataAccessLayer.User.UserDao;
import com.bezikee.DomainLogicLayer.CommandFactory;
import com.bezikee.DomainLogicLayer.User.CreateUserCommand;
import com.google.gson.Gson;
import io.vertx.core.AbstractVerticle;
import io.vertx.core.http.HttpServerResponse;
import io.vertx.core.json.JsonArray;
import io.vertx.core.json.JsonObject;
import io.vertx.ext.web.Router;
import io.vertx.ext.web.RoutingContext;
import io.vertx.ext.web.handler.BodyHandler;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

public class UserVerticle extends AbstractVerticle {

    @Override
    public void start() {
        LoggerOps.debug("Starting user Verticle.");

        Router router = Router.router(vertx);

        router.route().handler(BodyHandler.create());
        router.get("/user/:userId").handler(this::handleGetUser);
        router.put("/user").handler(this::handleCreateUser);
        router.get("/user").handler(this::handleGetAllUsers);

        vertx.createHttpServer().requestHandler(router::accept).listen(8080);
    }

    private void handleGetUser(RoutingContext routingContext) {
        LoggerOps.debug("Handeling Get User.");

        String idToRead = routingContext.request().getParam("userId");
        HttpServerResponse response = routingContext.response();
        if (idToRead == null) {
            sendError(400, response);
        } else {

            IUserDao dao = DaoFactory.instantiateUserDao();
            UserBean user = dao.read(Integer.parseInt(idToRead));


            if (user == null) {
                sendError(404, response);
            } else {
                response.putHeader("content-type", "application/json").end(GsonOps.toJson(user));
            }
        }
    }

    private void handleCreateUser(RoutingContext routingContext) {
        LoggerOps.debug("Handeling Create User.");

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
        CreateUserCommand cmd = (CreateUserCommand) CommandFactory.instatiateCreateUser(user);

        IUserDao dao = DaoFactory.instantiateUserDao();

        response.putHeader("Content-Type", "text/plain");
            if (dao.create(user) == false) {
                response.end("Failed...!");
            } else {
                response.end("OK!");
            }



    }

    private void handleGetAllUsers(RoutingContext routingContext) {
        LoggerOps.debug("Handeling Get All Users.");

        IUserDao dao = DaoFactory.instantiateUserDao();

        routingContext.response().putHeader("content-type", "application/json").end(GsonOps.toJson(dao.readAll()));
    }

    private void sendError(int statusCode, HttpServerResponse response) {
        response.setStatusCode(statusCode).end();
    }

}