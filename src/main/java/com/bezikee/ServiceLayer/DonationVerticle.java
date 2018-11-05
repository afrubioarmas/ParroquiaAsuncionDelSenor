package com.bezikee.ServiceLayer;


import com.bezikee.Common.DateOps;
import com.bezikee.Common.GsonOps;
import com.bezikee.Common.LoggerOps;
import com.bezikee.DataAccessLayer.Donation.DonationBean;
import com.bezikee.DomainLogicLayer.CommandFactory;
import com.bezikee.DomainLogicLayer.Donation.*;
import io.vertx.core.AbstractVerticle;
import io.vertx.core.http.HttpServerRequest;
import io.vertx.core.http.HttpServerResponse;
import io.vertx.ext.web.Router;
import io.vertx.ext.web.RoutingContext;
import io.vertx.ext.web.handler.BodyHandler;

public class DonationVerticle extends AbstractVerticle {

    @Override
    public void start() {
        LoggerOps.debug("Starting donation Verticle.");

        Router router = Router.router(vertx);

        router.route().handler(BodyHandler.create());
        router.get("/donation/:donationId").handler(this::handleGetDonation);
        router.put("/donation").handler(this::handleCreateDonation);
        router.get("/donation").handler(this::handleGetAllDonations);
        router.post("/donation").handler(this::handleUpdateDonation);
        router.delete("/donation/:donationId").handler(this::handleDeleteDonation);

        vertx.createHttpServer().requestHandler(router::accept).listen(8080);
    }

    private void handleGetDonation(RoutingContext routingContext) {
        LoggerOps.debug("STARTING - Handling Get Donation.");

        HttpServerResponse response = routingContext.response();

        response.putHeader("Content-Type", "application/json");

        if(validateParametersGet(routingContext.request())) {
            response.setStatusCode(400).end(GsonOps.toJson("Parameter Error"));
        } else {

            int donationId = Integer.parseInt(routingContext.request().getParam("donationId"));

            GetDonationCommand cmd = (GetDonationCommand) CommandFactory.instantiateGetDonation(donationId);

            cmd.execute();

            LoggerOps.debug("ENDING - Responding Get Donation.");
            response.setStatusCode(cmd.getStatus() ? 200 : 400).end(cmd.getMessage());
        }
    }

    private boolean validateParametersGet(HttpServerRequest request) {
        LoggerOps.debug("Validating Parameters Get Donation.");
        //False = no errors
        //True = error

        if ( (request.getParam("donationId") == null) || !(request.getParam("donationId").matches("[0-9]+$"))) {
            LoggerOps.error("Wrong DonationId: " + request.getParam("donationId"));
            return true;
        }

        return false;
    }

    private void handleCreateDonation(RoutingContext routingContext) {
        LoggerOps.debug("Handling Create Donation.");

        HttpServerResponse response = routingContext.response();

        response.putHeader("Content-Type", "application/json");

        if(validateParametersCreate(routingContext.request())) {
            response.setStatusCode(400).end(GsonOps.toJson("Parameter Error"));
        } else {

            DonationBean donation = new DonationBean(
                    routingContext.request().getParam("name"),
                    Float.parseFloat(routingContext.request().getParam("amount")),
                    routingContext.request().getParam("description"),
                    routingContext.request().getParam("purpose"),
                    routingContext.request().getParam("currency"),
                    DateOps.convertToMysql( routingContext.request().getParam("date"))

            );

            CreateDonationCommand cmd = (CreateDonationCommand) CommandFactory.instantiateCreateDonation(donation);

            cmd.execute();

            LoggerOps.debug("ENDING - Responding Create Donation.");
            response.setStatusCode(cmd.getStatus() ? 200 : 400).end(cmd.getMessage());
        }

    }

