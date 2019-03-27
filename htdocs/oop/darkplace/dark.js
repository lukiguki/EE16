window.onload = start();

function start() {
    const canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    /* start variablar */
    var map = [];
    var keyExist;
    var haveKey = "";

    var spelData = [
        {
            spelareX: 1,
            spelareY: 1,
            yoteX: 1,
            yoteY: 13,
            yoteHealth: 10,
            keyX: 9,
            keyY: 5,
            hatchX: 13,
            hatchY: 11,
            map: [
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
            ]
        },
        {
            spelareX: 13,
            spelareY: 11,
            yoteX: 4,
            yoteY: 13,
            yoteHealth: 15,
            keyX: 10,
            keyY: 11,
            hatchX: 7,
            hatchY: 7,
            map: [
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
                [1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
                [1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1],
                [1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1],
                [1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1],
                [1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1],
                [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1],
                [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1],
                [1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            ]
        },
        {
            spelareX: 7,
            spelareY: 7,
            yoteX: 1,
            yoteY: 13,
            yoteHealth: 15,
            keyX: 11,
            keyY: 3,
            hatchX: 3,
            hatchY: 7,
            map: [
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
                [1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1],
                [1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1],
                [1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1],
                [1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
                [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
                [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
                [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
                [1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
                [1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1],
                [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1],
                [1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            ]
        },
        {
            spelareX: 3,
            spelareY: 7,
            yoteX: 9,
            yoteY: 1,
            yoteHealth: 15,
            keyX: 11,
            keyY: 3,
            hatchX: 13,
            hatchY: 1,
            map: [
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
                [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1],
                [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
                [1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1],
                [1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1],
                [1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1],
                [1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1],
                [1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1],
                [1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1],
                [1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1],
                [1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1],
                [1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1],
                [1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            ]
        },
        {
            spelareX: 13,
            spelareY: 1,
            yoteX: 9,
            yoteY: 1,
            yoteHealth: 15,
            keyX: 13,
            keyY: 8,
            hatchX: 1,
            hatchY: 5,
            map: [
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
                [1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1],
                [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
                [1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1],
                [1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1],
                [1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1],
                [1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1],
                [1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1],
                [1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            ]
        }
    ];

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
            this.x = spelData[hatch.level].spelareX;
            this.y = spelData[hatch.level].spelareY;
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
    /* monster Yote*/
    var imgYote = new Image();
    imgYote.src = "./sprites/monsterYote.png";

    class Yote {
        constructor() {
            this.imgYote = new Image();
            this.imgYote.src = "./sprites/monsterYote.png";
            this.x = 0;
            this.y = 0;
            this.health = 0;
        }
        ritaYote(x, y) {
            if ((this.x >= spelare.x - 1) && (this.x <= spelare.x + 1) && (this.y >= spelare.y - 1) && (this.y <= spelare.y + 1)) {
                ctx.beginPath();
                ctx.drawImage(this.imgYote, this.x * 40 + 5, this.y * 40 + 5, 30, 30);
                ctx.closePath();
            }
        }
        reset() {
            this.x = spelData[hatch.level].yoteX;
            this.y = spelData[hatch.level].yoteY;
            this.health = spelData[hatch.level].yoteHealth;
        }
        actionYote() {
            if (this.health >= 1) {
                this.ritaYote();
                if ((this.x >= spelare.x - 1) && (this.x <= spelare.x + 1) && (this.y >= spelare.y - 1) && (this.y <= spelare.y + 1)) {
                    if (spelare.time == 0) {
                        spelare.time = Date.now();
                    } else {
                        spamSpace();
                        spelare.fight = true;
                        var fightTime = Date.now();
                        if (fightTime - spelare.time >= 3000) {
                            death();
                        }
                    }
                }
            }
            if (this.health <= 0) {
                spelare.time = 0;
                spelare.fight = false;
            }
        }
    }
    var yote = new Yote();
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
            this.x = spelData[hatch.level].keyX;
            this.y = spelData[hatch.level].keyY;
            this.live = true;
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
    class Hatch {
        constructor() {
            this.imgHatch = new Image();
            this.imgHatch.src = "./sprites/hatch.png";
            this.x = 0;
            this.y = 0;
            this.level = 0;
        }
        ritaHatch(x, y) {
            if ((this.x >= spelare.x - 1) && (this.x <= spelare.x + 1) && (this.y >= spelare.y - 1) && (this.y <= spelare.y + 1)) {
                ctx.beginPath();
                ctx.drawImage(this.imgHatch, this.x * 40 + 5, this.y * 40, 30, 40);
                ctx.closePath();
            }
        }
        reset() {
            this.x = spelData[this.level].hatchX;
            this.y = spelData[this.level].hatchY;
        }
    }
    var hatch = new Hatch();

    function havingKey(haveKey) {
        ctx.font = "16px Arial";
        ctx.fillStyle = "#FFF";
        ctx.fillText("Key: " + haveKey, 300, 20);
    }
    function spamSpace() {
        ctx.font = "30px Arial";
        ctx.fillStyle = "#FFF";
        ctx.fillText("Rapidly Press Spacebar", 100, 300);
    }

    function keyHatch() {
        if ((spelare.x == hatch.x) && (spelare.y == hatch.y) && (keyExist)) {
            hatch.level++;
            reset();
        }
    }
    /* olika funktioner */
    function death() {
        reset();
    }
    /* reset funktion */
    function reset() {
        map = spelData[hatch.level].map;
        spelare.reset();
        yote.reset();
        key1.reset();
        hatch.reset();
        keyExist = false;
        haveKey = "You don't have the key";
    }

    /* starta spel */
    reset();

    function gameLoop() {
        ctx.clearRect(0, 0, 800, 600);
        ritaKarta();
        spelare.ritaSpelare();
        hatch.ritaHatch();
        yote.actionYote();
        havingKey(haveKey);
        key1.keySpawn();
        key1.getPoints();
        keyHatch();

        requestAnimationFrame(gameLoop);
    }
    gameLoop();
}