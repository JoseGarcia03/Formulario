/* Actividad pendiente:
    1.- Cada vez que el usuario registre un nuevo usuario se pueda ver en el sitio web
    2.- Hacer que los datos nunca e pierdan apesar de que yo refresque la pagina
    3.- Mostrar los usuarios que sea agregaron por medio de un forEach
    4.- En caso de que no haya ningun usuario registrado realizar un condicional que valide para mostrar los usuarios o no
    5.- En caso de refrescar la pagina hacer que la variables usuarios mantenga los mismos datos que hay en el localstorage
*/

// Capturamos el contenedor donde listaremos a los usuarios registrados
const listar = document.getElementById('listar')

//Iniciamos un arreglo vacio el cual tendra en objetos los usuarios que se registren
let usuarios = [];

// A penas carge el sitio web listamos a los usuarios que antes se habian registrado
//document.addEventListener('DOMContnetLoaded', listarData)

//Capturamos el formulario
const form = document.getElementById('form')

//Escuchando el evento submit del formulario evitamos que refresque la pagina
form.addEventListener('submit', (e)=> {
    e.preventDefault()
})

//Capturamos el boton del fomulario
const btn = document.getElementById('btnEnviar');


//Escuchamos el evento click en el boton
btn.addEventListener('click', ()=>{
    //Capturamos los datos ingresados por el usuario en los inputs del formulario
    const nombre = document.getElementById('inputNombre').value
    const apellido = document.getElementById('inputApellido').value
    const telefono = document.getElementById('inputTelefono').value
    const direccion = document.getElementById('inputDireccion').value

    //Creamos un objeto con los datos del usuario
    let usr = {
        nombre: nombre,
        apellido: apellido,
        telefono: telefono,
        direccion: direccion
    }
    //Añadimos de ultima posicion el objeto del usuario a nuestro arreglo
    usuarios.push(usr)

    //Llamamos la funcion que nos guarda en el local storage y mandamos por parametros el arreglo
    guardarLocal(usuarios)
})

//Funcion para guardar en el local
function guardarLocal(usr) {
    //Enviamos al localstorage el arreglo con los usuarios
    localStorage.setItem('registro', JSON.stringify(usr)) //JSON.stringify() convierte un objeto o arreglo en un string (cadena de texto)


    //Llamamos a la funcion que pinta en pantalla la lista de usuarios
    listarData()
}

//Funcion que pinta los usuarios
function listarData(){
    //Traemos lo que guardamos en el localstorage
    let usrs = JSON.parse(localStorage.getItem('registro'))//JSON.parse() convierte un string(cadena de texto) en un objeto o arreglo


    //Pintamos en el DOM una tabla con los usuarios que trajimos del localstorage
    listar.innerHTML = `
    <table>
        <tr>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Teléfono</th>
        <th>Dirección</th>
      </tr>
      <tr>
         <td>${nombre}</td>
         <td>${apellido}</td>
         <td>${telefono}</td>
         <td>${direccion}</td>
      </tr>
     </table>
    `;
}