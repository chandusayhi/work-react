import React from "react";
import * as wishAction from "../redux/WishMessage/wishMessage.actions";
import * as wishReducer from "../redux/WishMessage/wishMessage.reducer";
import {useDispatch, useSelector} from "react-redux";


let WishMessage = () => {
    let dispatch = useDispatch();

    let wishInfo = useSelector((state) => {
       return state[wishReducer.WishMessageFeatureKey]
    });

    let clickMorning = () => {
        dispatch(wishAction.wishGoodMorning())
    };
    let clickAfternoon = () => {
        dispatch(wishAction.wishGoodAfternoon())
    };

    let clickEvening = () => {
        dispatch(wishAction.wishGoodEvening())
    };

    return(
        <React.Fragment>
            <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10">
                            <div className="card">
                                <div className="card-header bg-default text-white">
                                    <h2>Wish Message With Redux</h2>
                                </div>
                                <div className="card-body btn-grey">
                                    <h4>{wishInfo.message}</h4>
                                    <button onClick={clickMorning} className="btn btn-success btn-sm">GOOD MORNING</button>
                                    <button onClick={clickAfternoon} className="btn btn-primary btn-sm">GOOD AFTERNOON</button>
                                    <button onClick={clickEvening} className="btn btn-danger btn-sm">GOOD EVENING</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default WishMessage;