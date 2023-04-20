'use strict';

//1.1 : Création d’un objet littéral

// Créer un objet littéral const personne ayant les propriétés nom, prenom, age, taille.
const personne = {
    nom: "Doe",
    prenom: "John",
    age: 30,
    taille: 1.80
};
console.log(personne,"\n");

// Créer le même objet en partant de const personne = {} et en lui ajoutant les mêmes propriétés.
const personne2 = {};
personne.nom = "Doe";
personne.prenom = "John";
personne.age = 30;
personne.taille = 1.80;
console.log(personne2,"\n");


//Créér un objet x égal à personne, que se passe-t-il lorsque les champs de x sont modifiés. Que signifie ceci pour x ?
const x = personne;
// Si on modifie x, les modifications seront également effectives sur personne et inversement. X pointe vers personne.


// 1.2 : Accès aux propriétés d’un objet

// Utilisez les 3 méthodes d’accès aux propriétés de l’objet personne pour afficher son contenu.

// Notation avec points :
console.log(personne.nom);
console.log(personne.prenom);
console.log(personne.age);
console.log(personne.taille,"\n");

// Notation avec crochets :
console.log(personne['nom']);
console.log(personne['prenom']);
console.log(personne['age']);
console.log(personne['taille'],"\n");

// Utilisation d'une variable pour le nom de propriété :
const propriete = 'nom';
console.log(personne[propriete],"\n");


// Utilisez l’instruction for (let variable in object) pour parcourir et afficher le contenu de l’objet personne.
for (let propriete in personne) {
    console.log(propriete + ': ' + personne[propriete],"\n");
  }

  
// Ajoutez un champ poids à l’objet personne.
personne.poids = 75;


// Supprimer le champ poids de l’objet personne. On notera que si personne héritait d’un autre objet, delete ne pourra pas 
// s’appliquer sur les propriétés de l’objet parent.
delete personne.poids;


// 1.3 : Objets imbriqués (nested en anglais)

// Ajoutez une propriété « sports » à l’objet personne, sports sera lui-même un objet constitué des propriétés « sport1 », « sport2 », 
// « sport3 ».
personne.sports = {
    sport1: 'football',
    sport2: 'basketball',
    sport3: 'tennis'
  };

  
// Affichez les champs de la propriété sports en partant de l’objet personne à l’aide de « . », de « [] » ou de la combinaison des deux.

// Notation avec points :
console.log(personne.sports.sport1);
console.log(personne.sports.sport2);
console.log(personne.sports.sport3,"\n");

// Notation avec crochets :
console.log(personne['sports']['sport1']);
console.log(personne['sports']['sport2']);
console.log(personne['sports']['sport3'],"\n");

// Combinaison des deux :
console.log(personne.sports['sport1']);
console.log(personne['sports'].sport2);
console.log(personne['sports']['sport3'],"\n");


// Utilisez l’instruction for (let i in myObj.sports) { ...} pour afficher le contenu de la propriété sports.
for (let sport in personne.sports) {
    console.log(sport + ': ' + personne.sports[sport],"\n");
  }

  
// Reprenez l’exercice en affectant à la propriété sports un tableau constitué lui-même par des objets du type 
// {nom : ..., equipements : [ ]}.
// Exemple {nom : "Tennis", equipements : [ "raquette","balle","filet"]}
// Utilisez for (let i in myObj.sports) pour afficher le contenu de la propriété sports.
personne.sports = [{
       nom: 'Tennis', equipements: ['raquette', 'balle', 'filet'],
       nom: 'Football', equipements: ['ballon', 'crampons', 'maillot'] ,
       nom: 'Basketball', equipements: ['ballon', 'panier', 'maillot'] 
    }];
  for (let i in personne.sports) {
    console.log('Sport : ' + personne.sports[i].nom);
    console.log('Equipements : ' + personne.sports[i].equipements.join(', '),"\n");
  }  

// 1.4 : Les méthodes

// Rajoutez une méthode « qui » à personne qui permettra d’afficher son nom et son prénom à l’aide du mot clé « this ».
    personne.qui = function() {
      console.log('Je suis ' + this.prenom + ' ' + this.nom,"\n");
    }
  

// Rajoutez une méthode « quimaj » qui permettra d’affichez le nom et le prénom à l’aide de la méthode « toUpperCase() » 
// inhérante à une chaine de caractère.
    personne.quimaj = function() {
      console.log(this.prenom.toUpperCase() + ' ' + this.nom.toUpperCase(),"\n");
    }
  

// 1.5 : Affichage


// Utilisez Object.values(personne) pour affichez les propriétés de personnes dans une div.
/*var div = document.createElement('div');
document.body.appendChild(div);
div.innerHTML = Object.values(personne);*/


// Affichez le contenu des propriétés de personne en utilisant JSON.stringify() qui transforme les champs de personne en chaine de 
// caractère.
console.log(JSON.stringify(personne),"\n");


