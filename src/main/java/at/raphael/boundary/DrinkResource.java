package at.raphael.boundary;

import at.raphael.entity.Drink;
import at.raphael.entity.Location;
import at.raphael.entity.User;

import javax.transaction.Transactional;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("drink")
public class DrinkResource {

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Drink> getAllDrinks(){
        return Drink.listAll();
    }


    @POST
    @Transactional
    @Consumes(MediaType.APPLICATION_JSON)
    public void addNewDrink(Drink drink){

        Drink k = new Drink();

        k.user = User.find("id", drink.user.id).firstResult();
        k.location = Location.find("id", drink.location.id).firstResult();
        k.date = drink.date;

        Drink.persist(k);
    }

}
