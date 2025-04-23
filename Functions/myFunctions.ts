function addTwo(num : number) : number{
    return num + 2;
    // return "Hello world";
}

console.log(addTwo(3));

function signUp(firstName: string, email: string, isLoggedIn : boolean){
    
}

let loginUser = (name : string, email : string, isLoggedIn : boolean = false) => {
    console.log("User logged in");
}

signUp("Rohan", "rohan@email.com", false);
loginUser("Rohan", "rohan@email.com");


const getHello = (num : number, num2 : number) : number => { return num + num2;}

console.log(getHello(2, 3));

const heros = ["Thor", "Ironman", "Hulk"];

let herosList = heros.map( (hero) : string => {
    return `Hero is ${hero}`;
})

console.log(herosList);
console.log(heros);

function errorMessage(errorMessage : string) : void {
    console.log(errorMessage);
}

function handleError(errorMessage : string) : never {
    throw new  Error(errorMessage);
}
console.log(handleError("505 Server Error"));
errorMessage("Error 404 Page");

export {} ;