// var pi = undefined before
pi = 3.1416
console.log(pi)

//with strict you need to declare and assign every variable

function strictFunction(){
    'use strict'
    return pi2 = 3.1416 //will throw an error
}

// console.log(strictFunction()) will throw a "not defined" error