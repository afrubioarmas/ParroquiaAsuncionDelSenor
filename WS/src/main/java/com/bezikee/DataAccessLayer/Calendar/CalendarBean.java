package com.bezikee.DataAccessLayer.Calendar;

import java.sql.Date;

public class CalendarBean {

    private int id;
    private Date StartDate;
    private Date EndDate;
    private String name;

    public CalendarBean(Date startDate, Date endDate, String name) {
        StartDate = startDate;
        EndDate = endDate;
        this.name = name;
    }

    public CalendarBean(int id, Date startDate, Date endDate, String name) {
        this.id = id;
        StartDate = startDate;
        EndDate = endDate;
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Date getStartDate() {
        return StartDate;
    }

    public void setStartDate(Date startDate) {
        StartDate = startDate;
    }

    public Date getEndDate() {
        return EndDate;
    }

    public void setEndDate(Date endDate) {
        EndDate = endDate;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
