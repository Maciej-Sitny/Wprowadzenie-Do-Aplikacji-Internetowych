// Ustawienia gry
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let lives = 3;
let score = 0;
const zombies = [];
const zombieImage = new Image();
zombieImage.src = './images/walkingdead (1).png'; // Dodaj ścieżkę do obrazka zombie
const backgroundImage = new Image();
backgroundImage.src = './images/board-bg.jpg'; // Ścieżka do tła
const heartImage = new Image();
heartImage.src = './images/full_heart.png'; // Ścieżka do serca
let crosshairImage = new Image();
crosshairImage.src = './images/aim.png'; // Ścieżka do celownika

const spriteWidth = 200; // Szerokość jednej klatki (dostosuj do sprite sheet)
const spriteHeight = 310; // Wysokość jednej klatki (dostosuj do sprite sheet)
const totalFrames = 10; // Liczba klatek w sprite sheet
let currentFrame = 0; // Obecnie wyświetlana klatka
let frameDelay = 0; // Licznik do zmiany klatki
const frameInterval = 7; // Ile cykli gry między klatkami (im większa liczba, tym wolniej)


// Klasa Zombie
class Zombie {
    constructor() {
        this.x = canvas.width;
        this.y = Math.random() * (canvas.height - spriteHeight);
        this.size = Math.random() * 0.5 + 0.5; // Skalowanie rozmiaru zombie
        this.speed = Math.random() * 2 + 1; // Prędkość zombie
        this.markedForDeletion = false;
    }
    draw() {
        // Rysowanie klatki animacji zombie
        ctx.drawImage(
            zombieImage,
            currentFrame * spriteWidth, // Pozycja klatki na sprite sheet
            0,
            spriteWidth,
            spriteHeight,
            this.x,
            this.y,
            spriteWidth * this.size, // Skalowanie szerokości
            spriteHeight * this.size // Skalowanie wysokości
        );
    }
    update() {
        this.x -= this.speed;
        if (this.x + spriteWidth * this.size < 0) {
            this.markedForDeletion = true;
            lives--;
            if (lives <= 0) endGame();
        }
    }
}

// Rysowanie tła
function drawBackground() {
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
}

// Rysowanie interfejsu
function drawUI() {
    for (let i = 0; i < lives; i++) {
        ctx.drawImage(heartImage, 10 + i * 40, 10, 30, 30);
    }
    ctx.fillStyle = 'white';
    ctx.font = '30px Arial';
    ctx.fillText(`Wynik: ${score}`, canvas.width - 200, 40);
}

// Obsługa kliknięć
canvas.addEventListener('click', (e) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    zombies.forEach((zombie) => {
        if (
            mouseX > zombie.x &&
            mouseX < zombie.x + zombie.size &&
            mouseY > zombie.y &&
            mouseY < zombie.y + zombie.size
        ) {
            zombie.markedForDeletion = true;
            score += 20;
        }
    });
    score -= 5; // Kara za pudło
});

// Dodawanie nowych zombie
function spawnZombie() {
    zombies.push(new Zombie());
    setTimeout(spawnZombie, Math.random() * 2000 + 1000);
}

// Koniec gry
function endGame() {
    alert(`Koniec gry! Twój wynik: ${score}`);
    document.location.reload();
}
function updateAnimationFrame() {
    frameDelay++;
    if (frameDelay >= frameInterval) {
        currentFrame = (currentFrame + 1) % totalFrames; // Przejście do następnej klatki
        frameDelay = 0;
    }
}

// Główna pętla gry
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBackground();
    drawUI();
    updateAnimationFrame(); // Aktualizacja klatek animacji

    zombies.forEach((zombie, index) => {
        zombie.update();
        zombie.draw();
        if (zombie.markedForDeletion) zombies.splice(index, 1);
    });

    if (lives > 0) {
        requestAnimationFrame(gameLoop);
    }
}

// Start gry
spawnZombie();
gameLoop();
