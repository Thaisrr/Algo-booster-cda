/*
* Exercice
* Ecrire une fonction qui permet de dire si un mot / une phrase est un palidrome ou pas
*
Pour les regex : https://regexr.com/
*/
"  9Radar9 !"
function isPalindromme(str) {
    const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversed = str.split('').reverse().join('');
    return normalized === reversed;
}

console.log(isPalindromme('azerty')); // false
console.log(isPalindromme('radar')); // true


function isPalindrommeBis(str) {
    const tab = [];
    let test = 0;
    for(let i = 0; i < str.length; i++) {
        tab.push(str[i]);
    }
    for(let i = 0; i < tab.length / 2; i++) {
        if(tab[i] !== tab[tab.length - 1 - i]) {
            console.log("pas un palindrome");
            return
        }
    }
    console.log("C'est un palindromme");
}


