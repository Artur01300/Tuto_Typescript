/*
    Classes (Private, Public, Protected)
    Comme d'autres langages de programmation, TypeScript prend en charge les modificateurs d'accès au niveau de la classe.
    Le modificateur d'accès dans TypeScript est très utile et recommandé car il préserve la sécurité des membres de la classe tels que les propriétés et les attributs
    et les empêche d'être utilisés de manière inappropriée. Nous pouvons également l'utiliser pour contrôler l'accessibilité des données membres d'une classe afin qu'elle
    ne puisse pas être utilisée brusquement n'importe où dans le fichier de script. Si la classe ne doit pas être définie sur un modificateur d'accès, le TypeScript définit
    automatiquement l'accès du modificateur public à tous les membres de la classe comme modificateur par défaut.

    - Public:  Par défaut, les membres (propriétés et méthodes) de la classe TypeScript sont publics - vous n'avez donc pas besoin de préfixer les membres avec le mot-clé public.
        Les membres publics sont accessibles partout sans restrictions, même à partir des sous-classes à plusieurs niveaux, sans aucune erreur de compilation.
    - Private - Un membre privé n'est pas accessible en dehors de sa classe contenante. Les membres privés ne sont accessibles qu'au sein de la classe et même leurs sous-classes
        ne seront pas autorisées à utiliser leurs propriétés et attributs privés.
    - Protected - Un membre protégé n'est pas accessible en dehors de sa classe contenante. Les membres protégés ne sont accessibles qu'au sein de la classe et par l'instance de
        sa sous-classe/classe enfant.

    - Getters: accède depuis éxtèrieurs, quant on a modificateurs d'accès au niveau de la classe Privé
    - Setters: modifie les valeur sécurisés à l'entèrieur de la classe  (c'est une fonction, une fois invoqué, on peut antèragire avec les valeurs qu'on a sécurisé)
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
//    - Public -
var Father = /** @class */ (function () {
    function Father(n, h, e) {
        this.name = n;
        this.hair = h;
        this.eyes = e;
    }
    Father.prototype.speek = function () {
        console.log("\n            Bonjour, je m'appelle ".concat(this.name, ", j'ai des cheveux ").concat(this.hair, " et j'ai des yeux ").concat(this.eyes, "\n        "));
    };
    return Father;
}());
var person = new Father('Robert', 'noir', 2);
//  - Privet - 
/*
    Comment faire pour sécuriser ses information pour qu'on puiss pas accèder depuit l'extèrieur de la calsse ?
    - on charge les modificateurs d'accès au niveau de la classe et on met en < privet >
    - et il serra accèssible uniquement à l'entrèrieur de la casse
*/
// Résolition: Dans la propriété de la classe, avant la propriété < name > on ajoute  < private >
var Father2 = /** @class */ (function () {
    function Father2(n, h, e) {
        this.name = n;
        this.hair = h;
        this.eyes = e;
    }
    Father2.prototype.speek = function () {
        console.log("Bonjour, je m'appelle ".concat(this.name, ", j'ai des cheveux ").concat(this.hair, " et j'ai des yeux ").concat(this.eyes));
    };
    return Father2;
}());
var persFather2 = new Father2('Alexi', 'noir', 2);
// console.log(persFather2.name) // La propriété 'name' est privée et uniquement accessible dans la classe 'Father2'.
// - Getters -
/*
    accèder depuis éxtèrieurs, quant on a modificateurs d'accès au niveau de la classe Privé
    - ce géteur, c'est commen ouvrire une fenêre et donner sertin informations se trouvent dans la casse
    - le géteure est un méthode qui return la proprièté vule grâce à this.etc

*/
var Father3 = /** @class */ (function () {
    function Father3(n, h, e) {
        this.name = n;
        this.hair = h;
        this.eyes = e;
    }
    Father3.prototype.speek = function () {
        console.log("\n        Bonjour, je m'appelle ".concat(this.name, ", j'ai des cheveux ").concat(this.hair, " et j'ai des yeux ").concat(this.eyes, "\n        "));
    };
    // - Getters -
    Father3.prototype.getName = function () {
        return this.name;
    };
    return Father3;
}());
var persFather3 = new Father3('David', 'noir', 2);
//  console.log(persFather3.getName());// Alexi
// on peut également sécuriser les méthodes d'une calsse:
var Father4 = /** @class */ (function () {
    function Father4(n, h, e) {
        this.name = n;
        this.hair = h;
        this.eyes = e;
    }
    Father4.prototype.speek = function () {
        console.log("\n        Bonjour, je m'appelle ".concat(this.name, ", j'ai des cheveux ").concat(this.hair, " et j'ai des yeux ").concat(this.eyes, "\n        "));
    };
    Father4.prototype.getName = function () {
        return this.name;
    };
    return Father4;
}());
var persFather4 = new Father4('Nune', 'noir', 2);
//  console.log(persFather4.speek());//La propriété 'speek' est privée et uniquement accessible dans la classe 'Father4'.
// - Setters
/*
    setters est un méthode à la quelle on dois passer un argument avec un type :

    setHairCalor(newColor: string){
        this.hair = newColor;
    }
*/
var Father5 = /** @class */ (function () {
    function Father5(n, h, e) {
        this.name = n;
        this.hair = h;
        this.eyes = e;
    }
    Father5.prototype.speek = function () {
        console.log("Bonjour, je m'appelle ".concat(this.name, ", j'ai des cheveux ").concat(this.hair, " et j'ai des yeux ").concat(this.eyes));
    };
    //getter
    Father5.prototype.getName = function () {
        return this.name;
    };
    //setter
    Father5.prototype.setHairCalor = function (newColor) {
        this.hair = newColor;
    };
    return Father5;
}());
var persFather5 = new Father5('Narek', 'noir', 2);
persFather5.setHairCalor('Red');
// console.log(persFather5);// Bonjour, je m'appelle Nune, j'ai des cheveux noir et j'ai des yeux 2
// un autre situation
/**
    émaginont que dans la classe, au niveau de nos propriétés tous les propirété sont < private >

    class Father5 {
        private name: string;
        private hair: string;
        private eyes: number;
    }

    Dans ce cas la on pet déffinire notre propriété autrement, d'une manière beaucoup plus simple

    Attantion ! on peut faire cet téchique uniqement si on affiche les modificateurs d'accès au niveau de la classe.
 */
