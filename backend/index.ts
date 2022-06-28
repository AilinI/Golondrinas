import { crearServidor } from "./server";

const servidor = crearServidor();

const puerto = 3000;

servidor.listen(puerto, () => {
  console.log(`El servidor se está ejecutando en http://localhost:${puerto}/`);
});