import {User} from "./user.model";
import {Location} from "./location.model";

export interface Drink {
  id: number;
  user: User;
  location: Location;
  date: Date;
}
