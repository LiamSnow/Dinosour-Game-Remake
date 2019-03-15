// Main.js

var inGame = true;
var score = 0;

function loop() {
    //Display.context.clearRect(0, 0, Display.width, Display.height);
    if (inGame) {
        Player.clear();
        Ground.update();
        CactusHandler.update(); 
        Player.update();
    }
}
setInterval(loop, 20);

function reset() {
    alert("You died");
    inGame = false;
    score = 0;

    CactusHandler.reset();
    Player.reset();
    Ground.reset();

    Display.context.clearRect(0, 0, 10000, 10000);
}