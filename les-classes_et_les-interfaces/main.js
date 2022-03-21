/*
   Interface type:
   Définir les contraintes d'un objet (Propriétés, Méthodes)

   En TypeScript, deux types sont compatibles si leur structure interne est compatible.
   Cela nous permet d'implémenter une interface simplement en ayant la forme requise par l'interface, sans implements clause explicite.

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
console.log('%cmain.ts line:26 Henri', 'color: #007acc;', henri);
// comme les class, les interface peuvent avoire les type de leur interface  <let helene: fatherInterface2>
var helene;
helene = {
    name: "Helène",
    eyes: 2,
    speak: function (a) {
        return a + ' ' + this.name;
    }
};
// console.log(helene)
// 2. Exercice
// Utilisation l'interface pour un fonction
var tolkingPerson = function (a, b) {
    return a.speak(b);
};
var resultExert = tolkingPerson(helene, "Je m'appelle");
console.log(resultExert);
var testInterface3;
testInterface3 = {
    name: "Hélène",
    eyes: 2
};
var chanteye = testInterface3.eyes = 5; //JS ok TS Non
console.log(testInterface3);
