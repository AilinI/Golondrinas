import React, { useState } from 'react';
import {Header} from './Header';
import {Comidas} from './Comidas';
import {Volar} from './Volar';
import {HaceLoQueQuieras} from './HaceLoQueQuieras';
import { Container, Row, Col } from 'react-bootstrap';
import { Golondrina } from '../../golondrina';


export const Contenedor = () => {
  const[golondrina, setGolondrina] = useState(new Golondrina(45));
  const[energia, setEnergia] = useState(golondrina.energiaDeGolondrinaEnJoules())

  function comer(cantidad, comida){
    golondrina.comer(cantidad, comida)
    setEnergia(golondrina.energiaDeGolondrinaEnJoules())
  }

  function volando(km: any){
    golondrina.volarKm(km)
    setEnergia(golondrina.energiaDeGolondrinaEnJoules())
  }
  

  function doItNow(){
    golondrina.haceLoQueQuieras()
    setEnergia(golondrina.energiaDeGolondrinaEnJoules())
  }

  return (
    <>
        <Container>
          <Header energia={energia} />
          <Row className='justify-content-between'>
            <Comidas comer={comer} />
            <Volar volando={volando}/>
            <HaceLoQueQuieras doItNow={doItNow}/>
          </Row>
        </Container>
    </>
  )
}
