// Cactus.js

class CactusObject {
    constructor (x, big, image) {
        this.x = x;
        this.lastX = this.x;
        this.big = big;
        this.image = image;
    }

    draw() {
        Display.context.clearRect(this.lastX, 143, 55, 43);
        this.image.drawImage(this.x - Player.x, 143);

        this.lastX = this.x - Player.x;

        // Display.context.beginPath();
        // Display.context.rect(this.lastX, 143, 23, 49);
        // Display.context.stroke();
    }

    isColliding(box1) {
        return Collision.isColliding(box1, {
            x: this.lastX, 
            y: 143,
            width: 23, 
            height: 49
        });
    }
}

var CactusHandler = new class cactus_handler_class {
    constructor() {
        this.images = {
            big1: new CanvasImage("images/cactus_thicc1.png")
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
        this.cacti.push(new CactusObject(Player.x + 800 + (Math.random() * 400), true, this.images.big1))
    }

    reset() {
        this.cacti = [];
    }
}