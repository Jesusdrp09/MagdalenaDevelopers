// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from 'https://www.gstatic.com/firebasejs/9.1.2/firebase-auth.js';
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-database.js";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiWe1mOBsqvzD-AaACR7itNloHUYGe8fY",
  authDomain: "practica-228ed.firebaseapp.com",
  databaseURL: "https://practica-228ed-default-rtdb.firebaseio.com",
  projectId: "practica-228ed",
  storageBucket: "practica-228ed.appspot.com",
  messagingSenderId: "377221506090",
  appId: "1:377221506090:web:5aa745c062f6d6963a4f53",
  measurementId: "G-MCSBZT68Z1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getDatabase();

var btnRegistrar = document.getElementById("btnRegistrar");
var agregarRedSocial = document.getElementById("agregarRedSocial");
var divRedSocial = document.createElement("div");
var agregarLenguaje = document.getElementById("agregarLenguaje");
var divLenguajeProgramacion = document.createElement("div");
divLenguajeProgramacion.classList.add("agregarLenguajeProgramacion")
divRedSocial.classList.add("redesSociales");

agregarLenguaje.onclick = ()=>{
    let select1 = document.createElement("select");
    let opcion11 = document.createElement("option");
    let opcion12 = document.createElement("option");
    let opcion13 = document.createElement("option");
    let opcion14 = document.createElement("option");
    let select2 = document.createElement("select");
    let opcion21 = document.createElement("option");
    let opcion22 = document.createElement("option");
    let opcion23 = document.createElement("option");
    let opcion24 = document.createElement("option");
    let textarea = document.createElement("textarea");
    let informacionAcademica = document.getElementById("informacionAcademica");

    agregarAtributosLenguaje(select1, opcion11, opcion12, opcion13, opcion14, select2, opcion21, opcion22, opcion23, opcion24, textarea);

    select1.appendChild(opcion11);
    select1.appendChild(opcion12);
    select1.appendChild(opcion13);
    select1.appendChild(opcion14);
    select2.appendChild(opcion21);
    select2.appendChild(opcion22);
    select2.appendChild(opcion23);
    select2.appendChild(opcion24);
    divLenguajeProgramacion.appendChild(select1);
    divLenguajeProgramacion.appendChild(select2);
    divLenguajeProgramacion.appendChild(textarea);
    informacionAcademica.appendChild(divLenguajeProgramacion);
}

const agregarAtributosLenguaje = (select1, opcion11, opcion12, opcion13, opcion14, select2, opcion21, opcion22, opcion23, opcion24, textarea)=>{
    select1.setAttribute("form","formularioRegistro");
    select1.setAttribute("name","tipoLenguaje");
    select1.classList.add("tipoLenguaje");
    select1.setAttribute("size", "1");
    select2.setAttribute("form","formularioRegistro");
    select2.setAttribute("name","nivelProgramacion");
    select2.classList.add("nivelProgramacion");
    select1.setAttribute("size", "1");

    opcion11.setAttribute("value", "1");
    opcion12.setAttribute("value", "2");
    opcion13.setAttribute("value", "3");
    opcion14.setAttribute("value", "4");
    opcion21.setAttribute("value", "1");
    opcion22.setAttribute("value", "2");
    opcion23.setAttribute("value", "3");
    opcion24.setAttribute("value", "4");
    opcion11.innerText = "Lenguaje";
    opcion12.innerText = "PHP";
    opcion13.innerText = "Javascript";
    opcion14.innerText = "Python";
    opcion21.innerText = "Nivel programacion";
    opcion22.innerText = "Junior";
    opcion23.innerText = "Middle";
    opcion24.innerText = "Senior";

    textarea.setAttribute("name", "especializacion");
    textarea.setAttribute("form", "formularioRegistro");
    textarea.classList.add("especializacion");
}

