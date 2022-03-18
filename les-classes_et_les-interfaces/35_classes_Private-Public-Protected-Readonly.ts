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

//    - Public -
class Father {
    name: string;
    hair: string;
    eyes: number;

    constructor(n: string, h: string, e: number){
        this.name = n;
        this.hair = h;
        this.eyes = e;
    }

    speek(){
        console.log(`
            Bonjour, je m'appelle ${this.name}, j'ai des cheveux ${this.hair} et j'ai des yeux ${this.eyes}
        `);
    }
}

const person = new Father('Robert', 'noir', 2);



//  - Privet - 

/*
    Comment faire pour sécuriser ses information pour qu'on puiss pas accèder depuit l'extèrieur de la calsse ?
    - on charge les modificateurs d'accès au niveau de la classe et on met en < privet >
    - et il serra accèssible uniquement à l'entrèrieur de la casse
*/

// Résolition: Dans la propriété de la classe, avant la propriété < name > on ajoute  < private >
class Father2 {
   private name: string;
    hair: string;
    eyes: number;

    constructor(n: string, h: string, e: number){
        this.name = n;
        this.hair = h;
        this.eyes = e;
    }

    speek(){
        console.log(`Bonjour, je m'appelle ${this.name}, j'ai des cheveux ${this.hair} et j'ai des yeux ${this.eyes}`);
    }
}

const persFather2= new Father2('Alexi', 'noir', 2);
// console.log(persFather2.name) // La propriété 'name' est privée et uniquement accessible dans la classe 'Father2'.


// - Getters -
/* 
    accèder depuis éxtèrieurs, quant on a modificateurs d'accès au niveau de la classe Privé
    - ce géteur, c'est commen ouvrire une fenêre et donner sertin informations se trouvent dans la casse
    - le géteure est un méthode qui return la proprièté vule grâce à this.etc

*/
class Father3 {
    private name: string;
    hair: string;
    eyes: number;
 
     constructor(n: string, h: string, e: number){
        this.name = n;
        this.hair = h;
        this.eyes = e;
     }
 
    speek(){
    console.log(`
        Bonjour, je m'appelle ${this.name}, j'ai des cheveux ${this.hair} et j'ai des yeux ${this.eyes}
        `);
    }
// - Getters -
    getName(){
        return this.name
    }
}
 const persFather3= new Father3('David', 'noir', 2);
//  console.log(persFather3.getName());// Alexi


 // on peut également sécuriser les méthodes d'une calsse:
 class Father4 {
    private name: string;
    hair: string;
    eyes: number;
 
     constructor(n: string, h: string, e: number){
        this.name = n;
        this.hair = h;
        this.eyes = e;
     }
 
    private speek(){
    console.log(`
        Bonjour, je m'appelle ${this.name}, j'ai des cheveux ${this.hair} et j'ai des yeux ${this.eyes}
        `);
    }
    getName(){
        return this.name
    }
}
 const persFather4 = new Father4('Nune', 'noir', 2);
//  console.log(persFather4.speek());//La propriété 'speek' est privée et uniquement accessible dans la classe 'Father4'.

// - Setters
/*
    setters est un méthode à la quelle on dois passer un argument avec un type :  

    setHairCalor(newColor: string){
        this.hair = newColor; 
    }
*/
class Father5 {
    private name: string;
    private hair: string;
    eyes: number;

    constructor(n: string, h: string, e: number){
        this.name = n;
        this.hair = h;
        this.eyes = e;
    }
    speek(){
        console.log(`Bonjour, je m'appelle ${this.name}, j'ai des cheveux ${this.hair} et j'ai des yeux ${this.eyes}`);
    }
    //getter
    getName(){
        return this.name;
    }
    //setter
    setHairCalor(newColor: string){
        this.hair = newColor; 
    }
}
const persFather5= new Father5('Narek', 'noir', 2);
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

class Father6 {
    constructor(private name: string, private hair: string, private eyes: number ){}
    speek(){
        console.log(`Bonjour, je m'appelle ${this.name}, j'ai des cheveux ${this.hair} et j'ai des yeux ${this.eyes}`);
    }
    //getter
    getName(){
        return this.name;
    }
    //setter
    setHairCalor(newColor: string){
        this.hair = newColor; 
    }
}
const persFather6= new Father6('Artak', 'noir', 2);
// console.log(persFather6)


// -   Protected - 
/*
    Un membre protégé n'est pas accessible en dehors de sa classe contenante. Les membres protégés ne sont accessibles qu'au sein de la classe et par l'instance de 
    sa sous-classe/classe enfant.
    - Protected c'est un mayin de protéger les information d'une class sans pour le temps empècher ses dèrnier être accèssible au niveau des class qu'il hérite

*/
class Father7{
    constructor(public name: string, private hair: string, protected eyes: number ){}
    speek(){
        console.log(`Bonjour, je m'appelle ${this.name}, j'ai des cheveux ${this.hair} et j'ai des yeux ${this.eyes}`);
    }
 
    getName(){
        return this.name;
    }
   
    setHairCalor(newColor: string){
        this.hair = newColor; 
    }
}
const persFather7 = new Father7('Artak', 'noir', 2);
console.log(persFather7)

class Daughter extends Father7 {
    /*
        Publc ok
        Privete: no
        Proctected: ok

    */
    getData(){
        return this.eyes
    }
}

const daughter1 = new Daughter('Ani', 'noir', 2);
console.log(daughter1)