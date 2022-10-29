// only be used in new keyword 


type Human = {sexuality:()=>void}


function isHuman(emo:Human):emo is Human{

    return (emo as Human).sexuality !== undefined
}