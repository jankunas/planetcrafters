// -----------
// Definitions
// -----------

var canvas = document.querySelector('canvas');
canvas.width = document.body.clientWidth * 2;
canvas.height = document.body.clientHeight * 2;
var context = canvas.getContext('2d');

function changeOrbit(value) {
    options.fLength = 80 - (value * 0.4);
}

function resetParameters() {
    moonCheekSize = 1;
    albedo = false; 
    gas = false;
    changePlanetColor();
}

// Planet parameters
var albedo = false;
var gas = false;

//Planet color
function changeAlbedo(value) {
    albedo = value;
    changePlanetColor();
}

function changeGas(value) {
    gas = value;
    changePlanetColor();
}

function changeCheekSize(value) {
    moonCheekSize = 1 + value/1000;
    changeCheekColorBasedOnMass();
}

function changePlanetColor() {
    if (albedo && gas) {
        colorMoon = '#FD0E35';
        colorMoonShadow = '#C62D42';
        colorMoonCheeks = '#C62D42';
        changeCheekColorBasedOnMass();
    } else if (albedo && !gas) {
        colorMoon = '#0066FF';
        colorMoonShadow = '#1560BD';
        colorMoonCheeks = '#1560BD';
        changeCheekColorBasedOnMass();
    } else if (!albedo && gas) {
        colorMoon = '#FF9980';
        colorMoonShadow = '#E6735C';
        colorMoonCheeks = '#E6735C';
        changeCheekColorBasedOnMass();
    } else if (!albedo && !gas) {
        colorMoon = '#38b4c1';
        colorMoonShadow = '#279aad';
        colorMoonCheeks = '#279aad';
    }
}


function changeCheekColorBasedOnMass() {
    //Cheek size corelates to size
    if (moonCheekSize > 1 && moonCheekSize < 1.5) {
        colorMoonCheeks = '#FF9980';
    } else if (moonCheekSize > 1.5 && moonCheekSize < 2) {
        colorMoonCheeks = '#E6735C';
    } else if (moonCheekSize > 2 && moonCheekSize < 2.5) {
        colorMoonCheeks = '#CC553D';
    } else if (moonCheekSize > 3 && moonCheekSize < 4) {
        colorMoonCheeks = '#B33B24';
    }
}

var options = {
    rotate: 0.02, // Speed and direction of the rotation
    alpha: 30,
    refZ: 400,
    fLength: 80,
}

state = new State(1);


// ------
// Colors
// -----

var colorBackground = '#01445a';
var colorPlanet = '#fdc23e';
var colorPlanetInternal = 'black';

// ------
// Planet custom parameters
// -----
var colorMoon = '#38b4c1';
var colorMoonShadow = '#279aad';
var colorMoonCheeks = '#279aad';
var colorMoonInternal = 'black';
var colorMoonOutline = '#0b303f';
var moonCheekSize = 1;



// ----------------
// Background start
// ----------------

var stars = [];

var star = function() {
    this.offsetX = Math.floor(Math.random() * canvas.width);
    this.offsetY = Math.floor(Math.random() * canvas.height);
    this.brightness = Math.random();

    this.render = function() {
        context.beginPath();
        context.strokeStyle = 'rgba(255,255,255, ' + this.brightness + ')';
        context.lineWidth = 4;
        context.arc(
            this.offsetX,
            this.offsetY,
            2,
            0,
            Math.PI * 2,
            false
        );
        context.stroke();
    }
}



for (var i = 0; i < 100; i++) {
    var tempStar = new star();
    stars.push(tempStar);
}

// ---------
// Sun shape
// ---------

