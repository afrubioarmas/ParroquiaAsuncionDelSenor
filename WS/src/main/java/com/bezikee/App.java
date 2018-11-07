package com.bezikee;

import com.bezikee.Common.LoggerOps;
import com.bezikee.ServiceLayer.*;
import io.vertx.core.Vertx;

public class App 
{
    public static void main( String[] args )
    {
        LoggerOps.debug("Starting vertx.");

        Vertx vertx = Vertx.vertx();

        DonationVerticle donation= new DonationVerticle();
        vertx.deployVerticle(donation);

        CalendarVerticle calendar = new CalendarVerticle();
        vertx.deployVerticle(calendar);

        NewVerticle news = new NewVerticle();
        vertx.deployVerticle(news);

        ServiceVerticle service = new ServiceVerticle();
        vertx.deployVerticle(service);

        PaymentVerticle payment = new PaymentVerticle();
        vertx.deployVerticle(payment);






    }
}
