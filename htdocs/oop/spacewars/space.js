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

    raket.x = 300;
    raket.y = 300;
    /* starta ritande */
    function ritaRacket(x, y) {
        raket.x = raket.h * Math.cos(raket.v);
        raket.y = raket.h * Math.cos(raket.v);
        ctx.beginPath();
        ctx.rotate(raket.v);
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
            raket.v -= 10;
        }
        if (keys["ArrowRight"]) {
            raket.v += 10;
        }
        if (keys["ArrowUp"]) {
            raket.h -= 10;
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
        raket.x = 300;
        raket.y = 300;
        raket.v = 0;
        raket.h = 0;
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