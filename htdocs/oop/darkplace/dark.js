window.onload = start();

function start() {
    const canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    /* start variablar */
    var map = [];
    var keyExist;
    var haveKey = "";
    var yote = {
        x: 0,
        y: 0,
        health: 10
    };
    var hatch = {
        x: 0,
        y: 0
    };

    /* hela kartan, level1 */
    

    function ritaPath(x, y) {
        ctx.beginPath();
        ctx.rect(x, y, 40, 40);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.closePath();
    }

    function ritaKarta() {
        for (let j = 0; j < 15; j++) {
            /* sidled = x */
            for (let i = 0; i < 15; i++) {
                if ((i >= spelare.x - 1) && (i <= spelare.x + 1) && (j >= spelare.y - 1) && (j <= spelare.y + 1)) {
                    if (map[j][i] == 0) {
                        ritaPath(i * 40, j * 40);

                    }
                }
            }
        }
    }
    /* karaktären */
    class Spelare {
        constructor() {
            this.imgSpelare = new Image();
            this.imgSpelare.src = "./sprites/jeff.png";
            this.x = 0;
            this.y = 0;
            this.health = 3;
            this.fight = false;
            this.time = 0;
        }

        ritaSpelare(x, y) {
            ctx.beginPath();
            ctx.drawImage(this.imgSpelare, this.x * 40 + 5, this.y * 40 + 5, 20, 30);
            ctx.closePath();
        }

        reset() {
            this.fight = false;
            this.time = 0;
            this.x = 1;
            this.y = 1;
        }
    }
    var spelare = new Spelare();

    document.addEventListener("keydown", uppdateraSpelare);

    function uppdateraSpelare(e) {
        var gamlaX = spelare.x;
        var gamlaY = spelare.y;

        if (spelare.fight == false) {
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
        }
        if (e.key == " " && spelare.fight) {
            yote.health -= 1;
        }

        if (map[spelare.y][spelare.x] == 1) {
            spelare.x = gamlaX;
            spelare.y = gamlaY;
        }
    }

    function fightOver() {

    }
    /* monster Yote*/
    var imgYote = new Image();
    imgYote.src = "./sprites/monsterYote.png";

    function ritaYote(x, y) {
        if ((yote.x >= spelare.x - 1) && (yote.x <= spelare.x + 1) && (yote.y >= spelare.y - 1) && (yote.y <= spelare.y + 1)) {
            ctx.beginPath();
            ctx.drawImage(imgYote, yote.x * 40 + 5, yote.y * 40 + 5, 30, 30);
            ctx.closePath();
        }
    }

    function actionYote() {
        if (yote.health >= 1) {
            ritaYote();
            if ((yote.x >= spelare.x - 1) && (yote.x <= spelare.x + 1) && (yote.y >= spelare.y - 1) && (yote.y <= spelare.y + 1)) {
                if (spelare.time == 0) {
                    spelare.time = Date.now();
                } else {
                    spelare.fight = true;
                    var fightTime = Date.now();
                    if (fightTime - spelare.time >= 3000) {
                        death();
                    }
                }
            }
        }
        if (yote.health <= 0) {
            spelare.time = 0;
            spelare.fight = false;
        }
    }
    /* nyckeln */
    class Keys {
        constructor() {
            this.x = 0;
            this.y = 0;
            this.imgKey = new Image();
            this.imgKey.src = "./sprites/key.png";
            this.live = true;
        }
        reset() {
            this.x = 9;
            this.y = 5;
        }
        ritaKey(x, y) {
            ctx.beginPath();
            ctx.drawImage(this.imgKey, this.x * 40 + 5, this.y * 40, 30, 40);
            ctx.closePath();
        }
        keySpawn() {
            if ((this.x >= spelare.x - 1) && (this.x <= spelare.x + 1) && (this.y >= spelare.y - 1) && (this.y <= spelare.y + 1)) {
                if (this.live) {
                    this.ritaKey(this.x, this.y);
                }
            }
        }
        getPoints() {
            if (this.live && (spelare.x == this.x) && (spelare.y == this.y)) {
                /* points++; */
                this.live = false;
                keyExist = true;
                haveKey = "You have the key";
            }
        }
    }
    var key1 = new Keys();
    /* dörren */
    var imgHatch = new Image();
    imgHatch.src = "./sprites/hatch.png";

    function ritaHatch(x, y) {
        if ((hatch.x >= spelare.x - 1) && (hatch.x <= spelare.x + 1) && (hatch.y >= spelare.y - 1) && (hatch.y <= spelare.y + 1)) {
            ctx.beginPath();
            ctx.drawImage(imgHatch, hatch.x * 40 + 5, hatch.y * 40, 30, 40);
            ctx.closePath();
        }
    }

    function havingKey(haveKey) {
        ctx.font = "16px Arial";
        ctx.fillStyle = "#FFF";
        ctx.fillText("Key: " + haveKey, 300, 20);
    }
    function keyHatch() {
        if ((spelare.x == hatch.x) && (spelare.y == hatch.y) && ) {
            
        }
    }
    /* olika funktioner */
    function death() {
        reset();
    }
    /* reset funktion */
    function reset() {
        map = [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1],
            [1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1],
            [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1],
            [1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        ];
        yote.x = 1;
        yote.y = 13;
        yote.health = 10;
        spelare.reset();
        hatch.x = 13;
        hatch.y = 11;
        key1.reset();
        keyExist = false;
        haveKey = "You don't have the key";
    }

    /* starta spel */
    reset();

    function gameLoop() {
        ctx.clearRect(0, 0, 800, 600);
        ritaKarta();
        spelare.ritaSpelare();
        ritaHatch();
        actionYote();
        havingKey(haveKey);
        key1.keySpawn();
        key1.getPoints();

        requestAnimationFrame(gameLoop);
    }
    gameLoop();
}