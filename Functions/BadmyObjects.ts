const user = {
    name: "Rohan Gautam",
    age: 23, 
    email: "rohan@email.com", 
    hobbies: ["reading", "gaming", "coding"],
    isActive: true,
}

function createUser({name, isPaid}: {name: string, isPaid: boolean}) {
    if(isPaid){
        console.log(`Welcome back ${name}, thanks for purchasing our course!`);
    }
}


// createUser({name: "Rohan", isPaid: true, email: "rohan@email.com"}) // this gives error since email is not a parameter in createUser()

let newUser = { name: "rohan", isPaid: false, address: "North Korea", email: "rohan@email.com"};
createUser(newUser); // but suprisingly this works since we are passing an object with more properties than the function parameter. This is because of the concept of structural typing in TypeScript. TypeScript checks if the object has the required properties and ignores the extra ones.

function createCourse() : {
    name: string,
    price: number,
    isPaid: boolean} {
        return {name : "ReactJS", price : 199, isPaid : true}
    }

export {}