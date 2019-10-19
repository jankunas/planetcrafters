function MainStar(x, y, brightness, width) {
    this.offsetX = x;
    this.offsetY = y;
    this.brightness = brightness;
    this.width = width;

    this.render = function() {
        context.beginPath();
        context.strokeStyle = 'rgba(255,255,255, ' + this.brightness + ')';
        context.lineWidth = width;
        context.fillStyle = "#fdc23e";
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