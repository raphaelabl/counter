package at.raphael.boundary;

import at.raphael.dto.UserCountDto;
import at.raphael.entity.Drink;
import at.raphael.entity.User;

import javax.transaction.Transactional;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.ArrayList;
import java.util.List;

@Path("user")
public class UserResource {

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<User> getAllUser(){
        return User.listAll();
    }

    @POST
    @Transactional
    @Consumes(MediaType.APPLICATION_JSON)
    public void postUser(User user){

        new User(user.firstName, user.lastName, user.shortName).persist();

    }

    @GET
    @Path("getUsersWithCount")
    @Produces(MediaType.APPLICATION_JSON)
    public List<UserCountDto> getUsersWithCount(){
        List<UserCountDto> userCountDtos = new ArrayList<>();

        for (User u: getAllUser()) {
            long amount =  Drink.find("user.id", u.id).stream().count();

            userCountDtos.add(new UserCountDto(u.firstName,u.lastName,u.shortName,amount));
        }

        return userCountDtos;
    }

}
