/**
 * JS
 * - Exécuté par le navigateur (moteur V8 sur chromium, SpiderMonkey sur Firefox)
 * - Langage interprété
 * - Langage non fortement typé
 *          - typage dynamique
 *          - typage non définitif
 * 
 * Types primitifs : 
 *  -> String
 *  -> Number (int, double, float, ect ... )
 *  -> undefined
 *  -> null
 *  -> Boolean
 * 
 * Structure
 *  -> Array ( tableau )
 */


/* Commentaire sur plusieurs lignes */
// commentaire sur une ligne
/**
 * Commentaire sur plusieurs lignes / documentation
 */

// Déclaration des variables

let a = 21;
const b = 3.14; // Constante : on peut pas lui réaffecter de valeur avec "="
var c = 789;

// let -> nouvelle syntaxe ECMAScript 2015 ( ou ES6 ) 
// Var ancienne manière

function truc() {
    let a = "nouvelle valeur";
    console.log(a); // Nouvelle valeur

    var b = "Nouveau var";
    console.log(b);
}

truc();

console.log(a); // 21
console.log(b);

if(true) {
    let a = "valeur if de a";
    console.log(a);
   // var b = "valeur if de b";
   // console.log(b);
   var c = "variable c";
   let d = "variable d";
}
console.log(c); // OK
// console.log(d); // erreur : non déclaré

/* Var à une portée de fonction : 
- Si je le déclare de manière globale -> accessible partout
- Si je le déclare dans un fonction -> accessible uniquement dans la fonction
- Si je le déclare dans un bloc -> accessible partout
*/

/* Let à une portée de bloc ( et de fonction ) - comme const
- Déclaré globalement -> accessible partout
- Déclaré dans une fonction -> accessible uniquement dans la fonction
- Déclaré dans un bloc -> accessible uniqument dans le bloc (condition, boucle...)
*/

(function() {
    var toto = "toto";
})();

// => Aujourd'hui, on utilise Let, ou 

/*
Pour le nommage des variables:
- camelCase
- snake_case

Pour les constantes immutables ( Adresse API, PI, ...)
- EN_MAJUSCULE_SNAKE_CASE
*/

// Affecter une valeur à une variable

let hello = "hello";
let e = "string ''''" + hello;
e = 'string \'' + hello;
e = `string " ' ${hello}` + hello; // ES
e = `1 + 1 = 
${1+1}`;

console.log(e);
// Opérateurs de calcule:  + - / * %
let f = 1;
f = (10 + 20) * 123;
f = f + 1;
f++; // incrémentation
f--; // décrémentation
f = 0;
console.log(f++); // 0 puis incrémente à 1
console.log(++f); // incrémente puis on affiche le résultat (2)
console.log(2); // 2

f = f + 2;
f += 2;
f -= 2;
f *= 2;
f /= 2;
f %= 2;
console.log(f); // 0

// Falsy : une valeur qui retourne faux quand elle est explicitement testée.
/*
- 0
- false
- "" '' ``
- null
- undefined


En calcule true = 1, false = 0
Un calcule avec une string retourne NaN ( not a number )
*/

let g = "hello world"; // true false
f = 0;

f = 'nan ? ' + (g / 2); // 
console.log(f);

if(f) {
    console.log("c'est vrai");
}

// Opérateurs conditionnels
/*
> < <= >= === !== 

Opérateurs logiques : 
&& || ! 
*/
let bool = 10 < 5 || 20 < 10;

let str = "";
// Si str est vide, alors je luis assigne 'helle world'

if(!str) { // 
    str = "Hello World";
}

str = str || 'Hello World';
str ||= 'Hello World';

if(str) {
    str = "nouvelle valeur";
}
str = str && 'nouvelle valeur';
str &&= 'nouvelle valeur';
console.log(str); // 

const age = 0;

// OU teste uniquement si la valeur est undefined ou null
if(age === undefined || age === null) {
    age = 20;
}
age ??= 20; 
console.log(age);


// Condition

if(age > 18) {
   console.log("votre enfant est majeur")
} else if(age === 18) {
    console.log("votre enfant est tout juste majeur ! ")
} else {
    console.log("Votre enfant est mineur")
}


// Boucles TantQue
let i = 0;
while(i < 11) {
    console.log(i);
    i++;
}


// Boucle Fait Tant Que ( Jusqu'à)

let j = 10;
do {
    console.log(j);
    j++;
} while(j < 10);

// Boucle POUR

for(let i = 0; i < 11; i++) {
    console.log(i);
}


/**
 * Entrée / sortie
 */

alert('Mon message');
confirm('êtes vous sûre ?'); // quand l'utilisateur clique, retourne true ou false
prompt('Entrez votre nom'); // retourne une string, celle entrée par l'utilisateur
