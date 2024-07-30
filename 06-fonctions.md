# Les Fonctions

Une fonction = bloc de code qui prend des arguments en entrée, et ressort un résultat.
-> Une fonction est réutilisable.

Il faut l'appeler pour qu'elle s'éxécute.

Fonction = un nom, une liste d'arguments, un bloc de code, une valeur de retour.

```
Fonction nomDeLaFonction (param1: type, param2: type) : type de retour
Variable a, b, c : type
Début
    instructions
    Retourner(valeur)
Fin
```

 ```
 Fonction somme(a: entier, b: entier) : entier
 Début
    Retourner(a + b)
Fin

Algo Principal
Variables x, y, z : entier
Début
    x <- 5
    y <- 10
    z <- somme(x, y)
Fin
```


## Procédure

Comme une fonction, mais ça ne retourne rien.

```
Procedure nomProcedure(param: type) 
    instructions...
FinProcedure