var Father6 = /** @class */ (function () {
    function Father6(name, hair, eyes) {
        this.name = name;
        this.hair = hair;
        this.eyes = eyes;
    }
    Father6.prototype.speek = function () {
        console.log("Bonjour, je m'appelle ".concat(this.name, ", j'ai des cheveux ").concat(this.hair, " et j'ai des yeux ").concat(this.eyes));
    };
    //getter
    Father6.prototype.getName = function () {
        return this.name;
    };
    //setter
    Father6.prototype.setHairCalor = function (newColor) {
        this.hair = newColor;
    };
    return Father6;
}());
var persFather6 = new Father6('Artak', 'noir', 2);
// console.log(persFather6)
// -   Protected - 
/*
    Un membre protégé n'est pas accessible en dehors de sa classe contenante. Les membres protégés ne sont accessibles qu'au sein de la classe et par l'instance de
    sa sous-classe/classe enfant.
    - Protected c'est un mayin de protéger les information d'une class sans pour le temps empècher ses dèrnier être accèssible au niveau des class qu'il hérite

*/
var Father7 = /** @class */ (function () {
    function Father7(name, hair, eyes) {
        this.name = name;
        this.hair = hair;
        this.eyes = eyes;
    }
    Father7.prototype.speek = function () {
        console.log("Bonjour, je m'appelle ".concat(this.name, ", j'ai des cheveux ").concat(this.hair, " et j'ai des yeux ").concat(this.eyes));
    };
    Father7.prototype.getName = function () {
        return this.name;
    };
    Father7.prototype.setHairCalor = function (newColor) {
        this.hair = newColor;
    };
    return Father7;
}());
var persFather7 = new Father7('Artak', 'noir', 2);
console.log(persFather7);
var Daughter = /** @class */ (function (_super) {
    __extends(Daughter, _super);
    function Daughter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /*
        Publc ok
        Privete: no
        Proctected: ok

    */
    Daughter.prototype.getData = function () {
        return this.eyes;
    };
    return Daughter;
}(Father7));
var daughter1 = new Daughter('Ani', 'noir', 2);
console.log(daughter1);
