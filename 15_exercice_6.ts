

let number:object = {
    firstName:"Dupont",
    age:20,
    isLoggedInd: true
}

console.log(number)

//Array est également un objet. {} = [];
//Donc on peut parfaitement assigner une valeur [] à un objet 
let convert = [];
number = convert

console.log(number)
