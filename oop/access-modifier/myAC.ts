// class User1 {
//     name: string;
//     email: string;
//     private readonly city = "Dangibari";
//     // #password = "asdf"; //another way to declare private 
//     constructor(email: string, name: string){
//         this.email = email;
//         this.name = name;
//     }
// }


class User2 { // Professinal and easy way
    constructor(
        public email: string = email,
        public name: string = name
    ){}
}

const su = new User2("email@email.com", "Baccho");
console.log(su.name, " email is ", su.email);
console.log("Hello") 