import { alpiste, alcaucil, mondongo, Golondrina } from "./golondrinaMagia.js";

// Nace la golondrina
// llamando de HTML
const triste = document.getElementById('triste');
const barra = document.getElementById('barraTriste');
const form = document.getElementById("comidasForm");
const fondo = document.getElementById('fondo');
const fondoImg = document.getElementById('img-fondo');

form.addEventListener("submit", (event) => {
    event.preventDefault();
});

//funcion que solo muestre la barra de 45% que es cuando nace

const golondrina = new Golondrina();

//probando alert
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

const alert = (message, type) => {
  triste.classList.remove('hide');
  triste.classList.add('show');
  barra.classList.add('ancho45');
  barra.textContent = `45 Joules`;
  fondoImg.classList.add('transicion');
  fondo.src="./assets/pajarito-lindo-nace.png"
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
    
    alertTrigger.addEventListener('click', () => {
    alert('Golondrina creada con éxito!', 'success')
    alertTrigger.classList.add('disabled')
    // const golondrina = new Golondrina();
  })
}

// COMIDAS

const elegirComida = document.getElementById('select-comida');
const cantidadComidaElegida = document.getElementById('catidad-de-gramos');
const botonComer = document.getElementById('boton-comer');
botonComer.onchange = () => {
    console.log(elegirComida.value);
};
export function eligiendoComida(){
    cantidadComidaElegida.onchange = () => {
        barra.classList.remove('bg-danger');
        barra.classList.remove('bg-warning');
        if (elegirComida.value == "alpiste") {
            golondrina.comer(cantidadComidaElegida.value, alpiste)
            // console.log(golondrina.energiaDeGolondrinaEnJoules())
            const energiaAlpiste = golondrina.energiaDeGolondrinaEnJoules()
            manejarBarra(energiaAlpiste)
        } else if (elegirComida.value == "alcaucil") {
            golondrina.comer(cantidadComidaElegida.value, alcaucil)
            const energiaAlcaucil = golondrina.energiaDeGolondrinaEnJoules()
            console.log(energiaAlcaucil);
            manejarBarra(energiaAlcaucil)
    
        } else if (elegirComida.value == "mondongo") {
            golondrina.comer(cantidadComidaElegida.value, mondongo)
            console.log(golondrina.energiaDeGolondrinaEnJoules())
            const energiaMondongo = golondrina.energiaDeGolondrinaEnJoules()
            manejarBarra(energiaMondongo);
        }
    }
}
eligiendoComida();

const qKilometros = document.getElementById('q-km');
const mandarAVolar = document.getElementById('mandar-a-volar');
mandarAVolar.onclick = () => {
    qKilometros.onchange = () => {
        const kilometrosAVolar = parseInt(qKilometros.value);
        // console.log(kilometrosAVolar)
    }
    golondrina.volarKm(parseInt(qKilometros.value));
    // console.log(golondrina.energiaDeGolondrinaEnJoules());
    manejarBarra(golondrina.energiaDeGolondrinaEnJoules());
}
const moria = document.getElementById('moria');
moria.onclick = () => {
    barra.classList.remove('bg-danger');
    barra.classList.remove('bg-warning');
    golondrina.haceLoQueQuieras();
    manejarBarra(golondrina.energiaDeGolondrinaEnJoules());
}
function manejarBarra(energiaEnJoules) {
    barra.style.width = golondrina.energiaDeGolondrinaEnJoules() + "px";
    barra.textContent = golondrina.energiaDeGolondrinaEnJoules() + " joules";
    if (energiaEnJoules > 49 && energiaEnJoules < 500) {
        barra.classList.add('bg-warning');
        fondo.src="./assets/neutral.png"
    } else if (energiaEnJoules > 499) {
        barra.classList.add('bg-success');
        fondo.src="./assets/pajaro-azul-nace.png"
    } else if (energiaEnJoules < 50) {
        barra.classList.add('bg-danger');
        fondo.src="./assets/pajaro-triste.png"
    }
}