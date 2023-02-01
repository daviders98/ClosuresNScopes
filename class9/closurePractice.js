function greeting(){
    let username = 'David'

    function displayUserName(){
        return `Hello ${username}`
    }
    return displayUserName
}

const g = greeting()
console.log(g) //g references the function 
console.log(g()) //g() displays the result of running the function

//Taking advantage of closures:
function saveMoney(coins){
    let savedCoins = 0
    savedCoins += coins
    console.log(`Money saved:$${savedCoins}`)
}
saveMoney(5)
saveMoney(5)
//THE TOTAL SAVED COINS IS NOT GETTING SAVED EACH
//TIME THE FUNCTION RUNS.

function saveMoneyV2(){
    let savedMoney = 0;
    function addToSavings(money){
        savedMoney+=money
        console.log(`Money saved is: $${savedMoney}`)
    }
    return addToSavings
}

const box = saveMoneyV2()
box(5)
box(5)
box(15) // The value gets stored in savedMoney variable

const newBox = saveMoneyV2()
newBox(8)
newBox(11) // counts as another instance, so value is different