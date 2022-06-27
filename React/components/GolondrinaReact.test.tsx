/**
 * @jest-environment jsdom
 */
import React from "react"
import { Contenedor } from "./Contenedor"
import {render, screen, fireEvent, getByRole} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { getByDisplayValue} from '@testing-library/dom'

test('barra progress con 45 joules como text content', ()=> {
    render(<Contenedor />);
   
    presionarCrearGolondrina()

expect(barraProgress()).toBeInTheDocument();
expect(barraProgress()).toHaveTextContent('45 Joules')

});

test('que la barra aumente si la golondrina come', ()=> {
    render(<Contenedor />);
    presionarCrearGolondrina()
    
    selectDeComida('mondongo') 
    cantidadComidaSeleccionada(1)

    apretarBotonAlimentar()

expect(barraProgress()).toHaveTextContent('145 Joules')

});

test('que la barra de energía disminuya si la golondrina vuela', ()=> {
    render(<Contenedor />);
    presionarCrearGolondrina()
    
    selectDeComida('alpiste') 
    cantidadComidaSeleccionada(200)

    apretarBotonAlimentar()

expect(barraProgress()).toHaveTextContent('845 Joules');
expect(screen.getByText(/energía en joules/i)).toHaveTextContent('845 energía en Joules');
});





function selectDeComida(tipoDeComida: string) {
    fireEvent.change(screen.getByDisplayValue(/elegir comida/i), { target: { value: tipoDeComida } })
}

function apretarBotonAlimentar() {
    fireEvent.click(screen.getByText(/alimentar/i))
}

function cantidadComidaSeleccionada(cantidadSeleccionadaComida: number) {
    fireEvent.input(screen.getByPlaceholderText(/cantidad de comida/i), { target: { value: cantidadSeleccionadaComida } })
}

function barraProgress() {
    return screen.getByRole(/progressbar/i)
}

function presionarCrearGolondrina() {
    fireEvent.click(screen.getByRole('button', { name: /crear golondrina/i }))
}
