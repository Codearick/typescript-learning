// type User = {
//     id: number; 
//     name: string; 
//     email: string;
//     isActive: boolean; 
// }
var user1 = {
    _id: "12242",
    name: "Rohan Gautam",
    email: "rohan@email.com",
    isActive: true
};
user1.email = "rohan@gmail.com"; // this works since email is not readonly
// user1._id = "2342323"; // this gives error since _id is readonly
