// # Differences Between Type Aliases and Interfaces
// Type aliases and interfaces are very similar, and in many cases you can choose between them freely. 
// Almost all features of an interface are available in type, the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.

interface Animal {
    name: string;
    age: number;
    color: string;
    gender: string;
    type: string;
    class: string;
    family: string;
}

type plants = {
    name: string;
    color: string;
    type: string;
    class: string;
    family: string;
}

//Extending in an interface: 
interface bear extends Animal {
    legs: "four";
}

//Extending in type via intersections: 
type rose = & plants & {
    throned : boolean
}

// Adding new fields to an existing interface: 
interface Animal {
    isAquatic : boolean;
}

// Adding new fields to an existing type is not possible: As type cannot be changed after being created.
// type plants {
//    isAquatic : boolean;
// }  Error: Duplicate identifier "plants"

export {}
