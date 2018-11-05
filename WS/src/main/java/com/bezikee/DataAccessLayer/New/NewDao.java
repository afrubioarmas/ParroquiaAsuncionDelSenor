package com.bezikee.DataAccessLayer.New;

import com.bezikee.Common.DateOps;
import com.bezikee.Common.LoggerOps;
import com.bezikee.DataAccessLayer.Dao;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.sql.CallableStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class NewDao implements INewDao {

    private final static Logger logger = LoggerFactory.getLogger(NewDao.class);

    public boolean create(NewBean input) {
        LoggerOps.debug("NewDao - create");

        CallableStatement Sentence;
        boolean output = false;
        try {
            Sentence = Dao.getCallableSentence("{Call CreateNew (?,?,?,?,?)}");
            Sentence.setString(1, input.getTitle());
            Sentence.setString(2, input.getContent());
            Sentence.setString(3, input.getImage());
            Sentence.setString(4, input.getVideo());
            Sentence.setDate  (5, input.getDate());
            output = Dao.executeCall(Sentence);
            Dao.close();

        } catch (Exception e) {
            logger.error( "Method: ", "NewDao - create", e.toString() );
        }



        return output;
    }

    public NewBean read(int id) {
        LoggerOps.debug("NewDao - read");

        NewBean output = null;
        ResultSet rs;
        CallableStatement Sentence = Dao.getCallableSentence("{Call GetNew (?)}");

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

    public ArrayList<NewBean> readAll(){
        LoggerOps.debug("NewDao - readAll");

        ArrayList<NewBean> output = null;
        ResultSet rs;

        CallableStatement Sentence = Dao.getCallableSentence("{Call GetAllNew ()} ");


        rs =Dao.executeQuery(Sentence);

        if(rs!=null)
            output = getResponseArrayListBD(rs);

        Dao.close();

        return output;
    }

    public boolean update(NewBean input) {

        LoggerOps.debug("NewDao - update");

        CallableStatement Sentence;
        boolean output = false;
        try {
            Sentence = Dao.getCallableSentence("{Call UpdateNew (?,?,?,?,?,?)}");

            Sentence.setString(1, input.getTitle());
            Sentence.setString(2, input.getContent());
            Sentence.setString(3, input.getImage());
            Sentence.setString(4, input.getVideo());
            Sentence.setDate  (5, input.getDate());
            Sentence.setInt(6, input.getId());
            output = Dao.executeCall(Sentence);
            Dao.close();

        } catch (Exception e) {
            logger.error( "Method: ", "NewDao - Update", e.toString() );
        }

        return output;
    }


    public boolean delete(int id) {
        LoggerOps.debug("NewDao - delete");


        boolean output;
        CallableStatement Sentence = Dao.getCallableSentence("{Call DeleteNew (?)}");


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


    private ArrayList<NewBean> getResponseArrayListBD(ResultSet rs){
        LoggerOps.debug("NewDao - getResponseArrayListBD");

        ArrayList<NewBean> output = new ArrayList<NewBean>();

        try {
            while (rs.next()){
                NewBean aux = new NewBean(
                        rs.getInt("id"),
                        rs.getString("title"),
                        rs.getString("content"),
                        rs.getString("image"),
                        rs.getString("video"),
                        DateOps.convertToMysql(rs.getString("date"))
                );
                output.add(aux);
            }
        } catch (SQLException e) {
            e.printStackTrace();
            System.out.println("SQL Exception: "+ e.getErrorCode());
        }

        return output;

    }

    private NewBean getResponseBD(ResultSet rs) throws NullPointerException, SQLException{
        LoggerOps.debug("NewDao - getResponseBD");

        NewBean output = null;

        while (rs.next()){
            output = new NewBean(
                    rs.getInt("id"),
                    rs.getString("title"),
                    rs.getString("content"),
                    rs.getString("image"),
                    rs.getString("video"),
                    DateOps.convertToMysql(rs.getString("date"))
            );
        }

        return output;

    }

}
