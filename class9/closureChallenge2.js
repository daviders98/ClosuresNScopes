function createPetList() {
    const list = []
    return (newPet=null) =>{
        if(newPet){
            list.push(newPet)
        }else{
            return list
        }
    }
}

const customPetList = createPetList()
console.log(customPetList('Cat'))
console.log(customPetList('dog'))
console.log(customPetList())