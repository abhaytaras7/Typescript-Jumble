// Generic class

interface Car{

        make:string,
    owner:string

}

function info<T,U extends Car>(valone:T,valetwo:U):object{

    return{ valone, valetwo}
}
 

class Road<T>{
    public make:T[]= []

    addToFav(car:T){
        this.make.push(car)
    }
}

let xd = new Road()
xd.addToFav("bwm")

