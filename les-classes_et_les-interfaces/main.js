/*
    Les Classes

    Une classe c'est comme un plan, ça va nous servir de générer un objet
    - Class = Plan
    - Anstanciation = < new Invoice('Dora', 'Template', 45); >
    - Objet
*/
//Dans une class on a des méthodes et des propiétés
var Invoice = /** @class */ (function () {
    //le constructor récupère l'information de puis Anstanciation et danne à la class Invoice
    // constructor(c: string, p: string, prod: number){ ou
    function Invoice(client, product, price) {
        this.client = client;
        this.product = product;
        this.price = price;
    }
    return Invoice;
}());
// new Incoice = Anstanciation
var invoice1 = new Invoice('Dora', 'Template', 45);
console.log(invoice1);
/*
    Via L'anférance notre variable <invoice1> à hériter le type < Invoice >
    de se faite je peux pas créer un autre facture avec un autre objet differant qui n'a pas le mêmet type
    exemple:
*/
//1 exemple
// ici la variable < invoice2 il asigne la valeur objet sans problème
var invoice2 = {};
//2 exemple
// dès que j'incigne le type < Invoice > à la variable invoice3, le TS n'accepte pas car il rentre pas dans l'exigance de type < Invoice >
var invoice3 = {};
//3 exemple
/*
    le TS accèpte à la variable invoice4 car il réspect l'exigance de ce type < Invoice >. L'exigance c'est:
     - il faut avoir 3 propriétés, les 2 premier sont en type string et le 3em est un number
*/
var invoice4 = { client: 'Artur', product: "TVA", price: 46 };
console.log(invoice4);
