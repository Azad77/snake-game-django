/*
<Author: Dr. Azad Rasul
Affiliation: Soran University
Email: azad.rasul@soran.edu.iq
Year: 2025/>
*/

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const tileSize = 20;
const canvasSize = 500;
let snake = [{ x: 240, y: 240 }];
let food = getRandomFoodPosition();
let direction = { x: 0, y: -tileSize };

function draw() {
    ctx.fillStyle = "#1d3557";
    ctx.fillRect(0, 0, canvasSize, canvasSize);

    // Draw the snake
    ctx.fillStyle = "#e63946";
    snake.forEach(segment => {
        ctx.fillRect(segment.x, segment.y, tileSize, tileSize);
    });

    // Draw the food
    ctx.fillStyle = "#f1faee";
    ctx.fillRect(food.x, food.y, tileSize, tileSize);
}

function update() {
    const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };

    // Check collision with walls
    if (head.x < 0 || head.x >= canvasSize || head.y < 0 || head.y >= canvasSize) {
        resetGame();
        return;
    }

    // Check collision with self
    if (snake.some(segment => segment.x === head.x && segment.y === head.y)) {
        resetGame();
        return;
    }

    snake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
        food = getRandomFoodPosition();
    } else {
        snake.pop();
    }
}

function getRandomFoodPosition() {
    return {
        x: Math.floor(Math.random() * (canvasSize / tileSize)) * tileSize,
        y: Math.floor(Math.random() * (canvasSize / tileSize)) * tileSize
    };
}

function resetGame() {
    snake = [{ x: 240, y: 240 }];
    direction = { x: 0, y: -tileSize };
    food = getRandomFoodPosition();
}

function changeDirection(event) {
    const keyMap = {
        ArrowUp: { x: 0, y: -tileSize },
        ArrowDown: { x: 0, y: tileSize },
        ArrowLeft: { x: -tileSize, y: 0 },
        ArrowRight: { x: tileSize, y: 0 }
    };

    const newDirection = keyMap[event.key];
    if (newDirection && (newDirection.x !== -direction.x || newDirection.y !== -direction.y)) {
        direction = newDirection;
    }
}

document.addEventListener("keydown", changeDirection);

function gameLoop() {
    update();
    draw();
    setTimeout(gameLoop, 150);
}

gameLoop();
