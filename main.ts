let reList = ["Apple","Banana","Mango","Oranges","Kiwi"];

    
    function searchThrough<T,>(reList:T[]):T{
        
        const my_index = 2;
        return reList[my_index]
    }
    
    


    function anIT<t,u>(valueone:t,valuetwo:u):object{


        return {
            valueone,
             valuetwo
        }
    }


    let ss = anIT(102,"we are doing something !!")

    console.log(ss)




    interface Car{
    readonly id:number,
        name:string,
        release:string

        start:()=> string
    }

    const User:Car = {id:223,name:"whistle",release:"12/03/2022",start:()=>{
        return "done doing things";
    }}

 
    console.log(User.release," ",User.name," ",User.start())


enum Stickers{
    bisex,
    lesbo,
    trans,
    demi,
    aro,
    aroro
}


console.log(Stickers)