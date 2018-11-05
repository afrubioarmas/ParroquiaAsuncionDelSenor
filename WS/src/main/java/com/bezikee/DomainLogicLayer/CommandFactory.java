package com.bezikee.DomainLogicLayer;

import com.bezikee.DataAccessLayer.Calendar.CalendarBean;
import com.bezikee.DataAccessLayer.Donation.DonationBean;
import com.bezikee.DataAccessLayer.New.NewBean;
import com.bezikee.DataAccessLayer.User.UserBean;
import com.bezikee.DomainLogicLayer.Calendar.*;
import com.bezikee.DomainLogicLayer.Donation.*;
import com.bezikee.DomainLogicLayer.New.*;
import com.bezikee.DomainLogicLayer.User.*;

public class CommandFactory {

    //BEGIN USER

    public static Object instantiateCreateUser ( UserBean user) {
        return new CreateUserCommand(user);
    }

    public static Object instantiateGetUser ( int userId) {
        return new GetUserCommand(userId);
    }

    public static Object instantiateGetAllUser() {
        return new GetAllUserCommand();
    }

    public static Object instantiateUpdateUser(UserBean user) {
        return new UpdateUserCommand(user);
    }

    public static Object instantiateDeleteUser(int userId) {
        return new DeleteUserCommand(userId);
    }

    //END USER

    //BEGIN DONATION

    public static Object instantiateCreateDonation ( DonationBean donation) {
        return new CreateDonationCommand(donation);
    }

    public static Object instantiateGetDonation ( int donationId) {
        return new GetDonationCommand(donationId);
    }

    public static Object instantiateGetAllDonation() {
        return new GetAllDonationCommand();
    }

    public static Object instantiateUpdateDonation(DonationBean donation) {
        return new UpdateDonationCommand(donation);
    }

    public static Object instantiateDeleteDonation(int donationId) {
        return new DeleteDonationCommand(donationId);
    }

    //END DONATION

    //BEGIN CALENDAR

    public static Object instantiateCreateCalendar( CalendarBean calendar) {
        return new CreateCalendarCommand(calendar);
    }

    public static Object instantiateGetCalendar ( int calendarId) {
        return new GetCalendarCommand(calendarId);
    }

    public static Object instantiateGetAllCalendar() {
        return new GetAllCalendarCommand();
    }

    public static Object instantiateUpdateCalendar(CalendarBean calendar) {
        return new UpdateCalendarCommand(calendar);
    }

    public static Object instantiateDeleteCalendar(int calendarId) {
        return new DeleteCalendarCommand(calendarId);
    }

    //END CALENDAR

    //BEGIN NEW

    public static Object instantiateCreateNew( NewBean bean) {
        return new CreateNewCommand(bean);
    }

    public static Object instantiateGetNew ( int id) {
        return new GetNewCommand(id);
    }

    public static Object instantiateGetAllNew() {
        return new GetAllNewCommand();
    }

    public static Object instantiateUpdateNew(NewBean bean) {
        return new UpdateNewCommand(bean);
    }

    public static Object instantiateDeleteNew(int id) {
        return new DeleteNewCommand(id);
    }

    //END NEW

}