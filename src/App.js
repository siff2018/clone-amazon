import React from 'react';
import './App.css';
import Header from './Header'
import {
  BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom";

function App() {
  return (<Router>
    <div>
      

      <Switch>
        <Route path="/checkout/">
         <h1>CheckOut🚗</h1>
        </Route>
        <Route path="/login">
         Login page 🚚🚚
        </Route>
        <Route path="/">
          <Header/>
         <h1>HOME PAGE ! 🚄🚄🚄🚄</h1>
        </Route>
      </Switch>
    </div>
  </Router>



    
    // <Router>

    // <div className="app">
    // <h1>this the nav bar</h1>
    // <h1>.</h1>
    // <hr/>
    //  <Switch>
    //    <Route Path="/checkout">
    //      <h1>Checkout</h1>
    //    </Route>
    //    <Route Path="/login">
    //      <h1>Login</h1>
    //    </Route>
    //    <Route Path="/">
    //      <h1>HomePage🛴</h1>
    //    </Route>
    //  </Switch>
    //    </div>
    // </Router>
  );
}

export default App;
