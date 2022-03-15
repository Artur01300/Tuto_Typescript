//CallBack Function Type (Fonction de rappel)
// 1. exercice
// fonction normal 
function gift(age) {
    return age + 3;
}
gift(40);
// 2. exercice CallBack Function
//  - CallBack Function : c'est à dire dans le gift2(40) on passe un autre fuction << gift2(40, () =>) >>
//  - il faut également définire 2em paramète pour le callbak function
// function gift2(age: number, sum:(arg: number) => number){
//   const memberAge = age + 3;
//   sum(memberAge)//j'envoque à la fuction sum et je passe la valeur memberAge
// }
// gift2(40, num => { // CollBack function < num => {} 
//   //une fois ma function envoquer dans la ligne 18 j'éxécute ma collBack function
//   console.log(num)//43
// });
/*
  function gift2(age: number, sum:(arg: number) => ){
    pour résudre le problème dans la paramètre < sum >:
    Mon < sum:(arg: number) => number)> ne function pas au niveau de callBack fuction pour ce la ajouter voide dans la paramètre
    Attation ! à la place void sans savoir on peut ajouter Any (ces pas un bon practique)
*/
// Résultat Final
function gift3(age, sum) {
    var memberAge = age + 3;
    sum(memberAge);
}
gift3(40, function (num) {
    console.log(num); //43
});
