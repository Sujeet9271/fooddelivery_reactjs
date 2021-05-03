import React from 'react'
import "./Home.css"

import { Image } from 'react-bootstrap';
import home from '../media/home1.jpg' 

const Home = () => {



  return (
    <div>
        <Image className="home__image"
          src={home}
        />
       
    </div>
  )
}

export default Home