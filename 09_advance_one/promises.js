const promiseOne = new Promise(function(resolve, reject) {
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function() {
        console.log('Async task is complete');
        resolve()
    }, 1000)
})

promiseOne.then(function() {
    console.log("Promise Consumed");
})


new Promise(function(resolve, reject) {
   setTimeout(function() {
    console.log("Async task 2");
    resolve()
   }, 1000)
   
}).then(function(){
    console.log("Async 2 resolve");
    
})

const promiseThree = new Promise(function(resolve, reject) {    
    setTimeout(function() {
    resolve({username: "scott", password: "tiger"})
    }, 1000)
})

promiseThree.then(function(user) {
   console.log(user);
})


const promiseFour = new Promise(function(resolve, reject) {
   setTimeout(() => {
    let error = true
    if (!error) {
        resolve({username: "Rani", password: "1234"})
    } else {
        reject('ERROR: Something went wrong')
    }
    
   }, 1000)
})

promiseFour
.then((user) => {
   console.log(user);
   return user.username
})
.then((username) => {
   console.log(username);
})
.catch(function(error) {
   console.log(error);
})
.finally(() => (console.log('the promise is either resolve or rejected'))
)

promiseFive = new Promise(function(resolve, reject) {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "1234"})
        } else {
            reject('ERROR: js went wrong')
        }
       }, 1000)
})

async function consumePromiseFive() {
   try {
    const response = await promiseFive
    console.log(response);
   } catch (error) {
    console.log(error);
    
   }
    
}

consumePromiseFive()

// async function getAllUsers() {
//    try {
//     const response = await fetch('https://api.github.com/users/raginikochale')
//     const data = await response.json()
//     console.log(data);
//    } catch (error) {
//      console.log("E :", error);
//    }
// }

// getAllUsers()

fetch('https://api.github.com/users/raginikochale')
.then((response) => {
   return response.json()
})
.then((data) => {
   console.log(data);
})
.catch((error) => console.log(error)
)