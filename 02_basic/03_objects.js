// singleton
//Object.create

// objects literals

const mySym = Symbol("key1")

const JsUser = { 
    name: "Rani",
    "full name": "Ragini Kochale",
    [mySym]: "mykey1",
    age: 18,
    location: "jaipur",
    email: "ragini@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "raginikochale23@gmail.com"
//Object.freeze(JsUser)
JsUser.email = "raginikochale23@google.com"
//console.log(JsUser)


JsUser.greeting = function(){
    console.log("Hello  Jay")
}

JsUser.greetingTwo = function(){
    console.log(`Hello  Jay, ${this.name}`)
}

JsUser.greeting()
JsUser.greetingTwo()