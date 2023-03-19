# M413 - TD2 : Réponses aux Questions

# 6.1 : Selection d'un objet

## Comment avez-vous ajouté l'écouteur d'évènement et sur quel objet ?

### L'écouteur d'événement a été ajouté sur l'élément racine de la page, c'est-à-dire l'objet document. L'ajout de l'écouteur a été réalisé dans la fonction initSelect(), en utilisant la méthode addEventListener() de l'objet document.

## Que se passe-t-il si vous utilisez currentTarget en lieu et place de target ? 

### Si on utilise currentTarget à la place de target, cela fera référence à l'objet qui a l'écouteur d'événement, et non pas à l'objet qui a reçu l'événement. Par conséquent, currentTarget pointera toujours vers l'objet body dans notre cas, car c'est l'objet qui a été abonné à l'événement "click". 

## Comment avez-vous ajouté l’élément ?

### Pour ajouter l'élément, j'ai d'abord récupéré les valeurs des champs de saisie de la div "insert-div" (type et texte), puis j'ai créé un nouvel élément avec document.createElement() en utilisant le type sélectionné. J'ai ensuite créé un noeud de texte avec le texte saisi et je l'ai ajouté comme enfant de l'élément créé avec element.appendChild(). Enfin, j'ai utilisé la méthode target.parentNode.insertBefore() pour insérer l'élément créé avant l'élément cible.

## Comment avez-vous fait pour que la fonction select2() ignore les évèments de la div donnée ci-dessus ? 

### Pour que la fonction select2() ignore les événements de la div "insert-div", j'ai utilisé la propriété target de l'événement pour vérifier si l'élément qui a reçu l'événement est ou n'est pas un enfant direct de la div "insert-div". Si c'est le cas, j'ai simplement retourné de la fonction sans rien faire, sinon j'ai exécuté le reste de la fonction pour changer la couleur de fond de l'élément sélectionné.