function drawSun() {



    // -----------
    // Sun outline
    // -----------

    context.beginPath();
    context.fillStyle = colorPlanet;
    context.strokeStyle = '#0b303f';
    context.lineWidth = 40;
    context.arc(
        canvas.width/2,
        canvas.height/2,
        160,
        0,
        Math.PI * 2,
        false
    );
    context.stroke();



    // -----------------------
    // Sun shadow & base color
    // -----------------------

    context.save();

    context.beginPath();
    context.fillStyle = '#fbae29';
    context.arc(
        canvas.width/2,
        canvas.height/2,
        160,
        0,
        Math.PI * 2,
        false
    );
    context.fill();

    context.clip();

    context.beginPath();
    context.fillStyle = '#fdc23e';
    context.arc(
        canvas.width/2 - 45,
        canvas.height/2 - 45,
        200,
        0,
        Math.PI * 2,
        false
    );
    context.fill();

    context.restore();



    // ---------
    // Sun spots
    // ---------

    context.beginPath();
    context.fillStyle = '#fbae29';
    context.arc(
        canvas.width/2 + 60,
        canvas.height/2 - 70,
        10,
        0,
        Math.PI * 2,
        false
    );
    context.fill();

    context.beginPath();
    context.fillStyle = '#fbae29';
    context.arc(
        canvas.width/2 - 40,
        canvas.height/2 - 100,
        5,
        0,
        Math.PI * 2,
        false
    );
    context.fill();

    context.beginPath();
    context.fillStyle = '#fbae29';
    context.arc(
        canvas.width/2 + 40,
        canvas.height/2 + 100,
        8,
        0,
        Math.PI * 2,
        false
    );
    context.fill();

    context.beginPath();
    context.fillStyle = '#fbae29';
    context.arc(
        canvas.width/2 - 50,
        canvas.height/2 + 120,
        4,
        0,
        Math.PI * 2,
        false
    );
    context.fill();

    context.beginPath();
    context.fillStyle = '#fbae29';
    context.arc(
        canvas.width/2 - 100,
        canvas.height/2 + 20,
        5,
        0,
        Math.PI * 2,
        false
    );
    context.fill();

    context.beginPath();
    context.fillStyle = '#fbae29';
    context.arc(
        canvas.width/2 + 100,
        canvas.height/2 - 20,
        5,
        0,
        Math.PI * 2,
        false
    );
    context.fill();



    // ---------
    // Sun smile
    // ---------

    var happinessPercent = (moon1.posZ * -1) / 50;
    var xOff = canvas.width/2 - 32;
    var yOff = canvas.height/2 + 60;

    context.beginPath();
    context.strokeStyle = colorPlanetInternal;
    context.lineWidth = 6;
    context.lineCap = 'round';
    context.moveTo(0 + xOff, 0 + yOff);
    context.bezierCurveTo(
        10 + xOff,
        (15 * happinessPercent) + yOff,
        54 + xOff,
        (15 * happinessPercent) + yOff,
        64 + xOff,
        0 + yOff
    );
    context.stroke();
    context.lineWidth = 2;



    // ------------
    // Sun left eye
    // ------------

    context.beginPath();
    context.fillStyle = colorPlanetInternal;
    context.arc(
        canvas.width/2 - 39,
        canvas.height/2 - 20,
        14,
        0,
        Math.PI * 2,
        false
    );
    context.fill();

    var movement = happinessPercent * 6;



    // -----------------
    // Sun left eye brow
    // -----------------

    context.beginPath();
    context.lineWidth = 6;
    context.strokeStyle = colorPlanetInternal;
    context.moveTo(
        canvas.width/2 + (-58),
        canvas.height/2 - (36 + movement)
    );
    context.lineTo(
        canvas.width/2 + (16 + -44),
        canvas.height/2 - (16 + 26 + movement)
    );
    context.stroke();
    context.lineWidth = 2;



    // ------------------
    // Sun right eye brow
    // ------------------

    context.beginPath();
    context.lineWidth = 6;
    context.strokeStyle = colorPlanetInternal;
    context.moveTo(
        canvas.width/2 + (58),
        canvas.height/2 - (36 + movement)
    );
    context.lineTo(
        canvas.width/2 + (-16 + 44),
        canvas.height/2 - (16 + 26 + movement)
    );
    context.stroke();
    context.lineWidth = 2;



    // -------------
    // Sun right eye
    // -------------

    context.beginPath();
    context.fillStyle = colorPlanetInternal;
    context.arc(
        canvas.width/2 + 40,
        canvas.height/2 - 20,
        14,
        0,
        Math.PI * 2,
        false
    );
    context.fill();
}



