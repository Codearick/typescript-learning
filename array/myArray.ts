// Arrays in TypeScript: Creation, Usage, and Types

// 1. Basic Array Creation
// Arrays in TypeScript can hold multiple values of the same type.
let numbers: number[] = [1, 2, 3, 4, 5];
console.log("Numbers Array:", numbers);

// 2. Adding and Accessing Elements
// You can add elements using `push` and access them using their index.
numbers.push(6); // Adds 6 to the array
console.log("Updated Numbers Array:", numbers);
console.log("First Element:", numbers[0]); // Accessing the first element

// 3. Array of Strings
// Example: List of names
let names: string[] = ["Alice", "Bob", "Charlie"];
console.log("Names Array:", names);

// 4. Mixed-Type Array (Using Union Types)
// Example: A list that can hold both numbers and strings
let mixedArray: (number | string)[] = [1, "two", 3, "four"];
console.log("Mixed Array:", mixedArray);

// 5. Array of Objects
// Example: Representing a list of users
interface User {
    id: number;
    name: string;
    email: string;
}

let users: User[] = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
];

console.log("Users Array:", users);

// 6. Multidimensional Arrays
// Example: Representing a 2D grid
let grid: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log("2D Grid:", grid);

// 7. Real-World Example: Shopping Cart
// Example: Representing a shopping cart with items
interface CartItem {
    productId: number;
    productName: string;
    quantity: number;
    price: number;
}

let shoppingCart: CartItem[] = [
    { productId: 101, productName: "Laptop", quantity: 1, price: 1200 },
    { productId: 102, productName: "Mouse", quantity: 2, price: 25 },
];

console.log("Shopping Cart:", shoppingCart);

// Calculate total price of items in the cart
let totalPrice = shoppingCart.reduce((total, item) => total + item.quantity * item.price, 0);
console.log("Total Price:", totalPrice);

// 8. Readonly Arrays
// Example: Preventing modification of an array
const readonlyArray: readonly number[] = [10, 20, 30];
// readonlyArray.push(40); // Error: Cannot push to a readonly array
console.log("Readonly Array:", readonlyArray);

// Summary:
// - Arrays in TypeScript are strongly typed.
// - You can create arrays of primitive types, objects, or even mixed types using union types.
// - Use interfaces to define the structure of objects in an array.
// - Use `readonly` to create immutable arrays.