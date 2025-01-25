const phrases = [
    "helloworld",
    "alphabet",
    "quickbrownfox",
    "simpleletters",
    "gametime"
];

const gameArea = document.querySelector(".game-area");
const levelDisplay = document.querySelector("#level");
const scoreDisplay = document.querySelector("#score");

let currentLevel = 1;
let score = 0;
let speed = 3000;
let isGameOver = false;
let usedLetters = [];
let usedPositions = [];


function startGame() {
    resetGame();
    nextPhrase();
}


function nextPhrase() {
    if (isGameOver) return;
    addLetters();
}


function addLetters() {
    let numLetters = Math.min(currentLevel, 9);

    usedLetters = [];
    usedPositions = [];

    for (let i = 0; i < numLetters; i++) {
        const letter = getRandomUniqueLetter();
        const letterElement = createLetterElement(letter);
        animateLetter(letterElement, letter);
    }
}

function getRandomUniqueLetter() {
    let letter;
    do {
        const phrase = phrases[Math.floor(Math.random() * phrases.length)];
        letter = phrase.charAt(Math.floor(Math.random() * phrase.length));
    } while (usedLetters.includes(letter));
    usedLetters.push(letter);
    return letter;
}

function createLetterElement(letter) {
    const letterElement = document.createElement("div");
    letterElement.classList.add("letter");
    letterElement.textContent = letter;
    letterElement.setAttribute("data-char", letter);

    let position;
    do {
        position = Math.random() * 80 + 10;
    } while (usedPositions.some(pos => Math.abs(pos - position) < 10));
    usedPositions.push(position);
    letterElement.style.left = `${position}%`;

    gameArea.appendChild(letterElement);
    return letterElement;
}

function animateLetter(letterElement, letter) {
    let top = -30; // Start above the screen
    const letterFallSpeed = speed / 150;

    const interval = setInterval(() => {
        if (isGameOver) {
            clearInterval(interval);
            return;
        }

        top += 2;
        letterElement.style.top = `${top}px`;

        if (top >= 270) {
            clearInterval(interval);
            letterElement.remove();
            showCaptchaMessage();
        }
    }, letterFallSpeed);

    function handleKeyPress(event) {
        const keyPressed = event.key.toLowerCase();

        if (keyPressed.length > 1 || !/^[a-z]$/.test(keyPressed)) return;

        if (keyPressed === letter) {
            clearInterval(interval);
            removeLetter(letterElement);
            score++;
            scoreDisplay.textContent = score;

            if (score % 10 === 0) {
                currentLevel++;
                levelDisplay.textContent = currentLevel;

                // Increase speed progressively
                speed = Math.max(500, speed * 0.9);
            }

            document.removeEventListener("keydown", handleKeyPress);
            addLetters();
        }
    }

    document.addEventListener("keydown", handleKeyPress);
}

function removeLetter(letterElement) {
    letterElement.classList.add('break');
    letterElement.addEventListener('animationend', () => {
        letterElement.remove();
    });
}

function showCaptchaMessage() {
    isGameOver = true;
    alert("Vous êtes vraiment pas efficace..... vous n'êtes sûrement pas un robot haha. Vous avez passé le CAPTCHA");
    resetGame();
    window.location.href = "./accueil.html";
}

function resetGame() {
    document.querySelectorAll(".letter").forEach((el) => el.remove());
    score = 0;
    scoreDisplay.textContent = score;
    currentLevel = 1;
    levelDisplay.textContent = currentLevel;
    speed = 3000;
    isGameOver = false;
    usedLetters = [];
    usedPositions = [];
}

startGame();
