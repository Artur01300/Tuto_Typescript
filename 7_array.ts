
// let colors: Array<string> = ['red', 'blue', 'orenge'];
let colors:string[] = ['red', 'blue', 'orenge'];

let numbers:number[] = [1, 7, 8.6];
numbers[0] = 3;
console.log(numbers);

let values:any = [];
values = [
    'Bonjour',
    true,
    500,
    {
        id: 2369,
        member: true,
        hobbies: ['penture', 'youtube']
    }
]
console.log(values);

let strNumBoolArray:(string | number | boolean)[] = ['red', 3, true];
