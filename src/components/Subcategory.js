import { Card, Button, Accordion } from 'react-bootstrap'
import React from 'react'
import Menu from './Menucard'




const Subcategory = ({ props }) => {


  return (

    <Card className='my-3 p-3 rounded h-90' style={{border:'none'}}>
      <Accordion.Toggle as={Card.Header} eventKey={props.id}>
        <h6 className="card-text"> {props.sub_category}</h6>

      </Accordion.Toggle>
      <Accordion.Collapse eventKey={props.id}>
        <Card.Body>
          {props.menu.map((menu) => (
            <Menu props={menu} />
          ))

          }
        </Card.Body>
      </Accordion.Collapse>



    </Card>


  )
}

export default Subcategory;

