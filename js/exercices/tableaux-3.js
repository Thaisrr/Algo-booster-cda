/*
* Créer un tableau à 2 dimensions contenant les 3 notes de 5 élèves.
-> afficher les notes pour chaque éléve ( éléve 1 : ...., élève 2: ...) ( sans utiliser de For In)
-> calculer la moyenne de chaque élève
-> calculer la moyenne de chaque matière
 */
const averagePerStudent = (grades) => {
    let sum = 0;
    grades.forEach((g) => {
        sum += g;
    });
    return sum / grades.length;
}

const getAverageByClass= (grades) => {
    let sum = [0, 0, 0];
    grades.forEach(g => {
        g.forEach((note, i) => {
            sum[i] += note;
        })
    });
    const moyennes = sum.map(s => s  / grades.length);
    console.log(`Moyennes par matière : ${moyennes.join(", ")}`)
}

const grades = [
    [4, 8, 8],
    [14, 18, 4],
    [4, 5, 8],
    [14, 18, 8],
    [4, 8, 8],
];

for(let i = 0; i < grades.length; i++) {
    console.log(`Eleve ${i + 1} : ${grades[i].join(', ')}. Moyenne : ${averagePerStudent(grades[i])}`);
}
getAverageByClass(grades);



/************ Multiplication *****************/

const displayMultiplicationTable = () => {
    for(let i = 0; i <= 10; i++) {
        let line = '';
        for(let j = 0; j <= 10; j++) {
            line += `${j * i} | `;
        }
        console.log(line);
    }
}
displayMultiplicationTable();