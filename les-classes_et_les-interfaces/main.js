/*
    Héritage et Polymarphisme
    - Héritage: permat de transormer ses propriétés et ses méthode d'un calsse à une autre objet
    - Polymarphisme
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Mather = /** @class */ (function () {
    //Methodes
    function Mather(n, h, e) {
        this.name = n;
        this.hair = h;
        this.eyes = e;
    }
    Mather.prototype.speek = function () {
        console.log("\n            Bonjour, je m'appelle ".concat(this.name, ", j'ai des cheveux ").concat(this.hair, " et j'ai des yeux ").concat(this.eyes, "\n        "));
    };
    return Mather;
}());
var person1 = new Mather('Alexi', 'noir', 2); // type Mather
// console.log("Person1 de la classe Mather: ", person1);
// person1.speek();
//. HERIGAGE
/*
    Pour pouvoir érité les caractairistiques de la class < Mather >, nous avont devoir utiliser < extends >.
    - sachant que notr class Children hérite la class Mather, en moment de anstanciation je vais devoir réspécter les éxigance de l'objet
    Mather.
*/
var Children = /** @class */ (function (_super) {
    __extends(Children, _super);
    function Children() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Children;
}(Mather));
var person2 = new Children('Déméter', 'marron', 2); // Type Children
// console.log("Person2 de la classe Children: ", person2);
// person2.speek();
/*
    Emaginom la person2 à été adopté par une famie Anglais et la persson ne parle pas en Français ?
    - on copie la méthode < speek() > depuis de la classe Mather puis on ajoute dans la class Children2
    - et après on troiduit en englais
*/
var Children2 = /** @class */ (function (_super) {
    __extends(Children2, _super);
    function Children2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Children2.prototype.speek = function () {
        console.log("\n            Hi, my name is ".concat(this.name, ", i have a ").concat(this.hair, " hair and i have ").concat(this.eyes, " eyes.\n        "));
    };
    return Children2;
}(Mather));
var person3 = new Children2('Déméter', 'brown', 2);
// console.log("Person3 de la classe Children: ", person3);
// person3.speek();
/*
    - Si par éxemple on veut ajouter un autr méthode c'est aussi posible.
    - Si on veux évoquer la méthode existant de la class parent(Mather) on peut evoquer < supper >:

*/
var Children3 = /** @class */ (function (_super) {
    __extends(Children3, _super);
    function Children3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Children3.prototype.speek = function () {
        console.log("\n            Hi, my name is ".concat(this.name, ", i have a ").concat(this.hair, " hair and i have ").concat(this.eyes, " eyes.\n        "));
    };
    //on évoquer la méthode existant de la class parent(Mather) avec < supper > : puit point et on récupère la méthode
    Children3.prototype.speekMathLang = function () {
        _super.prototype.speek.call(this);
    };
    return Children3;
}(Mather));
var person4 = new Children3('Déméter', 'brown', 2);
// console.log("Person4 de la classe Children: ", person4);
// person4.speek();
//. POLYMARPHISME
/*
    Ici on a un type < Mather > et un type < Children3 >
    Emaginon que je veux changer le taype de 2em objet (personChildren), c'est a dire, le type Children3 en type Mather ?
    - ça ne va pauser aucun problème à ce niveu la car type chidren3 à hériter de type Mather, seul contrante: dès que la type Children3
    devien au type Mather il hérite éghalement à ses méthodes es propriétés, donc type Children3 il aura pas la méthode < speekMathLang() >
*/
// avant le POLYMARPHISME
var personMather = new Mather('Déméter', 'brown', 2); // type Mather
var personChildren = new Children3('Artur', 'Noir', 2);
// après le POLYMARPHISME
var personMather2 = new Mather('Déméter', 'brown', 2); // type Mather
var personChildren2 = new Children3('Artur', 'Noir', 2); // type Mather
console.log(personChildren2);
