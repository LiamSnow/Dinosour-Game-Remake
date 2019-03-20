// Main.js

var inGame = true;
var score = 10;

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

var deathScreen = {
    gameOver: new CanvasImage("images/game_over.png"),
    restart: new CanvasImage("images/restart.png")
};
function reset() {
    deathScreen.gameOver.drawImage((Display.width/2.0)-(191/2.0), (Display.height/2.0)-60);
    deathScreen.restart.drawImage((Display.width/2.0)-(34/2.0), (Display.height/2.0)-40);
    
    inGame = false;
    score = 0;
}
function start() {
    Display.context.clearRect(0, 0, 10000, 10000);
    inGame = true;
    score = 0;

    CactusHandler.reset();
    Player.reset();
    Ground.reset();
}