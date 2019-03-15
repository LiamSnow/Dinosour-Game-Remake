// Cactus.js

class CactusObject {
    constructor (x, width, height, image, image2) {
        this.x = x;
        this.lastX = this.x;
        this.width = width;
        this.height = height;
        this.image = image;
        this.yOff = 0;
        if (image2) {
            this.imageIndex = 0;
            this.image2 = image2;
            var yo = Math.round(Math.random() * 2);
            this.yOff = yo == 0 ? -5 : (yo == 1 ? 30 : 45);
        }
        this.draw.lastY = (190 - this.height) - this.yOff;
    }

    draw() {
        var y = (190 - this.height) - this.yOff;

        if (this.image2)
            this.imageIndex += 0.1;

        Display.context.clearRect(this.lastX, y, this.width, this.height);
        
        (this.image2 ? (Math.round(this.imageIndex % 2) == 0 ? this.image : this.image2) : this.image).drawImage(this.x - Player.x, y);

        this.lastX = this.x - Player.x;

        // Display.context.beginPath();
        // Display.context.rect(this.lastX, y, this.width, this.height);
        // Display.context.stroke();
        this.lastY = y;
    }

    isColliding(box1) {
        return Collision.isColliding(box1, {
            x: this.lastX, 
            y: this.lastY,
            width: this.width, 
            height: this.height
        });
    }
}

var CactusHandler = new class cactus_handler_class {
    constructor() {
        this.types = {
            short_single: [
                15, 33,
                new CanvasImage("images/cactus_short_single.png")
            ],
            short_double: [
                32, 33,
                new CanvasImage("images/cactus_short_double.png")
            ],
            short_triple: [
                49, 33, 
                new CanvasImage("images/cactus_short_triple.png")
            ],
            tall_single: [
                23, 48,
                new CanvasImage("images/cactus_tall_single.png")
            ],
            tall_double: [
                48, 48,
                new CanvasImage("images/cactus_tall_double.png")
            ],
            tall_triple: [
                73, 48,
                new CanvasImage("images/cactus_tall_triple.png")
            ],
            bird: [
                42, 36,
                new CanvasImage("images/bird_1.png"),
                new CanvasImage("images/bird_2.png")
            ]
        };
        this.reset();
    }

    update() {
        this.cacti.forEach(function (cactus) {
            cactus.draw();
            if (cactus.isColliding(Player.getHitbox())) {
                reset();
            }
        });

        if (Math.random() > 0.98) {
            this.spawn();
        }
    }

    spawn() {
        var x = Player.x + 800 + (Math.random() * 400);
        var type = Math.round(Math.random() * 6);
        type = 6;
        var content = this.types[Object.keys(this.types)[type]];
        this.cacti.push(
            new CactusObject(
                x,
                content[0],
                content[1],
                content[2],
                content[3]
            )
        )
    }

    reset() {
        this.cacti = [];
    }
}