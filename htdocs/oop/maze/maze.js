window.onload = start();

function start() {
    const canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    /* variablar */
    var spelare = {
        x: 0,
        y: 0
    };
    var map = [];
    var points;
    /* Random mynt positioner */


    /* låt inte mynt spawna i väggarna */

    var imgSpelare = new Image();
    imgSpelare.src = "./sprites/sprite1.png";

    function ritaKloss(x, y) {
        ctx.beginPath();
        ctx.rect(x, y, 40, 40);
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.closePath();
    }

    function ritaSpelare(x, y) {
        ctx.beginPath();
        ctx.drawImage(imgSpelare, spelare.x * 40 + 5, spelare.y * 40 + 5, 30, 30);
        ctx.closePath();
    }
    /* monster */
    


    /* rÖRA GUBBEN */
    document.addEventListener("keydown", uppdateraSpelare);

    function uppdateraSpelare(e) {
        var gamlaX = spelare.x;
        var gamlaY = spelare.y;

        if (e.key == "ArrowLeft") {
            spelare.x -= 1;
        }
        if (e.key == "ArrowRight") {
            spelare.x += 1;
        }
        if (e.key == "ArrowUp") {
            spelare.y -= 1;
        }
        if (e.key == "ArrowDown") {
            spelare.y += 1;
        }

        if (map[spelare.y][spelare.x] == 1) {
            spelare.x = gamlaX;
            spelare.y = gamlaY;
        }
    }
    class Mynt {
        constructor() {
            this.x = 0;
            this.y = 0;
            this.imgMynt = new Image();
            this.imgMynt.src = "./sprites/mynt.png";
            this.live = true;
        }
        reset() {
            this.x = Math.ceil(Math.random() * 13 + 1);
            this.x = Math.ceil(Math.random() * 13 + 1);
        }
        ritaMynt(x, y) {
            ctx.beginPath();
            ctx.drawImage(this.imgMynt, this.x * 40 + 5, this.y * 40 + 5, 30, 30);
            ctx.closePath();
        }
        myntSpawn() {
            if (this.live) {
                if (map[this.y][this.x] == 1) {
                    this.x = Math.ceil(Math.random() * 13 + 1);
                    this.y = Math.ceil(Math.random() * 13 + 1);
                } else {
                    this.ritaMynt(this.x, this.y);
                }
            }
        }
        getPoints() {
            if (this.live && (spelare.x == this.x) && (spelare.y == this.y)) {
                points++;
                this.live = false;
            }
        }
    }
    class monster {
        constructor() {
            this.imgMonster = new Image();
            this.imgMonster.src = "./sprites/monster.png";
            this.x = 0;
            this.y = 0;
        }
        reset() {
            this.x = 2;
            this.y = 13;
        }
        ritaMonster(x, y) {
            ctx.beginPath();
            ctx.drawImage(this.imgMonster, this.x * 40 + 5, this.y * 40 + 5, 30, 30);
            ctx.closePath();
        }
        uppdateraMonster() {
            this.gamlaMX = this.x;
            this.gamlaMY = this.y;
            this.x += Math.ceil(Math.random() * 3 - 2);
            this.y += Math.ceil(Math.random() * 3 - 2);
            if (map[this.y][this.x] == 1) {
                this.x = gamlaMX;
                this.y = gamlaMY;
    
            }
        }
    }
    var mynt1 = new Mynt();
    var mynt2 = new Mynt();
    var monster1 = new monster();
    var monster2 = new monster();

    function highscorePoints(points) {
        ctx.font = "16px Arial";
        ctx.fillStyle = "#FFF";
        ctx.fillText("Points: " + points, 300, 20);
    }



    setInterval(monster1.uppdateraMonster(), 100);
    setInterval(monster2.uppdateraMonster(), 100);
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
        points = 0;
        mynt1.reset();
        mynt2.reset();
        monster1.reset();
        monster2.reset();
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
        ritaSpelare();
        highscorePoints(points);
        mynt1.myntSpawn();
        mynt2.myntSpawn();
        mynt1.getPoints();
        mynt2.getPoints();
        monster1.ritaMonster();
        monster2.ritaMonster();


        if ((monster.x == spelare.x) && (monster.y == (spelare.y))) {
            alert("aaaaaaaa");
            reset();
        }
        if ((spelare.x == 2) && (spelare.y == 13)) {
            alert("Winner!");
        }

        requestAnimationFrame(gameLoop);
    }
    gameLoop();
}