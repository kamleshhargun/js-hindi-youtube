// Primitive

// 7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

// const score= 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let unserEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 87654398767768n

// Reference (Non primitive)

// Array, Objects, Functions

// const heros = ["shaktiman", "naagraj", "doga"]
// let myObj = {
//     name: "kamlesh",
//     age: 38,
// }

// console.log(myObj);
// const myFunction = function(){}
// console.log("Hellow World");


// console.log(typeof anotherId);





//***********************************************************************

//Stack (Primitive), Heap (Non-Primitive)


// let myYoutubename = "hiteshchoudharydotcom"

// let anothername = "chaiaurcode"

// console.log(anothername);
// console.log(myYoutubename);


let userOne = {

    email: "user@gmail.com"
    // upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);
