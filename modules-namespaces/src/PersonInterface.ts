// Exercice 1

// namespace App {
//    export interface PersonInterface{
//         name: string;
//         age: number
//     }
// }




// Exercice 2
namespace App {
    interface PersonInterface{
        name: string;
        age: number
    }

    export class Person implements PersonInterface{
        name: string;
        age: number;
    
        constructor(n:string, a:number){
            this.name = n;
            this.age = a;
        }
    }
}
