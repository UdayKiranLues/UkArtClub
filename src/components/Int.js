import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Button, Card } from 'react-bootstrap'

function Int ()  {
  const [record, setRecord] = useState([])
  useEffect(() => {
    fetch('https://dummyjson.com/products/1')
      .then(res => res.json())
      .then (data => setRecord(data))
      .catch (err => console.log(err))
      .then(json => console.log(json))
  }, [])
  return (
    <div>
        {record.map((datali) =>{
          return(
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        )})}
    </div>
  )
}

export default Int