/*
    Access modifyer:
    readonly peut être modifié que via le constructor
    
    - On peut définir un propriété avec ça valeur à l'entèrieur de la class et on ne peut pas modifier sa valeur
    - on peut définir un propriété avec ça valeur l'heur d'l'instatioantion de la class grâce à constructeur et on peut modifier sa valeur
        via setter ou getter

*/
// On peut définir un propriété avec ça valeur à l'entèrieur de la class et on ne peut pas modifier sa valeur
// 1. Exercice
var Car = /** @class */ (function () {
    function Car() {
        this.color = 'Red';
        this.gears = 4;
    }
    return Car;
}());
var ford = new Car();
// console.log('%cmain.ts line:17 ford', 'color: #007acc;', ford);
// 2. Exercice
// readonly
var Car2 = /** @class */ (function () {
    function Car2() {
        this.color = 'Red';
        this.gears = 4;
    }
    return Car2;
}());
var kia = new Car2();
// let greenColor = kia.color = 'green'; ///suit < readonly > on ne peut pas changer sa couloeur
// console.log('%cmain.ts line:17 Kia', 'color: #007acc;', kia);
// on peut définir un propriété avec ça valeur l'heur de l'instantiation de la class grâce à constructeur et on peut modifier sa valeur via setter ou getter
var Car3 = /** @class */ (function () {
    // readonly color: string;
    // public gears: number = 4;
    // constructor(c:string, g: number){
    function Car3(color, gears) {
        this.color = color;
        this.gears = gears;
        // this.color = c;
        // this.gears = g;
    }
    return Car3;
}());
var fords = new Car3("White", 4);
console.log('%cmain.ts line:48 fords', 'color: #007acc;', fords);
/*
    En trésumé:
    en peut ajouter un couleur pendant instantiation, par contre, je peut pas modifier après
*/ 
