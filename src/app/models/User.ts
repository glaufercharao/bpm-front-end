export class User{
  name:string;
  password:string;

  constructor() {
  }

  public getName(){
    return this.name;
  }

  public setName(name:string){
    this.name = name
  }

  public getPassword(){
    return this.password;
  }
  public setPassword(password:string){
    this.password = password
  }
}
