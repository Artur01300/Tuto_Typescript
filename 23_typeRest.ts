/*
  Type Rest
  - Rest dans les paramètres de fonction - Type
  - Rest dans le Type Function
  
  Les parapètres "obligatoires, facutlatifs et par défaut" ont tous une chose en commun:
  ils font référance à un paramètre à la fois.
  Parfois, vous shohaitez travailler avec plusieurs paramètres (Paramètre groupés), ou bien vous ne savez peut-être pas
  combien de paramètres un fonction va exiger.
  En JS, vous vouvez travailler avec les argumants directement en utilisant le variable "arguments" qui est accessible dans
  le cors de la fonction
*/


//1. exerciece
// ici on passe < arguments > car on connait pas en avance ces arguments.
// let colors = function(){
//   console.log(arguments)
// }

// colors('green', 'red', 'oranage') // js ok  - TS non


//2. exerciece
// Pour éviter les trets rouges on passe les arguement
// let colors = function(arg1: string, arg2: string, arg3: string){
//   console.log('Arguments *******', arguments);
//   console.log(typeof arguments); //object
//   console.log(arguments.length) //3

// }

// colors('green', 'red', 'oranage') // js ok  - TS ok

//3. exerciece
// avec cest exerciece on affiche toute les valeurs dans le DOM
// comment le faire si on veus separer les arguemes pour afficher autremant, par exemple: arg1 séparer de les autres argumant ?
// Pour cet reson on utilis < Rest >
// const divColors = document.getElementById('colors');

// let colors = function(arg1: string, arg2: string, arg3: string, arg4: string){
  
//   const h1 = document.createElement('H1');
//   h1.innerHTML = `Titre: ${arg1}`;
//   divColors.appendChild(h1);

//   const ul = document.createElement('ul');

//   for (let i in arguments) {
//     const elements = arguments[i];
//     let li = document.createElement('li');
//     li.innerHTML = arguments[i];
//     ul.appendChild(li);
//   }
//   divColors.appendChild(ul);
// }
// colors('list 1:', 'green', 'red', 'oranage');
// colors('list 2:', 'Bleu', 'Black', 'Pink');


//3. exerciece 
// Rest dans les paramètres de fonction - Type
const divColors = document.getElementById('colors');

// < ...restOfColors > est le rest. en résumé le Rest dissocie le rest (dissocie les arguments)
let colors = function(arg1: string, ...restOfColors:string[]){
  
  const h1 = document.createElement('H1');
  h1.innerHTML = `Titre: ${arg1}`;
  divColors.appendChild(h1);

  const ul = document.createElement('ul');

  for (let i in restOfColors) {
    const elements = restOfColors[i];
    let li = document.createElement('li');
    li.innerHTML = restOfColors[i];
    ul.appendChild(li);
  }
  divColors.appendChild(ul);
}
colors('list 1:', 'green', 'red', 'oranage');
colors('list 2:', 'Bleu', 'Black', 'Pink');


//3. exerciece 
// Rest dans le Type Function

function buildName(firstName: string, ...restOfName:string[]){
  return firstName + " " + restOfName.join(" ");
}

// let buildNameFun = buildName;// on peut lesser comme ça ou 
let buildNameFun:(fnam: string, ...rest: string[]) => string = buildName;

//ou 
function sum(sum1: string, ...sum2: string[]){
  return sum1 + sum2
}

buildNameFun = sum;
