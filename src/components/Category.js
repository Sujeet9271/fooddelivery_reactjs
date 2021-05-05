import React, { Fragment, useEffect, useState } from "react";
import "./Home.css";
import axiosInstance from "../axios";
import {
  Container,
  Row,
  Col,
  Card,
  Image,
  Breadcrumb,
  Accordion,
  Spinner,
} from "react-bootstrap";

import Cards from "./Categorycard";
import { useHistory } from "react-router";
import baseURL from "../baseurl";

const Category = ({ getCart }) => {
  const history = useHistory();

  const restaurant = history.location.state.restaurant;

  useEffect(() => {
    getCategory();
  }, []);

  const [categories, setCategory] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCategory = async () => {
    try {
      const res = await axiosInstance.get(
        "cities/" +
          history.location.state.city.id +
          "/restaurant/" +
          restaurant.id +
          "/"
      );

      setCategory(res.data);
      setLoading(true);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <Fragment>
      <Container className="pt-5">
        <Card style={{ width: "75vw", border: "none" }}>
          <div style={{ display: "flex" }}>
            <Image
              style={{ width: "30%" }}
              src={`${baseURL}${restaurant.image}`}
              roundedCircle
            />
            <Card.Body>
              <Card.Title>
                <div style={{ display: "flex", marginBottom: "2%" }}>
                  {restaurant.name}
                </div>
              </Card.Title>
              <Card.Text
                style={{
                  marginTop: "5%",
                  marginLeft: "10%",
                  justifyContent: "center",
                }}
              >
                <div style={{ display: "flex", marginBottom: "2%" }}>
                  <h5 className="card-text" style={{ marginLeft: "10px" }}>
                    Address:
                  </h5>{" "}
                  {restaurant.address}
                </div>
                <div style={{ display: "flex", marginBottom: "2%" }}>
                  <h5 className="card-text" style={{ marginLeft: "10px" }}>
                    PhoneNo:
                  </h5>{" "}
                  {restaurant.phnumber}
                </div>
                <div style={{ display: "flex", marginBottom: "2%" }}>
                  <h5 className="card-text" style={{ marginLeft: "10px" }}>
                    Status:
                  </h5>{" "}
                  {restaurant.status}
                </div>
              </Card.Text>
            </Card.Body>
          </div>
        </Card>
        <h4 className="p-5">Menu:</h4>
      </Container>

      <Accordion>
        {loading ? (
          categories.map((category) => (
            <Container>
              <Cards
                props={category}
                key={category.id}
                re={getCategory}
                cart={getCart}
              />
            </Container>
          ))
        ) : (
          <Container style={{position:'relative',justifyContent:'space-around'}}>
            <Spinner animation="grow" variant="primary" />
            <Spinner animation="grow" variant="secondary" />
            <Spinner animation="grow" variant="success" />
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="warning" />
            <Spinner animation="grow" variant="info" />
          </Container>
        )}
      </Accordion>
    </Fragment>
  );
};

export default Category;