// Ajoutez une champ datenaissance à personne en se servant de Date(). Réutilisez JSON.stringify() pour observer ce qui est affiché.
personne.dateNaissance = new Date('1992-06-15');
console.log(JSON.stringify(personne),"\n");


// Ajoutez une méthode age à personne qui retourne son age et utilisez JSON.stringify(). Que se passe-t-il ? Comment éviter cette erreur 
// en utilisant la méthode inhérante « toString() ».
personne.age = function () {
	return this.age;
}
console.log(JSON.stringify(personne),"\n");

// age n'est pas une propriété de personne, par conséquent elle ne s'affiche pas.


// Exercice 2 : Les Accesseurs & Constructeurs

// 2.1 : Mise en place de setter et de getter

// Rajouter un getter get lang() permettant d’afficher la langue parlée par personne.
  
 /* personne.langue = "français";
  Object.defineProperty(personne, 'lang', {
	get: function () {
		return this.lang;
	}
});


// Rajouter un setter set lang() permettant de modifier le champ « langue » de personne.
Object.defineProperty(personne, 'lang', {
	set: function (lang) {
		this.lang = lang;
	}
});*/

  
// Quelle est la différence entre le champ : get fullName() { .. } permettant d’afficher le nom et prénom de l’objet personne,
// et le champ fullName : function () { .. } permettant d’afficher le nom et prénom de l’objet personne ?

// get fullName() est un getter, c'est-à-dire une méthode qui permet d'accéder à la valeur d'une propriété, 
// tandis que le champ fullName: function() est une méthode normale qui doit être appelée pour obtenir la valeur de la propriété.


// A l’aide de la fonction objet.defineProperty() ajouter des getter et des setter à l’objet défini par : const obj = {counter : 0} ;
// On ajoutera 3 getter dont un met à zero le conteur « reset », le second l’incrémente « inc » et le troisième le décrémente « dec ».
// On ajoutera 2 setter un qui ajoute une valeur « add » et l’autre qui la soustrait « subs ».
const obj = {
    counter: 0,
  };
  
  Object.defineProperty(obj, "reset", {
    get: function() {
      this.counter = 0;
    },
  });
  
  Object.defineProperty(obj, "inc", {
    get: function() {
      this.counter++;
    },
  });
  
  Object.defineProperty(obj, "dec", {
    get: function() {
      this.counter--;
    },
  });
  
  Object.defineProperty(obj, "add", {
    set: function(value) {
      this.counter += value;
    },
  });
  
  Object.defineProperty(obj, "subs", {
    set: function(value) {
      this.counter -= value;
    },
  });
  
  console.log(obj.counter); // 0
  
  obj.reset;
  console.log(obj.counter); // 0
  
  obj.inc;
  console.log(obj.counter); // 1
  
  obj.dec;
  console.log(obj.counter); // 0
  
  obj.add = 5;
  console.log(obj.counter); // 5
  
  obj.subs = 2;
  console.log(obj.counter,"\n"); // 3
  

// 2.2 : Les constructeurs

// Créez un constructeur pour l’objet personne défini par le nom, le prénom, l’âge et la couleur des yeux.
function Personne(nom, prenom, age, couleurYeux) {
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.couleurYeux = couleurYeux;
  }

  
// Créez deux objets « père » et « mere » à l’aide de la fonctionnalité new
let pere = new Personne("Dupont", "Jean", 45, "marron");
let mere = new Personne("Dupont", "Marie", 42, "bleu");


// Ajoutez une méthode name au constructeur permettant d'énoncer le nom et prénom de personne.
Personne.prototype.name = function () {
	return this.nom + ' ' + this.prenom;
}


// Ajoutez une autre méthode au constructeur permettant de changer le nom de la personne.
Personne.prototype.changeName = function (nom) {
	this.nom = nom;
}
  

// Partant de cette remarque déclarez des variables et vérifiez pour chacune qu’elle se comporte comme des objets. 
// Par exemple x1.length donnera la longueur de x1 soit 5.
let x1 = "Hello";
console.log(x1 instanceof String); // true
console.log(x1.length); // 5

let x2 = 10;
console.log(x2 instanceof Number); // true
console.log(x2.toString()); // "10"

let x3 = true;
console.log(x3 instanceof Boolean); // true
console.log(x3.valueOf()); // true

let x4 = {};
console.log(x4 instanceof Object); // true
x4.prop = "value";
console.log(x4.prop); // "value"

let x5 = [];
console.log(x5 instanceof Array); // true
x5.push("element");
console.log(x5[0]); // "element"

let x6 = /pattern/;
console.log(x6 instanceof RegExp); // true
console.log(x6.test("pattern")); // true

let x7 = function() { console.log("function"); };
console.log(x7 instanceof Function); // true
x7(); // "function"

