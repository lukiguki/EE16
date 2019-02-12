window.onload = start();

function start() {
    const canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    /* variablar */
    var spelare = {
        x: 0,
        y: 0
    };
    var monster = {
        x: 0,
        y: 0
    };
    var map = [];

    var imgSpelare = new Image();
    imgSpelare.src = "./sprites/sprite1.png";
    var imgMonster = new Image();
    imgMonster.src = "./sprites/monster.png";
    function ritaKloss(x, y) {
        ctx.beginPath();
        ctx.rect(x, y, 40, 40);
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.closePath();
    }
    function ritaSpelare(x, y) {
        ctx.beginPath();
        ctx.drawImage(imgSpelare, x * 40 + 5, y * 40 + 5, 30, 30);
        ctx.closePath();
    }
    /* monster */
    function ritaMonster(x, y) {
        ctx.beginPath();
        ctx.drawImage(imgMonster, x * 40 + 5, y * 40 + 5, 30, 30);
        ctx.closePath();
    }
    /* rÖRA GUBBEN */
    document.addEventListener("keydown", uppdateraSpelare);
    function uppdateraSpelare(e) {
        var gamlaX = spelare.x;
        var gamlaY = spelare.y;

        if (e.key == "ArrowLeft"){
            spelare.x -= 1;
        }
        if (e.key == "ArrowRight"){
            spelare.x += 1;
        }
        if (e.key == "ArrowUp"){
            spelare.y -= 1;
        }
        if (e.key == "ArrowDown"){
            spelare.y += 1;
        }

        if (map[spelare.y][spelare.x] == 1) {
            spelare.x = gamlaX;
            spelare.y = gamlaY;
        }
    }
    function uppdateraMonster(params) {
        gamlaMX = monster.x;
        gamlaMY = monster.y;
        monster.x += Math.ceil(Math.random() * 3 - 2);
        monster.y += Math.ceil(Math.random() * 3 - 2);

        /* if (monster.x < 0) {
            monster.x = 14;
        }
        if (monster.x > 14) {
            monster.x = 0;
        }
        if (monster.y < 0) {
            monster.y = 14;
        }
        if (monster.y > 14) {
            monster.y = 0;
        } */
        if (map[monster.y][monster.x] == 1) {
            monster.x = gamlaMX;
            monster.y = gamlaMY;
        }
    }
    function diePlz() {
        if (monster.x == player.x) {
            
        }
    }

    setInterval(uppdateraMonster, 500);
/* rita ut laborynten */
    function ritaKarta() {
        for (let j = 0; j < 15; j++) {
            /* sidled = x */
            for (let i = 0; i < 15; i++) {
                if (map[j][i] == 1) {
                    ritaKloss(i * 40, j * 40);
                    
                }
            }
        }
    }
    /* reset function */
    function reset() {
        spelare.x = 1;
        spelare.y = 1;
        monster.x = 2;
        monster.y = 13;
    }

    /* Innan spelet */
    map = [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1],
        [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1],
        [1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1],
        [1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1],
        [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1],
        [1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1],
        [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1],
        [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1],
        [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ];

    reset();
    function gameLoop() {
        ctx.clearRect(0, 0, 800, 600);
        ritaKarta();
        ritaSpelare(spelare.x, spelare.y);
        ritaMonster(monster.x, monster.y);
        
        requestAnimationFrame(gameLoop);
    }
    gameLoop();
}