agregarRedSocial.onclick = ()=>{
    let select = document.createElement("select");
    let opcion1 = document.createElement("option");
    let opcion2 = document.createElement("option");
    let opcion3 = document.createElement("option");
    let opcion4 = document.createElement("option");
    let input =document.createElement("input");
    let informacionContacto = document.getElementById("informacionContacto");

    agregarAtributosRedSocial(select, opcion1, opcion2, opcion3, opcion4, input);

    select.appendChild(opcion1);
    select.appendChild(opcion2);
    select.appendChild(opcion3);
    select.appendChild(opcion4);
    divRedSocial.appendChild(select);
    divRedSocial.appendChild(input);
    informacionContacto.appendChild(divRedSocial);
}

const agregarAtributosRedSocial = (select, opcion1, opcion2, opcion3, opcion4, input)=>{
    select.setAttribute("form","formularioRegistro");
    select.setAttribute("name","tipoRedSocial");
    select.classList.add("tipoRedSocial");
    select.setAttribute("size", "1");

    opcion1.setAttribute("value", "1");
    opcion2.setAttribute("value", "2");
    opcion3.setAttribute("value", "3");
    opcion4.setAttribute("value", "4");
    opcion1.innerText = "Red social";
    opcion2.innerText = "Facebook";
    opcion3.innerText = "Twitter";
    opcion4.innerText = "Instagram";

    input.setAttribute("type", "url");
    input.setAttribute("name", "redSocial");
    input.setAttribute("form", "formularioRegistro");
    input.classList.add("redSocial");
}

