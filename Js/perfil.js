$(document).ready(function() {
    
    PerfilG = localStorage.getItem('PerfilG');
    PortadaG = localStorage.getItem('PortadaG');
    NombreG = localStorage.getItem('NombreG');
    ApellidoG = localStorage.getItem('ApellidoG');
    DireccionG = localStorage.getItem('DireccionG');
    CorreoG = localStorage.getItem('CorreoG');
    DescripcionG = localStorage.getItem('DescripcionG');
    NumeroG = localStorage.getItem('NumeroG');
    CedulaG = localStorage.getItem('CedulaG');
    PerfilG = localStorage.getItem('PerfilG');

    $('#CargarPerfil').attr('src', PerfilG);
    $('#CargarNombre').html(NombreG+" "+ApellidoG);
    $('#CargarDireccion').html(" "+DireccionG);
    $('#CargarCorreo').html(CorreoG);
    $('#CargarTelefono').html(NumeroG);
    $('#CargarDescripcion').html(DescripcionG);
    $('#CargarNombre').html();

    //Redireccionar botones
    $("#Editar").click(function() {
        window.location.href = "EditarPerfil.html";
    });
    $("#Volver").click(function() {
        window.location.href = "Inicio.html";
    });



    var Estado;
    $('#Sol').hide();
    var Colo = localStorage.getItem('Color');
    if(Colo==="Oscuro"){
     ModoOscuro();
   }
   else{
     ModoLuz();
   }
  
      $('#Luna').click(ModoOscuro);
      function ModoOscuro() {
        Estado = "Oscuro";
        localStorage.setItem('Color', Estado);
        $('body').css("background-color", "#3e423d");
        //Header
        $('#Luna').hide();
        $('#Sol').show();
        $(".ImagenTitulo").css("background-color", "black");
        $(".Top").css("background-color", "black");
        $(".Top a").addClass("Oscuro");
        $(".iconos").addClass("Oscuroo");
        //Body
        $(".profile-details").css("background-color", "black");
        $(".profile-details").css("color", "white");
        //Footer
  
      }
      $('#Sol').click(ModoLuz);
      function ModoLuz() {
        Estado = "Luz";
        localStorage.setItem('Color', Estado);
        $('body').css("background-color", "#7DA66A");
        //Header
        $('#Luna').show();
        $('#Sol').hide();
        $(".ImagenTitulo").css("background-color", "white");
        $(".Top a").css("color", "black");
        $(".Top").css("background-color", "white");
        $(".Top a").removeClass("Oscuro");
        $(".Top a").css("color", "#7DA66A");
        $(".iconos").removeClass("Oscuroo");
        //Body
        $(".profile-details").css("background-color", "white");
        $(".profile-details").css("color", "black");
        //Footer
  
      }
});