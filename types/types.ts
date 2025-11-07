// Number of types available in typescript are: 
// 1) Number
// 2) String
// 3) Boolean
// 4) Null
// 5) Undefined
// 6) Void 
// 7) Object 
// 8) Array
// 9) Tuple 
// 10) any
// 11) never
// 12) unknown

//Syntax
// let variableName: typeName = value;

//Example
let greeting: string = "Hello, Rohan!";
console.log(greeting);

greeting.toLowerCase();

// number
// let userId : number = 1234; not a good practice
let userId = 1234; //ts automatically detects the type it you assign a value right away.
// userId = "Rohan"; // this will throw an error because userId is of type number

let hero : string;

function getHero(){
    return "Batman";
}
hero = getHero();


export {};