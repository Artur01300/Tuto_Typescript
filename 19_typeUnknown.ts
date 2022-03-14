/*
  Type Unknown
  Via <Unknown>, le TypeScript définit un type comme étant inconnu!
  Comme le type <Any>, Unknown accepte tous les types

  Important! Pour pouvoir utiliser le type Unknown, on doit d'abord vérifier le type

  Imortant! si on a le chois entre any e unknown, c'est consaillé d'utiliser unknown
*/

//1. pour le cas any ça marche
let inputData: any;
inputData = true;
console.log(typeof inputData);//boolean

let inputAge: number;
inputAge = inputData//ok
console.log(typeof inputAge);//boolean

//2. unknown ça marche pas car on doit verifier avec if else
//à qui sert unknown ? il pertmet de verifier sont type aveant d'asignier( pour être sure)
// let inputData2: unknown;
// inputData2 = 20;
// console.log(typeof inputData2);//number

// let inputAge2: number;
// inputAge2 = inputData2//ok
// console.log(typeof inputAge2); //marche pas

//3. correction d'erreur: on verifie avec typeof 
let inputData2: unknown;
inputData2 = 20;

let inputAge2: number;

if(typeof inputData2 === 'number'){
  inputAge2 = inputData2
  console.log(typeof inputAge2); //number
}

