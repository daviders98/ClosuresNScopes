var firstName   //can be declared then assigned.
firstName = 'David'
console.log(firstName)

var lastName = 'Walker' //can be declared and assigned.
lastName = 'Baker' //can be reassigned
console.log(lastName)

var secondName = 'John' 
var secondName = 'Alexander' //can be reassigned and redeclared
console.log(secondName)

//let 
let fruit = 'Apple' //can be declared and assigned
fruit = 'Banana' //can be reassigned

//let fruit = 'Strawberry' cannot be redeclared

const animal = 'dog'
//animal = 'cat' cannot assign a constant variable
//const animal = 'fish' cannot be redeclared
console.log(animal)

const years = [] //is reference type, can be manipulated but not redeclared

years.push('2000')
console.log(years)
years.pop()
console.log(years)