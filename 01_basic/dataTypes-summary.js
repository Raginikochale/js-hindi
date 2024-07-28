// primitive

// 7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

//const bigNumber = 3456543576654356754n



// Reference (non-Primitive) 

// Array, Objects, Functions

const heros = ["sushant", "Ravi", "ms Dhoni"]
let myObj = {
    name: "Ragini",
    age: 19,
}

const myFunction = function() {
    console.log("Hello world");
}

console.log(typeof myFunction);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myGithubid = "Raginikochale.com"

let anotherid = myGithubid
anotherid = "Rani.com"

console.log(myGithubid);
console.log(anotherid);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "rani@google.com"

console.log(userOne.email);
console.log(userTwo.email);