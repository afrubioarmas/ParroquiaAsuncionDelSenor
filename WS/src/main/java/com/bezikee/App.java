package com.bezikee;

import com.bezikee.Common.LoggerOps;
import com.bezikee.ServiceLayer.*;
import io.vertx.core.AbstractVerticle;
import io.vertx.core.DeploymentOptions;
import io.vertx.core.Verticle;
import io.vertx.core.Vertx;
import io.vertx.core.spi.VerticleFactory;
import io.vertx.ext.web.Router;
import io.vertx.maven.MavenVerticleFactory;

public class App
{

    public static Vertx vertx = Vertx.vertx();
    public static Router router = Router.router(vertx);

    public static void main(String [ ] args) {
       LoggerOps.debug("Starting vertx.");


       DeploymentOptions options = new DeploymentOptions().setWorker(true);



        DonationVerticle donation= new DonationVerticle();
        vertx.deployVerticle(donation,options);

        CalendarVerticle calendar = new CalendarVerticle();
        vertx.deployVerticle(calendar,options);

        NewVerticle news = new NewVerticle();
        vertx.deployVerticle(news,options);

        ServiceVerticle service = new ServiceVerticle();
        vertx.deployVerticle(service,options);

       PaymentVerticle payment = new PaymentVerticle();
        vertx.deployVerticle(payment,options);


   }

}
