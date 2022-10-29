// Generics in Typescript 


 let siDuck =  <T>(arg:T):T=>{

return arg ;

}

let x = siDuck("kiki")

let y = siDuck(77)
let z = siDuck(55.8)

console.log(x)
console.log(y)
console.log(z)




