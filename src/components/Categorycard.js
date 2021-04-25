import { Card, Accordion } from 'react-bootstrap'
import React from 'react'

import Subcategory from './Subcategory';




const Cards = ({ props }) => {

  return (

    <Card className='my-3 p-3 rounded h-90' style={{border:'none'}}>
      <Accordion.Toggle as={Card.Header} eventKey={props.id}>
        <h6 className="card-text">{props.category}</h6>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={props.id}>

        <Card.Body>

          <Accordion defaultActiveKey="0">
            {props.sub_category.map((subcategory) => (
              <Subcategory props={subcategory} />
            ))

            }
          </Accordion>

        </Card.Body>
      </Accordion.Collapse>
    </Card>
  )
}

export default Cards

