import { Card, Button, Image } from 'react-bootstrap'
import React, { useState } from 'react'
import axiosInstance from '../axios'




const MyOrdercard = ({ props }) => {
    console.log('date:', props.created[0, 9])
    console.log('time:', props.created[11, 15])

    const ReOrder = (e) => {
        console.log('Order again')
    }



    return (
        <>
            <Card className='my-3 p-3 rounded'>
                <div style={{ display: 'flex' }}>
                    <Image style={{ width: '15%', height:'15%' }} varinat='top' src={`http://127.0.0.1:8000${props.image}`} />
                    <Card.Body>
                        <Card.Title>
                            {props.itemname}({props.restaurant_name})
            </Card.Title>
                        <Card.Text>
                            <div style={{ display: 'flex' }}>
                                <h5 className="card-title">Price: Rs.</h5> <h6 className='mt-1'>{props.price}</h6>

                            </div>
                            <div style={{ display: 'flex' }}>
                                <h5 className="card-title">Quantity: </h5> <h6 className=" mt-1 ml-1">{props.quantity}</h6>

                            </div>
                            <div style={{ display: 'flex' }}>
                                <h5 className="card-title">Ordered On: </h5> <h6 className=' mt-1 ml-1'>{props.created.slice(0,10)}</h6>

                            </div>
                            <div style={{ display: 'flex' }}>
                                <h5 className="card-title">Status: </h5><h6 className='ml-1 mt-1'>{props.status}</h6> 

                            </div>

                            <div >

                            </div>


                        </Card.Text>
                        <Button onClick={ReOrder} style={{float:'right' ,width:'20%'}}>ReOrder</Button>

                    </Card.Body>
                </div>




            </Card>

        </>
    )
}

export default MyOrdercard;