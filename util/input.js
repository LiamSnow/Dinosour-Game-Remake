//Input.js

window.addEventListener('keyup', keyUp, false); 
window.addEventListener('keydown', keyDown, false);
window.addEventListener('mousedown', mouseDown, false);
function keyUp(e) {
    if (e.code == "KeyS" || e.code == "ArrowDown") {
        Player.crouching = false;
    }
}
function keyDown(e) {
    if (e.code == "Space" || e.code == "KeyW" || e.code == "ArrowUp") {
        if (inGame) {
            Player.jump();
        }
        else {
            start();
        }
    }

    if (e.code == "KeyS" || e.code == "ArrowDown") {
        Player.crouching = true;
    }
}
function mouseDown(e) {
    if (inGame == false) {
        start();
    }
}