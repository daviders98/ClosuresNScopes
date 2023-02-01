function sumWithClosure(firstNum=0) {
    console.log('AA')
    return (secondNum=0)=>{
        return firstNum+secondNum
    }
}

console.log(sumWithClosure(2)(3))
console.log(sumWithClosure(90)())