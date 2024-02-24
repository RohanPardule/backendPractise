// const promiseOne = new Promise(function(resolve,reject){
//     //Do an async task
//     //Db calls
//     setTimeout(function(){
//         console.log("Async task is complete")
//         resolve()
//     },1000)
// })

const { response } = require("express");

// promiseOne.then(function(){
//     console.log("promise consumed")
// })



// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task2 is complete")
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("promise 2 consumed")
// })


// const promiseThree=new Promise(function(resolve,reject){
//     setTimeout(function(){
// resolve({username : "chai",email: "chai@example"})
//     },1000)
// })
// promiseThree.then(function(user){
// console.log(user);
// })

// const promiseFour= new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error =true
//         if(!error)
//         {
//             resolve({  
//                 name:"chaai",
//                 email:"123445"
//             })
//         }
//         else{
//             reject("error something went wrong")
//         }
//     })
// })
// promiseFour
// .then((user)=>{
//     console.log(user);
//     return user.name
// })
// .then((username)=>{
//     console.log(username)
// })
// .catch(function(error){
//     console.log(error)
// }).finally(()=> console.log("The promise is either resolve or reject"))




// const promiseFive= new Promise(function(reject,resolve){
//     setTimeout(function(){
//         let error =true
//         if(!error)
//         {
//             resolve({  
//                 name:"chaaijavascript",
//                 email:"123445"
//             })
//         }
//         else{
//             reject("error js went wrong")
//         }
   
// })
// });

// async function consumePromiseFive(){
//     try{
//         const response=await promiseFive
//         console.log(response);
//     }
//     catch(error){
//         console.log(error);
//     }
  
// }
// consumePromiseFive()
// async function getAllusers(){
//     try {
//         const response =await fetch("https://jsonplaceholder.typicode.com/todos/1")
//         const data=await response.json();
//         console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
   
// }

// getAllusers()


fetch("https://jsonplaceholder.typicode.com/todos/1")
.then((response)=>{
   return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=> console.log(error))