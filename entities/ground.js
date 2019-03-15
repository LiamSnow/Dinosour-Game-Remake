//Ground.js

var Ground = new class ground_class {
    constructor() {
        this.images = {
            default: new CanvasImage("images/ground_default.png"),
            hump1: new CanvasImage("images/ground_hump1.png"),
            hump2: new CanvasImage("images/ground_hump2.png"),
            cloud: new CanvasImage("images/cloud.png")
        };
        this.reset();
    }

    update() {
        this.images.default.drawImage(-Player.x % 724, 180);
        this.images.default.drawImage(-Player.x % 724 + 724, 180);

        for (var i = 0; i < this.humps.length; i++) {
            (this.humps[i][1] ? this.images.hump1 : this.images.hump2).drawImage(
                -Player.x + this.humps[i][0], 184);
            if (-Player.x + this.humps[i][0] < -45) {
                this.humps[i][0] = Player.x + 1200 + Math.random() * 200; 
            }
        }

        Display.context.clearRect(0, 0, Display.width, 91);
        for (var i = 0; i < this.clouds.length; i++) {
            this.images.cloud.drawImage(
                this.clouds[i][0], 
                50 + this.clouds[i][1]
            );
            this.clouds[i][0] -= 3;
            if (this.clouds[i][0] < -54) {
                this.clouds[i][0] = 600;
            }
        }
    }

    reset() {
        this.humps = [
            [300, true],
            [600, false],
            [900, true],
            [1200, false]
        ];

        this.clouds = [
            [0, 0], 
            [300, 20], 
            [600, -15],
            [900, 10],
            [1200, -30], 
            [1800, 40]
        ];
    }
}