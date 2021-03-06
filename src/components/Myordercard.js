import { Card, Button, Image, ProgressBar } from "react-bootstrap";
import React, { useState } from "react";
import axiosInstance from "../axios";
import baseURL from "../baseurl";
import { useHistory } from "react-router";

const MyOrdercard = ({ order }) => {
  const [added, setadd] = useState(false);
  const history = useHistory();
  const [st, setSt] = useState("");

  const s = Object.freeze({
    Pending: "Pending ",
    Received: "Received",
    In_the_Kitchen: "In the Kitchen",
    Out_for_Delivery: "Out For Delivery",
    Delivered: "Delivered",
  });

  const ReOrder = (e) => {
    e.preventDefault();
    console.log("reorder", order.id);
    // history.push('/Cart')
    // axiosInstance
    //   .post("/reorder/", {
    //     id: order.id,
    //   })
    //   .then((res) => {
    //     history.push("/Cart");
    //   });
  };

  return (
    <>
      <Card className="my-3 p-3 rounded">
        <div style={{ display: "flex" }}>
          <Image
            style={{ width: "15%", height: "15%" }}
            varinat="top"
            src={`${baseURL}${order.image}`}
          />
          <Card.Body>
            <Card.Title>
              {order.itemname}({order.restaurant_name})
            </Card.Title>
            <Card.Text>
            
              <div style={{ display: "flex" }}>
                <h5 className="card-title">Price: Rs.</h5>
                <h6 className="mt-1">{order.price}</h6>
              </div>
              <div style={{ display: "flex" }}>
                <h5 className="card-title">Quantity: </h5>
                <h6 className=" mt-1 ml-1">{order.quantity}</h6>
              </div>
              <div style={{ display: "flex" }}>
                <h5 className="card-title">Ordered On: </h5>
                <h6 className=" mt-1 ml-1">{order.created.slice(0, 10)}</h6>
              </div>
              <h5 className="card-title">
              Status:
               
                  {order.status === 1 ? (
                    <>
                    <span style={{fontSize:'15px', marginLeft:"5px"}}>{s.Pending}</span>
                    <ProgressBar
                      striped
                      variant="dark"
                      animated
                      now={10}
                      label="Pending"
                      key={1}
                      style={{marginTop:'5px'}}
                    />
                    </>
                  ) : order.status === 2 ? (
                    <>
                    <span style={{fontSize:'15px', marginLeft:"5px"}}>{s.Received}</span> 
                    <ProgressBar
                      variant="warning"
                      animated
                      now={25}
                      label="Received"
                      key={2}
                      style={{marginTop:'5px'}}
                    />
                    </>
                  ) : order.status === 3 ? (
                    <>
                    <span style={{fontSize:'15px', marginLeft:"5px"}}>{s.In_the_Kitchen}</span>
                    
                    <ProgressBar
                      variant="info"
                      animated
                      now={50}
                      label="In the Kitchen"
                      key={3}
                      style={{marginTop:'5px'}}

                    />
                    </>
                  ) : order.status === 4 ? (
                    <>
                    <span style={{fontSize:'15px', marginLeft:"5px"}}> {s.Out_for_Delivery}</span>
                   
                    <ProgressBar
                      variant="primary"
                      animated
                      now={75}
                      label="Out For Delivery"
                      key={4}
                      style={{marginTop:'5px'}}
                    />
                    </>
                  ) : (
                    <>
                    <span style={{fontSize:'15px', marginLeft:"5px"}}>
                    {s.Delivered}
                    </span>
                    
                    <ProgressBar
                      striped
                      variant="success"
                      animated
                      now={100}
                      label="Delivered"
                      key={5}
                      style={{marginTop:'5px'}}
                    />
                    </>
                  )}
              </h5>

              <div></div>
            </Card.Text>
            <Button onClick={ReOrder} style={{ float: "right"}}>
              ReOrder
            </Button>
          </Card.Body>
        </div>
      </Card>
    </>
  );
};

export default MyOrdercard;
