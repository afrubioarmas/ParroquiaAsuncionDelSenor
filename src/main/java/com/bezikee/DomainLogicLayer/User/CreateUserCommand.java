package com.bezikee.DomainLogicLayer.User;

import com.bezikee.DataAccessLayer.User.UserBean;
import com.bezikee.DomainLogicLayer.Command;

public class CreateUserCommand extends Command {

    private UserBean _user;

    public CreateUserCommand(UserBean user){

        _user = user;

    }

    @Override
    public void execute() {


    }
}