btnRegistrar.onclick = () =>{
    let arrayPersonal = declaracionVariablesPersonal();
    // validado = true;
    if(validacionNombres(arrayPersonal[0].value)){ //Validación nombre
        arrayPersonal[0].setAttribute("style", "border-color: rgb(0, 0, 0);");
        if(validacionNombres(arrayPersonal[1].value)){ //Validación apellido
            arrayPersonal[1].setAttribute("style", "border-color: rgb(0, 0, 0);");
            if(validacionFechas(arrayPersonal[2].value)){ //Validación fecha
                arrayPersonal[2].setAttribute("style", "border-color: rgb(0, 0, 0);");
                if(validacionOpciones(arrayPersonal[3].value)){ //Validación tipo de documento
                    arrayPersonal[3].setAttribute("style", "border-color: rgb(0, 0, 0);");
                    if(validacionNumeros(arrayPersonal[4].value)){ //Validación documento identidad
                        arrayPersonal[4].setAttribute("style", "border-color: rgb(0, 0, 0);");
                        if(validacionNombres(arrayPersonal[5].value)){ //Validación nombre pais
                            arrayPersonal[5].setAttribute("style", "border-color: rgb(0, 0, 0);");
                            if(validacionNombres(arrayPersonal[6].value)){ //Validación nombre ciudad
                                arrayPersonal[6].setAttribute("style", "border-color: rgb(0, 0, 0);");
                                if(validacionCampoGeneral(arrayPersonal[7].value)){ //Validación dirección
                                    arrayPersonal[7].setAttribute("style", "border-color: rgb(0, 0, 0);");
                                    if(validacionCelular(arrayPersonal[8].value)){ //Validación celular
                                        arrayPersonal[8].setAttribute("style", "border-color: rgb(0, 0, 0);");
                                        if(validacionTelefono(arrayPersonal[9].value)){ //Validación teléfono
                                            arrayPersonal[9].setAttribute("style", "border-color: rgb(0, 0, 0);");
                                            if(validacionEmail(arrayPersonal[10].value)){ //Validación email
                                                arrayPersonal[10].setAttribute("style", "border-color: rgb(0, 0, 0);");
                                                if(validacionContrasena(arrayPersonal[11].value)){ //Validación contraseña
                                                    arrayPersonal[11].setAttribute("style", "border-color: rgb(0, 0, 0);");
                                                    if(validacionConfirmarContrasena(arrayPersonal[11].value, arrayPersonal[12].value)){ //Validación confirmar contraseña
                                                        arrayPersonal[12].setAttribute("style", "border-color: rgb(0, 0, 0);");
                                                        let tipoRedesSociales = document.querySelectorAll(".tipoRedSocial");
                                                        let redesSociales = document.querySelectorAll(".redSocial");
                                                        for (let i = 0; i < redesSociales.length; i++) {
                                                            if(!validacionOpciones(tipoRedesSociales[i].value)){ //Validación tipo red social
                                                                tipoRedesSociales[i].setAttribute("style", "border-color: rgb(156, 0, 0);");
                                                                alert("Tipo de red social inválido: seleccione una red social");
                                                                return 0;
                                                            }
                                                            tipoRedesSociales[i].setAttribute("style", "border-color: rgb(0, 0, 0);");
                                                            if(!validacionUrl(redesSociales[i].value)){ //Validación red social
                                                                redesSociales[i].setAttribute("style", "border-color: rgb(156, 0, 0);");
                                                                alert("Red social inválida: seleccione un enlace de red social válido");
                                                                return 0;
                                                            }
                                                            redesSociales[i].setAttribute("style", "border-color: rgb(0, 0, 0);");
                                                        }
                                                        if(validacionOpciones(arrayPersonal[13].value)){ //Validación nivel de estudio
                                                            arrayPersonal[13].setAttribute("style", "border-color: rgb(0, 0, 0);");
                                                            if(validacionOpciones(arrayPersonal[14].value)){ //Validación nivel de inglés
                                                                arrayPersonal[14].setAttribute("style", "border-color: rgb(0, 0, 0);");
                                                                if(validacionOpciones(arrayPersonal[15].value)){ //Validación tipo de programador
                                                                    arrayPersonal[15].setAttribute("style", "border-color: rgb(0, 0, 0);");
                                                                    let tipoLenguaje = document.querySelectorAll(".tipoLenguaje");
                                                                    let nivelProgramacion = document.querySelectorAll(".nivelProgramacion");
                                                                    let especializacion = document.querySelectorAll(".especializacion");
                                                                    console.log(arrayPersonal[16].value);
                                                                    if(validacionUrlOpcional(arrayPersonal[16].value)){ //Validacion repositorio
                                                                        arrayPersonal[16].setAttribute("style", "border-color: rgb(0, 0, 0);");
                                                                        for (let i = 0; i < redesSociales.length; i++) {
                                                                            if(!validacionOpciones(tipoLenguaje[i].value)){ //Validación tipo de lenguaje
                                                                                tipoLenguaje[i].setAttribute("style", "border-color: rgb(156, 0, 0);");
                                                                                alert("Lenguaje inválido: seleccione un tipo de lenguaje");
                                                                                return 0;
                                                                            }
                                                                            tipoLenguaje[i].setAttribute("style", "border-color: rgb(0, 0, 0);");
                                                                            if(!validacionOpciones(nivelProgramacion[i].value)){ //Validación nivel de programación
                                                                                nivelProgramacion[i].setAttribute("style", "border-color: rgb(156, 0, 0);");
                                                                                alert("Nivel de programación inválida: seleccione un nivel de programación");
                                                                                return 0;
                                                                            }
                                                                            nivelProgramacion[i].setAttribute("style", "border-color: rgb(0, 0, 0);");
                                                                            if(!validacionCampoGeneral(especializacion[i].value)){ //Validación especialización
                                                                                especializacion[i].setAttribute("style", "border-color: rgb(156, 0, 0);");
                                                                                alert("Especialización inválida: ingresar una especialización con más de 5 carácteres");
                                                                                return 0;
                                                                            }
                                                                            especializacion[i].setAttribute("style", "border-color: rgb(0, 0, 0);");
                                                                        }

                                                                        console.time('SUBMIT');
                                                                        crearUsuario(arrayPersonal);
                                                                    }else{
                                                                        alert("Enlace de repositorio inválido: ingrese un enlace correcto");
                                                                        arrayPersonal[16].setAttribute("style", "border-color: rgb(156, 0, 0);");
                                                                        return 0;
                                                                    }
                                                                }else{
                                                                    alert("Tipo de programador inválido: seleccione un tipo de programador");
                                                                    arrayPersonal[15].setAttribute("style", "border-color: rgb(156, 0, 0);");
                                                                    return 0;
                                                                }
                                                            }else{
                                                                alert("Nivel de inglés inválido: seleccione un nivel de inglés");
                                                                arrayPersonal[14].setAttribute("style", "border-color: rgb(156, 0, 0);");
                                                                return 0;
                                                            }
                                                        }else{
                                                            alert("Nivel de estudio inválido: seleccione un nivel de estudio");
                                                            arrayPersonal[13].setAttribute("style", "border-color: rgb(156, 0, 0);");
                                                            return 0;
                                                        }
                                                    }else{
                                                        alert("No coinciden las contraseñas");
                                                        arrayPersonal[12].setAttribute("style", "border-color: rgb(156, 0, 0);");
                                                        return 0;
                                                    }
                                                }else{
                                                    alert("Contraseña inválida: la contraseña debe contar con al menos 6 carácteres");
                                                    arrayPersonal[11].setAttribute("style", "border-color: rgb(156, 0, 0);");
                                                    return 0;
                                                }
                                            }else{
                                                alert("Correo electrónico inválido: ingrese el nombre con letras y espacios");
                                                arrayPersonal[10].setAttribute("style", "border-color: rgb(156, 0, 0);");
                                                return 0;
                                            }
                                        }else{
                                            alert("Número de télefono inválido: el número debe tener 7 dígitos (Si usted no cuenta con télefono puede colocar 0000000)");
                                            arrayPersonal[9].setAttribute("style", "border-color: rgb(156, 0, 0);");
                                            return 0;
                                        }
                                    }else{
                                        alert("Número de celular inválido: el número debe tener 10 dígitos");
                                        arrayPersonal[8].setAttribute("style", "border-color: rgb(156, 0, 0);");
                                        return 0;
                                    }
                                }else{
                                    alert("Dirección inválida: ingrese la dirección con más de 5 letras o cáracteres");
                                    arrayPersonal[7].setAttribute("style", "border-color: rgb(156, 0, 0);");
                                    return 0;
                                }
                            }else{
                                alert("Ciudad de residencia inválida: ingrese la ciudad solamente con letras y espacios");
                                arrayPersonal[6].setAttribute("style", "border-color: rgb(156, 0, 0);");
                                return 0;
                            }
                        }else{
                            alert("País de residencia inválido: ingrese el país solamente con letras y espacios");
                            arrayPersonal[5].setAttribute("style", "border-color: rgb(156, 0, 0);");
                            return 0;
                        }
                    }else{
                        alert("Numero de documento inválido: ingrese el numero de documento (solamente utilizar numeros)");
                        arrayPersonal[4].setAttribute("style", "border-color: rgb(156, 0, 0);");
                        return 0;
                    }
                }else{
                    alert("Tipo de documento inválido: seleccione un tipo de documento");
                    arrayPersonal[3].setAttribute("style", "border-color: rgb(156, 0, 0);");
                    return 0;
                }
            }else{
                alert("Fecha de nacimiento inválida: ingrese una fecha de nacimiento válida");
                arrayPersonal[2].setAttribute("style", "border-color: rgb(156, 0, 0);");
                return 0;
            }
        }else{
            alert("Apellidos inválidos: ingrese los apellidos solamente con letras y espacios");
            arrayPersonal[1].setAttribute("style", "border-color: rgb(156, 0, 0);");
            return 0;
        }
    }else{
        alert("Nombres inválidos: ingrese los nombres solamente con letras y espacios");
        arrayPersonal[0].setAttribute("style", "border-color: rgb(156, 0, 0);");
        return 0;
    }
}

