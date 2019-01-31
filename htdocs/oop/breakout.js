window.onload = start;

function start() {
    const canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    /* Rita ett streck */

    /* ansikte */

    var bollX, bollY, racketX, racketY, points, lives;
    
    racketX = 10;
    racketY = 100;
    points = 0;
    lives = 3;

    function boll(x, y) {
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI * 2, false);
        ctx.fillStyle = "yellow";
        ctx.fill();
        ctx.rect(100, 170, 300, 50);
        ctx.closePath();
    }

    function racket(x, y) {
        ctx.beginPath();
        ctx.rect(x, y, 10, 70);
        ctx.fillStyle = "orange";
        ctx.fill();
        ctx.closePath();
    }
    function reset() {
        bollX = 200;
        bollY = 400;
        dx = 6;
        dy = 6;
    }

    function highscorePoints(points) {
        ctx.font = "16px Arial";
        ctx.fillStyle = "#FFF";
        ctx.fillText("Points: " + points, 600, 20);
        ctx.fillText("Lives: " + lives, 300, 20);
    }
    document.addEventListener("keydown", flyttaRacket);

    function flyttaRacket(e) {
        console.log("Flytta");
        if (e.key == "ArrowUp") {
            racketY -= 20;
            if (racketY <= 10) {
                racketY = 0;
            }
        }
        if (e.key == "ArrowDown") {
            racketY += 20;
            if (racketY >= 530) {
                racketY = 530;
            }
        }
    }


    boll(bollX, bollY);

    reset();
    function loop() {
        /* sudda bort allt */
        ctx.clearRect(0, 0, 800, 600);


        boll(bollX, bollY);
        bollX += dx;
        bollY -= dy;


        if (bollY <= 0) {
            dy = -6;
        }
        /* if (bollX <= 0) {
            dx = 6;
        } */
        if (bollY >= 600) {
            dy = 6;
        }
        if (bollX >= 800) {
            dx = -6;
        }
        racket(racketX, racketY);
        /* Kolla om bollen ska studdsa */
        if (bollX <= 20) {
            if ((bollY >= racketY) && (bollY <= (racketY + 80))) {
                dx = 6;
                points += 1;

            } else {
                if (lives <= 1) {
                    alert("Game Over!");
                } else {
                lives -= 1;
                reset();
                }
            }
        }
        highscorePoints(points, lives);
        requestAnimationFrame(loop);
    }

    loop();
}