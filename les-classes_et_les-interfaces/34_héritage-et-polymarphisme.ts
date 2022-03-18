/*
    Héritage et Polymarphisme
    - Héritage: permat de transormer ses propriétés et ses méthode d'un calsse à une autre objet
    - Polymarphisme
*/

class Mather {
    name: string;
    hair: string;
    eyes: number;

    //Methodes
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

const person1 = new Mather('Alexi', 'noir', 2); // type Mather
// console.log("Person1 de la classe Mather: ", person1);
// person1.speek();


//. HERIGAGE

/*
    Pour pouvoir érité les caractairistiques de la class < Mather >, nous avont devoir utiliser < extends >.
    - sachant que notr class Children hérite la class Mather, en moment de anstanciation je vais devoir réspécter les éxigance de l'objet
    Mather.
*/
class Children extends Mather {

}
const person2 = new Children('Déméter', 'marron', 2);// Type Children
// console.log("Person2 de la classe Children: ", person2);
// person2.speek();

/*
    Emaginom la person2 à été adopté par une famie Anglais et la persson ne parle pas en Français ?
    - on copie la méthode < speek() > depuis de la classe Mather puis on ajoute dans la class Children2
    - et après on troiduit en englais
*/
class Children2 extends Mather {
    speek(){
        console.log(`
            Hi, my name is ${this.name}, i have a ${this.hair} hair and i have ${this.eyes} eyes.
        `);
    }
}
const person3 = new Children2('Déméter', 'brown', 2);
// console.log("Person3 de la classe Children: ", person3);
// person3.speek();


/* 
    - Si par éxemple on veut ajouter un autr méthode c'est aussi posible.
    - Si on veux évoquer la méthode existant de la class parent(Mather) on peut evoquer < supper >:

*/
class Children3 extends Mather {
    speek(){
        console.log(`
            Hi, my name is ${this.name}, i have a ${this.hair} hair and i have ${this.eyes} eyes.
        `);
    }

    //on évoquer la méthode existant de la class parent(Mather) avec < supper > : puit point et on récupère la méthode
    speekMathLang(){
        super.speek()
    }
}
const person4 = new Children3('Déméter', 'brown', 2);
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
const personMather =  new Mather('Déméter', 'brown', 2);// type Mather
const personChildren =  new Children3('Artur', 'Noir', 2);

// après le POLYMARPHISME
const personMather2 =  new Mather('Déméter', 'brown', 2);// type Mather
const personChildren2:Mather =  new Children3('Artur', 'Noir', 2); // type Mather
console.log(personChildren2)