function crearUsuario(arrayPersonal) {
    createUserWithEmailAndPassword(auth, arrayPersonal[10].value, arrayPersonal[11].value)
    .then((userCredential) => {
        // Signed in 
        updateProfile(auth.currentUser, {
            displayName: arrayPersonal[0].value+" "+arrayPersonal[1].value, photoURL: "", phoneNumber: arrayPersonal[8].value
          }).then(() => {
            // Profile updated!
            if(ingresarDatosUsuario(arrayPersonal,auth.currentUser.uid) == 0){
                setTimeout(window.history.go(-1), 2000);
            }
            // volver();
            // ...
          }).catch((error) => {
            // An error occurred
            let errorCode = error.code;
            let errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
            // ...
        });
        const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorCode +"CREACION DE USUARIO");
        console.log(errorMessage+"CREACION DE USUARIO");
        // ..
    });
}

function ingresarDatosUsuario(arrayPersonal,uid) {
    set(ref(database, 'datosUsuarios/' + uid), {
      fechaNacimiento: arrayPersonal[2].value,
      tipoDocumentoIdentidad: arrayPersonal[3].value,
      documentoIdentidad: arrayPersonal[4],
      residencia: arrayPersonal[7].value+", "+arrayPersonal[6].value+", "+arrayPersonal[5].value,
      celular: "+57"+arrayPersonal[8].value,
      telefono: arrayPersonal[9].value,
      nivelEstudio: arrayPersonal[13].value,
      nivelIngles: arrayPersonal[14].value,
      nivelProgramacion: arrayPersonal[15].value
    });
    return 0;
}
  

