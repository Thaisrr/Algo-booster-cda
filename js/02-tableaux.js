/**
 * Les tableaux
 * 
 * Un ensemble de données du même type regroupé dans une même variable
 * Dans un tableaux, chaque donnée possède un index ( 0 à n )
 */

const fruits = ['pomme', 'poire'];
console.log(fruits);
console.log(fruits[0]); // pomme
console.log(fruits[1]); // poire
console.log(fruits[2]); // undefined

console.log(`J'ai ${fruits.length} fruits dans mon tableau`); // 2

fruits.push('pêche'); // ajoute un élément à la fin du tableau

console.log(fruits.length); // 3
const fruits_bis = fruits;
const fruits_ters = [...fruits]; // je créé un nouveau tableau, avec les mêmes valeurs que fruits
const fruits_quatre = Array.from(fruits); // idem, clone le tableau
fruits_bis.push('abricot');
console.log(fruits_bis.length);  // 4
console.log(fruits.length); // 3


// Parcourir un tableau

for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

for(let f of fruits) {
    console.log(f);
}

// Callback, 
function sum(a, b) {
    return a + b;
}

const sum2 = function(a, b) {
    return a + b;
}


const sum3 = (a, b) => {
    // instructions
    return a + b;
}

const sum4 = (a, b) => a + b;

fruits.forEach((f) => console.log(f));

fruits.forEach(function(f) {
    console.log(f);
});


// Méthodes de tableau

fruits.push('melon');
fruits.splice(0, 1); // supprime 1 élément à l'index 0

const fruits_uppercase = fruits.map((f) => f.toUpperCase());
const fruits_copy = fruits.map(f => f);
fruits_copy.push("pastéque");
console.log(fruits);

const numbers = [0, 8, 1, 6, 4];
numbers.includes(9); // false

// retourne l'index de 8
numbers.indexOf(8); // 1

// le premier élément du tableau qui correspond à une condition
numbers.find(f => f > 1); // 8

// l'index du premier élément du tableau qui correspond à une condition 
numbers.findIndex(f => f > 1); // 1 

// retourne un tableau dont les éléments répondent à une condition
const bigNumbers = numbers.filter(n => n > 5);

const numbs = [10, 1, 2, 2000];
numbs.sort();

console.log(numbs); // trié par ordre alphabétique

numbs.sort((a, b) => a - b); // trier les nombres croissant
console.log(numbs);

const reversed = numbs.reverse();
console.log(reversed);

const numbs_string = numbs.join(', ');
console.log(numbs_string);

/*
Toutes les méthodes de tableau : 
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array
*/




