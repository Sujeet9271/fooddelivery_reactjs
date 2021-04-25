import { Card, Button, Image } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import axiosInstance from '../axios'
import baseURL from '../baseurl'





const Cartcard = ({ props }) => {

    const [num, setnum] = useState(props.quantity)
    console.log(props)
   

    const Removefromcart = (e) => {
        axiosInstance.get('/cart/' + props.id + '/').then((res) => {
            window.location.reload()
            
                    })
    }

    const decrement = (e) => {
        if (props.quantity <= 1) {
            setnum(1)
            alert('Mininum quantity reached ')
        }
        else {
            setnum(num - 1)
            props.quantity--
            axiosInstance.patch('/cart/', [{
                id: props.id,
                quantity: props.quantity
            }]).then((res) => {
                
                window.location.reload()
            })
        }



    }
    const increment = (e) => {
        setnum(num + 1)
        props.quantity++
        axiosInstance.patch('/cart/', [{
            id: props.id,
            quantity: props.quantity
        }]).then((res) => {
            window.location.reload()
        })

    }

    return (
        <>
            <Card className='my-3 p-3 rounded'>
                <div style={{ display: 'flex' }}>
                    <Image style={{ width: '30%' }} src={`${baseURL}${props.image}`} thumbnail />
                    <Card.Body >
                        <Card.Title>
                            <div style={{ display: "flex", marginBottom: '2%' }}>
                                {props.itemname}({props.restaurant_name})
                            </div>
                        </Card.Title>
                        <Card.Text>
                        <h5 className="card-text" style={{ marginLeft: '10px' }}>{props.category}</h5>
                            <div style={{ display: "flex", marginBottom: '2%' }}>
                                <h5 className="card-text" style={{ marginLeft: '10px' }}>Price:</h5> {props.price}
                                <h5 className="card-text" style={{ marginLeft: '10px' }}>Quantity:</h5>
                                    <div style={{display:'flex'}}>
                                        <Button onClick={decrement}>-</Button>
                                        <input type="text" name="quantity" value={num} min="1" size="1" id="quantity" />
                                        <Button onClick={increment}>+</Button>
                                    </div>
                                </div>
                            
                        </Card.Text>
                        <Button onClick={Removefromcart} style={{ width:'100%', justifyContent:'bottom' }}
                    variant='primary'>Remove from Cart</Button>

                    </Card.Body>

                </div>



            </Card>

        </>
    )
}

export default Cartcard;