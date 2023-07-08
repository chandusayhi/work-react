import {combineReducers} from "redux";
import * as PizzaReducer from "../redux/pizzahut/pizzaHut.reducer";
import * as wishMessage from "../redux/WishMessage/wishMessage.reducer";
import * as productReducer from "../redux/ProductItem/product.reducer";
import * as userListReducer from "../redux/userredux/users.reducer";
export const rootReducer = combineReducers({
    [PizzaReducer.pizzaHutFeatureKey] : PizzaReducer.reducer,
    [wishMessage.WishMessageFeatureKey] : wishMessage.wishReducer,
    [productReducer.productFeatureKey] : productReducer.productReducer,
    [userListReducer.UserListFeatureKey] : userListReducer.userReducer
});