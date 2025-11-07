type creditCard = {
    _id: string;
    name: string;
    cardNumber: number;
    cvv: number;
    expiry: Date; 
}

type User = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    creditcardDetails?: creditCard;
}

type subsUsers = creditCard & User &  {
    readonly _id: string;
}

let myUser : User = {
    _id: "12345",
    name: "Osama Bin Ladin",
    email: "Osama@email.com",
    isActive: false
}

myUser.email = "deadOsama@email.com";
// myUser._id = "hello@hello";
console.log("User registered successfully!!")

export {}; 