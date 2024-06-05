document.addEventListener('DOMContentLoaded', () => {
    const gridSize = 5;
    const cells = [];
    let stepCounter = 0;
    let timer = 0;
    let interval;
    let scenarioIndex = 0;
    let scenarios = [];

    const timerElement = document.getElementById('timer');
    const stepCounterElement = document.getElementById('stepCounter');
    const bestStepsElement = document.getElementById('bestSteps');
    const bestTimeElement = document.getElementById('bestTime');
    const grid = document.getElementById('grid');
    const nextScenarioButton = document.getElementById('nextScenarioButton');

    nextScenarioButton.addEventListener('click', nextScenario);

    async function fetchScenarios() {
        try {
            const response = await fetch('application.json'); // Переконайтеся, що шлях правильний
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            scenarios = await response.json();
            loadScenario(scenarios[0]); // Завантаження першого сценарію після отримання даних
        } catch (error) {
            console.error('Помилка при завантаженні сценаріїв:', error);
        }
    }

    function createGrid() {
        cells.length = 0;
        grid.innerHTML = "";
        for (let i = 0; i < gridSize * gridSize; i++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.addEventListener('click', () => {
                toggleLights(i);
                incrementStep();
            });
            grid.appendChild(cell);
            cells.push(cell);
        }
    }

    function resetGame() {
        clearInterval(interval);
        stepCounter = 0;
        stepCounterElement.innerText = 0;
        timerElement.innerText = 0;
        cells.forEach(cell => cell.classList.remove('on'));
        startTimer();
    }

    function incrementStep() {
        stepCounter++;
        stepCounterElement.innerText = stepCounter;
        checkGameStatus();
    }

    function startTimer() {
        clearInterval(interval);
        timer = 0;
        interval = setInterval(() => {
            timer++;
            timerElement.innerText = timer;
        }, 1000);
    }

    function toggleLights(index) {
        toggleCell(index);

        if (index >= gridSize) toggleCell(index - gridSize); // верхній сусід
        if (index < gridSize * (gridSize - 1)) toggleCell(index + gridSize); // нижній сусід
        if (index % gridSize > 0) toggleCell(index - 1); // лівий сусід
        if (index % gridSize < gridSize - 1) toggleCell(index + 1); // правий сусід
    }

    function toggleCell(index) {
        const cell = cells[index];
        cell.classList.toggle('on');
    }

    function randomize() {
        resetGame();
        for (let i = 0; i < gridSize; i++) {
            const randomIndex = Math.floor(Math.random() * (gridSize * gridSize));
            toggleLights(randomIndex);
        }
    }

    function loadScenario(scenario) {
        resetGame();
        scenario.matrix.forEach((row, r) => {
            row.forEach((value, c) => {
                if (value === 1) {
                    const index = r * gridSize + c;
                    toggleCell(index);
                }
            });
        });
        bestStepsElement.innerText = scenario.optimalSteps;
    }

    function nextScenario() {
        if (scenarioIndex < scenarios.length) {
            loadScenario(scenarios[scenarioIndex]);
            scenarioIndex++;
        } else {
            scenarioIndex = 0; // Reset the index for the next cycle
            randomize(); // Генерація випадкового сценарію після проходження всіх фіксованих сценаріїв
        }
    }

    function checkGameStatus() {
        if (checkVictory()) {
            alert("Вітаю! Ви виграли!");
            saveBestTime(); // Збереження найкращого часу на сервері
            resetGame(); // Автоматичний перезапуск після виграшу
        }
    }

    function checkVictory() {
        return cells.every(cell => !cell.classList.contains('on'));
    }

    function saveBestTime() {
        const bestTime = timer; // Зберігаємо найкращий час, коли гравець виграв
        fetch('https://example.com/api/save-time', {
            method: 'POST', // Відправляємо дані POST-запитом
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ bestTime }),
        })
        .then(response => response.json())
        .then(data => {
            console.log("Найкращий час збережено:", data);
        })
        .catch(error => {
            console.error('Помилка при збереженні найкращого часу:', error);
        });
    }

    createGrid();
    startTimer();
    fetchScenarios(); // Завантаження сценаріїв з JSON при завантаженні сторінки
    // getBestTime(); // Завантаження найкращого часу при завантаженні сторінки
});
