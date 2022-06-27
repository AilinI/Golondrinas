import React from 'react';
import ReactDOM from 'react-dom/client';
import { Contenedor } from './components/Contenedor';
import 'bootstrap/dist/css/bootstrap.min.css';



const contenedor = <Contenedor />

const root = ReactDOM.createRoot(document.body);
root.render(contenedor);