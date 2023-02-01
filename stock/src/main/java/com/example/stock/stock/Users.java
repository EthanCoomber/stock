package com.example.stock.stock;

import jakarta.persistence.*;

import jakarta.persistence.Entity;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;

import java.time.LocalDate;

@Entity
@Table
public class Users {
    @Id
    @SequenceGenerator(
            name = "users_sequence",
            sequenceName = "users_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "users_sequence"
    )

    private long Id;
    private String username;
    private LocalDate dateJoined;

    public Users(){
    }

    public Users(Long Id, String username, LocalDate dateJoined){
        this.Id = Id;
        this.username = username;
        this.dateJoined = dateJoined;
    }

    public Users(String username, LocalDate dateJoined){
        this.username = username;
        this.dateJoined = dateJoined;
    }

    public long getId() {
        return Id;
    }

    public void setId(long id) {
        Id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public LocalDate getDateJoined() {
        return dateJoined;
    }

    public void setDateJoined(LocalDate dateJoined) {
        this.dateJoined = dateJoined;
    }

    @Override
    public String toString() {
        return "Users{ \n" +
                "Id=" + Id +
                ", \n username='" + username +
                ", \n dateJoined=" + dateJoined +
                "\n }";
    }
}