import { combineReducers } from "redux";
import cartReducer from "./cart/cart.reducer";
import locationReducer from "./location/location.reducer";
export default combineReducers({
  cart: cartReducer,
  location: locationReducer,
});
