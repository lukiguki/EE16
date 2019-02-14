window.onload = start();

function start() {
    /* starta skapa spel */
    const canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    /* start variablar */
    var raket = {
        x: 0,
        y: 0,
        v: 0,
        h: 0
    }
    var keys = [];

    var imgSpelare = new Image();
    imgSpelare.src = "./sprites/raket.png";

    raket.x = 250;
    raket.y = 580;
    /* starta ritande */
    function ritaRacket(x, y) {
        ctx.beginPath();
        ctx.drawImage(imgSpelare, x, y, 30, 30);

        ctx.closePath();
    }
    /* karaktär settings */
    document.addEventListener("keydown", tryckPil);
    document.addEventListener("keyup", slappPil);

    function tryckPil(e) {
        keys[e.key] = true;
    }

    function slappPil(e) {
        keys[e.key] = false;
    }

    function uppdateraRacket() {
        if (keys["ArrowLeft"]) {
            raket.x -= 10;
        }
        if (keys["ArrowRight"]) {
            raket.x += 10;
        }
        if (keys["ArrowUp"]) {
            raket.y -= 10;
        }
        if (keys["ArrowDown"]) {
            raket.y += 10;
        }
        if (raket.x < 0) {
            raket.x = 800;
        }
        if (raket.x > 800) {
            raket.x = 0;
        }
        if (raket.y < 0) {
            raket.y = 600;
        }
        if (raket.y > 600) {
            raket.y = 0;
        }
        /* gå till anrdasidan */
    }

    function reset() {
        raket.x = 250;
        raket.y = 580;
    }
    /* Starta spel */
    function gameLoop() {
        /* Game start */
        ctx.clearRect(0, 0, 800, 600);
        /* game ongoing */
        ritaRacket(raket.x, raket.y);
        uppdateraRacket();

        requestAnimationFrame(gameLoop);
    }
    gameLoop();
}