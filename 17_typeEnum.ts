
//pour JS
const users1 = {
  pseudo: 'Batman',
  leval: 2
}

if(users1.leval === 2){
  console.log(`
    Bienvenue ${users1.pseudo}
    vous travillez au service support ${users1.leval}
  `)
}


/* 
  1.le nome qu'on donne, comme ici <Level>, doit commancer un majuscule
  2.Sans les définires les valeurs qui se trouve dans <Level> seront énumérer, cest à dire: ADMIN a la valeur 0,
    MODERATOR la valeur 1 etc.
*/
enum Level {
  ADMIN,//0
  MODERATOR, //1
  SUPPORT,//2
  USER_READ_ONLY,//3
}

const users = {
  pseudo: 'Batman',
  leval:Level.SUPPORT
}

if(users.leval === Level.SUPPORT){
  //Level.SUPPORT, dans le console.log, affichee 2
  console.log(`
    Bienvenue ${users.pseudo}
    vous travillez au service support ${Level.SUPPORT}
  `)
}

/*
   1. On peut modivier les valeurs Level
*/

enum Color{
  red,
  green,
  bleu
}

let c = Color.green;
/* 
  ici il affiche la valeur 1 car le green se trouve en 2em position dans <Color>.
  ici il faut pas penser à sa valeur en chaine de caractaire, il faut penser à ça valeur numérique
*/ 
console.log(c)


//2. on peut changer les indices de la valeur <Color>:
enum Color2{
  red = 1,
  green,
  bleu
}

let b = Color2.green;
/*
 ici le Color.green a la valeur numérique 2 car on a attribué la valeur 1 à red
*/ 
console.log(b)

//3. on peut dener des valeur aléatoirement:
enum Color3{
  red = 1,
  green = 9,
  bleu = 6
}
let bb = Color3.green;
console.log(bb)

//4. on peut par exemple afficher lavaleur green
enum Color4{
  red = 1,
  green = 9,
  bleu = 6
}
let colorName = Color4[9];
console.log(colorName)