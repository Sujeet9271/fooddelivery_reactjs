import { Card, Button, Image } from 'react-bootstrap'
import React from 'react'
import { useHistory } from 'react-router-dom';
import baseURL from '../baseurl'






const Cards = ({ city }) => {
    const history = useHistory();


    const handleSubmit = (e) => {
        e.preventDefault();
        history.push({ pathname: '/Restaurant', state: { id: city.id } });
    }

    return (
        <>
            <Card className='my-3 p-3 rounded mr-5' key={city.id}>
                <div style={{ display: "flex" }} >
                    <Image style={{ width: "30%" }} src={`${baseURL}${city.image}`} roundedCircle />
                    <Card.Body>
                        <Card.Title>
                            <div style={{ display: "flex", marginBottom: '2%' }}>
                                {city.name}
                            </div>
                        </Card.Title>
                        <Card.Text style={{ marginTop: '10%', marginLeft: '10%' }}>

                            <div style={{ display: "flex", marginBottom: '2%' }}>
                                <h5 className="card-text" style={{ marginLeft: '10px' }}>Pincode:</h5> {city.pincode}
                            </div>

                        </Card.Text>
                    </Card.Body>

                </div>
                <br></br>
                <Button
                    onClick={handleSubmit}
                    style={{ borderRadius: '20px' }}
                    className='w-100'
                    variant='primary'
                >
                    SELECT
        </Button>

            </Card>

        </>
    )
}

export default Cards;

