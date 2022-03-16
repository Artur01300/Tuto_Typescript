/*
  Types Never: 
*/

// 1. Exerciece 
const PI = 3.14;
let PI1 = 3.14;

/*
  const:via l'anvérance nous dit < const PI: 3.14 > cer cel ci ne vas jamais changer (c'est un const). 
    on résumé on peut pas attribuer un autre valeur ou le changer. De ce faite le type est ici 3.14
  let: via l'anvérance nous dit c'est un number < let PI1: number >
*/

// 2. Exerciece

// Literal Types
let PI2: '3.14';


//3. Exerciece

// Ilustartion
function total(arg1: number, arg2: number){
  return arg1 + arg2;
}

// console.log(total(2,5));

/*
  Emaginant dans la fonction on a 3 argument (totalVersion) et cet argument est un string puit on ublie d'écrire la valeur d'argument incorrectement:
  - Notre TS nous affiche pas un error mais en niveau de if else on est pas en bonne logique
  - Dans if els nous vérifion si notre < totalVersion> est idandique à cel de <'getStringValue'>
*/  
function total2(arg1: number, arg2: number, totalVersion: string){
  let result;
  if(totalVersion === 'getStringValue'){
    result = arg1.toString() + arg2.toString() //string
  }else{
    result = arg1 + arg2; //Number
  }
  return result
}

let totalOne = total2(20, 10, 'getStringVal');// Valeur < getStringVal > écrite incoorectement
// console.log(totalOne); //2010

// 1. Résolution
/*
  Ii faut metre un moyen de nous permet de preciser clairement la valeur du string au niveau la paramètre du fonction ou le TS vas m'afficher un error
  - on utilise Literal Types, par ce que, non selement nous avant préciser que c'est un string mais également sa valeur: exemple 
  dans notr paramètre à largument <totalVersion> on ajoute ça (totalVersion: "getStringValue")
*/
// function total3(arg1: number, arg2: number, totalVersion: string){ //avant 
  function total3(arg1: number, arg2: number, totalVersion: "getStringValue"){ // avec Literal Type
  let result;
  if(totalVersion === 'getStringValue'){
    result = arg1.toString() + arg2.toString() //string
  }else{
    result = arg1 + arg2; //Number
  }
  return result
}

// let totalOne2 = total3(20, 10, 'getStringVal');// Valeur < getStringVal > écrite incoorectement
// console.log(totalOne2); //2010

// 2. Résolution
/*
  Une fois ajouté le < Literal Type > le TS nous permet voir notre error on niveau de paramètre qu'on a ajouté (voir < let totalOne3 >) 
*/

// function total4(arg1: number, arg2: number, totalVersion: string){ 
  function total4(arg1: number, arg2: number, totalVersion: "getStringValue" | "testuser"){
  let result;
  if(totalVersion === 'getStringValue'){
    result = arg1.toString() + arg2.toString() //string
  }else{
    result = arg1 + arg2; //Number
  }
  return result
}

// let totalOne4 = total4(20, 10, 'getStringVal');// avant
// console.log('getStringVal', totalOne4); //30

let totalOne4 = total4(40, 10, 'getStringValue');// après la correction
console.log('getStringValue',totalOne4); //2010 streng

//4. Exerciece
// Avec literal type on peut passer plusieur type < totalVersion: "getStringValue" | "testuser" >

//5. Exerciece

// on peut passer en Union types:
type GetresultFormat = "getStringValue" | "testuser";


function total5(arg1: number, arg2: number, totalVersion: "getStringValue" | "testuser"){ //sans union type
}
function total6(arg1: number, arg2: number, totalVersion: GetresultFormat){// avec union type
}