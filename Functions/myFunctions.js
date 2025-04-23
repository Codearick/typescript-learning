"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    // return "Hello world";
}
console.log(addTwo(3));
function signUp(firstName, email, isLoggedIn) {
}
var loginUser = function (name, email, isLoggedIn) {
    if (isLoggedIn === void 0) { isLoggedIn = false; }
    console.log("User logged in");
};
signUp("Rohan", "rohan@email.com", false);
loginUser("Rohan", "rohan@email.com");
var getHello = function (num, num2) { return num + num2; };
console.log(getHello(2, 3));
var heros = ["Thor", "Ironman", "Hulk"];
var herosList = heros.map(function (hero) {
    return "Hero is ".concat(hero);
});
console.log(herosList);
console.log(heros);
function errorMessage(errorMessage) {
    console.log(errorMessage);
}
function handleError(errorMessage) {
    throw new Error(errorMessage);
}
console.log(handleError("505 Server Error"));
errorMessage("Error 404 Page");
