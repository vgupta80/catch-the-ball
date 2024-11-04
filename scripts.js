let basket = document.getElementById('basket');
let ball = document.getElementById('ball');
let gameContainer = document.getElementById('game-container');
let basketSpeed = 10;
let ballSpeed = 5;
let score = 0;

document.addEventListener('keydown', moveBasket);

function moveBasket(e) {
    let basketLeft = basket.offsetLeft;

    if (e.key === 'ArrowLeft' && basketLeft > 0) {
        basket.style.left = `${basketLeft - basketSpeed}px`;
    } else if (e.key === 'ArrowRight' && basketLeft + basket.offsetWidth < gameContainer.offsetWidth) {
        basket.style.left = `${basketLeft + basketSpeed}px`;
    }
}

function dropBall() {
    let ballTop = ball.offsetTop;
    let ballLeft = ball.offsetLeft;

    if (ballTop + ball.offsetHeight >= gameContainer.offsetHeight) {
        if (ballLeft + ball.offsetWidth >= basket.offsetLeft && ballLeft <= basket.offsetLeft + basket.offsetWidth) {
            score++;
            console.log(`Score: ${score}`);
        } else {
            console.log('Game Over');
        }
        resetBall();
    } else {
        ball.style.top = `${ballTop + ballSpeed}px`;
        requestAnimationFrame(dropBall);
    }
}

function resetBall() {
    ball.style.top = '0';
    ball.style.left = `${Math.floor(Math.random() * (gameContainer.offsetWidth - ball.offsetWidth))}px`;
    setTimeout(dropBall, 1000);
}

resetBall();

