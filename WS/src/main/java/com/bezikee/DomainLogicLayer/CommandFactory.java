package com.bezikee.DomainLogicLayer;

import com.bezikee.DataAccessLayer.User.UserBean;
import com.bezikee.DomainLogicLayer.User.*;

public class CommandFactory {

    public static Command instantiateCreateUser ( UserBean user) {
        return new CreateUserCommand(user);
    }

    public static Command instantiateGetUser ( int user) {
        return new GetUserCommand(user);
    }

    public static Object instantiateGetAllUser() {
        return new GetAllUserCommand();
    }

    public static Object instantiateUpdateUser(UserBean user) {
        return new UpdateUserCommand(user);
    }

    public static Object instantiateDeleteUser(int userId) {
        return new DeleteUserCommand(userId);
    }
}