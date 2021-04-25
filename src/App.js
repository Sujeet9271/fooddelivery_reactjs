import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Signin from './components/Signin'
import Signup from './components/Signup'
import Forgotpassword from './components/Forgotpassword'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { useEffect, useState } from 'react';
import City from './components/City';
import Logout from './components/Logout';
import { Card } from '@material-ui/core';
import Restaurant from './components/Restaurant';
import Category from './components/Category';
import Restaurantcard from './components/Restaurantcard'
import Cart from './components/Cart';
import PlaceOrder from './components/PlaceOrder';
import MyOrders from './components/MyOrders';
import Myprofile from './components/Myprofile';

// import Card  from './components/Card';



function App() {
  return (

    <Router>

      <div className="App">
        <Switch>

          <Route path='/Logout'>
            <Logout />
          </Route>

          <Route path='/City'>
            <Header />

            <City />
          </Route>



          <Route path='/Restaurant'>
            <Header />
            <Restaurant />
          </Route>

          <Route path='/Cart'>
            <Header />
            <Cart />

          </Route>



          <Route path='/Menu'>
            <Header />
            <Category />
          </Route>

          <Route path='/Forgotpassword'>
            <Forgotpassword />
          </Route>

          <Route path='/Signin'>
            <Signin />
          </Route>

          <Route path='/Signup'>
            <Signup />
          </Route>

          <Route path='/PlaceOrder'>
            <Header />
            <PlaceOrder />
          </Route>

          <Route path='/MyOrders'>
            <Header />
            <MyOrders />
          </Route>

          <Route path='/Myprofile'>
          <Header />
            <Myprofile />
          </Route>

          <Route path='/'>
            <Header />
            <Home />
          </Route>




        </Switch>

      </div>

    </Router>



  );
}

export default App;
