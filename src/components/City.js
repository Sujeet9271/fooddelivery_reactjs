import React, { useEffect, useState } from "react";
import "./Home.css";
import axiosInstance from "../axios";
import { Row, Container, CardDeck } from "react-bootstrap";

import Cards from "./Card";
import { LaptopWindows } from "@material-ui/icons";

const City = ({getCart}) => {
  useEffect(() => {
    getCity();
  }, []);

  const [cities, setCity] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCity = async () => {
    try {
      const res = await axiosInstance.get("/cities/");
      getCart();
      setCity(res.data);
      setLoading(true);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <Container className="p-5"><h3>Select City</h3>
      <Row>
        {loading &&
          cities.map((city) => (
            <CardDeck>
              <Cards city={city} key={city.id} re={getCity} />
            </CardDeck>
          ))}
      </Row>
    </Container>
  );
};

export default City;
