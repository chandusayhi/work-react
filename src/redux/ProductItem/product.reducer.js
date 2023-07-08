import * as productAction from "./product.action";

export const productFeatureKey = "product -item";

let initialState = {
    product : {
        slo : '10AB',
        img : 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSVF_h5yLobfjegqCG8QnEMpg8_hodaIhEvu83kw8QRvQgcmw0tvzQIAZ9AKlQ4nh9Gb8oXLPoqDvhRBGxK2DuM7iPiaE4fKGidsxNhAeg&usqp=CAc',
        name : 'Smart Watch',
        qty : 5,
        price : 1500
    }
};

export const productReducer = (state = initialState, action) => {
    switch (action.type){
        case productAction.INCRQTY:
            return {
                product: {
                    ...state.product,
                    qty: state.product.qty + 1
                }
            };
        case productAction.DECRQTY:
            return {
                product: {
                    ...state.product,
                    qty: state.product.qty - 1 > 0 ? state.product.qty - 1 : 0
                }
            };
        default:return state;
    }

};