// ------------
// Planet shape
// ------------

function drawPlanet() {



    // --------------
    // Planet outline
    // --------------

    context.beginPath();
    context.strokeStyle = colorMoonOutline;
    context.lineWidth = 2 * moon1.scale;
    context.fillStyle = colorMoon;
    context.arc(
        moon1.screenX,
        moon1.screenY,
        moon1.dispSize*moon1.scale,
        0,
        Math.PI * 2,
        false
    );
    context.stroke();



    // ----------------------
    // Planet shadow and base
    // ----------------------

    context.save();

    context.beginPath();
    //Planet bottom right color
    //context.fillStyle = '#279aad';
    context.fillStyle = colorMoonShadow;
    context.arc(
        moon1.screenX,
        moon1.screenY,
        moon1.dispSize*moon1.scale,
        0,
        Math.PI * 2,
        false
    );
    context.fill();

    context.clip();

    context.beginPath();
    //Planet color
    //context.fillStyle = colorMoon;
    context.fillStyle = colorMoon;
    context.arc(
        moon1.screenX - (2.6 * moon1.scale),
        moon1.screenY - (2.6 * moon1.scale),
        (moon1.dispSize + 3) * moon1.scale,
        0,
        Math.PI * 2,
        false
    );
    context.fill();

    context.restore();



    // -------------
    // Planet cheeks
    // -------------

    context.beginPath();
    context.fillStyle = colorMoonCheeks;
    context.arc(
        moon1.screenX + (3 * moon1.scale),
        moon1.screenY + (1 * moon1.scale),
        0.4 * moon1.scale * moonCheekSize,
        0,
        Math.PI * 2,
        false
    );
    context.fill();

    context.beginPath();
    context.fillStyle = colorMoonCheeks;
    context.arc(
        moon1.screenX - (3 * moon1.scale),
        moon1.screenY + (1 * moon1.scale),
        0.4 * moon1.scale * moonCheekSize,
        0,
        Math.PI * 2,
        false
    );
    context.fill();



    // ---------------
    // Planet left eye
    // ---------------

    context.beginPath();
    context.fillStyle = colorMoonInternal;
    context.arc(
        moon1.screenX - (1.6 * moon1.scale),
        moon1.screenY - (0.4 * moon1.scale),
        0.5 * moon1.scale,
        0,
        Math.PI * 2,
        false
    );
    context.fill();



    // ----------------
    // Planet right eye
    // ----------------

    context.beginPath();
    context.fillStyle = colorMoonInternal;
    context.arc(
        moon1.screenX + (1.8 * moon1.scale),
        moon1.screenY - (0.4 * moon1.scale),
        0.5 * moon1.scale,
        0,
        Math.PI * 2,
        false
    );
    context.fill();



    // ------------
    // Planet smile
    // ------------

    var xOff = moon1.screenX - (1 * moon1.scale);
    var yOff = moon1.screenY + (1.8 * moon1.scale);

    context.beginPath();
    context.lineWidth = 0.4 * moon1.scale;
    context.lineCap = 'round';
    context.moveTo(0 + xOff, 0 + yOff);
    context.bezierCurveTo(
        (1 * moon1.scale) + xOff,
        (0.6 * moon1.scale) + yOff,
        (1.4 * moon1.scale) + xOff,
        (0.6 * moon1.scale) + yOff,
        (2.4 * moon1.scale) + xOff,
        0 + yOff
    );
    context.stroke();
    context.lineWidth = 2;
}




