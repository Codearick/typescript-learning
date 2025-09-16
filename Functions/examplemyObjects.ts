const user = {
    name: "Rohan Gautam",
    isPaid: true, 
    email: "email@email.com",
}



function createUser({username, isPaid}: {username: string, isPaid: boolean}){
    if(isPaid){
        console.log(`Welcome back ${username}, thanks for purchasing our course!`);
    } else {
        console.log(`Welcome ${username}, please consider purchasing our courses!`);
    }
}

function createCourse() : {
    name: string;
    price: number;
    isPaid: boolean;

} {
    return { name: "TypeScript", price: 999, isPaid: true};

}

let newUser = {
    username: "Rohan",
    isPaid: true,
    email: "Email@email.com"
}
createUser(newUser);

export {} // to make this file a module and avoid global scope variable conflict with other files