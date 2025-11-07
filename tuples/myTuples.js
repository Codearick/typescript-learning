"use strict";
//  Tuple types are a type of array of known length and where the different elements may have different types. A value of type [number, string] is guaranteed to have a length of 2, with a number at element 0 and a string at element 1.
Object.defineProperty(exports, "__esModule", { value: true });
// const user : (string | number)[] = ["John", "Doe", 1];
var user;
user = ["John", 1, true];
var rgb = [255, 123, 23];
var newUser = [1, "John", "email@email.com"];
newUser[1] = "Doe"; // valid
// newUser[2] = 1; // invalid 
newUser.push(1); // weird but valid, it is allowing me to push a number to a string type. 
console.log(newUser);
