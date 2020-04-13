
export class Product {
  code:number;
  name:string;
  quantity:number;
  price:number;
  description:string;
  status: string;
  reason:string

  constructor(code: number, name: string, quantity: number, price: number, description: string, status: string, reason: string) {
    this.code = code;
    this.name = name;
    this.quantity = quantity;
    this.price = price;
    this.description = description;
    this.status = status
  }

  public getCode(){
    return this.code;
  }

  public setCode(code:number){
    this.code = code;
  }

  public getName(){
    return this.name;
  }

  public setName(name:string){
    this.name = name;
  }

  public getQuantity(){
    return this.quantity;
  }

  public setQuantity(quantity:number){
    this.quantity = quantity;
  }

  public getPrice(){
    return this.price;
  }

  public  setPrice(price:number){
    this.price = price;
  }

  public getDescription(){
    return this.description;
  }

  public setDescription(description:string){
    this.description = description;
  }
  public getStatus(){
    return this.status;
  }

  public setStatus(status:string){
    this.status = status;
  }

  public getReason(){
    return this.reason;
  }

  public setReason(reason:string){
    this.reason = reason;
  }



}
