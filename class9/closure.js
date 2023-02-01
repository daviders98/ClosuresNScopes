const globalVariable = 0

function customFunction(){
    const myNumber = 1;
    console.log(globalVariable)
    function innerFunction(){
        const inner = 2
        console.log(myNumber,globalVariable)
        
        function innerInnerFunction(){
            console.log(inner,myNumber,globalVariable)
        }
        return innerInnerFunction()
    }
    return innerFunction()
}

customFunction()