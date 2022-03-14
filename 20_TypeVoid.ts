/*
  Function & Void Type
  - Une fonction qui retoune une valeur définit le type de la valeur retournée via inférence au Attribution.
  - Une fonction qui ne retourne rien définit également un type <void> pour Undefinded
*/

//1.function qui return une valeur et qui n'est pas type Void
function gift(age: number){
  return age + 3;
}

console.log(typeof gift(40));

//2. on peut aussi exiger de resevoir une valeur par exemple string < function gift2(age: number):string >
function gift2(age: number):string{
  const result = age + 3;
  return result.toString();
}

//3. il est consailler de ne pas présiser la voleur qu'on veut retourner < function gift3(age: number) > car le function le fait automatiquement

function gift3(age: number){
  const result = age + 3;
  return result.toString();
}
console.log(typeof gift3(40));

//4. fuction type Void

function gift4(age: number){
  return age + 3;
}

//function type Void car il a pas le retern
function clgData(arg){
  console.log(`Resultat: ${arg}`)
}
clgData(gift4(20));

//pour précicer un peut plus notre function <clgdata2> si on console log ça nous denera Undefined car il na pas un return
//il es consailler de ne pas préssiser le type pour fare travailer le typeScripte automatiquement
function clgData2():void{
  console.log('hello worldf')
}
console.log(clgData2())
