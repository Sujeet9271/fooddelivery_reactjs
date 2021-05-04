import { Card, Button, Image, Container } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import axiosInstance from "../axios";
import baseURL from "../baseurl";
import Cart from "./Cart";

const Cartcard = ({ props, re, cart }) => {
  const [num, setnum] = useState(props.quantity);

  const Removefromcart = (e) => {
    axiosInstance.get("/cart/" + props.id + "/").then((res) => {
      re();
      cart();
    });
  };

  const decrement = (e) => {
    if (props.quantity <= 1) {
      setnum(1);
      alert("Mininum quantity reached ");
    } else {
      setnum(num - 1);
      props.quantity--;
      axiosInstance
        .patch("/cart/", [
          {
            id: props.id,
            quantity: props.quantity,
          },
        ])
        .then((res) => {
          re();
          e.preventDefault();
        });
    }
  };
  const increment = (e) => {
    e.preventDefault();
    setnum(num + 1);
    props.quantity++;
    axiosInstance
      .patch("/cart/", [
        {
          id: props.id,
          quantity: props.quantity,
        },
      ])
      .then((res) => {
        re();
        e.preventDefault();
      });
  };

  return (
    <>
      <Card className="my-3 p-3 rounded">
        <div style={{ display: "flex" }}>
          <Image
            style={{ width: "30%" }}
            src={`${baseURL}${props.image}`}
            thumbnail
          />
          <Card.Body>
            <Card.Title>
              <div style={{ display: "flex", marginBottom: "2%" }}>
                {props.itemname}({props.restaurant_name})
              </div>
            </Card.Title>
            <Card.Text>
              <Container style={{ display: "flex", marginBottom: "2%" }}>
                <h5 className="card-text" style={{ marginLeft: "10px" }}>
                  Price:
                </h5>
                {props.price}
              </Container>

              <Container style={{ display: "flex", marginBottom: "2%" }}>
                <h5 className="card-text" style={{ marginLeft: "10px" }}>
                  Quantity:
                </h5>
                <Button onClick={decrement}>-</Button>
                <input
                  type="number"
                  name="quantity"
                  value={props.quantity}
                  size="1"
                  readOnly
                />
                <Button onClick={increment}>+</Button>
              </Container>
            </Card.Text>
            <Button
              onClick={Removefromcart}
              style={{ width: "10rem", justifyContent: "right" }}
              variant="danger"
            >
              Remove from Cart
            </Button>
          </Card.Body>
          
        </div>
      </Card>
    </>
  );
};

export default Cartcard;
