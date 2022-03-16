/*
  Type Aliacses
*/
// 1. Exemple
var data;
var userId;
var data2;
var userId2;
data2 = "hello";
data2 = 20;
// 2. Exemple Function
var welcome = function (userName) {
    console.log('Bienvenu', userName);
};
welcome("Dupont");
var getProfilData = function (user) {
    console.log("\n    id: ".concat(user.id, ",\n    userName:").concat(user.userName, "\n  "));
};
var objUser = {
    id: 2659,
    userName: 'Artur'
};
// getProfilData({id: 2356, userName: 'Dupont'})
getProfilData(objUser);
// const welcome2 = (userName :  number|string) => { //avant
var welcome2 = function (userName) {
    console.log('Bienvenu', userName);
};
welcome2("Dupont");
// const getProfilData2 = (user: {id: number, userName:AliacNumstr}) => { //avant
var getProfilData2 = function (user) {
    console.log("\n    id: ".concat(user.id, ",\n    userName: ").concat(user.userName, "\n  "));
};
getProfilData2({ id: 2356, userName: 'Arto' });
// const invoice = (prodactName: {name: string, price: number}, user: {id: number, userName:AliacNumstr}) => {// avant
var invoice = function (prodactName, user) {
    console.log("\n  ********************\n    Produit: ".concat(prodactName.name, ",\n    Prix: ").concat(prodactName.price, ",\n    Id Client: ").concat(user.id, ",\n    Nom de client: ").concat(user.userName, ",\n    **********************\n  "));
};
var prodactDetails = {
    name: 'Formation PHP',
    price: 99
};
invoice(prodactDetails, { id: 2356, userName: 'Arto' });