// ---------
// LIFECYCLE
// ---------

function update() {



    // ------------
    // Update state
    // ------------

    _projection.refZ = options.refZ;
    _projection.fLength = options.fLength;
    _projection.doProjection(moon1);
    _projection.rotateY(moon1, options.rotate);
    _projection.rotateX(moon1, options.rotate/2);



    // ------
    // Render
    // ------

    render();
}



function render() {



    // -----
    // Clear
    // -----

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.strokeStyle = '#303b50';
    context.lineWidth = 2;



    // -----------------------
    // Render background stars
    // -----------------------

    for (var i = 0; i < stars.length; i++) {
        stars[i].render();
    }



    // ---------------------
    // Draw the sun and moon
    // ---------------------
    if(moon1.posZ < 0) {
        drawSun();
        drawPlanet();
    } else {
        drawPlanet();
        drawSun();
    }


    // ----
    // Loop
    // ----

    requestAnimationFrame(update);

}



// -------------
// 3D Projection
// -------------

var Basic3DProjection = function() {

    this.projCenterX = 0;
    this.projCenterY = 0;
    this.fLength = 400;
    this.refZ = 400;

    this.getScaleFromZ = function(z) {
        if (this.fLength +z == 0) {
            return 0.001;
        } else {
            return this.refZ/(this.fLength+z);
        }
    }

    this.doProjection = function(_object) {

        var x	= _object.posX*this.getScaleFromZ(_object.posZ)+this.projCenterX;
        var y	= _object.posY*this.getScaleFromZ(_object.posZ)+this.projCenterY;
        var y0z0	= this.getScaleFromZ(0);

        _object.screenX = x;
        _object.screenY = y-y0z0;
        _object.scale = this.getScaleFromZ(_object.posZ);
        _object.pastViewPoint = _object.posZ > this.refZ;

    }

    this.rotateY = function(object, ang) {
        var _cos = Math.cos(ang);
        var _sin = Math.sin(ang);

        var tz = object.posZ * _cos - object.posX * _sin;
        var tx = object.posZ * _sin + object.posX * _cos;
        object.posX = tx;
        object.posZ = tz;
        this.doProjection(object);
    }

    this.rotateX = function(object, ang) {
        var _cos = Math.cos(ang);
        var _sin = Math.sin(ang);

        var ty = object.posY * _cos - object.posZ * _sin;
        var tz = object.posY * _sin + object.posZ * _cos;
        object.posY = ty;
        object.posZ = tz;
        this.doProjection(object);
    }

    this.rotateZ = function(object, ang) {
        var _cos = Math.cos(ang);
        var _sin = Math.sin(ang);

        var object = objects[i];
        var tx = object.posX * _cos - object.posY * _sin;
        var ty = object.posX * _sin + object.posY * _cos;
        object.posX = tx;
        object.posY = ty;
        this.doProjection(object);
    }

}

var _projection = new Basic3DProjection();
_projection.projCenterX	= canvas.width/2;
_projection.projCenterY	= canvas.height/2;



// --------
// 3D Shape
// --------

var Basic3DObject = function (x, y, z, size) {

    this.posX = x;
    this.posY = y;
    this.posZ = z;
    this.dispSize = size;

    this.screenX = 0;
    this.screenY = 0;

    this.scale = 1;
    this.pastViewPoint = false;

}

var moon1 = new Basic3DObject(0, 0, 50, 6);



// ------
// Custom
// ------
if (state.id == 2) {}
requestAnimationFrame(update);



// -------------
// Window resize
// -------------

window.addEventListener('resize', function() {
    canvas.width = document.body.clientWidth * 2;
    canvas.height = document.body.clientHeight * 2;

    _projection.projCenterX	= canvas.width/2;
    _projection.projCenterY	= canvas.height/2;

    stars = [];

    for (var i = 0; i < 100; i++) {
        var tempStar = new star();
        stars.push(tempStar);
    }
});
