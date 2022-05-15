let servicioId;
const saludar = () => {
    
let nombre = prompt ("bienvenido, ingrese su nombre");

while (nombre === ""){
nombre = prompt ("bienvenido, ingrese su nombre");
}

return nombre;
}
saludar ();


class opcion {
  constructor (servicio, id){
  this.servicio= servicio;
  this.id=id;
}
}

  const peluqueria = new opcion ("Peluquería", 1)
  const manicura = new opcion ("Manicura", 2)
  const pedicura = new opcion ("Pedicura", 3)
  const depilacion = new opcion ("Depilación", 4)
  const maquillaje = new opcion ("Maquillaje", 5)
  const spa = new opcion ("Spa", 6)
  const arrayservicios = [peluqueria, manicura, pedicura, depilacion, maquillaje, spa];


let carrito = [];

const mostrarServicios = () => { 
let texto = ""; // iniciar variable texto
arrayservicios.forEach((elemento)=>{
texto += `${elemento.servicio} \n`;
});
alert (texto);
};

mostrarServicios ();

function (elegir) {
let seleccion = parseInt(prompt(`Elija un servicio :\n${texto}`));
return seleccion; 
}

  while (seleccion < 1 || seleccion > 6) {
    seleccion = parseInt (prompt(`Incorrecto !\n Elija un servicio :\n${texto}`));
}


function servicioSeleccionado(id) {
  console.log(id);
  let serviFind = arrayservicios.find((element) => element.id === id);
  carrito.push(serviFind);
}

const init = () => {
  servicioId = mostrarServicios();
  servicioSeleccionado(servicioId);
};

init ();

  let turno = prompt ("Ingrese fecha y horario del turno");
  alert ("Eligió un turno para el" + " " + turno);
  console.log (turno)


  let precio = 3000
  let pregunta = prompt ("¿Desea saber el costo?")
  if (pregunta === "si" || pregunta === "Si" || pregunta === "SI") {
          
      
        alert ("Su turno tiene un costo de " + precio)
      }
          else {
              
          }

          function cliente (nombre, apellido, edad, dni){

            this.nombre = nombre;
            this.apellido = apellido;
            this.edad = edad;
            this.dni = dni;
          
          }
          
          const cliente1 = new cliente (
            prompt("Ingresá tu nombre"),
            prompt("Ingresá tu apellido"),
            prompt("Ingresá tu edad"),
            prompt("Ingresá tu número de documento"),
          );
        
          console.log (cliente1);


          if (solicitud === 1) {
              alert(cliente1.nombre + ":" +" fuiste agendado para"+ opcion1.servicio +" el día " + turno + ", ¡Muchas gracias!")
          } 
          else if (solicitud === 2) {
            alert(cliente1.nombre + ":" + " fuiste agendado para "+ opcion2.servicio +" el día " + turno + ", ¡Muchas gracias!")
          } 
          else if (solicitud === 3) {
            alert(cliente1.nombre + ":" + " fuiste agendado para "+ opcion3.servicio +" el día " + turno + ", ¡Muchas gracias!")
          } 
          else if (solicitud === 4) {
            alert(cliente1.nombre + ":" + " fuiste agendado para "+ opcion4.servicio +" el día " + turno + ", ¡Muchas gracias!")
          } 
          else if (solicitud === 5) {
            alert(cliente1.nombre + ":" + " fuiste agendado para "+ opcion5.servicio +" el día " + turno + ", ¡Muchas gracias!")
         } 
         else if (solicitud <1 || solicitud >5 ){
  alert("La opcion ingresada no es valida, intente mas tarde")
}
else {
  alert ("Lo esperamos nuevamente")
}


