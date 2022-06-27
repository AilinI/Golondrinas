export class Golondrina {
    private _energia: any;
    private _energiaEnJoules: number;
    constructor(energia) {
        this._energia = energia;
        this._energiaEnJoules = 45;
    }
    comer(cantidadComidaEnGramos, comidaDeGolondrina) {
            this._energiaEnJoules += comidaDeGolondrina.energiaParaGramos(cantidadComidaEnGramos);
    }  
    volarKm(kilometrosVolados) {
        //Agregar una advertencia de que no puede volarKm sin energia
        if (this._energiaEnJoules < kilometrosVolados +10 ) {
                throw new Error('sin energia')
        }else{
            return this._energiaEnJoules -=  kilometrosVolados + 10 ;
        }
    }
    haceLoQueQuieras() {
        if(this._energiaEnJoules < 50) {
            this._energiaEnJoules += alpiste.energiaParaGramos(20)
        } 
        else if(this._energiaEnJoules >= 50 && this._energiaEnJoules <= 500){
            return this._energiaEnJoules
        }
        else if(this._energiaEnJoules > 500) {
            this.volarKm(5)
        }
    }
    energiaDeGolondrinaEnJoules() {
        const energia = this._energiaEnJoules
            return energia
    }
}
    export const alpiste = {
        energiaParaGramos(cantidadComidaEnGramos) {
            return cantidadComidaEnGramos * 4;
        }
    }
    export const alcaucil = {
        energiaParaGramos(cantidadComidaEnGramos) {
            return cantidadComidaEnGramos * 20;
        }
    }
    export const mondongo = {
        energiaParaGramos(cantidadComidaEnGramos) {
            return cantidadComidaEnGramos * 100;
        }
    }

