package com.bezikee.DataAccessLayer;

import com.bezikee.Common.LoggerOps;
import com.bezikee.Common.Registry;

import java.sql.*;

public abstract class Dao
{

    private static Connection _conn;

    private static void  connect()
    {
         try{

            Class.forName( Registry.BD_CLASS_FOR_NAME );

            _conn = DriverManager.getConnection( Registry.BD_URL, Registry.BD_USER, Registry.BD_PASSWORD );

        }
        catch ( ClassNotFoundException | SQLException | NullPointerException e ){
            LoggerOps.error( "Method: Dao - Connect -> " + e.toString() );
        }
    }


    public static void close(){
        try{
            _conn.close();
        }catch ( SQLException e ){
            LoggerOps.error( "Method: Dao - Close -> " + e.toString() );
        }
    }

    public static CallableStatement getCallableSentence (String statementDefinition){
        CallableStatement Sentence = null;
        try {
            connect();
            Sentence = _conn.prepareCall(statementDefinition);
        } catch (Exception e){
            LoggerOps.error( "Method: Dao - GetCallableSentence -> " + e.toString() );
        }
        return Sentence;
    }

    public static ResultSet executeQuery(CallableStatement statement) {
        ResultSet res;
        try {
            res = statement.executeQuery();
            return res;
        }catch (SQLException e){
            LoggerOps.error( "Method: Dao - Execute Query -> " + e.toString() );
            return null;
        }
    }

    public static boolean executeCall(CallableStatement statement) {
        try {
            statement.execute();
            return true;
        }catch (SQLException e){
            LoggerOps.error( "Method: Dao - Execute Call -> " + e.toString() );
            return false;
        }
    }


}