import { error } from "console";
import { Golondrina, alpiste, alcaucil, mondongo } from "./golondrina"

test("Nacimiento de golondrina con 45 joules de energia", () => {
    const golondrinaCreada = new Golondrina(45);
    expect(golondrinaCreada.energiaDeGolondrinaEnJoules()).toEqual(45)
});
test("Golondrina bebé, come un gramo de alpiste por primera vez", () => {
    const golondrinaCreada = new Golondrina(45);
    golondrinaCreada.comer(1, alpiste)

    expect(golondrinaCreada.energiaDeGolondrinaEnJoules()).toEqual(49)
});
test("Golondrina bebé, come  dos gramos de alcaucil por primera vez", () => {
    const golondrinaCreada = new Golondrina(45);
    golondrinaCreada.comer(2, alcaucil)
    expect(golondrinaCreada.energiaDeGolondrinaEnJoules()).toEqual(85)
});
test("Golondrina bebé vuela 1 kilometro", () => {
    const golondrinaCreada = new Golondrina(45);
    golondrinaCreada.volarKm(1)
    expect(golondrinaCreada.energiaDeGolondrinaEnJoules()).toEqual(34)
});
test("Golondrina bebé vuela 5 kilometros", () => {
    const golondrinaCreada = new Golondrina(45);
    golondrinaCreada.volarKm(5)
    expect(golondrinaCreada.energiaDeGolondrinaEnJoules()).toEqual(30)
});
test('Golondrina bebé se alimenta 2 gramos mondongo y vuela 10 kilometros', () => {
    const golondrinaCreada = new Golondrina(45);
    golondrinaCreada.comer(2, mondongo)
    golondrinaCreada.volarKm(10)

    expect(golondrinaCreada.energiaDeGolondrinaEnJoules()).toEqual(225);
});
test('Golondrina bebé se alimenta 3 gramos de alcaucil, vuela 20 kilometros, y se vuelve a alimentar 5 gramos de alpiste', () => {
    const golondrinaCreada = new Golondrina(45);
    golondrinaCreada.comer(3, alcaucil)
    golondrinaCreada.volarKm(20)
    golondrinaCreada.comer(5, alpiste)

    expect(golondrinaCreada.energiaDeGolondrinaEnJoules()).toEqual(95);
});
test('Golondrina bebé vuela 35 km sin comer ', () => {
    const golondrinaCreada = new Golondrina(45);
    golondrinaCreada.volarKm(35)

    expect(golondrinaCreada.energiaDeGolondrinaEnJoules()).toEqual(0);
});


test('Se le pide realizar un vuelo que excede su energía y lanza un error', () => {
    const golondrinaCreada = new Golondrina(45);

    expect(() => {
        golondrinaCreada.volarKm(45);
    }).toThrowError(Error.message);
  });

  test("Golondrina bebé, come un gramo de alpiste por primera vez y luego hace lo que quiera", () => {
    const golondrinaCreada = new Golondrina(45);
    golondrinaCreada.comer(1, alpiste)
    golondrinaCreada.haceLoQueQuieras()

    expect(golondrinaCreada.energiaDeGolondrinaEnJoules()).toEqual(129)
});
test("Golondrina bebé, come 5 gramos de mondongo y luego hace lo que quiera", () => {
    const golondrinaCreada = new Golondrina(45);

    golondrinaCreada.comer(5, mondongo);
    golondrinaCreada.haceLoQueQuieras()

    expect(golondrinaCreada.energiaDeGolondrinaEnJoules()).toEqual(530)
});