/*
  Function Type
  - Paramètres facutatifs
  - Paramètres par défaut
*/
//1. exerciece
// function buildName(firstName: string, lastName: string){
//   return firstName + " " + lastName
// }
var result1 = buildName('Bobe'); //Bob undefinded
// console.log(result1);
//ici TS n'est pas content par contr pour JS pas de problème (il ignore le <Hello>)
// let result2 = buildName('Bobe', 'Adams', 'Hello');// Bobe Adams
// console.log(result2)
// ici tout est correct
// let result3 = buildName('Bobe', 'Adams');// Bobe Adam
// console.log(result3)
//------------------------------------------- 
//2. exerciece
//< ? > signifie c'est pas emportant le 2em argument
function buildName(firstName, lastName) {
    return firstName + " " + lastName;
}
var result4 = buildName('Bobe'); //Bob undefinded
// console.log(result4);
// vour éviter < undefinded > dans le console log, on peut vérifier avec if else:
function buildName2(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
var result5 = buildName2('Bobe'); //Bob sans undefinded
// console.log(result5);
//2. 2em argument sera remplaser automatiquent si il n'est pas fournie
function buildName3(firstName, lastName) {
    if (lastName === void 0) { lastName = "Smith"; }
    return firstName + " " + lastName;
}
var result6 = buildName3('Bobe'); //Bob Smith
// console.log(result6);
//ici le 2em valeur est remlacé (écrasé)  < Smith >
var result7 = buildName3('Bobe', 'Artur'); //Bob Artur
// console.log(result7);
//on peut également dire que 2em valeur est undefined, puis il sera remplacer par <Smith>
var result8 = buildName3('Bobe', undefined); //Bob Smith
console.log(result8);
/*
  Les paramètres initialisés par défaut qui suivent tous les paramètes requis sant trétés comme facutatifs,
  et comme les paramètes facultatifs, ils peuvent être omis lors de l'appel de leur fonction respective.
  Les paramètre facultatifs on peut pas placer en premier position

  paramètes requis: < firstName: string >
  paramètres initialisés par défaut: < lastName?: string > sont des valeur faculatifs

*/
function buildName4(firstName, lastName) {
}
/*
  Contrairement aux paramètres facultatifs simples, les paramètres initialisés par défaut
  n'ont pas besoin de se positionner obligatoirement après paramètres requis. Si un paramètre initialisé par défaut précède un
  paramètre obligatoire, les utilisateurs doivent passer explicitement "undefinded" pour pouvoir obtenir la valeur initialisée par défaut.

  aramètres facultatifs simples: < lastName?: string >
  paramètres initialisés par défaut: < firstName: "Will" >
 
*/
function buildName5(firstName, lastName) {
    return firstName + " " + lastName;
}
