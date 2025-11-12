// function logValue(x: Date | string){
//     if(x instanceof Date){
//         return x.toISOString();
//     } else{
//         return x.toUpperCase();
//     }
// }


//Using Type predicates. 

type Fish = {swim: () => void};
type Bird = {fly: () => void};

function isFish(pet: Fish | Bird): pet is Fish{
    return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird){
    if(isFish(pet)){
        pet
        return "Fish Food";
    } else{
        pet
        return "Bird Food";
    }
}