const declaracionVariablesPersonal = ()=>{
    try {
        let nombre = document.getElementById("nombres");
        let apellido = document.getElementById("apellidos");
        let fechaNacimiento = document.getElementById("fechaNacimiento");
        let tipoDocumento = document.getElementById("tipoDocumento");
        let documentoIdentidad = document.getElementById("documento");
        let paisResidencia = document.getElementById("paisResidencia");
        let ciudadResidencia = document.getElementById("ciudadResidencia");
        let direccionResidencia = document.getElementById("direccionResidencia");
        let celular = document.getElementById("celular");
        let telefono = document.getElementById("telefono");
        let email = document.getElementById("email");
        let contrasena = document.getElementById("contrasena");
        let confirmarContrasena = document.getElementById("confirmarContrasena");
        let nivelEstudio = document.getElementById("nivelEstudio");
        let nivelIngles = document.getElementById("nivelIngles");
        let tipoProgramador = document.getElementById("tipoProgramador");
        let repositorio = document.getElementById("enlaceRepositorio");
        return [nombre, apellido, fechaNacimiento, tipoDocumento, documentoIdentidad, paisResidencia, ciudadResidencia, direccionResidencia, celular, telefono, email, contrasena, confirmarContrasena, nivelEstudio, nivelIngles, tipoProgramador, repositorio];
    } catch (e) {
        if(e instanceof TypeError){
            console.log("error de valor nulo");
        }
    }
}

function validacionNombres(nombre){
    let regExNames = new RegExp("[A-Za-zÀ-ÿ ]{0,}","g");
    let nombreAdd = regExNames.exec(nombre);
    console.log(nombre);
    try {
        if(nombreAdd[0] == nombre && nombre != ""){
            return true;
        }else{
            return false;
        } 
    } catch (e) {
        if(e instanceof TypeError){
            console.log("error de valor nulo");
        }
    }
}

function validacionFechas(fecha){
    let fechaActual = new Date().toLocaleDateString();
    let arrayFechaIngresada = fecha.split('-');
    let arrayFechaActual = fechaActual.split('/');
    if(arrayFechaIngresada[1] == undefined){
        return false;
    }else{
        if(arrayFechaActual[2] > arrayFechaIngresada[0]){
            return true;
        }else{
            if((arrayFechaActual[1] > arrayFechaIngresada[1]) &&  arrayFechaActual[2] == arrayFechaIngresada[0]){
                return true;
            }else{
                if((arrayFechaActual[0] > arrayFechaIngresada[2]) && (arrayFechaActual[1] == arrayFechaIngresada[1]) && (arrayFechaActual[2] == arrayFechaIngresada[0])){
                    return true;
                }else{
                    return false;
                }
            }
        } 
    }
}

