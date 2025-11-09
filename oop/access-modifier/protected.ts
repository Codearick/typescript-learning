class User {
    protected _courseCount = 1;

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

class SubUser extends User{
    isFamily: boolean = true;
    
    changeCourseCount() {
        this.courseCount = ++this.courseCount;
        console.log("Course count changed!")
    }
}

const niru = new User("Hello", "gmail.com", "asf");
console.log(niru.courseCount)

const rehan = new SubUser("hello", "email.com", "asdf");
rehan.changeCourseCount();
console.log(rehan.courseCount);