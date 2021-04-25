
import React, { useState, useEffect, Fragment } from 'react'
import { Col, Container, Row, Card } from 'react-bootstrap';
import axiosInstance from '../axios';
import MyOrdercard from './Myordercard';





const MyOrders = () => {


    useEffect(() => {
        getMyOrders()
    }, []);

    const [order, setOrder] = useState([])
    const [loading, setLoading] = useState(false)
    const [total, setTotal] = useState([])
    const [total_item, setTotalItem] = useState([])


    const getMyOrders = async () => {


        try {
            const res = await axiosInstance.get('/myorders/')
            console.log(res.data)
            setOrder(res.data)
            setLoading(true)
            setTotal(res.data.total_price)
            setTotalItem(res.data.total_item)
        } catch (err) {
            alert(err.message);

        }
    }
    return (

        <Fragment>
            
            <Container>
            <br />
            <h3 style={{textAlign:'center'}}>
                Your Orders
            </h3><br />
                <Card >
                    <div style={{ display: 'flex' }}>
                        <h5>Total Orders:</h5><h6 className='ml-1 mt-1'>{total_item}</h6><br />
                    </div>
                    <div style={{ display: 'flex' }}>
                        <h5 style={{ textAlign:'center' }}>Total Expenditure on Food: Rs.</h5><h6 className='mt-1'>{total}</h6><br />
                    </div>

                </Card>
            </Container>

            { loading &&
                order.orders.map((item) => (
                    <Container>
                        <Row>

                            <Col key={item.id}>
                                <MyOrdercard props={item} />

                            </Col>


                        </Row>
                    </Container>

                ))
            }

        </Fragment>
    )
}

export default MyOrders
