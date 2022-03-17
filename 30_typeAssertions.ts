/*
  Type Assertions (Affirmatif) 

  Parfois, vous aurez des informations sur le type d'une valeur que TypeScript ne peut pas connaître.
  Par exemple, si vous utilisez document.getElementById, TypeScript sait seulement que cela renverra une sorte de HTMLElement,
  mais vous savez peut-être que votre page aura toujours un HTMLCanvasElementavec un ID donné.
  Dans cette situation, vous pouvez utiliser une assertion de type pour spécifier un type plus spécifique :
  const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
*/

// 1 AS
let sameValue: unknown = "This is a string";
// console.log(sameValue); // This is a string

/*
  dant ce cas ou la valeur est < unknown > l'intélécent ne peut rien me proposer car il sait pas c'est quoi sa valeur
*/

// Résolution: grâca a < as > ici présise que cest un string < (sameValue as string) >
let strLength = (sameValue as string).length;
// console.log(strLength) // 16


// 1 Exercice 

/*
  quant on pass la souris sur const firstName, il nous dit que la variable firstName doit avoie un type < HTMLElement | null >
  On effet, on essille de récupérer un élément HTML, sauf que rien nous indique que ce dérnier éxise au niveu de notre DOM.
  De ce fait le TS s'attand à ce que la méthode getElementById nous retourn soit un élément HTML ou bien Null
*/
const firstNames = document.getElementById('firstName');
// console.log(firstNames);// ici on récupère notre élément DOM

//Emaginon que je veux récupérer quelque chose qu'il n'exicte pas:
const firstName2 = document.getElementById('toto');
// console.log(firstName2);// Null


// 2 Exercice 
/*
  dans cet exemple 1 on a vou que les 2 méthode nous envoie un résulta (Element HTML ou Null).

  Partont d'une principe que le TS ne peut pas tester le type d'élément demander, il ne peut pas accèder aux évantuel propriétés ét des méthodes
  de l'objet récupéré
*/
const firstName3 = document.getElementById('toto');
console.log(typeof firstName3);// objet

// ici je veux grâce à l'intélécent accèder à la méthode value et on constate que cet méthode éxiste pas
console.log(firstName3);// objet

/*
  Maintenant je vais forcer, et je vais ajouter la méthode value. Quant on pass la sourie sur la value,on constat que:
  La propriété 'value' n'existe pas sur le type 'HTMLElement'.

  - rappelle: HTMLElement est un: h1, h2, div, spam etc...
  - pour pouvoir accèser à cette valeur là, il faut qu'on prèssise le type < HTMLElement >, c'est uniqement le TS vas savoir 
    qu'il sagie d'un objet (on va dir de natur input: c'est à dir c'est un input).
*/
// console.log(firstName3.value); //Uncaught TypeError: firstName3 is null


// Résolution 

// Important: si on est certain, si je sais se que je fais, alors on utilise le Type Assertions
const firstName4 = document.getElementById('firstName') as HTMLInputElement;
console.log(typeof firstName4.value); //string

// ou 
const firstName5 = document.getElementById('firstName');
let inputValut = (firstName5 as HTMLInputElement);
console.log(typeof inputValut.value)

