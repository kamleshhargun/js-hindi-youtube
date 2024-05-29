// singleton
// object literals

// Object.create

// const mySym = Symbol("key1")

// const JsUser = {
//     name: "Kamlesh",
//     "full name": "Kamlesh Hargun",
//     [mySym]: "myKey1",
//     age: 38,
//     location: "jaipur"
//     email: "kamlesh@gmail.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Saturday"]
// }

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "hitesh@chatgpt.com"
Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = fuction(){
    console.log("Hellow JS user")
}

console.log(JsUser.greeting);