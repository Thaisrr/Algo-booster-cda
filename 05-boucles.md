# Les Boucles

Les boucles servent à répéter une ou plusieurs instructions plusieurs fois.
On parle aussi d'itération, ou de structure itérative

- la boucle `POUR`
- la boucle `TANT QUE`
- la boucle `FAIRE TANT QUE`

## Tant que

OU While

Tant qu'une condition passée est vrai, on exécute les instructions.

```
Début
    TantQue condition
        instructions...
    FinTantQue
Fin
```

-> La condition doit devenir fausse à un moment ou un autre.

```
Algo Boucle
Variables i : entier
Début
    i <- 0
    TantQue i < 10
        Afficher i
        i <- i + 1
    FinTantQue
Fin
```

## Exercice

1. Ecrire un algo qui affiche les nombres pairs de 0 à 20
```
Algo AfficherPairs
Variables i : entier
Début
    i <- 0
    TantQue i <=20  // ou i < 21
        SI i % 2 == 0 ALORS
            Afficher i
        FINSI
        i <- i + 1
    FinTantQue
Fin
```

## Do While ( Faire tant que)

Dans cette boucle, les instructions sont exécutée au moins un fois.

```
Variables...
Début
    Répéter
        Instructions...
    JusquA condition
Fin
```

Exemple :

```
Algo Boucle
Variable i: entier
Début
    i <- 1
    Répéter
        Afficher i
        i <- i + 1
    JusquA i > 10
Fin
```

## Boucle Pour

On utilise cette boucle lorsqu'on sait à l'avance combien de fois on veut répéter les instructions.

Pour un compteur allant de 1 ( valeur initial ) à 10 ( valeur finale ) on écrit : 

```
Algo BoucleFor
variables i :entier
Début
    Pour i allant de 1 à 10
        instruction...
    FinPour
Fin
```

A chaque tour de boucle, la variable i s'incrémentera automatiquement.

On peut modifier l'incrémentation

```
Algo BoucleFor
Variables i: entier
Début 
    Pour i allant de 1 à 10 avec un pas de 2
        instructions...
    FinPour
```

## Exercices : 

1. Ecrire un algo qui affiche un compteur allant de 10 à 0.
```
Algo Compteur
Variables i: entier
Début
    Pour i allant de 10 à 0 avec un pas de -1
        Afficher i
    FinPour
Fin
```

```
Algo CompteurBis
Variables i: entier
Début
    i <- 10
    Répéter
        Afficher i
        i <- i - 1
    jusquA i == 0
Fin
```


2. Un algo qui demande un nombre à l'utilisateur et affiche sa table ( pour les nombres de 1 à 10 )
```
Algo Multiplications
Variables input, i: entier
Début
    Afficher "Entrez un nombre"
    Lire input
    i <- 1
    TantQue i <= 10
        Afficher(i * input)
        i <- i + 1
    FinTantQue
Fin
```




3. Ecrire un algo qui propose à l'utilisateur d'entrer des notes, qui s'arrête quand user écrit -1, et affiche la moyenne des notes.`

```
Algo Notes
Variables note, nombreNotes, somme : entier
          moyenne : reel
Début
    somme <- 0
    nombreNotes <- 0
    Répéter
        Afficher "entrez une note ( -1 pour arrêter )"
        Lire note
        Si ( note > -1) ALORS
            nombreNotes <- nombreNotes + 1
            somme <- somme + note
        FinSI
    JusquA note < -1
    moyenne <- somme / nombreNotes
    Afficher "La moyenne de la classe est " & moyenne
Fin
```

4. Ecrire un un algo qui demande à user de devine un nombre compris entre 0 et 100.
Si user entre un nombre plus grand, on lui dit, plus petit idem, si il gagne, on dit "bravo"

4. Bis --- Limiter le nombre d'essais à 5. Si user dépasse le nombre d'essais, on lui dit qu'il a perdu.

4. Ters --- On dit a user si il est proche ou pas ( à 10 unités prés )

```
Algo guessNumber
Variables secret, nbEssais, input : entier
Début
    nbEssais <- 0
    secret <- 10
    TantQue(nbEssai < 5 ET input != secret)
        Afficher("Devine un nombre entre 1 et 100")
        Lire(input)
        SI (input > secret) ALORS
            Afficher("Trop haut")
        SINON
            Afficher("Trop bas")
        FINSI
        SI(secret - input< 10 ET secret - input > -10) ALORS
            Afficher("Tu es proche ! ")
        FINSI
        nbEssais <- nbEssais + 1
    FinTANTQUE
    SI (input == guess) ALORS
        Afficher("Bravo !")
    SINON
        Afficher("Perdu !")  
Fin
```
 