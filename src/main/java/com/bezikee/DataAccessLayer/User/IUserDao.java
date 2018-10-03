package com.bezikee.DataAccessLayer.User;

import java.util.ArrayList;

public interface IUserDao {

    boolean create (UserBean b);

    ArrayList<UserBean> readAll();

    UserBean read(int idToRead);

    boolean update(UserBean user);

    boolean delete(int userId);
}
