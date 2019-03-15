//Input.js

window.addEventListener('keyup', keyUp, false); 
window.addEventListener('keydown', keyDown, false);
function keyUp(e) {
    if (e.code == "KeyS" || e.code == "ArrowDown") {
        Player.crouching = false;
    }
}
function keyDown(e) {
    if (e.code == "Space") {
        if (inGame) {
            Player.jump();
        }
        else {
            inGame = true;
        }
    }

    if (e.code == "KeyS" || e.code == "ArrowDown") {
        Player.crouching = true;
    }
}