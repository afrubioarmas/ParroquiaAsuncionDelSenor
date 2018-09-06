package com.bezikee.DataAccessLayer;

import com.bezikee.Common.Registry;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.sql.*;

public abstract class Dao
{
    private static Logger logger = LoggerFactory.getLogger( Dao.class );

    private static Connection _conn;

    private static void  connect()
    {
        try{

            Class.forName( Registry.BD_CLASS_FOR_NAME );

            _conn = DriverManager.getConnection( Registry.BD_URL, Registry.BD_USER, Registry.BD_PASSWORD );
            if (_conn == null) {
                throw new NullPointerException();
            }
        }
        catch ( ClassNotFoundException | SQLException | NullPointerException e ){
            logger.error( "Method: ", "Dao - GetConnection", e.toString() );
        }
    }


    public static void close(){
        try{
            _conn.close();
        }catch ( SQLException e ){
            logger.error( "Method: ", "Dao - Close", e.toString() );
        }
    }

    public static CallableStatement getCallableSentence (String statementDefinition){
        CallableStatement Sentence = null;
        try {
            connect();
            Sentence = _conn.prepareCall(statementDefinition);
        } catch (Exception e){
            logger.error( "Method: ", "Dao - getCallableSentence", e.toString() );
        }
        return Sentence;
    }

    public static ResultSet executeQuery(CallableStatement statement) {
        ResultSet res;
        try {
            res = statement.executeQuery();
            return res;
        }catch (SQLException e){
            logger.error( "Method: ", "Dao - executeQuery", e.toString() );
            return null;
        }
    }

    public static boolean executeCall(CallableStatement statement) {
        try {
            statement.execute();
            return true;
        }catch (SQLException e){
            logger.error( "Method: ", "Dao - executeCall", e.toString() );
            return false;
        }
    }


}