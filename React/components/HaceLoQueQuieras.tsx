import React from 'react';
import { Card, Button, Form } from 'react-bootstrap';

interface DoItProps{
  doItNow:Function
}

export const HaceLoQueQuieras = ({doItNow}:DoItProps) => {

  const doItSomething = ()=>{
    doItNow()
  }

  return (
    <>
      <Card border="info"  bg='light' style={{ width: '18rem', borderRadius:20, margin:15, height:220 }}>
        <Card.Body>
          <Card.Title className='text-center'>Hace lo que quieras!</Card.Title>
          <Button variant="outline-success" type='submit' onClick={doItSomething} style={{marginLeft:45, marginTop:110}} size="lg">Do Something!</Button>
        </Card.Body>
      </Card>
    </>
  )
}
