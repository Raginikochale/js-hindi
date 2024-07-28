const name = "Ragini"
const repoCount = 50

//console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and my repo cont is ${repoCount}`);

const gameName = new String('Rani-kc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


//console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('k'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-6, 4)
console.log(anotherString);

const newStringOne = "   Raju   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://rani.com/ravi%20sonve"

console.log(url.replace('%20', '-'));

console.log(url.includes('rani'));

console.log(gameName.split('-'))