// Scoreboard.js

var Scoreboard = new class scoreboard_class {
    contructor() {
        this.images = {
            n0: new CanvasImage("images/number_0.png"),
            n1: new CanvasImage("images/number_1.png"),
            n2: new CanvasImage("images/number_2.png"),
            n3: new CanvasImage("images/number_3.png"),
            n4: new CanvasImage("images/number_4.png"),
            n5: new CanvasImage("images/number_5.png"),
            n6: new CanvasImage("images/number_6.png"),
            n7: new CanvasImage("images/number_7.png"),
            n8: new CanvasImage("images/number_8.png"),
            n9: new CanvasImage("images/number_9.png")
        };
    }

    update() {
        this.images.n0.drawImage(50, 50);
    }
}