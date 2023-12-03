let signUp = document.getElementById("signUp");
let signIn = document.getElementById("signIn");
let nameInput = document.getElementById("nameInput");
let title = document.getElementById("title");
let forgotPassword = document.getElementById("forgotPassword");

signIn.onclick = function(){
    nameInput.style.maxHeight= "0";
    title.innerHTML = "Iniciar sesion en Agapet";
    signUp.classList.add("disable");
    signIn.classList.remove("disable");
    forgotPassword.style.display = "block"; 
}

signUp.onclick = function(){
    nameInput.style.maxHeight = "60px";
    title.innerHTML ="¡Bienvenido a Agapet!";
    signUp.classList.remove("disable");
    signIn.classList.add("disable");
    forgotPassword.style.display = "none"; 


}
    var NombreG;
    var CorreoG;
    var registrado;
    //Guardar Valores
    $("#signUp").click(function () {
    var nombre = $("#NombreImput").val();
    var correo = $("#CorreoImput").val();
    
    if ($.trim(nombre) === '') {
        alert('El input está vacío. Por favor, ingresa un valor.');
    }else{
        NombreG = nombre;
        CorreoG = correo;
        localStorage.setItem('NombreG', NombreG);
        localStorage.setItem('CorreoG', CorreoG);
        alert(CorreoG)
    }
});

NombreG = localStorage.getItem('CorreoG');
$("#signIn").click(function () {
    if ($("#CorreoImput").val() === NombreG) {
        registrado ="Si";
        localStorage.setItem('Registrado', NombreG);
        window.location.href = "Inicio.html";
    }else{
        alert("Usuario ingresado no existe")
    }
});