function validacionNumeros(number){
    let regExNumber = new RegExp("[0-9]+","g");
    let numberAdd = regExNumber.exec(number);
    try {
        if(numberAdd[0] == number){
            return true;
        }else{
            return false;
        } 
    } catch (e) {
        if(e instanceof TypeError){
            console.log("error de valor nulo");
        }
    }
}

function validacionCampoGeneral(textCampo){
    let regExText = new RegExp(".{5,}","g");
    let textAdd = regExText.exec(textCampo);
    try {
        if(textAdd[0] == textCampo){
            return true;
        }else{
            return false;
        } 
    } catch (e) {
        if(e instanceof TypeError){
            console.log("error de valor nulo");
        }
    }
}

function validacionCelular(celular){
    let regExText = new RegExp("[0-9]{10}","g");
    let textAdd = regExText.exec(celular);
    try {
        if(textAdd[0] == celular){
            return true;
        }else{
            return false;
        } 
    } catch (e) {
        if(e instanceof TypeError){
            console.log("error de valor nulo");
        }
    }
}

function validacionTelefono(telefono){
    let regExText = new RegExp("[0-9]{7}","g");
    let textAdd = regExText.exec(telefono);
    try {
        if(textAdd[0] == telefono){
            return true;
        }else{
            return false;
        }
    } catch (e) {
        if(e instanceof TypeError){
            console.log("error de valor nulo");
        }
    }
}

function validacionEmail(email){
    let regExText = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$","g");
    let textAdd = regExText.exec(email);
    try {
        if(textAdd[0] == email){
            return true;
        }else{
            return false;
        } 
    } catch (e) {
        if(e instanceof TypeError){
            console.log("error de valor nulo");
        }
    }
}

function validacionContrasena(contrasena){
    let regExText = new RegExp(".{6,}","g");
    let textAdd = regExText.exec(contrasena);
    try {
        if(textAdd[0] == contrasena){
            return true;
        }else{
            return false;
        } 
    } catch (e) {
        if(e instanceof TypeError){
            console.log("error de valor nulo");
        }
    }
}

function validacionConfirmarContrasena(contrasena, confirmarContrasena){
    try {
        if(contrasena == confirmarContrasena){
            return true;
        }else{
            return false;
        } 
    } catch (e) {
        if(e instanceof TypeError){
            console.log("error de valor nulo");
        }
    }
}

function validacionOpciones(opcion){
    let regExNumber = new RegExp("[0-9]","g");
    let numberAdd = regExNumber.exec(opcion);
    try {
        if(numberAdd[0] == opcion && opcion != 1){
            return true;
        }else{
            return false;
        } 
    } catch (e) {
        if(e instanceof TypeError){
            console.log("error de valor nulo");
        }
    }
}

function validacionUrl(opcion){
    let regExNumber = new RegExp("(?:http:\/\/)?(?:https:\/\/)?(?:www\.)?[^0-9 \n]+\.[a-zA-Z.0-9/]+(.){1,}","g");
    let numberAdd = regExNumber.exec(opcion);
    try {
        if(numberAdd[0] == opcion && opcion != ""){
            return true;
        }else{
            return false;
        } 
    } catch (e) {
        if(e instanceof TypeError){
            console.log("error de valor nulo");
        }
    }
}

function validacionUrlOpcional(opcion){
    if(opcion == ""){
        return true;
    }else{
        let regExNumber = new RegExp("(?:http:\/\/)?(?:https:\/\/)?(?:www\.)?[^0-9 \n]+\.[a-zA-Z.0-9/]+(.){1,}","g");
        let numberAdd = regExNumber.exec(opcion);
        try {
            if(numberAdd[0] == opcion){
                return true;
            }else{
                return false;
            } 
        } catch (e) {
            if(e instanceof TypeError){
                console.log("error de valor nuloopcional");
            }
        }
    }
}