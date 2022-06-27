import { alpiste, alcaucil, mondongo } from './comidas';
import { Golondrina } from './golondrina';

test('las golondrinas nacen con 45 joules de energía', () => {
    const unaGolondrinaRecienNacida = new Golondrina();

    expect(unaGolondrinaRecienNacida.energiaEnJoules()).toEqual(45);
});

test('cuando una golondrina come alpiste, aumenta su energía 4 joules por gramo que come', () => {
    const unaGolondrina = new Golondrina(0);

    unaGolondrina.comerGramosDeComida(2, alpiste);

    expect(unaGolondrina.energiaEnJoules()).toEqual(2 * 4);
});

test('cuando una golondrina come alcaucil, aumenta su energía 20 joules por gramo que come', () => {
    const unaGolondrina = new Golondrina(0);

    unaGolondrina.comerGramosDeComida(3, alcaucil);

    expect(unaGolondrina.energiaEnJoules()).toEqual(3 * 20);
});

test('cuando una golondrina come mondongo, aumenta su energía 100 joules por gramo que come', () => {
    const unaGolondrina = new Golondrina(0);

    unaGolondrina.comerGramosDeComida(3, mondongo);

    expect(unaGolondrina.energiaEnJoules()).toEqual(3 * 100);
});

test('cuando una golondrina vuela, gasta un joule por cada kilómetro volado, mas 10 joules fijos', () => {
    const unaGolondrina = new Golondrina(100);

    unaGolondrina.volarKilometros(5);

    expect(unaGolondrina.energiaEnJoules()).toEqual(100 - 5 - 10);
});

// Ejercicio: renombrar los tests que vienen a continuación, y considerar qué casos borde faltarían testear (e implementar).

test('[renombrar] test 01', () => {
    const unaGolondrinaDébil = new Golondrina(49);

    unaGolondrinaDébil.hacéLoQueQuieras();

    expect(unaGolondrinaDébil.energiaEnJoules()).
        toEqual(49 + alpiste.energiaEnJoulesAportadaPor(20));
});

test('[renombrar] test 02', () => {
    const unaGolondrinaIndiferente = new Golondrina(50);

    unaGolondrinaIndiferente.hacéLoQueQuieras();

    expect(unaGolondrinaIndiferente.energiaEnJoules()).toEqual(50);
});

test('[renombrar] test 03', () => {
    const unaGolondrinaFeliz = new Golondrina(501);

    unaGolondrinaFeliz.hacéLoQueQuieras();

    expect(unaGolondrinaFeliz.energiaEnJoules()).
        toEqual(501 - 5 - 10);
});

test('[renombrar] test 04', () => {
    const unaGolondrinaIndiferente = new Golondrina(500);

    unaGolondrinaIndiferente.hacéLoQueQuieras();

    expect(unaGolondrinaIndiferente.energiaEnJoules()).toEqual(500);
});

test('una golondrina no puede volar si no le alcanza la energía para hacerlo', () => {
    const unaGolondrina = new Golondrina(10);

    expect(() => unaGolondrina.volarKilometros(1)).
        toThrow("no tengo energía para volar");
    expect(unaGolondrina.energiaEnJoules()).toEqual(10);
});
