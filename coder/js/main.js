//reservar turno en un salón de belleza

function opcion (servicio) {
  this.servicio = servicio;
}

const opcion1 = new opcion ("peluquería")
const opcion2 = new opcion ("manicuría")
const opcion3 = new opcion ("pedicuría")
const opcion4 = new opcion ("depilación")
const opcion5 = new opcion ("maquillaje")

let direccionPregunta = ""
let solicitud = parseInt (prompt("Desea solicitar turno para: \n\t 1 - Peluquería \n\t 2 - Manicuría \n\t 3 - Pedicuría \n\t 4 - Depilación  \n\t 5 - Maquillaje \n\t ESC para salir " ))

if (solicitud === 1 || solicitud === 2 || solicitud ===3 || solicitud === 4 || solicitud === 5) {
  switch (solicitud) {
      case 1:
          alert("Ha seleccionado un turno para " + opcion1.servicio);
          console.log(opcion1);
          break;
          
      case 2:
          alert("Ha seleccionado un turno para " + opcion2.servicio);
          console.log(opcion2);
          break;
             
      case 3:
        alert("Ha seleccionado un turno para " + opcion3.servicio);
        console.log(opcion3);
        break;
      case 4:
        alert("Ha seleccionado un turno para " + opcion4.servicio);
        console.log(opcion4);
        break;
  
      case 5: 
      alert("Ha seleccionado un turno para " + opcion5.servicio);
      console.log(opcion5);
      break;
  }

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
          } else if (solicitud === 2) {
            alert(cliente1.nombre + ":" + " fuiste agendado para "+ opcion2.servicio +" el día " + turno + ", ¡Muchas gracias!")
          } else if (solicitud === 3) {
            alert(cliente1.nombre + ":" + " fuiste agendado para "+ opcion3.servicio +" el día " + turno + ", ¡Muchas gracias!")
          } else if (solicitud === 4) {
            alert(cliente1.nombre + ":" + " fuiste agendado para "+ opcion4.servicio +" el día " + turno + ", ¡Muchas gracias!")
          } else if (solicitud === 5) {
            alert(cliente1.nombre + ":" + " fuiste agendado para "+ opcion5.servicio +" el día " + turno + ", ¡Muchas gracias!")
          } else {
          
          }
} else if (solicitud <1 || solicitud >5 ){
  alert("La opcion ingresada no es valida, intente mas tarde")
}
else {
  alert ("Lo esperamos nuevamente")
}
