import * as PizzaAction from './pizzaHut.actions';

export const pizzaHutFeatureKey = 'Pizza-Hut';

let initialState = {
    count : 10
};
export let reducer = (state = initialState, action) => {
    switch (action.type){
        case PizzaAction.BUY_CAKE :
            return{
                count : state.count - 1 > 0 ? state.count - 1 : 0
            }
        default: return state;
    }
};