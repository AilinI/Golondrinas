import { error } from "console";
import request from "supertest";
import { alpiste } from "../golondrina";
import { crearServidor } from "./server";

test("golondrina devuelve una representación de la golondrina", async () => {
    const servidor = crearServidor();

    const respuesta = await request(servidor).get("/golondrina");
    

    expect(respuesta.statusCode).toBe(200);
    expect(respuesta.type).toBe("application/json");
    expect(respuesta.body).toEqual({ energia: 45, estado: "Triste" });
});
test("golondrina come", async () => {
    const servidor = crearServidor();

    const respuesta = await request(servidor).
        post("/golondrina/comer").
        send({ cantidadComidaEnGramos: 1, comidaDeGolondrina: "alpiste" });
    
    expect(respuesta.statusCode).toBe(200);
    expect(respuesta.type).toBe("application/json");
    expect(respuesta.body).toEqual({ energia: 49, estado: "Triste" });
});
test("golondrina come comida invalida", async () => {
    const servidor = crearServidor();

    const respuesta = await request(servidor).
        post("/golondrina/comer").
        send({ cantidadComidaEnGramos: 1, comidaDeGolondrina: "huevo" });
    
    expect(respuesta.statusCode).toBe(400);
    expect(respuesta.type).toBe("application/json");
    expect(respuesta.body).toEqual({"error": "Comida inválida"});
});
test("golondrina vuela", async () => {
    const servidor = crearServidor();

    const respuesta = await request(servidor).
        post("/golondrina/volar").
        send({ kmAVolar: 1 });
    
    expect(respuesta.statusCode).toBe(200);
    expect(respuesta.type).toBe("application/json");
    expect(respuesta.body).toEqual({ energia: 34, estado: "Triste" });
});
test("golondrina hace lo que quiera ", async () => {
    const servidor = crearServidor();

    const respuesta = await request(servidor).
        post("/golondrina/haceLoQueQuieras");

    expect(respuesta.statusCode).toBe(200);
    expect(respuesta.type).toBe("application/json");
    expect(respuesta.body).toEqual({ energia: 125, estado: "Indiferente" });
});