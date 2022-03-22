/*  ** Class **
    Une classe est un modèle ou un plan pour créer des objets. Nous pouvons définir les propriétés suivantes dans une définition de classe :
    - Champs : C'est une variable déclarée dans une classe.
    - Méthodes : Il représente une action pour l'objet.
    - Constructeurs : Il est responsable de l'initialisation de l'objet en mémoire.
    - Classe et interface imbriquées : Cela signifie qu'une classe peut contenir une autre classe.

    
    ** Interface type **
    Une interface est une structure qui agit comme un contrat dans notre application. Nous ne pouvons pas instancier l'interface,
    mais elle peut être référencée par l'objet de classe qui l'implémente. Lorsque le compilateur Typescript le compile en JavaScript, l'interface sera supprimée du
    fichier JavaScript. Ainsi, son but est d'aider uniquement dans la phase de développement.

    Nous pouvons utiliser l'interface pour les choses suivantes :
    - Validation de la structure spécifique des propriétés
    - Objets passés en paramètres
    - Objets renvoyés par les fonctions.

    Readonly marche également avec les interfaces
*/
// 1. Exercice
// class
var MatherClass = /** @class */ (function () {
    function MatherClass(n, e) {
        this.name = n;
        this.eyes = e;
    }
    MatherClass.prototype.speak = function () {
        console.log("Je me présente, je m'appelle" + this.name);
    };
    return MatherClass;
}());
var henri = new MatherClass('Henri', 2);
// comme les class, les interface peuvent avoire les type de leur interface  <let helene: fatherInterface2>
var helene;
helene = {
    name: "Helène",
    eyes: 2,
    speak: function (a) {
        return a + ' ' + this.name;
    }
};
console.log(helene);
// 2. Exercice
// Utilisation l'interface pour un fonction
var tolkingPerson = function (a, b) {
    return a.speak(b);
};
var resultExert = tolkingPerson(helene, "Je m'appelle");
console.log(resultExert);
// 3. Exercice
// Readonly marche également avec les interfaces
// interface FatherInterface3 {
//     name: string;
//     readonly eyes: number;
// }
// let testInterface3: FatherInterface3;
// testInterface3 = {
//     name: "Hélène",
//     eyes: 2
// }
// let chanteye = testInterface3.eyes = 5; //JS ok TS Non
// console.log(testInterface3);
