# M413 - TD1 : Réponses aux Questions

# 6.1 La propriété « document.title »

## Quel sera l’évènement qui déclenchera l’appel de votre fonction ? 

### L'évènement qui déclenchera l'appel de ma fonction est la fin du chargement de la page avec la fonction onLoad() 

## Quelle méthode avez-vous utilisée pour récupérer l’objet représentant votre balise <h1> ?

### Pour récupérer l'objet représentant ma balise <h1>, j'ai utilisé la méthode getElementById().

## Quelle propriété de l’objet représentant votre balise <h1> avez-vous utilisée pour récupérer le texte de celui-ci ? 

### Pour récuperer le texte de l'objet représentant ma balise <h1>, j'ai utilisé la propriété innerText de celui ci.

## Quelle(s) méthode(s) avez-vous utilisée pour récupérer l’objet représentant la première balise <h2> ?

### J'ai utilisé la méthode querySelector afin de récupérer l'objet représentant la première balise <h2>.

## Comment faire pour connaitre le nombre de balises <h2> du document ?

### Pour connaitre le nombre de balise <h2> du document, on utilise la méthode QuerySelectorAll pour récupérer toutes les balises <h2>, puis on utilise la propriété length pour avoir le nombre de balises.

## Quelle méthode avez vous utilisé pour récupérer les objets de votre classe ?

### Pour récupérer les objets de la classe "firstOrLast", j'ai utilisé la méthode querySelectorAll pour récupérer tous les éléments correspondants à ce sélecteur. 

## Comment avez-vous déterminé si un nombre est pair ?

### Pour déterminer si un nombre est pair, on peut utiliser le modulo 2. Si le reste d'une division du nombre par 2 est égal à 0, cela signifie que le nombre est pair.

# 6.2 Les propriétés innerHTML, innerText et textContent

## Quelles différences existe-t-il entre les 3 propriétés innerHTML, innerText et textContent ? 

### innerHTML permet de définir ou d'obtenir le contenu HTML d'un élément. Elle prend en compte les balises HTML et les interprète comme du code HTML.
## innerText permet de définir ou d'obtenir le contenu textuel d'un élément, sans tenir compte des balises HTML.
## textContent permet de définir ou d'obtenir le contenu textuel d'un élément, sans tenir compte des balises HTML. C'est similaire à innerText, mais cette propriété est plus compatible avec les navigateurs web modernes.

# 6.3  La propriété document.lastModified

## Comment modifier votre code pour qu’il permette de sélectionner le 1er auteur de la liste ? 

### Pour sélectionner le premier auteur de la liste, on peut utiliser plusieurs balises <meta name="author"> avec des valeurs différentes pour le contenu. On peut alors utiliser une boucle pour parcourir toutes les balises <meta name="author"> et sélectionner la première.

## Même question avec le dernier auteur de la liste.

### Pour sélectionner le dernier auteur de la liste, on peut utiliser la même logique que pour le premier auteur, mais en accédant à la dernière entrée du tableau renvoyé par querySelectorAll().

## Laquelle des deux méthodes de l'objet window avez vous utilisé? Pourquoi?

### J'ai utilisé setInterval() plutôt que setTimeout() pour mettre à jour l'horloge toutes les secondes car cette méthode est plus simple et efficace pour cette tâche spécifique.

## Quel évènement avez-vous utilisé ?

### J'ai utilisé l'événement "input" pour détecter les changements dans l'input texte, ce qui permet de changer la couleur du champ texte en temps réel.

## Comment avez-vous fait changer la couleur du texte du champ texte ?

### Pour changer la couleur du champ texte, j'ai utilisé la méthode "classList.add" et "classList.remove" pour ajouter ou supprimer les classes CSS qui définissent la couleur de fond en fonction de la validité de l'input. Par exemple, si l'input est valide (un nombre a été saisi), la classe "green" est ajoutée au champ texte pour changer la couleur de fond en vert. Si l'input est invalide, la classe "red" est ajoutée au champ texte pour changer la couleur de fond en rouge. Enfin, si l'input est vide, toutes les classes de couleur sont supprimées pour revenir à la couleur blanche.