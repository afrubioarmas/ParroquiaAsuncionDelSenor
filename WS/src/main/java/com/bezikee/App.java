package com.bezikee;

import com.bezikee.Common.DateOps;
import com.bezikee.Common.LoggerOps;
import com.bezikee.DataAccessLayer.DaoFactory;
import com.bezikee.DataAccessLayer.User.IUserDao;
import com.bezikee.DataAccessLayer.User.UserBean;
import com.bezikee.DataAccessLayer.User.UserDao;
import com.bezikee.ServiceLayer.MyFirstVerticle;
import com.bezikee.ServiceLayer.ProductVerticle;
import com.bezikee.ServiceLayer.UserVerticle;
import io.vertx.core.Vertx;

public class App 
{
    public static void main( String[] args )
    {
        LoggerOps.debug("Starting vertx.");

        Vertx vertx = Vertx.vertx();

        /*MyFirstVerticle first = new MyFirstVerticle();
        vertx.deployVerticle( first);*/

        UserVerticle user = new UserVerticle();
        vertx.deployVerticle(user);

        ProductVerticle product = new ProductVerticle();
        vertx.deployVerticle(product);
    }
}
