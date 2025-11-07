class User {
    email: string;
    name: string;
    constructor(email: string, name: string){
        this.email = email;
        this.name = name;
    }
}

const baccho = new User("email@email.com", "Baccho");