let x8 = new Date();
console.log(x8 instanceof Date); // true
console.log(x8.getFullYear(),"\n"); // année en cours

// En partant du constructeur de l'objet Personne contenant les propriété nom, prenom, age, couleur des yeux utilisez la 
// fonctionnalité prototype pour rajouter une propriété nationalite
Personne.prototype.nationalite = 'français';

// Même chose pour ajouter une méthode name permettant d'énoncer le nom et prénom de Personne
Personne.prototype.name = function () {
	return this.nom + ' ' + this.prenom;
}


// Quelques exemples d'utilisation de Math() :

// Math.random() : renvoie un nombre aléatoire compris entre 0 et 1 (exclu).

// Math.ceil(x) : renvoie le plus petit entier supérieur ou égal à x.

// Math.floor(x) : renvoie le plus grand entier inférieur ou égal à x.

// Math.round(x) : renvoie la valeur d'un nombre arrondi à l'entier le plus proche.

// Math.max(x, y, z, ...) : renvoie le plus grand nombre d'un ensemble de nombres.



// Exercice 3 : Les Prototypes

// 3.1 : Tâche 1

// Programmez le constructeur d’un objet personne comportant les propriétés nom, prenom, estomac. La propriété estomac 
// sera un tableau vide à l’initialisation.
function Personne(nom, prenom) {
    this.nom = nom;
    this.prenom = prenom;
    this.estomac = [];
  }

  
// Ajouter la méthode manger(« nourriture ») à personne, de telle sorte qu’à chaque consommation la nourriture est empilée, 
// mais on ne peut pas empiler plus de 10 nourritures.
Personne.prototype.manger = function (nourriture) {
	if (this.estomac.length < 10) {
		this.estomac.push(nourriture);
	}
}
  

// Ajouter la méthode digestionOK() qui permet de vider l’estomac.
this.digestionOK = function() {
    console.log("L'estomac de " + this.prenom + " a été vidé.","\n");
    this.estomac = [];
  };


// Ajouter la méthode name() qui permet de citer le nom et prénom de la personne.   
this.name = function() {
    console.log("Je suis " + this.prenom + " " + this.nom + ".","\n");
  };


// 3.2 : Tâche 2

// Programmez le contructeur d’un objet Car avec les propriétés modele, conso100km, reservoirlitre (initialisé à 0), 
// compteurkm (initialisé à 0).
function Car(modele, conso100km) {
    this.modele = modele;
    this.conso100km = conso100km;
    this.reservoirlitre = 0;
    this.compteurkm = 0;
  }


// Ajoutez la méthode addfuel(nblt) qui permet de rajouter au réservoir nblt de carburant
 
this.addfuel = function(nblt) {
    this.reservoirlitre += nblt;
    console.log(nblt + " litres de carburant ont été ajoutés au réservoir.","\n");
  }


// Ajoutez la methode drive(nbkm) qui permet de faire parcourir nbkm à la voiture et donc de mettre à jour son compteur kilometrique 
// et son resevoir. De plus dans le cas où le réservoir ne serait pas suffisant pour la distance parcourue, la chaine de caractère
// « Je serai à cours de carburant dans xx km » doit s’afficher, le réservoir doit être mis à 0 et le compteur doitêtre incrémenté de 
// la distance que pouvait parcourir la voiture.
this.drive = function(nbkm) {
    let conso = (this.conso100km / 100) * nbkm;
    
    if (conso > this.reservoirlitre) {
      let distancePossible = (this.reservoirlitre / this.conso100km) * 100;
      console.log(`Je serai à cours de carburant dans ${distancePossible} km`);
      this.compteurkm += distancePossible;
      this.reservoirlitre = 0;
    } else {
      this.reservoirlitre -= conso;
      this.compteurkm += nbkm;
    }
  }


// 3.3 : Tâche 3

// Programmez un constructeur Baby qui hérite de Personne.  
function Baby(nom, prenom) {
    Personne.call(this, nom, prenom);
  }
  Baby.prototype = Object.create(Personne.prototype);
  Baby.prototype.constructor = Baby;


// Le bébé aura en plus la propriété jouetFavori à initialiser.
function Baby(nom, prenom, jouetFavori) {
    Personne.call(this, nom, prenom);
    this.jouetFavori = jouetFavori;
  }


// Le bébé aura en plus des méthodes de l’objet Personne, la méthode jouer() qui retournera la chaîne 
// « Je joue avec mon jouet favorit x », x étant le contenu de la propriété jouetFavori.
  Baby.prototype = Object.create(Personne.prototype);
  Baby.prototype.constructor = Baby;
  Baby.prototype.jouer = function() {
    return ", je joue avec mon jouet favori, " + this.jouetFavori;
  };

  let baby = new Baby('Dupont', 'Marc', 'ma figurine Luffy !');
  console.log('Je suis ' + baby.name() + baby.jouer());