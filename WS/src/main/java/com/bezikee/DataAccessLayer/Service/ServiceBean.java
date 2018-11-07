package com.bezikee.DataAccessLayer.Service;

import java.sql.Date;

public class ServiceBean {

    private int id;
    private String name;
    private String currency;
    private float basePrice;

    public ServiceBean(int id, String name, String currency, float basePrice) {
        this.id = id;
        this.name = name;
        this.currency = currency;
        this.basePrice = basePrice;
    }

    public ServiceBean(String name, String currency, float basePrice) {
        this.name = name;
        this.currency = currency;
        this.basePrice = basePrice;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }

    public float getBasePrice() {
        return basePrice;
    }

    public void setBasePrice(float basePrice) {
        this.basePrice = basePrice;
    }
}
