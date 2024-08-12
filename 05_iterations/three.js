// for of


// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
   // console.log(num);
}


const greetings = "Hello world!"
for (const greet of greetings) {
    if(greet == " ") {
       // console.log('Space detected')
        continue
    }
    //console.log(`Each char is ${greet}`);
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('fr', "France")
map.set('IN', "India")

//console.log(map)

for (const [key, value] of map) {     
    //console.log(key)              // entries printing in array format
   // console.log(key, ':-', value);
}   



const myObject = {
    'game1': 'NFS',
    'game2': 'spiderman'
}

//  for (const [key, value] of myObject) {
//      console.log(key, ':-', value)                  // object is not iterable bcz for of loop object pe nahi ho sakta 
//  }


 for (const [key, value] of Object.entries(myObject)) {
    console.log(key, ':-', value)  
 }   