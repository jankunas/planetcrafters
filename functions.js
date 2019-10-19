function handleMousemove(e) {
    var mousePos = getMousePos(canvas, e);
    var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
    console.log(message);
}

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

function handleStarSelect(e) {
    console.log("lol")
}

$(document).ready(function() {
    $("#canvas").hide();
    $("#matched-planets").hide();
});

function craftPlanet() {
    $('#largeModal').modal('hide');
    $('#first-window').fadeOut(1500, function () {
        $("#canvas").fadeIn()
        $("#matched-planets").fadeIn();
        updateMatchedPlanets(0);
        $('#sidenav').fadeIn(1500);

        $('#side-nav-left').fadeIn(1500);
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

function showResult() {
    $('#planets-found').text("Number of planets found: " + ++numberOfPlanetsFound);
}
