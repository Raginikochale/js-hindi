//let myName = "ragini     "
//let myChannel = "chai    "

//console.log(myName.truelength);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    
    getSpiderPower: function() {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.ragini = function() {
    console.log(`ragini is present in all objects`);
}

Array.prototype.heyragini = function() {
    console.log(`Ragini say hello`);
}

//heroPower.ragini()
//myHeros.ragini()
//myHeros.heyragini()
//heroPower.heyragini()


// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true

}

const TeachingSupport = {
    isAvailable: false

}

const TASupport = {
    makeAssigment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

//console.log(TASupport.isAvailable);
Teacher.__proto__ = User

//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode    "

String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);  
}

anotherUsername.trueLength()
"Shitu            ".trueLength()
"raj".trueLength()