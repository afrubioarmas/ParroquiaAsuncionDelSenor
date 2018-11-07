package com.bezikee.DataAccessLayer.Payment;

import com.bezikee.Common.DateOps;
import com.bezikee.Common.LoggerOps;
import com.bezikee.DataAccessLayer.Dao;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.sql.CallableStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class PaymentDao implements IPaymentDao {

    private final static Logger logger = LoggerFactory.getLogger(PaymentDao.class);

    public boolean create(PaymentBean input) {
        LoggerOps.debug("PaymentDao - create");

        CallableStatement Sentence;
        boolean output = false;
        try {
            Sentence = Dao.getCallableSentence("{Call CreatePayment (?,?,?,?,?)}");
            Sentence.setInt(1, input.getServiceId());
            Sentence.setString(2, input.getName());
            Sentence.setFloat(3, input.getPersonalId());
            Sentence.setFloat(4, input.getAmount());
            Sentence.setDate(5,input.getDate());
            output = Dao.executeCall(Sentence);
            Dao.close();

        } catch (Exception e) {
            logger.error( "Method: ", "PaymentDao - create", e.toString() );
        }



        return output;
    }

    public PaymentBean read(int id) {
        LoggerOps.debug("PaymentDao - read");

        PaymentBean output = null;
        ResultSet rs;
        CallableStatement Sentence = Dao.getCallableSentence("{Call GetPayment (?)}");

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

    public ArrayList<PaymentBean> readAll(){
        LoggerOps.debug("PaymentDao - readAll");

        ArrayList<PaymentBean> output = null;
        ResultSet rs;

        CallableStatement Sentence = Dao.getCallableSentence("{Call GetAllPayment ()} ");


        rs =Dao.executeQuery(Sentence);

        if(rs!=null)
            output = getResponseArrayListBD(rs);

        Dao.close();

        return output;
    }

    public boolean update(PaymentBean input) {

        LoggerOps.debug("PaymentDao - update");

        CallableStatement Sentence;
        boolean output = false;
        try {
            Sentence = Dao.getCallableSentence("{Call UpdatePayment (?,?,?,?,?,?)}");

            Sentence.setInt(1, input.getServiceId());
            Sentence.setString(2, input.getName());
            Sentence.setFloat(3, input.getPersonalId());
            Sentence.setFloat(4, input.getAmount());
            Sentence.setDate(5,input.getDate());
            Sentence.setInt(6, input.getId());
            output = Dao.executeCall(Sentence);
            Dao.close();

        } catch (Exception e) {
            logger.error( "Method: ", "PaymentDao - Update", e.toString() );
        }

        return output;
    }


    public boolean delete(int id) {
        LoggerOps.debug("PaymentDao - delete");


        boolean output;
        CallableStatement Sentence = Dao.getCallableSentence("{Call DeletePayment (?)}");


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


    private ArrayList<PaymentBean> getResponseArrayListBD(ResultSet rs){
        LoggerOps.debug("PaymentDao - getResponseArrayListBD");

        ArrayList<PaymentBean> output = new ArrayList<PaymentBean>();

        try {
            while (rs.next()){
                PaymentBean aux = new PaymentBean(
                        rs.getInt("id"),
                        rs.getInt("serviceId"),
                        rs.getString("name"),
                        rs.getInt("personalId"),
                        rs.getFloat("amount"),
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

    private PaymentBean getResponseBD(ResultSet rs) throws NullPointerException, SQLException{
        LoggerOps.debug("PaymentDao - getResponseBD");

        PaymentBean output = null;

        while (rs.next()){
            output = new PaymentBean(
                    rs.getInt("id"),
                    rs.getInt("serviceId"),
                    rs.getString("name"),
                    rs.getInt("personalId"),
                    rs.getFloat("amount"),
                    DateOps.convertToMysql(rs.getString("date"))
            );
        }

        return output;

    }

}
