// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-database.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from 'https://www.gstatic.com/firebasejs/9.1.2/firebase-auth.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
// const analytics = getAnalytics(app);
const auth = getAuth();
const database = getDatabase(app);
const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
provider.setCustomParameters({
  'login_hint': 'user@example.com',
  'display': 'popup'
});

let btnIniciar = document.getElementById("ingresarIS");
let btnSalir = document.getElementById("cerrarSesion");
let loginGoogle = document.getElementById("loginGoogle");

btnIniciar.onclick = ()=>{
  let email = document.getElementById("emailInput").value;
  let password = document.getElementById("passwordInput").value;
  // let dontCloseSesion = document.getElementById("noCerrarSesion");
  if(validarEmail(email)){
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(userCredential);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });

    // newemail = '"'+email+'"';
    // document.forms["formIniciarSesion"]["emailInput"].value = newemail;
    // document.getElementById("formIniciarSesion").submit();
    // document.forms["formIniciarSesion"]["emailInput"].value = email;
  }else{
    alert("Inserte un correo válido");
  }
  document.getElementById("emailInput").value = "";
  document.getElementById("passwordInput").value = "";
  // if(!dontCloseSesion.checked){
    
  // }
}

loginGoogle.onclick = () =>{
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}

btnSalir.onclick = () =>{
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
    console.log(error.code + " " + error.message);
  });
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    if(user.photoURL != null){
      let imgPerfil = document.getElementById("imgPerfil");
      imgPerfil.setAttribute("src",user.photoURL);
    }
    //INSTRUCCIONES
    let iniciarSesionDialog = document.getElementById("inicioSesionDialog");
    iniciarSesionDialog.setAttribute("style","display: none;");
    let btnsInicio = document.getElementById("botones-login");
    btnsInicio.setAttribute("style","display: none");
    let btnPerfil = document.getElementById("labelPerfil");
    btnPerfil.setAttribute("style","display: block");
    // ...
  } else {
    // User is signed out
    let btnsInicio = document.getElementById("botones-login");
    btnsInicio.setAttribute("style","display: inline-block;");
    let btnPerfil = document.getElementById("labelPerfil");
    btnPerfil.setAttribute("style","display: none");
    let menuPerfil = document.getElementById("btnperfil");
    menuPerfil.checked = false;
    let imgPerfil = document.getElementById("imgPerfil");
    imgPerfil.setAttribute("src","img/user-regular-24.png");
    // ...
  }
});
  
function validarEmail(correo){
  let regExCorreo = new RegExp("[A-Za-z0-9\W]+@+[a-z]+\.+[a-z]{2,3}","g");
  let correoAdd = regExCorreo.exec(correo);
  try {
    if(correoAdd[0] == correo){
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