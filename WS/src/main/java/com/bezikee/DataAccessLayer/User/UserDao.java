package com.bezikee.DataAccessLayer.User;

import com.bezikee.Common.DateOps;
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
        logger.debug("Debug: UserDao - create");
        CallableStatement Sentence = null;
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

       UserBean salida = null;
        ResultSet rs =null;
        CallableStatement Sentencia = Dao.getCallableSentence("{Call GetUser (?)}");

        try {
            Sentencia.setInt(1, id);

            rs =Dao.executeQuery(Sentencia);

            if(rs!=null)
                salida = getResponseBD(rs);

        } catch (SQLException e) {
            e.printStackTrace();
            System.out.println("SQL Exception: "+ e.getErrorCode());
        }
        Dao.close();

        return salida;


    }

    public ArrayList<UserBean> readAll(){

        ArrayList<UserBean> salida = null;
        ResultSet rs =null;

        CallableStatement Sentencia = Dao.getCallableSentence("{Call GetAllUsers ()} ");


        rs =Dao.executeQuery(Sentencia);

        if(rs!=null)
            salida = getResponseArrayListBD(rs);

        Dao.close();

        return salida;
    }

   /* public boolean update(BeanPregunta pregunta) {

        CallableStatement Sentencia = Dao.getCallableSentence("VPC_updatePregunta ?,?,?,?,?,?,?,?,?");

        try {
            Sentencia.setString(1, pregunta.getEnunciado());
            Sentencia.setString(2, pregunta.getTitulo());
            Sentencia.setString(3, pregunta.getTipo());
            Sentencia.setString(4, pregunta.getAtributo());
            Sentencia.setString(5, pregunta.getValidacion());
            Sentencia.setString(6, pregunta.getDigitos());
            Sentencia.setString(7, pregunta.getAplica());
            Sentencia.setString(8, pregunta.getEstatus());
            Sentencia.setString(9, pregunta.getId());
        } catch (SQLException e) {
            e.printStackTrace();
            System.out.println("SQL Exception: "+ e.getErrorCode());
        }

        boolean salida = Dao.executeCall(Sentencia);

        Dao.close();

        return salida;
    }

    public boolean delete(int id) {


        boolean salida = false;
        CallableStatement Sentencia = Dao.getCallableSentence("VPC_deletePregunta ?");


        try {
            Sentencia.setInt(1, id);
        } catch (SQLException e) {
            e.printStackTrace();
            System.out.println("SQL Exception: "+ e.getErrorCode());
        }

        salida =Dao.executeCall(Sentencia);

        Dao.close();

        return salida;
    }


    */

    private ArrayList<UserBean> getResponseArrayListBD(ResultSet rs){

        ArrayList<UserBean> salida = new ArrayList<UserBean>();

        try {
            while (rs.next()){
                UserBean aux = new UserBean(
                        rs.getInt("id"),
                        rs.getString("name"),
                        rs.getString("lastname"),
                        rs.getString("email"),
                        rs.getString("username"),
                        rs.getString("password"),
                        DateOps.convertToMysql(rs.getString("birthDate")),
                        rs.getString("sex"));
                salida.add(aux);
            }
        } catch (SQLException e) {
            e.printStackTrace();
            System.out.println("SQL Exception: "+ e.getErrorCode());
        }

        return salida;

    }

    private UserBean getResponseBD(ResultSet rs) throws NullPointerException, SQLException{
        UserBean salida = null;

        while (rs.next()){
            salida = new UserBean(
                    rs.getInt("id"),
                    rs.getString("name"),
                    rs.getString("lastname"),
                    rs.getString("email"),
                    rs.getString("username"),
                    rs.getString("password"),
                    DateOps.convertToMysql(rs.getString("birthDate")),
                    rs.getString("sex"));
        }

        return salida;

    }

}
