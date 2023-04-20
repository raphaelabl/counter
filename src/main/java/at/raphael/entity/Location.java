package at.raphael.entity;

import io.quarkus.hibernate.orm.panache.PanacheEntity;

import javax.persistence.Entity;

@Entity
public class Location extends PanacheEntity {

    public String name;

    public String address;

    public double longitude;

    public double latitude;


    public Location(String name, String address, double longitude, double latitude) {
        this.name = name;
        this.address = address;
        this.latitude = latitude;
        this.longitude = longitude;
    }

    public Location() {
    }
}
