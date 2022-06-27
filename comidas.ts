class TipoDeComida {
    private _energiaEnJoulesPorGramo: number;

    constructor(energiaEnJoulesPorGramo: number) {
        this._energiaEnJoulesPorGramo = energiaEnJoulesPorGramo;
    }
    energiaEnJoulesAportadaPor(cantidadEnGramos: number) {
        return cantidadEnGramos * this._energiaEnJoulesPorGramo;
    }
}

export const alpiste = new TipoDeComida(4);
export const alcaucil = new TipoDeComida(20);
export const mondongo = new TipoDeComida(100);

export type { TipoDeComida };
