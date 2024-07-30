# Les Variables

- Donnée
- Enregistrée dans l'espace de stockage
- Valeur
- Nom
- Type

## Les noms des variables

- Nom c'est l'identificateur


Règles à respecter
- la variable doit avoir un sens: le nom doit être explicite
- commence par une lettre
- doit respecter une convention de nommage ( PascalCase, camelCase, snake_case)
- le nom doit être unique dans sa portée
- ne doit pas êtreu un mot réservé dans le langage utilisé ( default, function, var, let, for, ...)


Les conventions de nommage :
camelCase
PascalCase
snake_case
kebab-case ( pas utilisable pour nommer des variables ! )


## Les types de variables

- types numériques : integer ( entier ) et float ( réel )
- chaînes de caractère (string)
- booléens
- null 
- tableaux
- objets
- fonctions

## Déclaration des variables

```
Variable identificateur : type
OU
Variable id1, id2, id3 : type
         nom1, nom2: type
```

Exemple : 

```
Variable age: entier
         nom, prenom : chaine de caractères
         estMajeur: booléen
```

## Affectation des variables

```
age <- 182
```

Exemple : 

```
Variable age: entier
         nom, prenom : chaine de caractères
         estMajeur: booléen
Début
    age <- 7000
    nom <- "Le Gris"
    prenom <- "Gandalf"
    estMajeur <- Vrai
Fin
```

On peut affecter une valeur calculée à une variable : 

```
Variable a, b, c: entier
Début
    b <- 10
    a <- 5 + 5
    c <- a + b
    a <- 20
Fin
```

## Exercices

1. Déclarer une variable "année de naissance" et lui donner une valeur au choix
2. Déclarer une variable "année actuelle", et lui donnée la valeur 2024
3. Déclarer une variable "age" que sera calculée sur l'année de naissance.


```
Variables anneeDeNaissance, anneeActuelle, age : entier
Début
    anneDeNaissance <- 1989
    anneActuelle <- 2024
    age <- anneActuelle - anneeDeNaissance
Fin
```

4. Quelle est la valeur des variables ci dessous :
```
Variables A, B, C : entier
Début
    a <- 3
    b <- 7
    c <- a // c = 3, b = 7, a = 3
    a <- b // a = 7, c = 3, b = 7
Fin
```

5. Ecrire un algo qui permet d'inverser les valeurs de 2 variables A et B
```
Variables A, B, C : entier
Début
    A <- 5
    B <- 60
    C <- A
    A <- B
    B <- C
Fin
```