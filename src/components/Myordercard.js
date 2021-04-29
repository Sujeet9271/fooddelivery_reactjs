import { Card, Button, Image, ProgressBar } from "react-bootstrap";
import React, { useState } from "react";
import axiosInstance from "../axios";
import baseURL from "../baseurl";

const MyOrdercard = ({ props }) => {
  const [st, setSt] = useState("");

  console.log("date:", props.created[(0, 9)]);
  console.log("time:", props.created[(11, 15)]);
  const s = Object.freeze({
    1: "Pending ",
    2: "Received",
    3: "In the Kitchen",
    4: "Out For Delivery",
    5: "Delivered",
  });

  const ReOrder = (e) => {
    console.log("Order again");
  };

  return (
    <>
      <Card className="my-3 p-3 rounded">
        <div style={{ display: "flex" }}>
          <Image
            style={{ width: "15%", height: "15%" }}
            varinat="top"
            src={`${baseURL}${props.image}`}
          />
          <Card.Body>
            <Card.Title>
              {props.itemname}({props.restaurant_name})
            </Card.Title>
            <Card.Text>
              <div style={{ display: "flex" }}>
                <h5 className="card-title">Price: Rs.</h5>
                <h6 className="mt-1">{props.price}</h6>
              </div>
              <div style={{ display: "flex" }}>
                <h5 className="card-title">Quantity: </h5>
                <h6 className=" mt-1 ml-1">{props.quantity}</h6>
              </div>
              <div style={{ display: "flex" }}>
                <h5 className="card-title">Ordered On: </h5>
                <h6 className=" mt-1 ml-1">{props.created.slice(0, 10)}</h6>
              </div>
              <h5 className="card-title">
                {/* Status:{st} */}
                <ProgressBar>
                  {props.status === 1 ? (
                    <ProgressBar
                      striped
                      variant="dark"
                      animated
                      now={10}
                      label="Pending"
                      key={1}
                    />
                  ) : props.status === 2 ? (
                    <ProgressBar
                      variant="warning"
                      animated
                      now={25}
                      label="Received"
                      key={2}
                    />
                  ) : props.status === 3 ? (
                    <ProgressBar
                      variant="info"
                      animated
                      now={50}
                      label="In the Kitchen"
                      key={2}
                    />
                  ) : props.status === 4 ? (
                    <ProgressBar
                      variant="primary"
                      animated
                      now={75}
                      label="Out For Delivery"
                      key={2}
                    />
                  ) : (
                    <ProgressBar
                      striped
                      variant="success"
                      animated
                      now={100}
                      label="Delivered"
                      key={5}
                    />
                  )}
                </ProgressBar>
              </h5>

              <div></div>
            </Card.Text>
            <Button onClick={ReOrder} style={{ float: "right", width: "20%" }}>
              ReOrder
            </Button>
          </Card.Body>
        </div>
      </Card>
    </>
  );
};

export default MyOrdercard;
