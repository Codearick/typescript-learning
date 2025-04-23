// type User = {
//     id: number; 
//     name: string; 
//     email: string;
//     isActive: boolean; 
// }

// type myString = string; 

// function createUser(user : User) : User{
//     return {id: 1, name: "", email: "", isActive: true};
//     // return user;
// }

// createUser({id: 1, name: "", email: "", isActive: true});

// READ ONLY and OPTIONAL IN TYPESCRIPT

type User = {
    readonly _id: string; 
    name: string; 
    email: string; 
    isActive: boolean; 
    creaditCardDetails?: number; 
}

type cardNumber = {
    cardNumber: string; 
    
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cardType: string
}

let user1 : User = {
    _id: "12242", 
    name: "Rohan Gautam", 
    email: "rohan@email.com", 
    isActive: true
}

user1.email = "rohan@gmail.com"; // this works since email is not readonly
// user1._id = "2342323"; // this gives error since _id is readonly