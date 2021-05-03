import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Forgotpassword from "./components/Forgotpassword";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import City from "./components/City";
import Logout from "./components/Logout";
import Restaurant from "./components/Restaurant";
import Category from "./components/Category";
import Cart from "./components/Cart";
import PlaceOrder from "./components/PlaceOrder";
import MyOrders from "./components/MyOrders";
import Myprofile from "./components/Myprofile";
import { useEffect, useState } from "react";
import axiosInstance from "./axios";

// import Card  from './components/Card';

function App() {
  const access_token = localStorage.getItem("access_token");
  useEffect(() => {
    if (access_token) {
      getCart();
    }
  }, []);

  const [total_item, setTotal] = useState([]);

  const getCart = async () => {
    try {
      const res = await axiosInstance.get("/cart/");
      const total = res.data.orders.length;
      setTotal(total);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/PlaceOrder">
            <Header getCart={getCart} total_item={total_item} />
            <PlaceOrder  />
          </Route>

          <Route exact path="/MyOrders">
            <Header getCart={getCart} total_item={total_item}  />
            <MyOrders getCart={getCart} total_item={total_item} />
          </Route>

          <Route exact path="/Myprofile">
            <Header getCart={getCart} total_item={total_item}  />
            <Myprofile />
          </Route>

          <Route exact path="/City">
            <Header getCart={getCart} total_item={total_item} />
            <City getCart={getCart} />
          </Route>

          <Route exact path="/Restaurant">
            <Header getCart={getCart} total_item={total_item} />
            <Restaurant />
          </Route>

          <Route exact path="/Cart">
            <Header getCart={getCart} total_item={total_item} />
            <Cart Ocart={getCart} total_item={total_item} />
          </Route>

          <Route exact path="/Menu">
            <Header getCart={getCart} total_item={total_item} />
            <Category getCart={getCart} />
          </Route>

          <Route exact path="/Forgotpassword">
            <Forgotpassword />
          </Route>

          <Route exact path="/Signin">
            <Signin />
          </Route>

          <Route exact path="/Signup">
            <Signup />
          </Route>
          <Route exact path="/Logout">
            <Logout />
          </Route>

          <Route exact path="/Home">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
