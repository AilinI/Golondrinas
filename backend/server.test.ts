import request from "supertest";
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

    const respuesta = await request(servidor).get("/golondrina");
    

    expect(respuesta.statusCode).toBe(200);
    expect(respuesta.type).toBe("application/json");
    expect(respuesta.body).toEqual({ energia: 45, estado: "Triste" });
});