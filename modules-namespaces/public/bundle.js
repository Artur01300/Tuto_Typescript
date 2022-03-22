"use strict";
// Exercice 1
// namespace App {
//    export interface PersonInterface{
//         name: string;
//         age: number
//     }
// }
// Exercice 2
var App;
(function (App) {
    class Person {
        constructor(n, a) {
            this.name = n;
            this.age = a;
        }
    }
    App.Person = Person;
})(App || (App = {}));
/*
    Modules Namespaces
    Pour comminiquer entre les fichiers:
    1. dans le fichier PersonInterface.ts, on créer un objet <namespace App> et devant l'Interface PersonInterface on ajouter export:
        namespace App {export interface PersonInterface{.....}
    2. Pour récupèrer le fichier PersonInterface.ts, dans le fichier script.ts on importe ce fichier via
        /// < reference path="nom du fichier" />                  (les 3 trèt sont imortants)
    3. Dans le fichier script.ts, après le  < reference path="nom du fichier" />, je créer
        < namespace App{} > et je met mon class à l'entèrieur:

        namespace App{
            class Person implements PersonInterface{
                .........
                constructor(n:string, a:number){.......}
            }
                const person = new Person("Alexi", 2);
                console.log('%cscript.ts line:21 person', 'color: #007acc;', person);
            }
        }
*/
///<reference path="PersonInterface.ts" />
// Exercice 1
// namespace App{
//     class Person implements PersonInterface{
//         name: string;
//         age: number;
//         constructor(n:string, a:number){
//             this.name = n;
//             this.age = a;
//         }
//     }
//     const person = new Person("Alexi", 2);
//     console.log('%cscript.ts line:21 person', 'color: #007acc;', person);
// }
/*
    Pour pouvoir connecter ce 2 fichier là (script.ts et PersonInterface.js) on doit génèrer un bundle que sera dans le dossier publique
    1. accèder au tsconfig.json/"outFile":"./", qui va génèrer un seule fichier JS
    2. il faut déffinir le path de bundle: < "outFile": "./public/bundle.js" >
    3. après l'acctivation de < "outFile" > on a un trèt rouge au niveau de tsconfig.json/"module": "commonjs", la valeur de module("commonjs")
        on medifi en "amd"(unsycronise modul definishen)

    4. dans le fichier PersonInterface.js devant de la class Person on ajoute < export >:
       < export class Person implements PersonInterface{} >
    5. dans le fichier main.html en ranseigne le fichier bundle.js

    6. à la fin, dans < namespace > on créer notre instance de la classe Person (   namespace App{]  ):
    
        namespace App{
            const person = new Person("Alexi", 2);
            console.log('%cscript.ts line:21 person', 'color: #007acc;', person);
        }
*/
// Exercice 2
var App;
(function (App) {
    const person = new App.Person("Alexid", 2);
    console.log('%cscript.ts line:21 person', 'color: #007acc;', person);
})(App || (App = {}));
// Sans export
// interface PersonInterface{
//     name: string;
//     age: number
// }
// class Person implements PersonInterface{
//     name: string;
//     age: number;
//     constructor(n:string, a:number){
//         this.name = n;
//         this.age = a;
//     }
// }
// const person = new Person("Alexi", 2);
// console.log('%cscript.ts line:21 person', 'color: #007acc;', person);
// }
