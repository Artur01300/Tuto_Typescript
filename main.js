/*
  Type Null et Undefined

  - < Undefined > est la valeur par défaut pour une variable déclaré mais on a pas asignier une valeur
*/
// 1 Exercice - undifened -
var myName;
console.log(myName); // undifened  car on a pas déclaré une valeur
// 2 Exercice - null -
var myName2;
myName2 = null;
console.log(myName2); // null
// 3 Exercice - Undifined Vs Null -
console.log(undefined === null); // false
console.log(undefined == null); // true
// typeof
console.log(typeof undefined); // undefined
console.log(typeof null); // object
// !
console.log(null); // null
console.log(!null); // true 
console.log(!!null); // false
//retun undifined | null
var myFunc = function foo(arg) {
    return arg;
};
var result = myFunc("Hello");
if (result != null) {
    console.log(typeof result); //string
}
// Vérifier avec les operateur arithmétique
console.log("operateur arithmétique", null + 200); // JS OK: Rien + 200 = 200
var element = document.querySelector("elementFictif");
console.log("element", element); //null
console.log("operateur arithmétique-undefined ", undefined + 200); //JS c'est pas normal   NaN
var users = {};
console.log("Objet User", users.age); //undefined
// 4 Exercice 
var value; //TS number
console.log(value); //undifined
var value1;
console.log(value1); //undifined
var value2;
console.log(value2); //undifined
var value3 = null;
console.log(value3); //null
//5 Exercice 
//Il y a un posibilité d'assignier null et undifined à quellque chose comme number
var value4;
value4 = null; //TS ok
value4 = undefined; //TS ok
/*
  Si on est pas le cas --strictNullChecks, on a la possibilité d'atribuer < null > ou < undifined > à quellque chose comme number par exemple.
  Pour éviter se la il faut de mettre notre --strictNullChecks en mode true. Dans se cas là, le null et undifined, serront accessible uniquement
   < any > et < unknown >
    - tsc --init
    - puit < strictNullChecks > on décommende

    Une foie acctiver < strictNullChecks > on aura un très rounge pour l'exerciec 5, qui nous dit, qu'on peut assignier ayn ou unknown:
*/
//solution:
var value5;
value5 = null; //TS ok
value5 = undefined; //TS ok
