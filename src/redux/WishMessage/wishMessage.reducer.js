import * as wishAction from "./wishMessage.actions";
export const WishMessageFeatureKey = 'Wish-Message';

let initialState  = {
    message : 'Hello'
}
export const wishReducer = (state = initialState,action) => {
    switch (action.type) {
        case wishAction.GOOD_MORNING :
            return{
                message: "Good Morning"
            };
        case wishAction.GOOD_AFTERNOON :
            return{
                message: "Good Afternoon"
            };
        case wishAction.GOOD_EVENING :
            return{
                message: "Good Evening"
            };
        default : return state;
    }
};