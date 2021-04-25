import React, {useEffect, useState } from 'react'
import "./Home.css"
import axiosInstance from '../axios';
import {Row, Container,CardDeck } from 'react-bootstrap'

import Cards from './Card';





const City = () => {
    useEffect(() => {
        getCity()
    }, []);

    const [cities, setCity] = useState([])
    const [loading, setLoading] = useState(false)

    const getCity = async () => {
        try {
            const res = await axiosInstance.get('/cities/')
            console.log(res.data)
            setCity(res.data)
            setLoading(true)
        } catch (err) {
            alert(err.message);

        }
    }

    return (<Container>
        <Row>
            {loading &&
                cities.map((city) => (

                    <CardDeck>


                        <Cards city={city} key={city.id} />


                    </CardDeck>


                ))
            }
        </Row>
    </Container>
    )


}

export default City;