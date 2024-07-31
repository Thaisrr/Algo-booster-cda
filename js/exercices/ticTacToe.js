function ticTacToe() {
    let board = [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' '],
    ];
    displayBoard(board);
    play(board);
}

function play(board) {
    let input = prompt('Entrez la ligne et la colonne séparées par un espace');
    const [row, col] = input.split(' ');
    if(isNaN(+row) || isNaN(+col) || row < 0 || col < 0 || col > 2 || row > 2 || board[row][col].trim() !== '') {
        alert('Veuillez entrer une position valide !');
        play(board);
        return;
    }
    board[row][col] = "X";
    displayBoard(board);
    if(!checkWinner(board,'X')) {
        computerPlay(board);
    }

}

function computerPlay(board) {
    const row = Math.floor(Math.random() * 3); // un random entre 0 et 2
    const col = Math.floor(Math.random() * 3); // un random entre 0 et 2
    if(board[row][col].trim() === "") {
        board[row][col] = '0';
        displayBoard(board);
        if(!checkWinner(board,'0')) {
            play(board);
        }

    } else  {
        computerPlay(board);
    }
}

function displayBoard(board) {
    let displayedBoard = `Grille : \n`;
    board.forEach(line => {
        displayedBoard += line.join(' | ') + '\n';
    });
    console.log(displayedBoard);
}

function checkWinner(board, player) {
    if(
        board[0][0] === player && board[0][1] === player && board[0][2] === player ||
        board[0][0] === player && board[1][0] === player && board[2][0] === player ||
        board[0][0] === player && board[1][1] === player && board[2][2] === player ||
        board[0][1] === player && board[1][1] === player && board[2][1] === player ||
        board[2][0] === player && board[2][1] === player && board[2][2] === player ||
        board[0][2] === player && board[1][2] === player && board[2][2] === player ||
        board[0][2] === player && board[1][1] === player && board[2][0] === player ||
        board[1][0] === player && board[1][1] === player && board[1][2] === player
    ) {
        alert('Gagné !')
        return true;
    }
    return false;
}

ticTacToe();