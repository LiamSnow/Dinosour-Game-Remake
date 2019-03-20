// Player.js
// https://www.spriters-resource.com/fullview/78171/

var Player = new class player_class {
    constructor() {
        this.images = {
            idle: new CanvasImage("images/sprite_idle.png"),
            run1: new CanvasImage("images/sprite_run1.png"),
            run2: new CanvasImage("images/sprite_run2.png"),
            crouch1: new CanvasImage("images/sprite_crouch1.png"),
            crouch2: new CanvasImage("images/sprite_crouch2.png"),
            dead: new CanvasImage("images/sprite_dead.png")
        };
        this.reset();
    }

    clear() {
        Display.context.clearRect(100, this.lastY-1, 55, 43+1);
    }

    update() {
        this.runIndex += 1;
        if (this.runIndex > 10)
            this.runIndex = 0;

        var y = 150;
        if (this.jumping) {
            y += -100 * (-4 * (this.jumpIndex - 0.5) * (this.jumpIndex - 0.5) + 1);
            this.jumpIndex += (this.crouching ? 0.045 : 0.035) + (score * 0.0005);
            if (this.jumpIndex >= 1)
                this.jumping = false;
        }

        // Display.context.beginPath();
        // var hitbox = this.getHitbox();
        // Display.context.rect(hitbox.x, hitbox.y, hitbox.width, hitbox.height);
        // Display.context.stroke();

        (
            this.jumping ? (this.images.idle) : 
            (
                this.runIndex > 5 ? 
                (this.crouching ? this.images.crouch1 : this.images.run1) : 
                (this.crouching ? this.images.crouch2 : this.images.run2)
            )
        ).drawImage(
            100, y);

        this.lastY = y;
        this.lastX = this.x;
        this.x += 6 + (score * 0.2);
    }

    jump() {
        if (this.jumping == false) {
            this.jumping = true;
            this.jumpIndex = 0;
        }
    }

    getHitbox() {
        return { 
            x: 5 + 100, 
            y: 5 + this.lastY + (this.crouching ? 18 : 0), 
            width: -10 + 40 + (this.crouching ? 14 : 0), 
            height: -10 + 25 + (this.crouching ? 0 : 18)
        };
    }

    reset() {
        this.runIndex = 0;
        this.jumping = false;
        this.jumpIndex = 0;
        this.x = 0;
        this.lastX = this.x;
        this.lastY = 150;
        this.crouching = false;
    }
}