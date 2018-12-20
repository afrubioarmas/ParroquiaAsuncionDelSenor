package com.bezikee.DataAccessLayer.Donation;

import com.bezikee.Common.DateOps;
import com.bezikee.Common.LoggerOps;
import com.bezikee.DataAccessLayer.Dao;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import java.sql.CallableStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class DonationDao implements IDonationDao{

    private final static Logger logger = LoggerFactory.getLogger(DonationDao.class);

    public boolean create(DonationBean input) {
        LoggerOps.debug("DonationDao - create");

        CallableStatement Sentence;
        boolean output = false;
        try {
            Sentence = Dao.getCallableSentence("{Call DonationCreate (?,?,?,?,?,?)}");
            Sentence.setString(1, input.getName());
            Sentence.setFloat(2, input.getAmount());
            Sentence.setString(3, input.getDescription());
            Sentence.setString(4, input.getPurpose());
            Sentence.setString(5, input.getCurrency());
            Sentence.setString(6, input.getDate());
            output = Dao.executeCall(Sentence);
            Dao.close();

        } catch (Exception e) {
            logger.error( "Method: ", "DonationDao - create", e.toString() );
        }



        return output;
    }

    public DonationBean read(int id) {
        LoggerOps.debug("DonationDao - read");

        DonationBean output = null;
        ResultSet rs;
        CallableStatement Sentence = Dao.getCallableSentence("{Call GetDonation (?)}");

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

    public ArrayList<DonationBean> readAll(){
        LoggerOps.debug("DonationDao - readAll");

        ArrayList<DonationBean> output = null;
        ResultSet rs;

        CallableStatement Sentence = Dao.getCallableSentence("{Call GetAllDonation ()} ");


        rs =Dao.executeQuery(Sentence);

        if(rs!=null)
            output = getResponseArrayListBD(rs);

        Dao.close();

        return output;
    }

    public boolean update(DonationBean input) {

        LoggerOps.debug("DonationDao - update");

        CallableStatement Sentence;
        boolean output = false;
        try {
            Sentence = Dao.getCallableSentence("{Call DonationUpdate (?,?,?,?,?,?,?)}");

            Sentence.setString(1, input.getName());
            Sentence.setFloat(2, input.getAmount());
            Sentence.setString(3, input.getDescription());
            Sentence.setString(4, input.getPurpose());
            Sentence.setString(5, input.getCurrency());
            Sentence.setString(6, input.getDate());
            Sentence.setInt(7, input.getId());
            output = Dao.executeCall(Sentence);
            Dao.close();

        } catch (Exception e) {
            logger.error( "Method: ", "DonationDao - Update", e.toString() );
        }

        return output;
    }


    public boolean delete(int id) {
        LoggerOps.debug("DonationDao - delete");


        boolean output;
        CallableStatement Sentence = Dao.getCallableSentence("{Call DeleteDonation (?)}");


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


    private ArrayList<DonationBean> getResponseArrayListBD(ResultSet rs){
        LoggerOps.debug("DonationDao - getResponseArrayListBD");

        ArrayList<DonationBean> output = new ArrayList<DonationBean>();

        try {
            while (rs.next()){
                DonationBean aux = new DonationBean(
                        rs.getInt("id"),
                        rs.getString("name"),
                        rs.getFloat("amount"),
                        rs.getString("description"),
                        rs.getString("purpose"),
                        rs.getString("currency"),
                        rs.getString("date")
                );
                output.add(aux);
            }
        } catch (SQLException e) {
            e.printStackTrace();
            System.out.println("SQL Exception: "+ e.getErrorCode());
        }

        return output;

    }

    private DonationBean getResponseBD(ResultSet rs) throws NullPointerException, SQLException{
        LoggerOps.debug("DonationDao - getResponseBD");

        DonationBean output = null;

        while (rs.next()){
            output = new DonationBean(
                    rs.getInt("id"),
                    rs.getString("name"),
                    rs.getFloat("amount"),
                    rs.getString("description"),
                    rs.getString("purpose"),
                    rs.getString("currency"),
                    rs.getString("date")
            );
        }

        return output;

    }

}