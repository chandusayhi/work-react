import  './App.css';
import React from "react";
import PizzaHut from "./PizzaComponent/PizzaHut";
import WishMessage from "./WishComponent/WishMessage";
import ProductItem from "./components/ProductCart/ProductItem";
import UserList from "./Users_Component/UserList";



const App = () => {
    return (
       <React.Fragment>
           <nav className="navbar navbar-dark bg-dark navbar-expand-sm text-center">
               <div className="container">
                   <a href="javascript;" className="navbar-brand">React PizzaHut using Redux</a>
               </div>
           </nav>

           {/*<PizzaHut/>*/}
           {/*<WishMessage/>*/}
            {/*<ProductItem/>*/}
           <UserList/>
           <div style={{marginBottom : '150px'}}></div>
       </React.Fragment>

  );
};

export default App;
