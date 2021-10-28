let logo = document.getElementById("logo");
let iniciarSesion = document.getElementById("iniciar-sesion");
let btnIniciar = document.getElementById("ingresarIS");

$(document).ready(function() {
  $('a[href^="#"]').click(function() {
    var destino = $(this.hash); //this.hash lee el atributo href de este
    $('html, body').animate({ scrollTop: destino.offset().top - 64}, 700); //Llega a su destino con el tiempo deseado
    return false;
  });
});

logo.onclick = ()=>{
  let estilos = document.getElementById("estilosblanco");
  if(estilos.getAttribute("href") == "css/estilosblanco.css"){
    estilos.setAttribute("href", "");
  }else{
    estilos.setAttribute("href", "css/estilosblanco.css");
  }
}

iniciarSesion.onclick = ()=>{
  $("#inicioSesionDialog").slideToggle(1500, "swing");
}

btnIniciar.onclick = ()=>{
  let email = document.getElementById("emailInput").value;
  if(validarEmail(email)){
    newemail = '"'+email+'"';
    document.forms["formIniciarSesion"]["emailInput"].value = newemail;
    document.getElementById("formIniciarSesion").submit();
    document.forms["formIniciarSesion"]["emailInput"].value = email;
  }else{
    alert("Inserte un correo válido");
  }
}

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

window.addEventListener("click", e =>{
  let iniciarSesionDialog = document.getElementById("inicioSesionDialog");
  let estilo = iniciarSesionDialog.getAttribute("style");
  let iniciarSesionCard = document.getElementById("iniciarSesion");
  let childs = true;
  let iniciarSesionCardChilds = iniciarSesionCard.children;

  for(i = 0; i < iniciarSesionCardChilds.length;i++){
    if(e.target == iniciarSesionCardChilds[i]){
      childs = childs && false;
    }
  }

  if(estilo != "display: none;" && e.target == iniciarSesionDialog && (!childs || e.target != iniciarSesionCard)){
    $("#inicioSesionDialog").slideToggle(500, "swing");
    console.log("cerrar");
  }
});