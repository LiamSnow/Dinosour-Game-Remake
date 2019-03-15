// Display.js

var Display = new class display_class {
    constructor() {
        this.canvas = document.querySelector("#canvas");
        
        this.sizeCanvas();
        window.addEventListener("resize", this.sizeCanvas, false);

        this.context = this.canvas.getContext("2d");
        //this.context.translate(0.5,0.5);
    }

    sizeCanvas() {
        var width = window.innerWidth;//document.body.getBoundingClientRect().width;
        var height = window.innerHeight;//document.body.getBoundingClientRect().height;
        var pixelRatio = window.devicePixelRatio || 1;
        width *= pixelRatio;
        height *= pixelRatio;
        width = Math.floor(width / 2.5);
        height = Math.floor(height / 2.5);

        this.canvas.width = width;
        this.canvas.height = height;
        this.width = width;
        this.height = height;
    }
}

class CanvasImage {
    constructor(url) {
        var self = this;
        self.image = new Image();
        self.image.onload = function(){
            self.imageLoaded = true;
        };
        self.image.src = url;
    }

    drawImage(x, y) {
        if (this.imageLoaded == true) {
            Display.context.drawImage(this.image, x, y);
        }
    }
}