$(document).ready(function() {
    $("#canvas").hide();
    $("#matched-planets").hide();

    document.getElementById("mainStar").addEventListener("mouseover", function( event ) {
        event.target.style.boxShadow = "inset 0 0 50px #fff,      /* inner white */\n" +
            "            inset 1000px 0 80px #0ff,   /* inner left magenta short */\n" +
            "            inset -20px 0 80px #0ff,  /* inner right cyan short */\n" +
            "            inset 20px 0 300px #0ff,  /* inner left magenta broad */\n" +
            "            inset -20px 0 300px #0ff, /* inner right cyan broad */\n" +
            "            0 0 30px #fff,            /* outer white */\n" +
            "            -10px 0 24px #0ff,        /* outer left magenta */\n" +
            "            10px 0 24px #0ff";
    }, false);

    document.getElementById("mainStar").addEventListener("mouseout", function( event ) {
        event.target.style.boxShadow = "inset 0 0 50px #fff,      /* inner white */\n" +
            "            inset 1000px 0 80px #f0f,   /* inner left magenta short */\n" +
            "            inset -20px 0 80px #0ff,  /* inner right cyan short */\n" +
            "            inset 20px 0 300px #f0f,  /* inner left magenta broad */\n" +
            "            inset -20px 0 300px #0ff, /* inner right cyan broad */\n" +
            "            0 0 30px #fff,            /* outer white */\n" +
            "            -10px 0 24px #0ff,        /* outer left magenta */\n" +
            "            10px 0 24px #0ff";
    });

});


function craftPlanet() {
    $('#largeModal').modal('hide');
    $('#first-window').fadeOut(1500, function () {
        $("#canvas").fadeIn()
        $("#matched-planets").fadeIn();
        updateMatchedPlanets(0);
        $('#sidenav').fadeIn(1500);
    });

    // const Http = new XMLHttpRequest();
    // const url='https://peqf53vhml.execute-api.eu-central-1.amazonaws.com/default//hello_world?mass=2850.0&radius=16.5';
    // Http.setRequestHeader('Access-Control-Allow-Origin','*');
    // Http.open("GET", url);
    // Http.send();
    //
    // Http.onreadystatechange = (e) => {
    //     console.log(Http.responseText)
    // }
}

var numberOfPlanetsFound = 0;

function updateFoundPlanetResult() {
    $('#planets-found').text("Number of planets found: " + ++numberOfPlanetsFound);
}
