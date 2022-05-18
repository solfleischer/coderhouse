class Opcion {
  constructor(servicio, precio, id) {
    this.servicio = servicio;
    this.precio = precio;
    this.id = id;
  }
}


let servicioId;

let carrito = [];

const peluqueria = new Opcion ("Peluquería", 3000, 1);
const manicura = new Opcion ("Manicura", 2000, 2);
const pedicura = new Opcion ("Pedicura", 2000, 3);
const depilacion = new Opcion ("Depilación", 1500, 4);
const maquillaje = new Opcion ("Maquillaje", 2000, 5);
const spa = new Opcion ("Spa", 1500, 6);
const arrayservicios = [peluqueria, manicura, pedicura, depilacion, maquillaje, spa];



const saludar = () => {
  let nombre = prompt("Bienvenido, ingrese su nombre:");
  while (nombre === "") {
    nombre = prompt("Bienvenido, ingrese su nombre:");
  }
  console.log (nombre);
};

const mostrarServicios = () => {
  let texto = "";
  arrayservicios.forEach((element) => {
    texto += `${element.id}) ${element.servicio}\n`;
  });

  let seleccion = parseInt(prompt(`Elija un servicio:\n${texto}`));

  while (seleccion < 1 || seleccion > 6) {
    seleccion = parseInt(
      prompt(`Incorrecto\nElija un servicio:\n${texto}`)
    );
  }
  return seleccion;
};

const servicioSeleccionado = (id) => {
  let serviFind = arrayservicios.find((element) => element.id === id);
  carrito.push(serviFind);
  console.log(serviFind);

  let seguir = confirm("Desea elegir otro servicio? ");

  if (seguir === true) {
    init();
  }
};

const init = () => {
  servicioId = mostrarServicios();
  servicioSeleccionado(servicioId);
};

saludar();
init();



let turno = prompt ("Ingrese fecha y horario del turno");
alert ("Eligió un turno para el" + " " + turno);
console.log (turno)


let precio = ""
let pregunta = prompt ("¿Desea saber el costo total?")

if (pregunta === "si" || pregunta === "Si" || pregunta === "SI") {
        
    // sumar precio de los servicios seleccionados
      
};