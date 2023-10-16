let currentPlayer = 'X';
let isGameActive = true;

function makeMove(cell) {
    if (!isGameActive || cell.innerText !== '') {
        return;
    }

    cell.innerText = currentPlayer;
    cell.style.color = currentPlayer === 'X' ? 'blue' : 'red';

    if (checkWin()) {
        isGameActive = false;
        document.getElementById('message').innerText = `Player ${currentPlayer} wins!`;
    } else if (checkDraw()) {
        isGameActive = false;
        document.getElementById('message').innerText = 'It\'s a draw!';
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        document.getElementById('message').innerText = `Player ${currentPlayer}'s turn`;
    }
}

function checkWin() {
    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    return winningCombos.some(combo => {
        const [a, b, c] = combo;
        return (
            document.querySelector(`#board > div:nth-child(${a + 1}`).innerText === currentPlayer &&
            document.querySelector(`#board > div:nth-child(${b + 1}`).innerText === currentPlayer &&
            document.querySelector(`#board > div:nth-child(${c + 1}`).innerText === currentPlayer
        );
    });
}

function checkDraw() {
    return Array.from(document.getElementsByClassName('cell')).every(cell => cell.innerText !== '');
}

function resetBoard() {
    Array.from(document.getElementsByClassName('cell')).forEach(cell => {
        cell.innerText = '';
        cell.style.color = '#000';
    });
    isGameActive = true;
    currentPlayer = 'X';
    document.getElementById('message').innerText = `Player ${currentPlayer}'s turn`;
}

// Initial setup
document.getElementById('message').innerText = `Player ${currentPlayer}'s turn`;
