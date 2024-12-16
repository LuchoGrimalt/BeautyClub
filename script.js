// Datos de formulario de consulta

let nombre = document.getElementById("nameUsu");
let apellido = document.getElementById("lastnameUsu");
let mail = document.getElementById("mailUsu");
let consulta = document.getElementById("consultaUsu");
let datosUsu = {}

sendUsu.addEventListener("click", function (){
    console.log(nombre.value);
    console.log(apellido.value);
    console.log(mail.value);
    console.log(consulta.value);
    Swal.fire({
        title: "Consulta enviada",
        text:  "Gracias " + nombre.value ,
        icon: "success"
      });
    return datosUsu = {
        nombre: nombre.value, 
        apellido: apellido.value, 
        mail: mail.value, 
        consulta: consulta.value}
});

console.log(datosUsu);

