let score : number | string = 10; 

score = "Rohan";

type user = {
    name: string; 
    id: number;
}

type admin = {
    username: string; 
    id: number;
}

let Rohan : user | admin = {
    name: "Rohan", 
    id: 1
}

Rohan = {
    username: "Rey", 
    id: 1
}

// function getDbId(id: number | string){
//     // Making some API calls
//     // some operations
//     console.log(`DB ID is: ${id}`);
// }

getDbId(3);
getDbId("3");

function getDbId(id: number | string){
    if(typeof id === "string"){
        id = id.toLowerCase();
        console.log(`DB ID is: ${id}`);
    }
    // Making some API calls
    // some operations
 
    console.log(`DB ID is: ${id}`);
}