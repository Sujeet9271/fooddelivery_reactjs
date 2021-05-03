import React, { Fragment, useEffect, useState } from 'react'
import { Button, Container, Form, Table, Image } from 'react-bootstrap'
import { useHistory } from 'react-router';
import axiosInstance from '../axios'
import baseURL from '../baseurl'


const Placeorder = () => {
    useEffect(() => {
        getCart()
    }, []);

    const history = useHistory()
    const [cart, setCart] = useState([])
    const [address, setAddress] = useState({})

    const [loading, setLoading] = useState(false)
    const [total, setTotal] = useState(0)

    const getCart = async () => {


        try {
            const res = await axiosInstance.get('/cart/place_order/')
            console.log(res.data)
            setCart(res.data.cart)
            setAddress(res.data.address)
            setLoading(true)
            var totalprice = 0
            var p = []
            for (var i = 0;i<res.data.cart.length;i++){
                totalprice =totalprice +  res.data.cart[i].price
              
            }
            setTotal(totalprice)
        } catch (err) {
            alert(err.message);

        }
    }

    const initialData = Object.freeze({       
        address: '',
        contact_number: ''

    })

    const [Deliver_to, updateData] = useState(initialData);


    const handleSubmit = (e) => {
        console.log(Deliver_to)
        axiosInstance.post('/cart/place_order/',Deliver_to).then((res) => {
            alert(res.data)
            history.push('/MyOrders')
        })
    }
    const handleChange = (e) => {
        updateData({
            ...Deliver_to,
            [e.target.name]: e.target.value.trim(),

        });
    }
    

    return (<Fragment>
        <Container >
<h3>Order Summary</h3>
        <br/>

            <Table striped hover bordered>
                <th>Restaurant</th>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price(Rs.)</th>

                <tbody>
                    {loading && cart.map((item) => (
                        <>
                            <tr id={item.id}>
                            {console.log(item)}
                                <td>{item.restaurant_name}</td>
                                <td><Image style={{ width: "10%" }} src={`${baseURL}${item.image}` } />{item.itemname}</td>
                                <td>{item.quantity} X {item.price/item.quantity} </td>
                                <td>{item.price}</td>
                            </tr>

                        </>
                    ))
                    }
                </tbody>
                <tfoot>
                    <th colSpan={3}>Total</th><td>Rs.{total}</td>
                </tfoot>

            </Table>
        </Container>

        <Container>
        <h3>Delivery To:</h3>
            <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" name="address" placeholder={address.address} onChange={handleChange} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Contact No.</Form.Label>
                    <Form.Control type="text" name="contact_number" placeholder={address.contact_number} onChange={handleChange} />
                </Form.Group>

                <Button onClick={handleSubmit}>Place Order</Button>
            </Form>
        </Container>


    </Fragment>

    )
}

export default Placeorder;
