/*
  Type Never (cas rares)

  -Le type <never> représente le type de valeurs qui ne se produisent jamais. 
  -Il est assignalbel à chaque type. Mais aucan type n'est assignable à un type <never>, même le type <any>!
  -Contrairement au type 'void' qui s'applique dans les cas d'une fonction qui retounre 'undefined', le type <Never>, lui, indique qu'une
    fonction ne retourne jamais rien. Même pas 'undefined'. Le type <Never> peut donc s'avérer util si on souhaite capturer une erreur via le throw
    ou dans le cas de boucles infinies...
*/

// 1 Exercice
let count1 = 5;
const verifyCasses = count1;

let count = 5;
const verifyCasses2:never = count;
/*
 Impossible d'assigner le type 'number' au type 'never':
 -car si le type est déja asignier sur une variable on peut pas assignier le type <never>
 -ici le const verifyCasses2 est dèja été assignier(hérité) le type number
*/


/*
  ici, ça marche car la variabel <let count3 est un type <never>, donc le variable const verifyCasses3 peut accèpter
*/
let count2 = 5;
let count3:never;
const verifyCasses3:never = count3;

// 2 Exercice
//Fonction pour vérifier si j'ai pas oublier une valeur dans mon code
/*
  Scénario: émaginon ton code est prait et on veut pas que développeur ajouter une autre valeur à notre type < AcceptedValus > et
  on veut avoir uniquement ces types: < type AcceptedValus = string | number >

*/
type AcceptedValus = string | number;

function format(value:AcceptedValus){
  if(typeof value === "string"){
    return value.length
  }
  else if(typeof value === "number"){
    return value.toString()
  }

}

/*
  Résolution de cet scénario:
  -on ajoute une else après else if,
  - dans le else on ajoute < const verifyCasses:never = value; >

  En résumé si la valeur dans le < else > n'est pas null alors on aura une avertisement comme la fonction ci dessu:
*/
type AcceptedValus1 = string | number | boolean;

function format2(value:AcceptedValus1){
  if(typeof value === "string"){
    return value.length
  }
  else if(typeof value === "number"){
    return value.toString()
  }
  else{
    const verifyCasses:never = value;
  }
}

// 3 Exercice
function throwError(errMsg){ //void
  throw new Error(errMsg);// Stop (le code va s'arreter à ce nivau la )
}
// throwError("Ups ça marche pas ***********");

/*
  Cest fontion est un type <Void> ce pondant, sachant que notre code s'arret au niveut de throw new Error(errMsg), on peut parfétement
  préssiser le <never> via l'asigniation au nivaut du fonction
*/
function throwError2(errMsg):never{
  throw new Error(errMsg);
}
// throwError2("Ups ça marche pas *********** throwError2 *************");


// Cas 2
/*
  dans ce cas la fonction throwError3 est un type <never> et al fonciton getTotal et un type <void>
*/
function throwError3(errMsg):never{
  throw new Error(errMsg);
}

function getTotal(arg:number){
  if(arg<5){
    throwError3("Attention, le total < 5 !!!");
  }
}

/*
  Mais si on retrun throwError4 qui se trouve dans la fonction getTotal2, la fontion <getTotal2(arg:number)> deviendra never
  -Parce que en réalité, dès qu'on return le < throwError4("Attention, le total < 5 !!!") > lui il va s'apliquer au niveau de la fonction également
   danc, la fonction < getTotal2(arg:number) > devient aussi never (mais après le return)
*/

function throwError4(errMsg):never{
  throw new Error(errMsg);
}

function getTotal2(arg:number){
  if(arg<5){
    return throwError4("Attention, le total < 5 !!!");
  }
}

// Cas 3
function throwError5(errMsg):never{
  throw new Error(errMsg);
}

function getTotal3(arg:number){
  if(arg<5){
    return throwError5("Attention, le total < 5 !!!");
  }
  else if(arg === 5){
    console.log(arg); // ici par exemple on returne pas, alors la fonction gard sa <never>
  }
}

// Cas 4
function throwError6(errMsg):never{
  throw new Error(errMsg);
}

function getTotal4(arg:number){
  if(arg<5){
    return throwError6("Attention, le total < 5 !!!");
  }
  else if(arg === 5){
    console.log(arg); 
  }
  /*
    ici je returne pas la fonction < throwError6(.....) > mais l'arguemnt <arg> qui appartient à la function <getTotal4>
    alors la fonction <getTotal4> devien un type <number>
  */
  else{
    return arg + 10; 
  }
}

// 4 Exercice
// boocle infini

const sayHello = function (textMsg: string){

  while(true){
    console.log(textMsg)
  }
}

// sayHello('Hello wold')