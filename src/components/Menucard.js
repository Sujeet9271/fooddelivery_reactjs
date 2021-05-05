import { Card, Button, Image, ButtonGroup } from "react-bootstrap";
import React, { useState } from "react";
import axiosInstance from "../axios";
import baseURL from "../baseurl";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const Menu = ({ props, cart }) => {
  const [added, setadd] = useState(false);

  const handleSubmit = () => {
    axiosInstance
      .post("cities/4/restaurant/4/", [
        {
          id: props.id,
          quantity: 1,
        },
      ])
      .then((res) => {
        setadd(true);
        console.log(res.data);
        cart();
      });
  };

  return (
    <>
      <Card className="my-3 p-3 rounded h-60">
        <div style={{ display: "flex" }}>
          <Image
            style={{ width: "10%", height: "10%" }}
            src={`${baseURL}${props.image}`}
            thumbnail
          />
          <Card.Body>
            <Card.Title>
              <div style={{ display: "flex", marginBottom: "2%" }}>
                {props.itemname}
              </div>
            </Card.Title>
            <Card.Text>
              <div style={{ display: "flex", marginBottom: "2%" }}>
                <h5 className="card-text" style={{ marginLeft: "10px" }}>
                  Price:
                </h5>{" "}
                <h6 className="mt-1 lm-1">Rs.{props.price}</h6>
              </div>
              { (props.description==='') ? null : <div style={{ display: "flex", marginBottom: "2%" }}>
                <h5 className="card-text" style={{ marginLeft: "10px" }}>
                  Description:
                </h5>
                <h6 className="mt-1 lm-1">
                  <i>{props.description}</i>
                </h6>
              </div> }
              
            </Card.Text>
            {added ? (
            <h6 style={{ float:'right'}}>Added to cart</h6>
          ) : (
            <Button onClick={handleSubmit} style={{float:'right' }} variant='light'>
              <span>
                <AddShoppingCartIcon
                  style={{ marginTop: "10%" }}
                  fontSize="large"
                />
              </span>
            </Button>
          )}
          </Card.Body>

          
        </div>
      </Card>
    </>
  );
};

export default Menu;
