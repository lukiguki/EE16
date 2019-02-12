window.onload = start;

function start() {
    const canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    /* Rita ett streck */

    /* ansikte */

    var bollX, bollY, racketX, racketY, dx, dy, antalKlossar;
    var keys = [];
    var klossar = [];

    antalKlossar = 0;


    racketX = 250;
    racketY = 580;

    dy = Math.ceil(Math.random() * 5 + 3);

    function ritaBoll(x, y) {
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI * 2, false);
        ctx.fillStyle = "yellow";
        ctx.fill();
        ctx.rect(100, 170, 300, 50);
        ctx.closePath();
    }

    function ritaRacket(x, y) {
        ctx.beginPath();
        ctx.rect(x, y, 100, 10);
        ctx.fillStyle = "orange";
        ctx.fill();
        ctx.closePath();
    }

    function ritaKloss(x, y) {
        ctx.beginPath();
        ctx.rect(x, y, 100, 30);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.closePath();
    }

    function skapaAllaKlossar() {
        for (let j = 1; j < 4; j++) {
            klossar[j] = [];
            for (let i = 0; i < 6; i++) {
                klossar[j][i] = {
                    x: 20 + i * 130,
                    y: j * 50,
                    hit: false
                };
                antalKlossar++;
            }
        }
    }

    function uppdateraAllaKlossar() {
        for (let j = 0; j < 4; j++) {
            for (let i = 0; i < 6; i++) {
                if (!klossar[j][i].hit) {
                    ritaKloss(20 + i * 130, j * 50);
                }
            }
        }
    }

    function traffaKloss() {
        for (let j = 1; j < 4; j++) {
            for (let i = 0; i < 6; i++) {
                if (!klossar[j][i].hit){
                    if ((bollX >= klossar[j][i].x &&
                            bollX <= (klossar[j][i].x + 130)) &&
                        (bollY >= klossar[j][i].y) &&
                        bollY <= (klossar[j][i].y + 30)) {
                        klossar[j][i].hit = true;
                        dy = -dy;
                        antalKlossar--;
                    }
                }
            }
        }
    }

    function reset() {
        bollX = 390;
        bollY = 200;
        dx = -1;
        dy = -5;
        skapaAllaKlossar();
    }


    document.addEventListener("keydown", tryckPil);
    document.addEventListener("keyup", slappPil);

    function tryckPil(e) {
        keys[e.key] = true;
    }

    function slappPil(e) {
        keys[e.key] = false;
    }

    function uppdateraRacket() {
        if (keys["ArrowLeft"] && racketX > 0) {
            racketX -= 10;
        }
        if (keys["ArrowRight"] && racketX < 720) {
            racketX += 10;
        }
    }

    ritaBoll(bollX, bollY);

    reset();
    

    function loop() {
        /* sudda bort allt */
        ctx.clearRect(0, 0, 800, 600);


        ritaBoll(bollX, bollY);
        bollX += dx;
        bollY -= dy;


        if (bollY <= 0) {
            dy = Math.ceil(Math.random() * 5 + -7);
        }
        if (bollX <= 0) {
            dx = Math.ceil(Math.random() * 5 + 2);
        }
        /* if (bollY >= 600) {
            dy = 6;
        } */
        if (bollX >= 800) {
            dx = Math.ceil(Math.random() * 5 + -7);
        }
        uppdateraRacket();
        ritaRacket(racketX, racketY);
        uppdateraAllaKlossar();
        traffaKloss();
        /* Kolla om bollen ska studdsa */
        if (bollY >= 580) {
            if ((bollX >= racketX) && (bollX <= (racketX + 110))) {
                dy = Math.ceil(Math.random() * 5 + 2);

            } else {
                alert("Game Over!");
                reset();
            }
            if (antalKlossar == 0) {
                alert("You win!");
                reset();
            }
        }
        requestAnimationFrame(loop);
    }

    loop();
}