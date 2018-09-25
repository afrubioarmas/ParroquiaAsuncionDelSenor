package com.bezikee.DomainLogicLayer;

import com.bezikee.DataAccessLayer.User.UserBean;
import com.bezikee.DomainLogicLayer.User.CreateUserCommand;

public class CommandFactory {

    public static Command instatiateCreateUser ( UserBean user) {
        return new CreateUserCommand(user);
    }

}