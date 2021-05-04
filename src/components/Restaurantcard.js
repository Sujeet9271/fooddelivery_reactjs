import { Card, Button, Image } from 'react-bootstrap'
import React from 'react'
import { useHistory } from 'react-router-dom';
import baseURL from '../baseurl'





const Cards = ({ restaurant, re }) => {

  const history = useHistory();
  const city = history.location.state.id


  const handleSubmit = () => {
    history.push({ pathname: '/Menu', state: { city: city, restaurant: restaurant } })
    re();
  }



  return (
    <>
      <Card className='my-3 p-3 rounded mr-5' style={{ width: '20rem' }} >
        <div style={{ display: "flex" }} >
          <Image style={{ width: "30%" }} src={`${baseURL}${restaurant.image}`} roundedCircle />
          <Card.Body>
          <Card.Title>
          <div style={{ display: "flex", marginBottom: '2%'}}>
                {restaurant.name}
              </div>
          </Card.Title>
            <Card.Text style={{ marginTop: '10%', marginLeft:'10%' }}>
              
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

export default Cards