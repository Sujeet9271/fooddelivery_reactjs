import React, { Fragment, useEffect, useState } from 'react'
import "./Home.css"
import axiosInstance from '../axios';
import { Container, Row, Col, Card, Image, Breadcrumb, Accordion } from 'react-bootstrap'

import Cards from './Categorycard';
import { useHistory } from 'react-router';
import baseURL from '../baseurl'






const Category = () => {
    const history = useHistory();

    const restaurant = history.location.state.restaurant
    
    useEffect(() => {
        getCategory()
    }, []);

    const [categories, setCategory] = useState([])
    const [loading, setLoading] = useState(false)

    const getCategory = async () => {
        try {
            const res = await axiosInstance.get('cities/' + history.location.state.city + '/restaurant/' + history.location.state.restaurant.id + '/')
            setCategory(res.data)
            setLoading(true)
        } catch (err) {
            alert(err.message);

        }
    }

    


    return (<Fragment>
        <Container>
            <br />
            <Card className='my-3 p-3 rounded mr-5' id={restaurant.id}>
                <div style={{ display: "flex" }} >
                    <Image style={{ width: "30%" }} src={`${baseURL}${restaurant.image}`} roundedCircle />
                    <Card.Body>
                        <Card.Title>
                            <div style={{ display: "flex", marginBottom: '2%' }}>
                                {restaurant.name}
                            </div>
                        </Card.Title>
                        <Card.Text style={{ marginTop: '5%', marginLeft: '10%', justifyContent:'center' }}>

                            <div style={{ display: "flex", marginBottom: '2%' }}>
                                <h5 className="card-text" style={{ marginLeft: '10px' }}>Address:</h5> {restaurant.address}
                            </div>
                            <div style={{ display: "flex", marginBottom: '2%' }}>
                                <h5 className="card-text" style={{ marginLeft: '10px' }}>PhoneNo:</h5> {restaurant.phnumber}
                            </div>
                            <div style={{ display: "flex", marginBottom: '2%' }}>
                                <h5 className="card-text" style={{ marginLeft: '10px' }}>Status:</h5> {restaurant.status}
                            </div>
                        </Card.Text>
                    </Card.Body>
                </div>
            </Card>
            <br />
            <h4>Menu:</h4>
            <br />
        </Container>
       
        <Accordion>
            {loading &&
                categories.map((category) => (
                    <Container>
                        <Row>

                            <Col>
                                <Cards props={category} key={category.id} />
                            </Col>

                        </Row>
                    </Container>

                ))
            }
        </Accordion>



    </Fragment>

    )


}

export default Category;