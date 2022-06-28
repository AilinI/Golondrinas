import React,{useState} from 'react';
import { Golondrina } from '../../golondrina';
import { Alert, Button, Card, ProgressBar } from 'react-bootstrap';
import { AlertaQueSeEsconde } from './AlertaGolondrina'
export interface HeaderProps{
  energia:number
}

export const Header = function ({energia}:HeaderProps) {
  const [show, setShow] = useState(false);
  
  const imagenes = ()=>{
    const nacer = '../pajarito-lindo-nace.4e2607b8.png';
   if(energia === 45){
    return <Imagen image={nacer} />
  }else if(energia < 50){
      return <Imagen image={'../pajaro-triste.png'} />
    }else if(energia < 500){
      return <Imagen image={'../neutral.png'} />
    }else{
      return <Imagen image={'../pajaro-azul-nace.png'} />
    }
  }

  const Imagen = ({image})=>{
    return(
      <>
        <div className='imagen-golondrina'>
          <img src={image} className='text-center' />
        </div>
      </>
    )
  }

  function AlertDismissibleExample() {
    
    if (show) {
      
      return (
        <>
        {imagenes()}

        <AlertaQueSeEsconde />
        <Card style={{ width: '18rem', borderRadius:20, margin:'auto', marginTop: 20, marginBottom: 20 }} className='vidrio' border= {colores()}>
          <Card.Title className='text-center'>Vitales</Card.Title>
          <div style={{ marginLeft: '2rem', fontWeight: 'bolder', margin:8 }}>
            Estado de ánimo: {estadoGolondrina()}
          </div>
          <div style={{ marginLeft: '2rem', fontWeight: 'bolder', margin:8 }} >
            {energia} energía en Joules
          </div>
        </Card>
        <ProgressBar animated now={energia} variant={colores()} label={`${energia} Joules`} max={1000} style={{height:40}}/>
        </>
      );
    }
    return(
      <>
        <Imagen image={'../pixlr-bg-result.480c4ed6.png'}/>
        <Button className='text-center' onClick={() => setShow(true)}  variant="info" style={{margin:'auto'}}>Crear Golondrina</Button>
      </>
    ) 
  }
  
  return (
    <>
      <h1>Golondrinas</h1>
      <AlertDismissibleExample />
    </>
  );

  function colores() {
    if(energia < 50){
      return 'danger'
    }else if(energia < 500)
    return 'warning'
    else{
      return 'success'
    }
  }
  
  function estadoGolondrina() {
    if(energia < 50){
      return 'Triste'
    }else if(energia < 500)
    return 'Indiferente'
    else{
      return 'Feliz'
    }
  }

}
