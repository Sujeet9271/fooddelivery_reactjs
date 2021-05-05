import { Card, Button, Image, Container } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import axiosInstance from "../axios";
import baseURL from "../baseurl";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import AddBoxIcon from "@material-ui/icons/AddBox";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";

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
                  Quantity:
                </h5>
                <Container style={{ display: "flex", marginBottom: "2%" }}>
                  <Button onClick={decrement} variant="light">
                    <IndeterminateCheckBoxIcon />
                  </Button>
                  {/* <input
                    type="number"
                    value={props.quantity}
                    size="1"
                    style={{ width: "3vw" }}
                    readOnly
                  /> */}
                  <Card style={{width:'30px',justifyContent:'space-evenly'}}>{props.quantity}</Card>
                  <Button onClick={increment} variant="light">
                    <AddBoxIcon />
                  </Button>
                </Container>
              </Container>
              <Container style={{ display: "flex", marginBottom: "2%" }}>
                <h5 className="card-text" style={{ marginLeft: "10px" }}>
                  Price:
                </h5>
                {props.price}
              </Container>
            </Card.Text>
            <Button
            onClick={Removefromcart}
            style={{ float: "right" }}
            variant="danger"
          >
            <RemoveShoppingCartIcon />
          </Button>
          </Card.Body>
          
        </div>
      </Card>
    </>
  );
};

export default Cartcard;
