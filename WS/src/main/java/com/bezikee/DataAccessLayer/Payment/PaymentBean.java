package com.bezikee.DataAccessLayer.Payment;

import java.sql.Date;

public class PaymentBean {


    private int id;
    private int serviceId;
    private String name;
    private int personalId;
    private float amount;
    private Date date;

    public PaymentBean(int id, int serviceId, String name, int personalId, float amount, Date date) {
        this.id = id;
        this.serviceId = serviceId;
        this.name = name;
        this.personalId = personalId;
        this.amount = amount;
        this.date = date;
    }

    public PaymentBean(int serviceId, String name, int personalId, float amount, Date date) {
        this.serviceId = serviceId;
        this.name = name;
        this.personalId = personalId;
        this.amount = amount;
        this.date = date;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getServiceId() {
        return serviceId;
    }

    public void setServiceId(int serviceId) {
        this.serviceId = serviceId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPersonalId() {
        return personalId;
    }

    public void setPersonalId(int personalId) {
        this.personalId = personalId;
    }

    public float getAmount() {
        return amount;
    }

    public void setAmount(float amount) {
        this.amount = amount;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}
