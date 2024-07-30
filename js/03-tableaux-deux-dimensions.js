/*
Tableaux à 2 dimensions ou matrice

Un tableau qui contient des tableaux
*/

const matrice = [
    [1, 2, 3], 
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrice[0][1]);

for(let i in matrice) {
    for(let j in matrice[i]) {
        console.log(matrice[i][j]);
    }
}

matrice[0].push(0);
matrice.push([10, 11, 12]);


/*
* Créer un tableau à 2 dimensions contenant les 3 notes de 5 élèves.
-> afficher les notes pour chaque éléve ( éléve 1 : ...., élève 2: ...) ( sans utiliser de For In)
-> calculer la moyenne de chaque élève
-> calculer la moyenne de chaque matière


---
Affichez le tableau des tables de multiplications de 0 à 10

*/


