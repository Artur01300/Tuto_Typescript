/*
  Function Type
  - Type Function générique: (Une seule contrinte: le type doit être une fonction)
  - Types bien spécifiques: Non seulement c'est une fonction mais celle-ci doit être très explicite (param: type) => teturn type
*/

//1. Type Function générique: (Une seule contrinte: le type doit être une fonction).exemple qui nous motre les errors à évité avec ce Type Function générique

//le fait que la variable <age> est un type any le typeScript ne détécte par cet erreur
function gift(num: number){
    return num + 3;
  }
  
  let age;
  age = gift;
  // console.log('age_1 ', age(20)) //23
  
  age = 'Bonjour';
  // console.log('age_2 ', age( 20)) // Error: age n'est pas une fonction
  
  
  //2. correction l'error avec la <Function>
  function gift2(num: number){
    return num + 3
  }
  
  // ici je créer une function pour la place de 'Bonjour'
  // par contre, le problème avec ça, c'est que typs scripte il détécte pa une erreur mais dans le console log  on orra cet error < age_2  undefined >
  function displayClg(arg2){
    // console.log(arg2)
  }
  
  //Une fois ajouter le type <Function> ça nous permet détécter les erreur
  let age2: Function;
  age2 = gift2; //ok
  // console.log('age_1 ', age2(20)) //23
  
  age2 = displayClg; 
  // console.log('age_2 ', age2( 20)) // undefined
  
  //Per contre cet méthode ne régre pas le vrai problème c'est pour ce la le Function avec le Types bien spécifiques est conseillé
  
  
  
  //3. Function avec le Types bien spécifiques
  //- Types bien spécifiques: Non seulement c'est une fonction mais celle-ci doit être très explicite (param: type) => teturn type
  
  function gift3(num3: number){
    return num3 + 3
  }
  
  // ici j'ajoute à l'argument < arg3 > un type number puit je la return pour que la fonction soit pas un void 
  function displayClg2(arg3: number){
    return arg3
  }
  
  //Une fois ajouter le type <Function> ça nous permet détécter les erreur
   /* 
    1. Atantion ! c'est n'est pas une fonctin fléchée amis un type function qui return number obligatoirement
    2. une foie ajouté type fucntion < (num: number)=> number >, on voir les érreur apparaitres ( <num: number >) est un argument
    3. Attention ! il faut passer argument <num3:number> si non on oras cet error: Impossible d'assigner le type '(num: number) => number' au type '() => number'.ts(2322)
  */
  let age3: (num3: number)=> number; // Atantion ! c'est n'est pas une fonctin fléchée amis un type function qui return number obligatoirement
  age3 = gift3; //ok
  console.log('age_1 ', age3(20)) //23
  
  age3 = displayClg2; 
  console.log('age_2 ', age3( 20)) // undefined