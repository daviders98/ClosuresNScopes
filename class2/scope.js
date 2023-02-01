var fruit;

const setFruit = () =>{
    fruit = 'Apple'
}
const printFruit = () =>{
    setFruit()
    console.log(fruit)
}
printFruit()

/* 

*/
console.log('Country [START]')
function setCountry (){
    var country = 'Turkey'
}
function printCountry(){
    setCountry()
    console.log(country)
}
// printCountry() will throw error 
//because it doesnt exist in said function

function greeting(){
    let userName = 'Ana123'
    console.log(userName)
    if(userName==='Ana123'){
        console.log(`Hello ${userName}`)
    }
}

greeting()
//console.log(userName) will throw error, doesnt exist outside function

console.log('Print multiple fruits [START]')
function printMultipleFruits(){
    if(true){
        var fruit1 = 'Apple'
        let fruit2 = 'Pear'
        const fruit3 = 'Banana'
    }
    console.log(fruit1) // IS DEFINED WITHIN THE SCOPE
    //console.log(fruit2) IS NOT DEFINED WITHIN THE SCOPE
    //console.log(fruit3) IS NOT DEFINED WITHIN THE SCOPE
}
printMultipleFruits()