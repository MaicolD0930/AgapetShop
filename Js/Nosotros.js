$(document).ready(function() {
    $('#Sol').hide();
    $('#Luna').click(function() {
        var Estado = "Oscuro";
        localStorage.setItem('Color', Estado);
        $('body').css("background-color", "#3e423d");
        //Header
        $('#Luna').hide();
        $('#Sol').show();
        $(".ImagenTitulo").css("background-color", "black");
        $(".Top").css("background-color", "black");
        $(".Top a").addClass("Oscuro");
        $(".iconos").css("background-color", "black");
        $(".iconos svg").css("fill", "white");
        //Body
        $(".OP2").css("background-color", "black");
        $(".OP2").css("border", "1px solid white");
        $(".OP2 h6").css("color", "white");
        $(".OP2 p").css("color", "white");
        $(".Somos").css("background-color", "black");
        $(".Somos p").css("color", "white");
        //Footer
        $("footer").css("background-color", "black");
        $("footer input").css("border", "1px solid white");
        $("footer input").css("background-color", "black");
        $("footer input").css("color", "white");
        $("footer span").css("color", "white");
        $("footer span").css("border", "1px solid white");
        $("footer span").css("background-color", "black");
        $(".sc").css("border-left", "1px solid white");
        $(".sc").css("border-right", "1px solid white");
        
    
      });
      $('#Sol').click(function() {
        var Estado = "Luz";
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
        $(".iconos").css("background-color", "white");
        $(".iconos svg").css("fill", "black");
        //Body
        $(".OP2").css("background-color", "white");
        $(".OP2").css("border", "1px solid black");
        $(".OP2 h6").css("color", "black");
        $(".OP2 p").css("color", "black ");
        $(".Somos").css("background-color", "white");
        $(".Somos p").css("color", "black");
        //Footer
        $("footer").css("background-color", "white");
        $("footer input").css("border", "1px solid black");
        $("footer input").css("background-color", "white");
        $("footer input").css("color", "black");
        $("footer span").css("color", "black");
        $("footer span").css("border", "1px solid black");
        $("footer span").css("background-color", "white");
        $(".sc").css("border-left", "1px solid black");
        $(".sc").css("border-right", "1px solid black");
      });
});
    //Redireccionar botones
    $("#Fav").click(function() {
        
        window.location.href = "ProductoFavorito.html";
    });