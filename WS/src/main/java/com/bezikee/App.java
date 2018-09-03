package com.bezikee;

import com.bezikee.Common.DateOps;
import com.bezikee.DataAccessLayer.DaoFactory;
import com.bezikee.DataAccessLayer.User.IUserDao;
import com.bezikee.DataAccessLayer.User.UserBean;
import com.bezikee.DataAccessLayer.User.UserDao;
import com.bezikee.ServiceLayer.MyFirstVerticle;
import io.vertx.core.Vertx;

public class App 
{
    public static void main( String[] args )
    {
        Vertx vertx = Vertx.vertx();
        MyFirstVerticle verticle = new MyFirstVerticle();
        vertx.deployVerticle( verticle);
    }
}
