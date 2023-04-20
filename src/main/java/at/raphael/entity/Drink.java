package at.raphael.entity;

import io.quarkus.hibernate.orm.panache.PanacheEntity;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import java.time.LocalDateTime;

@Entity
public class Drink extends PanacheEntity {


    public LocalDateTime date;

    @ManyToOne(cascade = CascadeType.ALL)
    public User user;

    @ManyToOne(cascade = CascadeType.ALL)
    public Location location;

    public Drink(User user, Location location) {
        this.date = LocalDateTime.now();
        this.user = user;
        this.location = location;
    }

    public Drink() {
    }
}
