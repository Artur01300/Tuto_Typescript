//Union Type      string | number | boolean
// 1. Union types
// exemple: ici on peut assignier à firstNage une autre valeur comme, par exemple number 
// let firstName = "Roger";
// firstName = 200;
//Mais, c'est posible avec Union types: let firstName: string | number:
var firstName = "Roger";
firstName = 200;
// on peut ajouter si on veut booleant, ces aussi possible
// comment gèrer ses parapètre en tent que fonction ?
function sum(arg1, arg2) {
    return arg1 + arg2;
}
console.log(sum(20, 40)); //60
console.log(sum("Hello", 40)); // TS Error - JS OK
/*
  comment faire dans cet cas pour notre fonction qu'elle accepte au niveau de 1er argument un type number et un type string ?
  Pour cela on va utiliser les Unions types
*/
// 1. exemple pour union types
function concatenate(arg1, arg2) {
    /*
     ici on a une alert: < Impossible d'appliquer l'opérateur '+' aux types 'string | number' et 'string | number'. >
      le TS il n'arrive pas les distanger ou gèrer les arguments car il sait pas si c'est un string ou number.
      Pour résoudre cet proplème on ajoute if else ou farie ça < return arg1 + " " + arg2
    */
    return arg1 + arg2;
}
console.log(concatenate(10, 20));
console.log(concatenate("Hello", 20));
//2 solutions
function concatenate2(arg1, arg2) {
    var result;
    if (typeof arg1 === "number" && typeof arg2 === "number") {
        result = arg1 + arg2; //number
    }
    else if (typeof arg1 === "string" && typeof arg2 === "string") {
        result = arg1 + arg2; // string
    }
    else {
        /*
          isi on a une error: Impossible d'appliquer l'opérateur '+' aux types 'string | number' et 'string | number'
          parce que on ne peut pas additionner 2 types differants.
          Solution: il faut transformer les valeur en strige avec la methode < tostring() >
        */
        result = arg1 + arg2;
    }
    return result;
}
// console.log(concatenate(10, 20));
// console.log(concatenate("Hello", 20))
//3 solutions final
function concatenate3(arg1, arg2) {
    var result;
    if (typeof arg1 === "number" && typeof arg2 === "number") {
        result = arg1 + arg2; //number
    }
    else if (typeof arg1 === "string" && typeof arg2 === "string") {
        result = arg1 + arg2; // string
    }
    else {
        result = arg1.toString() + arg2.toString();
        //ou:  result = arg1 + " " + arg2;
    }
    return result;
}
console.log(concatenate3(10, 20)); //30
console.log(concatenate3("Hello", "World")); // HelloWorld
console.log(concatenate3("Hello", 20)); //Hello20
console.log(concatenate3(20, "Hello")); //20Hello
