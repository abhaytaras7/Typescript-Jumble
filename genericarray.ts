// array && arrow function

let fruitsList :string[] = ["apple","mango","watermelon"]

 
const addFruitL = <T>(fruitsList: T[] ):T =>{

    console.log(fruitsList.length)
    
    return   fruitsList[1] 
}

 
 