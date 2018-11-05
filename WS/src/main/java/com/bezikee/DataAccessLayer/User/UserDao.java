package com.bezikee.DataAccessLayer.User;

import com.bezikee.Common.DateOps;
import com.bezikee.Common.LoggerOps;
import com.bezikee.DataAccessLayer.Dao;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import java.sql.CallableStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class UserDao implements IUserDao{

    private final static Logger logger = LoggerFactory.getLogger(UserDao.class);

    public boolean create(UserBean input) {
        LoggerOps.debug("UserDao - create");

        CallableStatement Sentence;
        boolean output = false;
        try {
            Sentence = Dao.getCallableSentence("{Call UserCreate (?,?,?,?,?,?,?)}");
            Sentence.setString(1, input.getName());
            Sentence.setString(2, input.getLastName());
            Sentence.setString(3, input.getEmail());
            Sentence.setString(4, input.getUsername());
            Sentence.setString(5, input.getPassword());
            Sentence.setDate  (6, input.getBirthDate());
            Sentence.setString(7, input.getSex());
            output = Dao.executeCall(Sentence);
            Dao.close();

        } catch (Exception e) {
            logger.error( "Method: ", "UserDao - create", e.toString() );
        }



        return output;
    }

   public UserBean read(int id) {
       LoggerOps.debug("UserDao - read");

        UserBean output = null;
        ResultSet rs;
        CallableStatement Sentence = Dao.getCallableSentence("{Call GetUser (?)}");

        try {
            Sentence.setInt(1, id);

            rs =Dao.executeQuery(Sentence);

            if(rs!=null)
                output = getResponseBD(rs);

        } catch (SQLException e) {
            e.printStackTrace();
            System.out.println("SQL Exception: "+ e.getErrorCode());
        }
        Dao.close();

        return output;


    }

    public ArrayList<UserBean> readAll(){
        LoggerOps.debug("UserDao - readAll");

        ArrayList<UserBean> output = null;
        ResultSet rs;

        CallableStatement Sentence = Dao.getCallableSentence("{Call GetAllUser ()} ");


        rs =Dao.executeQuery(Sentence);

        if(rs!=null)
            output = getResponseArrayListBD(rs);

        Dao.close();

        return output;
    }

   public boolean update(UserBean input) {

       LoggerOps.debug("UserDao - update");

       CallableStatement Sentence;
       boolean output = false;
       try {
           Sentence = Dao.getCallableSentence("{Call UserUpdate (?,?,?,?,?,?,?,?)}");
           Sentence.setString(1, input.getName());
           Sentence.setString(2, input.getLastName());
           Sentence.setString(3, input.getEmail());
           Sentence.setString(4, input.getUsername());
           Sentence.setString(5, input.getPassword());
           Sentence.setDate  (6, input.getBirthDate());
           Sentence.setString(7, input.getSex());
           Sentence.setInt(8, input.getId());
           output = Dao.executeCall(Sentence);
           Dao.close();

       } catch (Exception e) {
           logger.error( "Method: ", "UserDao - Update", e.toString() );
       }

       return output;
    }


    public boolean delete(int id) {
        LoggerOps.debug("UserDao - delete");


        boolean output;
        CallableStatement Sentence = Dao.getCallableSentence("{Call DeleteUser (?)}");


        try {
            Sentence.setInt(1, id);
        } catch (SQLException e) {
            e.printStackTrace();
            System.out.println("SQL Exception: "+ e.getErrorCode());
        }

        output = Dao.executeCall(Sentence);

        Dao.close();

        return output;
    }


    private ArrayList<UserBean> getResponseArrayListBD(ResultSet rs){
        LoggerOps.debug("UserDao - getResponseArrayListBD");

        ArrayList<UserBean> output = new ArrayList<UserBean>();

        try {
            while (rs.next()){
                UserBean aux = new UserBean(
                        rs.getInt("id"),
                        rs.getString("name"),
                        rs.getString("lastName"),
                        rs.getString("email"),
                        rs.getString("username"),
                        rs.getString("password"),
                        DateOps.convertToMysql(rs.getString("birthDate")),
                        rs.getString("sex"));
                output.add(aux);
            }
        } catch (SQLException e) {
            e.printStackTrace();
            System.out.println("SQL Exception: "+ e.getErrorCode());
        }

        return output;

    }

    private UserBean getResponseBD(ResultSet rs) throws NullPointerException, SQLException{
        LoggerOps.debug("UserDao - getResponseBD");

        UserBean output = null;

        while (rs.next()){
            output = new UserBean(
                    rs.getInt("id"),
                    rs.getString("name"),
                    rs.getString("lastName"),
                    rs.getString("email"),
                    rs.getString("username"),
                    rs.getString("password"),
                    DateOps.convertToMysql(rs.getString("birthDate")),
                    rs.getString("sex"));
        }

        return output;

    }

}
