import { Card, Button, Image } from 'react-bootstrap'
import React, { useState } from 'react'
import axiosInstance from '../axios'
import baseURL from '../baseurl'

// import { useShoppingCart } from "use-shopping-cart"




const Menu = ({ props }) => {

    //   const  {formattedTotalPrice, cartCount }  = useShoppingCart() 
    
    const [added, setadd] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosInstance.post('cities/4/restaurant/4/', [{
            id: props.id,
            quantity: 1
        }]).then((res) => {
            setadd(true)
            console.log(res.data)




        })
    }

    return (
        <>
            <Card className='my-3 p-3 rounded h-60'>
                <div style={{ display: 'flex' }}>
                    <Image style={{ width: '10%', height: '10%' }} src={`${baseURL}${props.image}`} thumbnail />
                    <Card.Body >
                        <Card.Title>
                            <div style={{ display: "flex", marginBottom: '2%' }}>
                                {props.itemname}
                            </div>
                        </Card.Title>
                        <Card.Text>
                            <div style={{ display: "flex", marginBottom: '2%' }}>
                                <h5 className="card-text" style={{ marginLeft: '10px' }}>Price:</h5> <h6 className="mt-1 lm-1" >Rs.{props.price}</h6>
                            </div>
                            <div style={{ display: "flex", marginBottom: '2%' }}>
                                <h5 className="card-text" style={{ marginLeft: '10px' }}>Description:</h5><h6 className="mt-1 lm-1" ><i>{props.description}</i></h6> 
                            </div>
                        </Card.Text>
                    </Card.Body>

                    {added ?
                    
                        <Button style={{ width: '20%', height: '5%', marginTop: '10%' }} variant="success"> Added To cart</Button>
                         :
                        <Button
                            onClick={handleSubmit}
                            style={{ width: '20%', height: '5%', marginTop: '10%' }}
                            variant='primary'
                        >
                            Add to Cart
                        </Button>
                    }



                </div>
            </Card>

        </>
    )
}

export default Menu;
