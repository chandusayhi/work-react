import React from "react";
import {useDispatch, useSelector} from "react-redux";
import * as productAction from "../../redux/ProductItem/product.action";
import * as productReducer from "../../redux/ProductItem/product.reducer";
let ProductItem = () => {

    let dispatch = useDispatch();

    let productInfo = useSelector((state) => {
        return state[productReducer.productFeatureKey]
    });

    let incrClick = () => {
        dispatch(productAction.incrProduct())
    };

    let decrClick = () => {
        dispatch(productAction.decrProduct())
    };

    return(
        <React.Fragment>
           <section className="p-3">
               <div className="container">
                   <div className="row">
                       <div className="col">
                           <p className="h3">Product List</p>
                           <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias commodi hic incidunt inventore ipsum molestias nisi numquam sint vero voluptatem?</p>
                       </div>
                   </div>
               </div>
           </section>
            <section className="p-3">

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <table className="table table-hover table-striped text-center">
                                <thead className="bg-success text-white">
                                <tr>
                                    <td>SL NO</td>
                                    <td>Product Name</td>
                                    <td>Product Image</td>
                                    <td>Quantity</td>
                                    <td>Total Price</td>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>{productInfo.product.slo}</td>
                                    <td>{productInfo.product.name}</td>
                                    <td>
                                        {
                                            <img src={productInfo.product.img} alt="" width="50" height="50" className="img-fluid" />
                                        }
                                    </td>
                                    <td>
                                        <i className="fa fa-plus-circle mt-3" onClick={incrClick}></i>
                                            {productInfo.product.qty}
                                        <i className="fa fa-minus-circle mt-3" onClick={decrClick   }></i>
                                    </td>
                                    <td>{productInfo.product.qty * productInfo.product.price}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default ProductItem;