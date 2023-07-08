import React, {Fragment} from "react";
import {useDispatch, useSelector} from "react-redux";
import * as pizzaAction from "../redux/pizzahut/pizzaHut.actions";
import * as pizzaReducer from "../redux/pizzahut/pizzaHut.reducer";

export const PizzaHut = () => {
    let dispatch = useDispatch();

    let pizzaInfo = useSelector((state)=> {
        return state[pizzaReducer.pizzaHutFeatureKey]
    });

    let ClickBuy = () => {
        dispatch(pizzaAction.buyCake())
    }

    return(
        <React.Fragment>
            <h2>React</h2>
            <button onClick={ClickBuy}>Buy Pizza</button>
        </React.Fragment>
    );
}

export default PizzaHut;