# Les Conditions

C'est un calcul // une valeur qui retourne VRAI ou FAUX

## Opérateurs de conditions

- `==` égal à
- `!=` différent de
- `>` `<` supérieur à / inférieur à 
- `>=` `<=` supérieur ou égal / inférieur ou égal

## Opérateurs Logiques

- `ET` : retourne vrai si les 2 conditions sont vrai
- `OU` : retourne vrai si l'une ou l'autre des conditions est vrai
- `XOR` : retourne vrai si strictement 1 des deux conditions est vrai ( pas les deux )
- `NON` : retourne vrai si la condition est fausse


```
Variables a, b : entier
          bool : booleen
Début
    a <- 5
    b <- 10
    bool <- a > b // Faux
    bool <- a != b // VRAI
    bool <- a < b OU a > b // VRAI
    bool <- a < b XOR a > b  // VRAI
    bool <- a < b XOR a == 5 // FAUX
    bool <- NON a > b //vrai
    bool <- NON bool // FAUX
fin
```

## Instructions Conditionnelles

Permet d'éxecuter un bloc de code si une condition est vraie, sinon, on peut exécuter une autr bloc d'instructions.

```
SI condition est vrai ALORS
    instructions
```

```
SI condition est vrai ALORS
    instructions
SINON
    instructions
FINSI
```

## Exemple

```
Variables a, b: entier
Début
    a <- 5
    b <- 10
    SI a > b ALORS
        Afficher("A est supérieur à B")
    SINON
        Afficher("A est inférieur à B")
    FINSI
Fin
```

## Exercice

1. Ecrire un algo qui demande qui demande un entier à l'user, puis test et affiche si il est divisible par 3 et 5. On n'affiche qu'un seul message en tout.
```
Algorithme estDivisiblePar3Et5
Variables input: entier
Début
    Afficher("Entrez un nombre")
    Lire(input)
    SI (input % 3 == 0) ALORS
        SI ( input % 5 == 0) ALORS
            Afficher("Votre nombre est divisible par 3 et 5")
        SINON
            Afficher("Votre nombre est divisble par 3 uniquement")
        FINSI
    SINON
        SI (input % 5 == 0) ALORS
            Afficher("votre nombre est divisible par 5 uniquement")
        SINON
            Afficher("Votre nombre ni par 3 ni par 5")
        FINSI
    FINSI
FIN
```
    

2. Ecrire un algo qui demande à l'user son age, et qui lui dit si il est plus vieux / plus jeune ou à le même age que le roi d'Angleterre.

```
Algo ageRoiAngleterre
Variables age, roi : entier
Début
    Afficher("entrez votre age")
    Lire(age)
    roi <- 75
    SI (age > roi) ALORS
        Afficher("Vous êtes plus vieux")
    SINON
        SI(age == roi) ALORS
            Afficher("Vous avez le même age que le roi d'Angleterre")
        SINON
            Afficher("Vous êtes plus jeune")
        FINSI
    FINSI
Fin
