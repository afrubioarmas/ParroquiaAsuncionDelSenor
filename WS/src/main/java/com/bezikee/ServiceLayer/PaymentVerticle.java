package com.bezikee.ServiceLayer;


import com.bezikee.App;
import com.bezikee.Common.DateOps;
import com.bezikee.Common.GsonOps;
import com.bezikee.Common.LoggerOps;
import com.bezikee.DataAccessLayer.Payment.PaymentBean;
import com.bezikee.DomainLogicLayer.Payment.*;
import com.bezikee.DomainLogicLayer.CommandFactory;
import io.vertx.core.AbstractVerticle;
import io.vertx.core.http.HttpServerRequest;
import io.vertx.core.http.HttpServerResponse;
import io.vertx.ext.web.Router;
import io.vertx.ext.web.RoutingContext;
import io.vertx.ext.web.handler.BodyHandler;

public class PaymentVerticle extends AbstractVerticle {

    @Override
    public void start() {
        LoggerOps.debug("Starting payment Verticle.");



        App.router.route().handler(BodyHandler.create());
        App.router.get("/payment/:id").handler(this::handleGet);
        App.router.put("/payment").handler(this::handleCreate);
        App.router.get("/payment").handler(this::handleGetAll);
        App.router.post("/payment").handler(this::handleUpdate);
        App.router.delete("/payment/:id").handler(this::handleDelete);

        vertx.createHttpServer().requestHandler(App.router::accept).listen(8080);
    }

    private void handleGet(RoutingContext routingContext) {
        LoggerOps.debug("STARTING - Handling Get Payment.");

        HttpServerResponse response = routingContext.response();

        response.putHeader("Content-Type", "application/json");

        if(validateParametersGet(routingContext.request())) {
            response.setStatusCode(400).end(GsonOps.toJson("Parameter Error"));
        } else {

            int id = Integer.parseInt(routingContext.request().getParam("id"));

            GetPaymentCommand cmd = (GetPaymentCommand) CommandFactory.instantiateGetPayment(id);

            cmd.execute();

            LoggerOps.debug("ENDING - Responding Get Payment.");
            response.setStatusCode(cmd.getStatus() ? 200 : 400).end(cmd.getMessage());
        }
    }

    private boolean validateParametersGet(HttpServerRequest request) {
        LoggerOps.debug("Validating Parameters Get Payment.");
        //False = no errors
        //True = error

        if ( (request.getParam("id") == null) || !(request.getParam("id").matches("[0-9]+$"))) {
            LoggerOps.error("Wrong Id: " + request.getParam("id"));
            return true;
        }

        return false;
    }

    private void handleCreate(RoutingContext routingContext) {
        LoggerOps.debug("Handling Create Payment.");

        HttpServerResponse response = routingContext.response();

        response.putHeader("Content-Type", "application/json");

        if(validateParametersCreate(routingContext.request())) {
            response.setStatusCode(400).end(GsonOps.toJson("Parameter Error"));
        } else {




            PaymentBean bean = new PaymentBean(
                    Integer.parseInt(routingContext.request().getParam("serviceId")),
                    routingContext.request().getParam("name"),
                    Integer.parseInt(routingContext.request().getParam("personalId")),
                    Float.parseFloat(routingContext.request().getParam("amount")),
                    routingContext.request().getParam("date")
            );

            CreatePaymentCommand cmd = (CreatePaymentCommand) CommandFactory.instantiateCreatePayment(bean);

            cmd.execute();

            LoggerOps.debug("ENDING - Responding Create Payment.");
            response.setStatusCode(cmd.getStatus() ? 200 : 400).end(cmd.getMessage());
        }

    }

