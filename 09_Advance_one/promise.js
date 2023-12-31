const promiseOne= new Promise(function(resolve,reject){
    // Do an Async task
    // DB calls cryptography Network calls
    setTimeout(function(){
        console.log("Async task is Completed");
        resolve()
    },1000)

})
// Promise creation is done

// Now promise consumption
promiseOne.then(function(){
    console.log("promise consumed");
})

/*Another way to create and consume promise */
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2 is completed");
        resolve()
    },1000)
}).then(function(){
    console.log("Promise 2 is consumed");
})

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "Chai", email: "chai@example.com"})
//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
// })

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error=false
        if(!error){
            resolve({username: "Shashank", password: "123"});
        }else{
            reject("ERROR:- Something went wrong");
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username) =>{    // this is called chaining
    console.log(username);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{      // always executed
    console.log("The Promise is either resolved or rejected");
})

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error=false
        if(!error){
            resolve({username: "Javascript", password: "123"});
        }else{
            reject("ERROR:- JS went wrong");
        }
    },1000)
})