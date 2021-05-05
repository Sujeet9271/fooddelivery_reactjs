import React, { Fragment, useEffect, useState } from "react";
import "./Home.css";
import axiosInstance from "../axios";
import {
  Col,
  Row,
  Container,
  Button,
  CardDeck,
  Breadcrumb,
  Spinner,
} from "react-bootstrap";

import Cards from "./Restaurantcard";
import { useHistory } from "react-router";

const Restaurant = () => {
  var history = useHistory();
  const city = history.location.state.city;

  useEffect(() => {
    getRestaurant();
  }, []);

  const [restaurants, setRestaurant] = useState([]);
  const [loading, setLoading] = useState(false);

  const getRestaurant = async () => {
    setLoading(false);

    try {
      const res = await axiosInstance.get("/cities/" + city.id + "/");
      setRestaurant(res.data);
      setLoading(true);
    } catch (err) {
      alert(err.message);
    }
  };

  const VegOnly = async () => {
    setLoading(false);
    try {
      const res = await axiosInstance.get(
        "/cities/" + city.id + "/restaurant/veg_only/"
      );
      setRestaurant(res.data);
      setLoading(true);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <Container className="p-5">
      <h2 className="mb-5 ml-5">
        <u>Restaurants in {city.name}</u>
      </h2>
      <Button onClick={getRestaurant} className="mr-1">
        All
      </Button>
      <Button onClick={VegOnly}>VegOnly</Button>
      <Row>
        {loading ? (
          restaurants.map((restaurant) => (
            <CardDeck>
              <Cards
                restaurant={restaurant}
                key={restaurant.id}
                re={getRestaurant}
              />
            </CardDeck>
          ))
        ) : (
          <Container
            style={{ position: "relative", justifyContent: "space-around" }}
          >
            <Spinner animation="grow" variant="primary" />
            <Spinner animation="grow" variant="secondary" />
            <Spinner animation="grow" variant="success" />
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="warning" />
            <Spinner animation="grow" variant="info" />
          </Container>
        )}
      </Row>
    </Container>
  );
};

export default Restaurant;
