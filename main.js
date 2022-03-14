/*
  Type Any utiliser avec modération! Type Any ne va pas vérifier votre code!
  Peut être utile dans certains cas. Exemple:
    On ne sait pas quel type de dat à récupérer d'une API, d'un formulaire, on souhaite modier le type etc..
    Si type Any est utilisé n'obliez bas à verifier le code(typeof)
*/
//1.
var anyDada = 'Hello';
console.log(typeof anyDada); //String
anyDada = 20;
console.log(typeof anyDada); //Number
anyDada = true;
console.log(typeof anyDada); //Boolean
//Attation ! Le type d'un <Array> est un object
anyDada = ['Hello'];
console.log(typeof anyDada); //Object
anyDada = {
    colors: ["Green", "Red", "Bleu"]
};
console.log(typeof anyDada); //Object
//2.
/*
  let anyDataArray: any = [];
  ici on peut changer le type arrey en tout ce qu'on veut
*/
// let anyDataArray: any = ['123'];
// anyDataArray = 2
// console.log(anyDataArray)
/*
  let anyDataArray: any[] = [];
  ici on doit obligatoirment avoir un array et on ne peut pas changer son type
*/
// let anyDataArray: any[] = ['123'];
// anyDataArray = [2]
// console.log(anyDataArray)
//3.
//ici on peut modifier les valeurs avec differant de types
// let userInfos:any = {
//   name: 'Hqkermen',
//   pseudo: 123456
// }
// userInfos.pseudo= "1266";
// console.log(userInfos)
// ou, on peut les paramètrer comme on vuet
var userInfos = {
    name: 'Hqkermen',
    pseudo: 123456
};
userInfos.pseudo = "1266";
console.log(userInfos);
