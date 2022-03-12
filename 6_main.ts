

let pseudo: string = 'Superman';
let total: number = 200;
let isLoading: boolean = false;

//IntelliSense - VScode

let totalString: string = total.toString();
console.log(totalString)

//backtick littéraux de gabarit convertie les ints en chene de caractaire 
let msgInfo = `
    Bienvenue ${pseudo},
    Vous avez ${total} points ${isLoading}
`;

console.log(msgInfo)