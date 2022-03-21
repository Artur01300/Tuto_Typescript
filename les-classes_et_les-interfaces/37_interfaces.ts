/*
   Interface type:
   Définir les contraintes d'un objet (Propriétés, Méthodes)

   En TypeScript, deux types sont compatibles si leur structure interne est compatible. 
   Cela nous permet d'implémenter une interface simplement en ayant la forme requise par l'interface, sans implements clause explicite.

   Readonly marche également avec les interfaces
*/

// 1. Exercice
// class

class MatherClass {
    name: string;
    eyes: number;

    constructor(n:string, e:number){
        this.name = n;
        this.eyes = e;
    }
    speak(){
        console.log("Je me présente, je m'appelle" + this.name);
    }
}
let henri = new MatherClass('Henri', 2);
console.log('%cmain.ts line:26 Henri', 'color: #007acc;', henri);


// Interface

//étap 1
// interface FatherInterface {
//     name: string;
//     eyes: number;

//     //Méthode -- on définie la signature de la méthode
//     speak();
// }

//étap 2
/*
    sur speak() on a un tret rouge : 'speak', qui ne dispose pas d'annotation de type de retour, possède implicitement un type de retour 'any'.
    signifie: il faut presiser qu'on veut éffectuer un retern de type string <  speak():string >
*/
interface FatherInterface2 {
    name: string;
    eyes: number;
    /*
        Amportent ! contrairement à la class, interface à besoin que sa méthode soit réturner avec un type déffinie.

        cet signature signive que la valeur retourner doive être aubliguatoirement de type string
        dans l'argument on peut également présiser le type < speak(a: string):string; >
    */
    speak(a: string):string;
}


// comme les class, les interface peuvent avoire les type de leur interface  <let helene: fatherInterface2>
let helene: FatherInterface2;
helene = {
    name: "Helène",
    eyes: 2,
    speak(a: string): string {
        return a + ' ' + this.name;
    }
};
// console.log(helene)


// 2. Exercice
// Utilisation l'interface pour un fonction

const tolkingPerson = (a: FatherInterface2, b: string) => {
    return a.speak(b);
}

const resultExert = tolkingPerson(helene, "Je m'appelle");
console.log(resultExert);

// 3. Exercice
// Readonly marche également avec les interfaces
interface FatherInterface3 {
    name: string;
    readonly eyes: number;
}

let testInterface3: FatherInterface3;

testInterface3 = {
    name: "Hélène",
    eyes: 2
}

let chanteye = testInterface3.eyes = 5; //JS ok TS Non
console.log(testInterface3);