    private boolean validateParametersCreate(HttpServerRequest request) {
        LoggerOps.debug("Validating Parameters Create donation.");
        //False = no errors
        //True = error

        if ( (request.getParam("name") == null) || !(request.getParam("name").matches("[a-zA-Z ]+$"))) {
            LoggerOps.error("Wrong name: " + request.getParam("name"));
            return true;
        }
        if ((request.getParam("amount") == null) || !(request.getParam("amount").matches("[0-9.,]+$"))) {
            LoggerOps.error("Wrong amount: " + request.getParam("amount"));
            return true;
        }

        if ((request.getParam("description") == null) || !(request.getParam("description").matches("[a-zA-Z0-9 ]+$"))) {
            LoggerOps.error("Wrong description: " + request.getParam("description"));
            return true;
        }

        if ((request.getParam("purpose") == null) || !(request.getParam("purpose").matches("[a-zA-Z0-9]+$"))) {
            LoggerOps.error("Wrong purpose: " + request.getParam("purpose"));
            return true;
        }

        if ( (request.getParam("currency") == null) || !(request.getParam("currency").matches("[a-zA-Z]+$"))) {
            LoggerOps.error("Wrong currency: " + request.getParam("currency"));
            return true;
        }
        if ((request.getParam("date") == null) || !(request.getParam("date").matches("^[0-9]{4}-(((0[13578]|(10|12))-(0[1-9]|[1-2][0-9]|3[0-1]" +
                "))|(02-(0[1-9]|[1-2][0-9]))|((0[469]|11)-(0[1-9]|[1-2][0-9]|30)))$"))) {
            LoggerOps.error("Wrong date: " + request.getParam("date"));
            return true;
        }

        return false;
    }

    private void handleGetAllDonations(RoutingContext routingContext) {
        LoggerOps.debug("STARTING - Handling Get All Donation.");

        HttpServerResponse response = routingContext.response();

        response.putHeader("Content-Type", "application/json");

        GetAllDonationCommand cmd = (GetAllDonationCommand) CommandFactory.instantiateGetAllDonation();

        cmd.execute();

        LoggerOps.debug("ENDING - Responding Get All donation.");
        response.setStatusCode(cmd.getStatus() ? 200 : 400).end(cmd.getMessage());

    }

    private void handleUpdateDonation(RoutingContext routingContext) {
        LoggerOps.debug("Handling Update Donation.");

        HttpServerResponse response = routingContext.response();

        response.putHeader("Content-Type", "application/json");

        if(validateParametersUpdate(routingContext.request())) {
            response.setStatusCode(400).end(GsonOps.toJson("Parameter Error"));
        } else {

            DonationBean donation = new DonationBean(
                    Integer.parseInt(routingContext.request().getParam("donationId")),
                    routingContext.request().getParam("name"),
                    Float.parseFloat(routingContext.request().getParam("amount")),
                    routingContext.request().getParam("description"),
                    routingContext.request().getParam("purpose"),
                    routingContext.request().getParam("currency"),
                    DateOps.convertToMysql( routingContext.request().getParam("date"))

            );

            UpdateDonationCommand cmd = (UpdateDonationCommand) CommandFactory.instantiateUpdateDonation(donation);

            cmd.execute();

            LoggerOps.debug("ENDING - Responding Update Donation.");
            response.setStatusCode(cmd.getStatus() ? 200 : 400).end(cmd.getMessage());
        }

    }

    private boolean validateParametersUpdate(HttpServerRequest request) {

        return validateParametersGet(request) || validateParametersCreate(request);
    }

    private void handleDeleteDonation(RoutingContext routingContext) {
        LoggerOps.debug("Handling Delete Donation.");

        HttpServerResponse response = routingContext.response();

        response.putHeader("Content-Type", "application/json");

        if(validateParametersDelete(routingContext.request())) {
            response.setStatusCode(400).end(GsonOps.toJson("Parameter Error"));
        } else {

            int donationId = Integer.parseInt(routingContext.request().getParam("donationId"));


            DeleteDonationCommand cmd = (DeleteDonationCommand) CommandFactory.instantiateDeleteDonation(donationId);

            cmd.execute();

            LoggerOps.debug("ENDING - Responding Delete Donation.");
            response.setStatusCode(cmd.getStatus() ? 200 : 400).end(cmd.getMessage());
        }

    }

    private boolean validateParametersDelete(HttpServerRequest request) {

        return validateParametersGet(request);
    }

}