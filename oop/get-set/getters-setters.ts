class User {
    private _courseCount = 1;

    constructor(
        public name: string,
        public email: string,
        private readonly password: string
    ){}

    private deleteToken(){
        console.log("Token Deleted!");
    }

    get getAppleEmail(): string{
        return `apple${this.email}`;
    }

    get courseCount(): number{
        return this._courseCount;
    }

    set courseCount(courseNumber: number){
        this._courseCount = courseNumber;
    }
}