import cors from 'cors';
import express, { ErrorRequestHandler } from 'express';
import { Golondrina, mapaDeComidas } from '../golondrina';

export function crearServidor() {
    const golondrina = new Golondrina(45)
    return express().
    use(cors()).
    use(express.json()).
    get("/golondrina", (peticion, respuesta) => {
        respuesta.json({
            energia: golondrina.energiaDeGolondrinaEnJoules(),
            estado:  golondrina.estadoDeAnimo(),
        })
    }).
    post("/golondrina/comer", (peticion, respuesta) => {
        golondrina.comer(
            peticion.body.cantidadComidaEnGramos, 
            mapaDeComidas.get(peticion.body.comidaDeGolondrina))
            respuesta.json(estadoDeGolondrina(golondrina));
    }).
    post("/golondrina/volar", (peticion, respuesta) => {
        golondrina.volarKm(
            peticion.body.kmAVolar)
            respuesta.json(estadoDeGolondrina(golondrina))        
    }).
    post("/golondrina/haceLoQueQuieras", (peticion, respuesta) => {
        golondrina.haceLoQueQuieras()
            respuesta.json(estadoDeGolondrina(golondrina))        
    })
}

function estadoDeGolondrina(golondrina: Golondrina): any {
    return {
        energia: golondrina.energiaDeGolondrinaEnJoules(),
        estado: golondrina.estadoDeAnimo()
    };
}
