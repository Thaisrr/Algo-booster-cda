# Les Opérateurs

## Définition 

Symbole qui permet de réaliser des opérations sur des variables

Les types d'opérateurs : 
- Arithmétiques : + - * / % ( % modulo : retourne le restant d'une division ) => entier et réel
- Comparaison : > <  == <= => === !=   ===> retourne un booléen
- Logique : `ET` `OU` `NON` `XOR`  ( xor -> ou exclusif, une seule des condition doit être vrai)
- Chaîne : `&` (concaténation ) retourne une chaîne de caractères

```
NON a < b   (Retourne vrai si a < b retourne faux)
```

## Exercices

1. Créer un utilisateur avec un nom et un prénom, et stocker son nom complet dans une variable dédiée ( nomComplet)
```
Variables nom, prenom, nomComplet: chaine
Début
    nom <- "La Tourte"
    prenom <- "Jean Michel"
    nomComplet <- nom & " " & prenom
Fin
```

2. Ecrire un algo qui permet de calculer la moyenne de variables A et B, et de stocker le résultat dans une variable "moyenne"
```
Variables A, B, moyenne : reel
Début
    A <- 185
    B <- 669
    moyenne <- (A + B) / 2
Fin
```

3. Ecrire une algo qui permet de stocker dans une variable estMajeur si un utilisateur est majeur ou non ( en fonction de son age )
```
Variables age : entier
          estMajeur : booleen
Début
    age <- 25
    estMajeur <- age >= 18 // ou age > 17
```

4. Ecrire un algo qui permet de stoker dans une variable si un nombre A est pair ou non.
```
Variable A: entier
         pair : booleen
Début
    A <- 1235
    pair <- ( A % 2 ) == 0
Fin
```

