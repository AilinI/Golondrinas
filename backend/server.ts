import cors from 'cors';
import express, { ErrorRequestHandler } from 'express';
import { ErrorInfo } from 'react';
import { alcaucil, alpiste, Golondrina, mapaDeComidas, mondongo } from '../golondrina';

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
        const comidaElegida = mapaDeComidas.get(peticion.body.comidaDeGolondrina);
        validarComida(comidaElegida);
        golondrina.comer(
            peticion.body.cantidadComidaEnGramos, 
            comidaElegida)
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
    }). 
    use(((error: Error, peticion, respuesta, next) => {
        respuesta.status(400).json({error: error.message});
    } ) as ErrorRequestHandler)
}

function estadoDeGolondrina(golondrina: Golondrina): any {
    return {
        energia: golondrina.energiaDeGolondrinaEnJoules(),
        estado: golondrina.estadoDeAnimo()
    };
}
function validarComida(comida) {
    if(comida != (alpiste||mondongo||alcaucil)){
        throw new Error("Comida inválida")
    }
}
