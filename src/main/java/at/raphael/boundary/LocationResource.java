package at.raphael.boundary;

import at.raphael.entity.Location;

import javax.transaction.Transactional;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("location")
public class LocationResource {

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Location> getAllDrinks(){
        return Location.listAll();
    }


    @POST
    @Transactional
    @Consumes(MediaType.APPLICATION_JSON)
    public void addNewDrink(Location location){
        new Location(location.name, location.address, location.longitude, location.latitude).persist();
    }
}
