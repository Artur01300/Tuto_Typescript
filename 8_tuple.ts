//ici l'order est oblicatoire
let x:[string, number];
x = ['hello', 20];
// console.log(x)

//avec la methode push on peut ajouter un autre élément(s) dans le variable x
x.push('teste')
// console.log(x)

//La méthode toString permet de trinsormer l'index 1 en chen de caractaire
console.log(x[1].toString())


// pour faire un tupel pour un objet

// *avant

// const member = {
//     level: ['admin', 1]
// }
// member.level[0] = 200;
// console.log(member.level)

//après
const member:{
    level:[string, number]
    
} = {
    level: ['admin', 1]
}

member.level[0] = 200;
