let userScore = 0;
let computerScore = 0;

function startGame() {
    while (confirm('Voulez-vous jouer ?')) {
        let data = load();
        if(data && confirm('Reprendre la partie ?')) {
            console.log(data);
            userScore = +data[0];
            computerScore = +data[1];
            let nbEssais = +data[2];
            let secret = +data[3];
            guessNumber(nbEssais, secret)
        } else {
            guessNumber();
        }

    }
}

function guessNumber(essai = 0, nbSecret) {
    let nbEssais = essai;
    let secret = nbSecret ?? Math.floor(Math.random() * 100 + 1);
    console.log(secret);
    let input;

    while( nbEssais < 5) {
        input = prompt('Devine un nombre entre 1 et 100'); // Attention, retourne une string !

            if(input === "score") {
                score();
                continue;
            } else if (input === 'pause') {
                save(nbEssais, secret);
                continue;
            } else if(isNaN(Number(input))) {
                alert('Mauvais caractère entré !');
                continue;
            }

        input = Number(input);
        if(input === secret) {
            alert('Gagné !');
            userScore++;
            break;
        } else if (input > secret) {
            alert('Trop haut !')
        } else {
            alert('Trop Bas !')
        }
        isClose(input, secret);
        nbEssais++;
    }
    if(nbEssais >= 5) {
        alert('Perdu !');
        computerScore++;
    }
}

function isClose(input, secret) {
    if(secret - input < 10 && secret - input > -10) {
        alert('Tu es proche !')
    }
}

function score() {
    alert(`User : ${userScore} -- Computer : ${computerScore}`);
}

function save(nbEssais, secret) {
    const data = [userScore, computerScore, nbEssais, secret];
    localStorage.setItem('guessNumber', data.join(','));
}

function load() {
    const data = localStorage.getItem('guessNumber')?.split(',');
    localStorage.clear();
    return data;
}

startGame();