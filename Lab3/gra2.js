const canvas = document.getElementById('gameCanvas');

const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let lives = 3;
let score = 0;
const zombies = [];
const zombieImage = new Image();
zombieImage.src = './images/walkingdead (1).png';

// animacja zombie
const spriteWidth = 200;
const spriteHeight = 310;
const totalFrames = 10;
let currentFrame = 0;
let frameDelay = 0;
const frameInterval = 5;

const heartImage = new Image();
heartImage.src = './images/full_heart.png';

const sadMusic = new Audio('./sad music.mp3');


function createZombie() {
    return {
        x: canvas.width, //umieszczenie maksymalnie po prawej
        y: Math.random() * (canvas.height - spriteHeight), // losowo na osi y
        size: Math.random() * 0.5 + 0.5, // losowe skalowanie
        speed: Math.random() * 2 + 1, // losowa prędkość
        delete: false //czy jest do usunięcia (bedzie sie zmieniac jak zostanie trafiony)
    };
}

function drawZombie(zombie) {
    ctx.drawImage(
        zombieImage,
        currentFrame * spriteWidth, // wybrana klatka
        0,
        spriteWidth,
        spriteHeight,
        zombie.x,
        zombie.y,
        spriteWidth * zombie.size, // skalowanie
        spriteHeight * zombie.size // skalowanie
    );
}

function updateZombie(zombie) {
    zombie.x -= zombie.speed;
    if (zombie.x + spriteWidth * zombie.size < 0) {
        zombie.delete = true;
        lives-=1;
        if (lives <= 0) {
            endGame();
        }
    }
}

canvas.addEventListener('click', (e) => {
    const rectangle = canvas.getBoundingClientRect();

    const scaleX = canvas.width / canvas.clientWidth;
    const scaleY = canvas.height / canvas.clientHeight;

    const mouseX = (e.clientX - rectangle.left) * scaleX;
    const mouseY = (e.clientY - rectangle.top) * scaleY;

    let hit = false;

    zombies.forEach((zombie) => {
        if (mouseX >= zombie.x && mouseX <= zombie.x + spriteWidth * zombie.size && mouseY >= zombie.y && mouseY <= zombie.y + spriteHeight * zombie.size) {
            zombie.delete = true;
            score += 20;
            hit = true;
        }
    });

    if (!hit) score -= 5;
});


function spawnZombie() {
    zombies.push(createZombie());
    setTimeout(spawnZombie, 2000);
}

function updateAnimationFrame() {
    frameDelay+=1;
    if (frameDelay >= frameInterval) {
        currentFrame = (currentFrame + 1) % totalFrames; // kolejna klatka
        frameDelay = 0;
    }
}

function drawUI() {
    ctx.fillStyle = 'white';
    ctx.font = '50px Arial';
    for (let i = 0; i < lives; i++) {
        ctx.drawImage(heartImage, 10 + i * 40, 20, 30, 30);
    }
    ctx.fillText(score, canvas.width - 100, 50);
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    updateAnimationFrame();
    drawUI();

    zombies.forEach((zombie, index) => {
        updateZombie(zombie);
        drawZombie(zombie);
        if (zombie.delete) {
            zombies.splice(index, 1);
        }
    });

    if (lives > 0) {
        requestAnimationFrame(gameLoop);
    }
}
const music = document.getElementById("music");
function endGame() {
    music.play();
    alert(`Koniec gry! Twój wynik: ${score}`);
    document.location.reload();
}

spawnZombie();
gameLoop();
