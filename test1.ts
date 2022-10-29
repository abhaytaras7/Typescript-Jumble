class Shops{

    address:string
    shopType:string
    shopSize:number

    readonly ownerInfo:string = "ownership"

    constructor(address:string,shopType:string,shopSize:number) {

        this.address= address;
        this.shopType=shopType;
        this.shopSize=shopSize;

    }
 


}
//dynamically creating object for class Shops
const dominos = new Shops("Belmount,USA","Restaurant",77)


console.log(dominos.address,dominos.ownerInfo,dominos.shopSize);


