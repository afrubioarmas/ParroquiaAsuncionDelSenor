package com.bezikee.DataAccessLayer.Donation;

import java.sql.Date;
import java.sql.Timestamp;

public class DonationBean {

    private int id;
    private String name;
    private float amount;
    private String description;
    private String purpose;
    private String currency;
    private String date;

    public DonationBean(String name, float account, String description, String purpose, String currency, String date){

        this.name = name;
        this.amount = account;
        this.description = description;
        this.purpose = purpose;
        this.currency = currency;
        this.date = date;

    }

    public DonationBean(int id, String name, float account, String description, String purpose, String currency, String date){

        this.id = id;
        this.name = name;
        this.amount = account;
        this.description = description;
        this.purpose = purpose;
        this.currency = currency;
        this.date = date;

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


    public float getAmount() {
        return amount;
    }

    public void setAmount(float amount) {
        this.amount = amount;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPurpose() {
        return purpose;
    }

    public void setPurpose(String purpose) {
        this.purpose = purpose;
    }

    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }
}
