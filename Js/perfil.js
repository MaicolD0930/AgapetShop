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

});