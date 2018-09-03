package com.bezikee.DataAccessLayer;

import com.bezikee.DataAccessLayer.User.UserDao;

public class DaoFactory
{
  static public UserDao instantiateUserDao(){
        return new UserDao();
    }

}
