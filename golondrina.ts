import { alpiste } from './comidas';
import { TipoDeComida } from './comidas';

interface EstadoDeAnimo {
    cumplirDeseoDe(golondrina: Golondrina): void
    aplicaA(golondrina: Golondrina): boolean
}

const estadoDeAnimoDebil: EstadoDeAnimo = {
    cumplirDeseoDe(golondrina) {
        golondrina.comerGramosDeComida(20, alpiste);
    },
    aplicaA(golondrina) {
        return golondrina.estáDébil();
    }
};

const estadoDeAnimoFeliz: EstadoDeAnimo = {
    cumplirDeseoDe(golondrina) {
        golondrina.volarKilometros(5);
    },
    aplicaA(golondrina) {
        return golondrina.estáFeliz();
    }
};
const estadoDeAnimoIndiferente: EstadoDeAnimo = {
    cumplirDeseoDe(golondrina) {
        // No hace nada
    },
    aplicaA(golondrina) {
        return !golondrina.estáFeliz() && !golondrina.estáDébil();
    }
};
const estadosDeAnimoPosibles =
    [estadoDeAnimoFeliz, estadoDeAnimoDebil, estadoDeAnimoIndiferente];

export class Golondrina {
    private _energiaEnJoules: number;

    constructor(energiaEnJoules = 45) {
        this._energiaEnJoules = energiaEnJoules;
    }

    energiaEnJoules() {
        return this._energiaEnJoules;
    }

    comerGramosDeComida(cantidadEnGramos: number, tipoDeComida: TipoDeComida) {
        this._energiaEnJoules += tipoDeComida.energiaEnJoulesAportadaPor(cantidadEnGramos);
    }

    volarKilometros(distanciaEnKm) {
        const energiaNecesaria = distanciaEnKm * 1 + 10;
        if (energiaNecesaria > this._energiaEnJoules)
            throw new Error("no tengo energía para volar");

        this._energiaEnJoules -= energiaNecesaria;
    }

    hacéLoQueQuieras() {
        this.estadoDeAnimo().cumplirDeseoDe(this);
    }

    estadoDeAnimo() {
        return estadosDeAnimoPosibles.
            find(estadoDeAnimo => estadoDeAnimo.aplicaA(this));
    }

    estáFeliz() {
        return this._energiaEnJoules > 500;
    }

    estáDébil() {
        return this._energiaEnJoules < 50;
    }
}
