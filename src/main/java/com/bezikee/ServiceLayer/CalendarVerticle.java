package com.bezikee.ServiceLayer;


import com.bezikee.Common.DateOps;
import com.bezikee.Common.GsonOps;
import com.bezikee.Common.LoggerOps;
import com.bezikee.DataAccessLayer.Calendar.CalendarBean;
import com.bezikee.DataAccessLayer.User.UserBean;
import com.bezikee.DomainLogicLayer.Calendar.*;
import com.bezikee.DomainLogicLayer.CommandFactory;
import com.bezikee.DomainLogicLayer.User.*;
import io.vertx.core.AbstractVerticle;
import io.vertx.core.http.HttpServerRequest;
import io.vertx.core.http.HttpServerResponse;
import io.vertx.ext.web.Router;
import io.vertx.ext.web.RoutingContext;
import io.vertx.ext.web.handler.BodyHandler;

public class CalendarVerticle extends AbstractVerticle {

    @Override
    public void start() {
        LoggerOps.debug("Starting calendar Verticle.");

        Router router = Router.router(vertx);

        router.route().handler(BodyHandler.create());
        router.get("/calendar/:id").handler(this::handleGetCalendar);
        router.put("/calendar").handler(this::handleCreateCalendar);
        router.get("/calendar").handler(this::handleGetAllCalendar);
        router.post("/calendar").handler(this::handleUpdateCalendar);
        router.delete("/calendar/:id").handler(this::handleDeleteCalendar);

        vertx.createHttpServer().requestHandler(router::accept).listen(8080);
    }

    private void handleGetCalendar(RoutingContext routingContext) {
        LoggerOps.debug("STARTING - Handling Get Calendar.");

        HttpServerResponse response = routingContext.response();

        response.putHeader("Content-Type", "application/json");

        if(validateParametersGet(routingContext.request())) {
            response.setStatusCode(400).end(GsonOps.toJson("Parameter Error"));
        } else {

            int calendarId = Integer.parseInt(routingContext.request().getParam("id"));

            GetCalendarCommand cmd = (GetCalendarCommand) CommandFactory.instantiateGetCalendar(calendarId);

            cmd.execute();

            LoggerOps.debug("ENDING - Responding Get Calendar.");
            response.setStatusCode(cmd.getStatus() ? 200 : 400).end(cmd.getMessage());
        }
    }

    private boolean validateParametersGet(HttpServerRequest request) {
        LoggerOps.debug("Validating Parameters Get Calendar.");
        //False = no errors
        //True = error

        if ( (request.getParam("id") == null) || !(request.getParam("id").matches("[0-9]+$"))) {
            LoggerOps.error("Wrong Id: " + request.getParam("id"));
            return true;
        }

        return false;
    }

    private void handleCreateCalendar(RoutingContext routingContext) {
        LoggerOps.debug("Handling Create Calendar.");

        HttpServerResponse response = routingContext.response();

        response.putHeader("Content-Type", "application/json");

        if(validateParametersCreate(routingContext.request())) {
            response.setStatusCode(400).end(GsonOps.toJson("Parameter Error"));
        } else {

            CalendarBean calendar = new CalendarBean(
                    DateOps.convertToMysql( routingContext.request().getParam("startDate")),
                    DateOps.convertToMysql( routingContext.request().getParam("endDate")),
                    routingContext.request().getParam("name")
            );


            //Comando Agregar user
            CreateCalendarCommand cmd = (CreateCalendarCommand) CommandFactory.instantiateCreateCalendar(calendar);

            cmd.execute();

            LoggerOps.debug("ENDING - Responding Create Calendar.");
            response.setStatusCode(cmd.getStatus() ? 200 : 400).end(cmd.getMessage());
        }

    }

    private boolean validateParametersCreate(HttpServerRequest request) {
        LoggerOps.debug("Validating Parameters Create Calendar.");
        //False = no errors
        //True = error

        if ((request.getParam("startDate") == null) || !(request.getParam("startDate").matches("^[0-9]{4}-(((0[13578]|(10|12))-(0[1-9]|[1-2][0-9]|3[0-1]" +
                "))|(02-(0[1-9]|[1-2][0-9]))|((0[469]|11)-(0[1-9]|[1-2][0-9]|30)))$"))) {
            LoggerOps.error("Wrong startDate: " + request.getParam("startDate"));
            return true;
        }

        if ((request.getParam("endDate") == null) || !(request.getParam("endDate").matches("^[0-9]{4}-(((0[13578]|(10|12))-(0[1-9]|[1-2][0-9]|3[0-1]" +
                "))|(02-(0[1-9]|[1-2][0-9]))|((0[469]|11)-(0[1-9]|[1-2][0-9]|30)))$"))) {
            LoggerOps.error("Wrong endDate: " + request.getParam("endDate"));
            return true;
        }

        if ( (request.getParam("name") == null) || !(request.getParam("name").matches("[a-zA-Z ]+$"))) {
            LoggerOps.error("Wrong name: " + request.getParam("name"));
            return true;
        }




        return false;
    }

    private void handleGetAllCalendar(RoutingContext routingContext) {
        LoggerOps.debug("STARTING - Handling Get All Calendar.");

        HttpServerResponse response = routingContext.response();

        response.putHeader("Content-Type", "application/json");

        GetAllCalendarCommand cmd = (GetAllCalendarCommand) CommandFactory.instantiateGetAllCalendar();

        cmd.execute();

        LoggerOps.debug("ENDING - Responding Get All Calendar.");
        response.setStatusCode(cmd.getStatus() ? 200 : 400).end(cmd.getMessage());

    }

    private void handleUpdateCalendar(RoutingContext routingContext) {
        LoggerOps.debug("Handling Update Calendar.");

        HttpServerResponse response = routingContext.response();

        response.putHeader("Content-Type", "application/json");

        if(validateParametersUpdate(routingContext.request())) {
            response.setStatusCode(400).end(GsonOps.toJson("Parameter Error"));
        } else {

            CalendarBean calendar = new CalendarBean(
                    Integer.parseInt(routingContext.request().getParam("id")),
                    DateOps.convertToMysql( routingContext.request().getParam("startDate")),
                    DateOps.convertToMysql( routingContext.request().getParam("endDate")),
                    routingContext.request().getParam("name")
            );


            UpdateCalendarCommand cmd = (UpdateCalendarCommand) CommandFactory.instantiateUpdateCalendar(calendar);

            cmd.execute();

            LoggerOps.debug("ENDING - Responding Update Calendar.");
            response.setStatusCode(cmd.getStatus() ? 200 : 400).end(cmd.getMessage());
        }

    }

    private boolean validateParametersUpdate(HttpServerRequest request) {

        return validateParametersGet(request) || validateParametersCreate(request);
    }

    private void handleDeleteCalendar(RoutingContext routingContext) {
        LoggerOps.debug("Handling Delete Calendar.");

        HttpServerResponse response = routingContext.response();

        response.putHeader("Content-Type", "application/json");

        if(validateParametersDelete(routingContext.request())) {
            response.setStatusCode(400).end(GsonOps.toJson("Parameter Error"));
        } else {

            int calendarId = Integer.parseInt(routingContext.request().getParam("id"));


            DeleteCalendarCommand cmd = (DeleteCalendarCommand) CommandFactory.instantiateDeleteCalendar(calendarId);

            cmd.execute();

            LoggerOps.debug("ENDING - Responding Delete Calendar.");
            response.setStatusCode(cmd.getStatus() ? 200 : 400).end(cmd.getMessage());
        }

    }

    private boolean validateParametersDelete(HttpServerRequest request) {

        return validateParametersGet(request);
    }

}