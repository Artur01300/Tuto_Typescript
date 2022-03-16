/*
  Type Alias
*/

// 1. Exemple
let data: number | string;
let userId: number | string;
/*
  Pour éviter la répetition de meme type, on créer type Alias: < type NumString = number | string; >
  Attation le nom de aliaces commence par un Majusqule !
*/

type NumStr = number | string;
let data2: NumStr;
let userId2: NumStr;

data2 = "hello";
data2 = 20;

// 2. Exemple Function
const welcome = (userName : number|string) => {
  console.log('Bienvenu', userName);
}
welcome("Dupont");

const getProfilData = (user:{id: number, userName: NumStr}) => {
  console.log(`
    id: ${user.id},
    userName:${user.userName}
  `);
}

let objUser = {
  id: 2659,
  userName: 'Artur'
}
// getProfilData({id: 2356, userName: 'Dupont'})
getProfilData(objUser);

// 3. Exemple
type AliacNumstr =  number|string;

type ObjIdUser = {
  id: number, 
  userName:AliacNumstr
};

type ObjInvoice = {
  name: string, 
  price: number
};

// const welcome2 = (userName :  number|string) => { //avant
const welcome2 = (userName : AliacNumstr) => { // avec Alias
  console.log('Bienvenu', userName);
}
welcome2("Dupont");

// const getProfilData2 = (user: {id: number, userName:AliacNumstr}) => { //avant
const getProfilData2 = (user:ObjIdUser) => {// avec Alias
  console.log(`
    id: ${user.id},
    userName: ${user.userName}
  `);
}
getProfilData2({id: 2356, userName: 'Arto'});


// const invoice = (prodactName: {name: string, price: number}, user: {id: number, userName:AliacNumstr}) => {// avant
const invoice = (prodactName: ObjInvoice, user: ObjIdUser ) => { // avec Alias
  console.log(`
  ********************
    Produit: ${prodactName.name},
    Prix: ${prodactName.price},
    Id Client: ${user.id},
    Nom de client: ${user.userName},
    **********************
  `);
}

let prodactDetails = {
  name: 'Formation PHP',
  price: 99
}

invoice(prodactDetails, {id: 2356, userName: 'Arto'})