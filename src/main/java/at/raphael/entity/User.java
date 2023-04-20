package at.raphael.entity;

import io.quarkus.hibernate.orm.panache.PanacheEntity;

import javax.persistence.Entity;
import javax.persistence.NamedQueries;
import javax.persistence.Table;

@Entity
@Table(name = "C_User")
public class User extends PanacheEntity {

    public String firstName;
    public String lastName;

    public String shortName;

    public User(String firstName, String lastName, String shortName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.shortName = shortName;
    }

    public User() {
    }


}
