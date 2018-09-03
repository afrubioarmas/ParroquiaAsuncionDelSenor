package com.bezikee.Common;

import java.sql.Date;
import java.text.ParseException;
import java.text.SimpleDateFormat;

public class DateOps{

    public static Date convertToMysql(String input){

        SimpleDateFormat sdf1 = new SimpleDateFormat("yyyy-MM-dd");
        java.util.Date dateAux = null;
        try {
            dateAux = sdf1.parse(input);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return new java.sql.Date(dateAux.getTime());
    }



}
