package com.bezikee.DataAccessLayer.Calendar;

import com.bezikee.Common.DateOps;
import com.bezikee.Common.LoggerOps;
import com.bezikee.DataAccessLayer.Dao;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import java.sql.CallableStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class CalendarDao implements ICalendarDao{

    private final static Logger logger = LoggerFactory.getLogger(CalendarDao.class);

    public boolean create(CalendarBean input) {
        LoggerOps.debug("CalendarDao - create");

        CallableStatement Sentence;
        boolean output = false;
        try {
            Sentence = Dao.getCallableSentence("{Call CreateCalendar (?,?,?)}");
            Sentence.setString(1, input.getStartDate());
            Sentence.setString(2, input.getEndDate());
            Sentence.setString(3, input.getName());
            output = Dao.executeCall(Sentence);
            Dao.close();

        } catch (Exception e) {
            logger.error( "Method: ", "CalendarDao - create", e.toString() );
        }



        return output;
    }

    public CalendarBean read(int id) {
        LoggerOps.debug("CalendarDao - read");

        CalendarBean output = null;
        ResultSet rs;
        CallableStatement Sentence = Dao.getCallableSentence("{Call GetCalendar (?)}");

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

    public ArrayList<CalendarBean> readAll(){
        LoggerOps.debug("CalendarDao - readAll");

        ArrayList<CalendarBean> output = null;
        ResultSet rs;

        CallableStatement Sentence = Dao.getCallableSentence("{Call GetAllCalendar ()} ");


        rs =Dao.executeQuery(Sentence);

        if(rs!=null)
            output = getResponseArrayListBD(rs);

        Dao.close();

        return output;
    }

    public boolean update(CalendarBean input) {

        LoggerOps.debug("CalendarDao - update");

        CallableStatement Sentence;
        boolean output = false;
        try {
            Sentence = Dao.getCallableSentence("{Call UpdateCalendar (?,?,?,?)}");
            Sentence.setString(1, input.getStartDate());
            Sentence.setString(2, input.getEndDate());
            Sentence.setString(3, input.getName());
            Sentence.setInt(4, input.getId());
            output = Dao.executeCall(Sentence);
            Dao.close();

        } catch (Exception e) {
            logger.error( "Method: ", "CalendarDao - Update", e.toString() );
        }

        return output;
    }


    public boolean delete(int id) {
        LoggerOps.debug("CalendarDao - delete");


        boolean output;
        CallableStatement Sentence = Dao.getCallableSentence("{Call DeleteCalendar (?)}");


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


    private ArrayList<CalendarBean> getResponseArrayListBD(ResultSet rs){
        LoggerOps.debug("CalendarDao - getResponseArrayListBD");

        ArrayList<CalendarBean> output = new ArrayList<CalendarBean>();

        try {
            while (rs.next()){
                CalendarBean aux = new CalendarBean(
                        rs.getInt("id"),
                        rs.getString("StartDate"),
                        rs.getString("EndDate"),
                        rs.getString("name")
                );
                output.add(aux);
            }
        } catch (SQLException e) {
            e.printStackTrace();
            System.out.println("SQL Exception: "+ e.getErrorCode());
        }

        return output;

    }

    private CalendarBean getResponseBD(ResultSet rs) throws NullPointerException, SQLException{
        LoggerOps.debug("CalendarDao - getResponseBD");

        CalendarBean output = null;

        while (rs.next()){
            output = new CalendarBean(
                    rs.getInt("id"),
                    rs.getString("StartDate"),
                    rs.getString("EndDate"),
                    rs.getString("name")
            );
        }

        return output;

    }

}
