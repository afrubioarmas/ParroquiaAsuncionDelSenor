package com.bezikee.DataAccessLayer;


import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import java.sql.CallableStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import static org.junit.Assert.*;

public class DaoTest {

    @Before
    public void setUp() throws Exception {
    }

    @After
    public void tearDown() throws Exception {
    }

    @Test
    public void close() {
    }

    @Test
    public void getCallableSentence() {
        CallableStatement Sentence = Dao.getCallableSentence("{Select * from Users;}");
        ResultSet a = Dao.executeQuery(Sentence);


        assertNotNull(a);
    }

    @Test
    public void executeQuery() {
    }

    @Test
    public void executeCall() {
    }
}