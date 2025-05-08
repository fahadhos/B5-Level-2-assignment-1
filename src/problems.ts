
function formatString(input: string, toUpper: boolean =true ): string  {
    
return toUpper ? input.toUpperCase() : input.toLowerCase();

}
 


function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]
{
    return items.filter(item=>item.rating>=4);
} 
 


function concatenateArrays<T>(...arrays: T[][]): T[]{

    let result: T[] = [];

  for (let array of arrays) {
    result.push(...array);
  }

  return result;
}
 



class Vehicle{
    
  

    constructor(private make: string,private year: number){
        this.make = make;
        this.year = year;
    }
 getInfo():string{
    return `Make: ${this.make}, Year: ${this.year}`
 }

}


class Car extends Vehicle{
 
    constructor(make: string , year:number,private model:string){
        super(make, year);
        this.model = model;
    }

    getModel() :string {
        return `Model: ${this.model}`;
    }
}

 


function processValue(value: string | number): number {

    if( typeof value ==='string'){
        return value.length;
    }
        else if (typeof value ==='number')
 {   return value * 2; }

}
 

interface Product {
    name: string;
    price: number;
  }
  
  function getMostExpensiveProduct(products: Product[]): Product | null{
    if(products.length===0){
        return null;
    }


    let mostExpensive = products[0];

  for(let product of products){
    if(product.price> mostExpensive.price){
        mostExpensive = product;
    }
  }
  return mostExpensive;
  }
 



  enum Day{
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }


  function getDayType(day: Day):string{

    if(day === Day.Saturday || day === Day.Sunday)
    {
        return "Weekend";
    }
    else {
        return "Weekday";
    }
  }
 

  async function squareAsync(n: number): Promise<number>
  {

    return new Promise((resolve , reject)=>{

        setTimeout(()=>{
            if(n <0 )
            {
                reject (new Error("Negative number not allowed"));
            }
            else {
                resolve(n*n);
            }
        },1000);
    });
  }
  squareAsync(-2).then(console.log)
  .catch(console.error)