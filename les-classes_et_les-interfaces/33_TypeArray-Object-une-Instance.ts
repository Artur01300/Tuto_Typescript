
/*
    Type Array Object d'une Instance

        - < Type Array Object d'une Instance > consicte à placer des objets dans un array, sauf que ça va pas être n'aport quel objet: 
        ça va être des objets ayons des carachteristique d'un objet ayon comme tipe < Invoice2 >, c'est à dir, un objet généré via une class
        bein spécifique.
*/

class Invoice2 {
    client: string;
    product: string;
    price: number;

    constructor(client: string, product: string, price: number){
        this.client = client;
        this.product = product;
        this.price = price;
    }
}

const instInvoice1 = new Invoice2('Dora', 'Template', 45);
const instInvoice2 = new Invoice2('Artur', 'filem', 80);

/*
    sénario:
    Nous avon créer un arrey pour placer nos objet à l'entèrieur, mais ça vas pas être n'aport le quel objet, ça va être des objets
    qui obeissent à la contrainte de type < Invoice2 >
*/

// 1 Exemple:

// avec cet exemple on peut metre n'aport quel type à l'enterieur de cet Arrey, mais c'est pas ça qu'on veut fair
let invoicArray = [];

// dans notre cas on veut créer un arrey qui va contenire simplement des objets ayont les caractairistique de la tiyp < Invoice2 >
let invoicArray2:Invoice2[] = [];

//Suit à ça je peut utiliser la méthode < push > et à prèsant je peut ajecter des objets dans cet arrey là
invoicArray2.push

// Solution Final : 
invoicArray2.push(instInvoice1, instInvoice2); 
//ou
invoicArray2.push(instInvoice1, {client: "Armen", product: "TV", price: 99});
//ou
invoicArray2.push({client: "Armen", product: "TV", price: 99});

console.log('invoicArray2', invoicArray2)