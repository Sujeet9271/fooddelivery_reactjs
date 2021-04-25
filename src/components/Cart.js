import React from 'react'
import axiosInstance from '../axios'
import { Fragment, useEffect, useState } from 'react'
import { Button, Col, Container, Row, Image, Card } from 'react-bootstrap'
import Cartcard from './Cartcard'
// import Subtotal from './Subtotal'
import CurrencyFormat from 'react-currency-format'
import { Link, useHistory } from 'react-router-dom'
import emptycart from '../media/emptycart.png'


const Cart = () => {


    const history = useHistory()

    useEffect(() => {
        getCart()
    }, []);

    const [cart, setCart] = useState([])
    const [loading, setLoading] = useState(false)
    const [total_item, setTotal] = useState([])

    const getCart = async () => {


        try {
            const res = await axiosInstance.get('/cart/')
            setCart(res.data)
            setLoading(true)

            const total = res.data.orders.length
            setTotal(total)
        } catch (err) {
            alert(err.message);

        }
    }
    if (total_item === 0) {
        return (
            <>
                <Container><Image src={emptycart} style={{ justifyContent: 'center', marginLeft: '30%' }}></Image></Container>
                <Container><Button onClick={() => (history.push('/City'))} style={{ justifyContent: 'center', marginLeft: '45%' }}>Order Food</Button></Container>
            </>
        )
    }
    else {
        return (
            <Container>
                <Row>
                    <Col >
                        {loading &&
                            cart.orders.map((item) => (

                                <Row key={item.id}>
                                    <Cartcard props={item} />
                                </Row>
                            ))
                        }
                    </Col>
                    <Col xs lg="2">
                        <Card className='mt-3'>
                            <CurrencyFormat
                                renderText={() => (
                                    <>
                                        <p className='ml-3 mt-4 mr-3 mb-2'>Subtotal ({total_item}):<strong>{cart.total_price}</strong></p>
                                    </>
                                )}
                                decimalScale={2}
                                value={cart.total_price}
                                displayType={'text'}
                                thousandSeparator={true}
                                prefix={"Rs."}

                            />
                            <Link to='/PlaceOrder'><Button className='ml-4 mb-5'>Check Out</Button></Link>
                        </Card>

                    </Col>

                </Row>

            </Container>
        )
    }
}

export default Cart;
