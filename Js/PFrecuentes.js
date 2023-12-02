$(document).ready(function() {
    var Estado;
    $("#p1").hide();
    $("#p2").hide();
    $("#p3").hide();
    $("#p4").hide();
    $("#p5").hide();
    $("#p6").hide();
    $('#Sol').hide();


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
        $("h6").css("color", "white");
        $(".OP2").css("background-color", "black");
        $(".OP2").css("border", "1px solid white");
        $(".OP2 h6").css("color", "white");
        $(".OP2 p").css("color", "white");
        $(".Perguntas").css("background-color", "black");
        $(".Perguntas h2").css("color", "white");
        $(".Boton").css("background-color", "black");
        $(".Pergunta h5").css("color", "white");
        $(".Pergunta h6").css("color", "white");
        $(".Pregunta p").css("color", "white");
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
        $("h6").css("color", "black");
        $(".OP2").css("background-color", "white");
        $(".OP2").css("border", "1px solid black");
        $(".OP2 h6").css("color", "black");
        $(".OP2 p").css("color", "black ");
        $(".Perguntas").css("background-color", "white");
        $(".Perguntas h2").css("color", "black");
        $(".Boton").css("background-color", "white");
        $(".Pergunta h5").css("color", "black");
        $(".Pergunta h6").css("color", "black");
        $(".Pregunta p").css("color", "black");
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
      }

        //Redireccionar botones
        $("#Fav").click(function() {
            window.location.href = "ProductoFavorito.html";
        });
        
    $('.Boton').click(function() {
        $('.Boton').removeClass('seleccionado');
        $(this).addClass('seleccionado');
        var botonId = $(this).attr('id');
        if(botonId === "P1"){
            $("#p1").show();
            $("#p2").hide();
            $("#p3").hide();
            $("#p4").hide();
            $("#p5").hide();
            $("#p6").hide();
        }
        else if(botonId === "P2"){
            $("#p2").show();
            $("#p1").hide();
            $("#p3").hide();
            $("#p4").hide();
            $("#p5").hide();
            $("#p6").hide();
        }
        else if(botonId === "P3"){
            $("#p3").show();
            $("#p2").hide();
            $("#p1").hide();
            $("#p4").hide();
            $("#p5").hide();
            $("#p6").hide();
        }
        else if(botonId === "P4"){
            $("#p4").show();
            $("#p2").hide();
            $("#p3").hide();
            $("#p1").hide();
            $("#p5").hide();
            $("#p6").hide();
        }
        else if(botonId === "P5"){
            $("#p5").show();
            $("#p2").hide();
            $("#p3").hide();
            $("#p1").hide();
            $("#p4").hide();
            $("#p6").hide();
        }
        else if(botonId === "P6"){
            $("#p6").show();
            $("#p2").hide();
            $("#p3").hide();
            $("#p4").hide();
            $("#p5").hide();
            $("#p1").hide();
        }

      });

});