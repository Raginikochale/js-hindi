// Dates

let myDate = new Date()
//console.log(myDate);
//console.log(myDate.toString());
// console.log(myDate.toDateString());
//console.log(myDate.toLocaleString());
// console.log(typeof myDate)

//let myCreatedDate = new Date(2022, 0, 22)
//let myCreatedDate = new Date(2022, 1, 13, 8, 33)
//let myCreatedDate = new Date("2022-02-13")
let myCreatedDate = new Date("08-14-2024")
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
//console.log(newDate);
//console.log(newDate.getMonth());
//console.log(newDate.getDay());

// ` ${newDate.getDay()} and the time is ....

newDate.toLocaleString('default', {
    weekday: "long",
})