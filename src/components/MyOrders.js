import React, { useState, useEffect, Fragment } from "react";
import { Col, Container, Row, Card, Spinner } from "react-bootstrap";
import axiosInstance from "../axios";
import MyOrdercard from "./Myordercard";

const MyOrders = ({ getCart }) => {
  useEffect(() => {
    getMyOrders();
  }, []);

  const [order, setOrder] = useState([]);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState([]);
  const [total_item, setTotalItem] = useState([]);

  const getMyOrders = async () => {
          getCart();

    try {
      const res = await axiosInstance.get("/myorders/");
      console.log(res.data);
      setOrder(res.data);
      setLoading(true);
      setTotal(res.data.total_price);
      setTotalItem(res.data.total_item);
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <Fragment>
    
      <Container className='p-5'>
        <br />
        <h3 style={{ textAlign: "center" }}>Your Orders</h3>
        <br />
        <Card style={{border:'none'}}>
          <div style={{ display: "flex" }}>
            <h5>Total Orders:</h5>
            <h6 className="ml-1 mt-1">{total_item}</h6>
            <br />
          </div>
          <div style={{ display: "flex" }}>
            <h5>Total Expenditure on Food:</h5>
            <h6 className="mt-1"> Rs.{total}</h6>
            <br />
          </div>
        </Card>
      </Container>
      {loading ?
        order.orders.map((item) => (
          <Container>
            <Row>
              <Col>
                <MyOrdercard order={item} re={getMyOrders} key={item.id} />
              </Col>
            </Row>
          </Container>
        )):
        <Container
            style={{ position: "relative", justifyContent: "space-around" }}
          >
            <Spinner animation="grow" variant="primary" />
            <Spinner animation="grow" variant="secondary" />
            <Spinner animation="grow" variant="success" />
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="warning" />
            <Spinner animation="grow" variant="info" />
          </Container>}
    </Fragment>
  );
};

export default MyOrders;
