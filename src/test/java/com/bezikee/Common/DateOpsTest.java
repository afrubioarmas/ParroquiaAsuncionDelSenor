package com.bezikee.Common;

import org.junit.Assert;
import org.junit.Test;

import java.sql.Date;

import static org.junit.Assert.*;

public class DateOpsTest {

    @Test
    public void convertToMysql() {
        String stringDate = "1992-12-18";

        Date sqlDate = DateOps.convertToMysql(stringDate);

        Assert.assertEquals(stringDate,sqlDate.toString());


    }
}