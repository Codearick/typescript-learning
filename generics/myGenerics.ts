const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(arg: number | boolean) : number | boolean{
    return arg;
}

function identityTwo(arg: any): any {
    return arg;
}

function identityThree<Type>(arg: Type): Type{ // Generic example
    return arg;
}

function identityFour<T>(arg: T): T{ //Short way to declare generics. 
    return arg;
}

interface Car {
    brand: string,
    topSpeed: number,
    color: string
}

type Bike = {
    company: string, 
    topSpeed: number
}

const Cycle = {
    wheels: 2,
    color: "Black"
}

identityFour<Car>({brand:"Hyundai", topSpeed: 150, color: "Black"}); // way of calling generics function if param is interface. 

identityThree<Bike>({company: "Hero", topSpeed: 90}); // calling generic function with param type: Bike

identityFour(Cycle);