    private boolean validateParametersCreate(HttpServerRequest request) {
        LoggerOps.debug("Validating Parameters Create Payment.");
        //False = no errors
        //True = error

        if ( (request.getParam("serviceId") == null) || !(request.getParam("serviceId").matches("[0-9.,]+$"))) {
            LoggerOps.error("Wrong serviceId: " + request.getParam("serviceId"));
            return true;
        }

        if ( (request.getParam("name") == null) || !(request.getParam("name").matches("[a-zA-Z ]+$"))) {
            LoggerOps.error("Wrong name: " + request.getParam("name"));
            return true;
        }

        if ( (request.getParam("personalId") == null) || !(request.getParam("personalId").matches("[0-9.,]+$"))) {
            LoggerOps.error("Wrong personalId: " + request.getParam("personalId"));
            return true;
        }

        if ( (request.getParam("amount") == null) || !(request.getParam("amount").matches("[0-9.,]+$"))) {
            LoggerOps.error("Wrong amount: " + request.getParam("amount"));
            return true;
        }

        if ((request.getParam("date") == null) || !(request.getParam("date").matches("^[0-9]{4}-(((0[13578]|(10|12))-(0[1-9]|[1-2][0-9]|3[0-1]" +
                "))|(02-(0[1-9]|[1-2][0-9]))|((0[469]|11)-(0[1-9]|[1-2][0-9]|30)))$"))) {
            LoggerOps.error("Wrong date: " + request.getParam("date"));
            return true;
        }

        return false;
    }

    private void handleGetAll(RoutingContext routingContext) {
        LoggerOps.debug("STARTING - Handling Get All Payment.");

        HttpServerResponse response = routingContext.response();

        response.putHeader("Content-Type", "application/json");

        GetAllPaymentCommand cmd = (GetAllPaymentCommand) CommandFactory.instantiateGetAllPayment();

        cmd.execute();

        LoggerOps.debug("ENDING - Responding Get All Payment.");
        response.setStatusCode(cmd.getStatus() ? 200 : 400).end(cmd.getMessage());

    }

    private void handleUpdate(RoutingContext routingContext) {
        LoggerOps.debug("Handling Update Payment.");

        HttpServerResponse response = routingContext.response();

        response.putHeader("Content-Type", "application/json");

        if(validateParametersUpdate(routingContext.request())) {
            response.setStatusCode(400).end(GsonOps.toJson("Parameter Error"));
        } else {

            PaymentBean bean = new PaymentBean(
                    Integer.parseInt(routingContext.request().getParam("serviceId")),
                    routingContext.request().getParam("name"),
                    Integer.parseInt(routingContext.request().getParam("personalId")),
                    Float.parseFloat(routingContext.request().getParam("amount")),
                    routingContext.request().getParam("date")
            );


            UpdatePaymentCommand cmd = (UpdatePaymentCommand) CommandFactory.instantiateUpdatePayment(bean);

            cmd.execute();

            LoggerOps.debug("ENDING - Responding Update Payment.");
            response.setStatusCode(cmd.getStatus() ? 200 : 400).end(cmd.getMessage());
        }

    }

    private boolean validateParametersUpdate(HttpServerRequest request) {

        return validateParametersGet(request) || validateParametersCreate(request);
    }

    private void handleDelete(RoutingContext routingContext) {
        LoggerOps.debug("Handling Delete Payment.");

        HttpServerResponse response = routingContext.response();

        response.putHeader("Content-Type", "application/json");

        if(validateParametersDelete(routingContext.request())) {
            response.setStatusCode(400).end(GsonOps.toJson("Parameter Error"));
        } else {

            int id = Integer.parseInt(routingContext.request().getParam("id"));


            DeletePaymentCommand cmd = (DeletePaymentCommand) CommandFactory.instantiateDeletePayment(id);

            cmd.execute();

            LoggerOps.debug("ENDING - Responding Delete Payment.");
            response.setStatusCode(cmd.getStatus() ? 200 : 400).end(cmd.getMessage());
        }

    }

    private boolean validateParametersDelete(HttpServerRequest request) {

        return validateParametersGet(request);
    }

}