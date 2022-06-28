import cors from 'cors';
import express, { ErrorRequestHandler } from 'express';
import { Golondrina } from '../golondrina';

export function crearServidor() {
    const golondrina = new Golondrina(45)
    return express().
    use(cors()).
    use(express.json()).
    get('/golondrina', (peticion, respuesta) => {
        respuesta.json({
            energia: golondrina.energiaDeGolondrinaEnJoules(),
            estado:  golondrina.estadoDeAnimo(),
        })
    })
}