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

function craftPlanet() {
    $('#largeModal').modal('hide');
    $('#first-window').fadeOut(1500);
    $('#sidenav').fadeIn(1500);
}

