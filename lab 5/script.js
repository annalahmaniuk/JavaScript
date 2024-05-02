document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById('start-game');
    const startMenu = document.getElementById('start-menu');
    const gameArea = document.getElementById('game-area');
    const square = document.getElementById('square');
    const scoreElement = document.getElementById('score');
    const timerElement = document.getElementById('timer');
    const errorMessage = document.getElementById('error-message');

    let timerInterval = null;
    let score = 0;
    let timeLeft = 0;

    function randomPosition(squareSize) {
        const maxLeft = gameArea.clientWidth - squareSize; 
        const maxTop = gameArea.clientHeight - squareSize; 

        const left = Math.floor(Math.random() * maxLeft); 
        const top = Math.floor(Math.random() * maxTop); 

        square.style.left = `${left}px`;
        square.style.top = `${top}px`;
    }

    function startGame() {
        const difficulty = document.getElementById('difficulty').value;
        const color = document.getElementById('color').value;

        if (!difficulty || !color) {
            errorMessage.classList.remove('hidden');
            return;
        }

        errorMessage.classList.add('hidden');
        startMenu.classList.add('hidden');
        gameArea.classList.remove('hidden'); 
        document.getElementById('score-board').classList.remove('hidden');

        square.style.backgroundColor = color;

        const squareSize = difficulty === 'hard' ? 20 : (difficulty === 'medium' ? 30 : 40); 
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        score = 0;
        scoreElement.textContent = score;

        const baseTime = difficulty === 'hard' ? 2 : (difficulty === 'medium' ? 3 : 5);
        timeLeft = baseTime;
        timerElement.textContent = timeLeft;

        randomPosition(squareSize); 

        if (timerInterval) {
            clearInterval(timerInterval); 
        }

        timerInterval = setInterval(() => {
            timeLeft--;
            timerElement.textContent = timeLeft;

            if (timeLeft <= 0) {
                clearInterval(timerInterval); 
                alert(`Час вичерпано! Ваш рахунок: ${score}`);
                resetGame(); 
            }
        }, 1000);

        square.addEventListener('click', handleSquareClick);
    }

    function handleSquareClick() {
        score++;
        scoreElement.textContent = score; // Оновити лічильник
        const difficulty = document.getElementById('difficulty').value;
        const squareSize = difficulty === 'hard' ? 20 : (difficulty === 'medium' ? 30 : 40);
        randomPosition(squareSize); 
        const baseTime = difficulty === 'hard' ? 2 : (difficulty === 'medium' ? 3 : 5);
        timeLeft = Math.max(timeLeft, baseTime); // Оновити таймер
    }

    function resetGame() {
        clearInterval(timerInterval);
        square.removeEventListener('click', handleSquareClick);
        gameArea.classList.add('hidden');
        startMenu.classList.remove('hidden'); 
        document.getElementById('score-board').classList.add('hidden');
    }

    startButton.addEventListener('click', startGame);
});
