import React,{useState} from 'react';
import { Card, Button, Form } from 'react-bootstrap';

interface VolarProps{
  volando:Function
}

export const Volar = ({volando}:VolarProps) => {
  const [kilometros, setKilometros] = useState<number>(0);  

  const vuelo= ()=>{
    volando(kilometros)
  }

  const campoKilometros = (e) =>{
    return setKilometros(parseInt(e.target.value));
  }

  return (
    <>
      <Card border="info" bg='light' style={{ width: '18rem', borderRadius:20, margin:15, height:220 }}>
        <Card.Body>
          <Card.Title className='text-center'>Vuelo de Golondrina</Card.Title>
          <Form.Control type="number" placeholder="Cantidad de Km" aria-label="Large" style={{marginBottom:10}} onChange={campoKilometros} />
          <Button variant="outline-success" type='submit' onClick={vuelo} style={{marginLeft:80, marginTop:60}} size="lg">Volar</Button>
        </Card.Body>
      </Card>
    </>
  )
}
