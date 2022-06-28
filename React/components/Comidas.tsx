import React, { useState } from 'react';
import { Golondrina, alcaucil, mondongo, alpiste } from '../../golondrina';
import { Card, Button, Form } from 'react-bootstrap';

interface ComidaProps{
  comer:Function
}

const comidasSeleccionadas = {
  alpiste,
  alcaucil,
  mondongo
}

export const Comidas = ({comer}:ComidaProps) => {
  const [gramos, setGramos] = useState<number>(0);
  const [tipoDeComidas, setTipoDeComidas] = useState<string>('alpiste');
  
  const comida = ()=>{
    comer(gramos, comidasSeleccionadas[tipoDeComidas]) 
  }

  const gramosDeComida = (e) =>{
    return setGramos(parseInt(e.target.value));
  }

  const tiposDeComidas = (e) => {
    return setTipoDeComidas(e.target.value);
  }

  return (
    <>
      <Card bg='light' border="info"  style={{ width: '18rem', borderRadius:20, margin:15 }}>
        <Card.Body>
          <Card.Title className='text-center'>Tipos de Comidas</Card.Title>
          <Form.Select size="lg" style={{marginBottom:10}} onChange={tiposDeComidas} >
            <option>Elegir Comida</option>
            <option value={'alpiste'}>Alpiste</option>
            <option value={'alcaucil'}>Alcaucil</option>
            <option value={'mondongo'}>Mondongo</option>
          </Form.Select>
          <Form.Control type="number" placeholder="Cantidad de comida" aria-label="Large" style={{marginBottom:10}} onChange={gramosDeComida} />
          <Button variant="outline-success"  type='submit' onClick={comida} style={{marginLeft:60, marginBottom:10}} size="lg">Alimentar</Button>
        </Card.Body>
      </Card>
    </>
  )
}
