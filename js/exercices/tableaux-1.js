/*
Exercices : 

1. Ecrire une fonction qui demande à l'utilisateur d'entrer 10 notes
Puis les afficher (avec les alertes ou la console )

2. Afficher la note la plus haute, et la note la plus basse

3. Afficher la moyenne des notes
*/

/*
const notes = [];
function getNotes() {
    for(i = 0; i < 3; i++) {
        let valeur = prompt('Entrez une note');
        notes.push(valeur);
    }
    console.log(notes);
}

getNotes();
*/


/************************************************* */

const getGrades = () => {
    let grades = [];
    for(let i = 0; i < 10; i++) {
        const input = prompt(`Entrez la note ${i + 1}`);
        if(input < 0 || input > 20 || input === '' || isNaN(Number(input))) {
            alert('Veuillez entrer un nombre valide');
            i--;
            continue;
        }
        grades.push(+input); // +input équivalent de Number(input)
    }
    return grades;
}

const getMin = (tab) => {
    tab.sort((a, b) => a - b);
    return tab[0];
    // return Math.min(...tab);
}

const getMax = (tab) => {
    tab.sort((a, b) => b - a); // sort ordre décroissant
    return tab[0];
    //Math.max(...tab);
}

const getAverage = (tab) => {
    let sum = 0;
    tab.forEach(n => {
        sum += n;
    });
    return sum / tab.length;
}

const getAverageBis = (tab) => {
    const sum = tab.reduce((previous, next) => previous + next, 0);
    return sum / tab.length;
}

// Fonction principale
const handleGrades = () => {
    let grades = getGrades();
    alert(`Vous avez entré les notes ${grades.join(',')}`);
    alert(`La plus haute note est ${getMax(grades)}, la plus petite est ${getMin(grades)}`);
    alert(`La moyenne de classe est ${getAverage(grades)}`);
}

handleGrades();

