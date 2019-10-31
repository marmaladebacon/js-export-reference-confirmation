

export class MyDetails{
  msg:string = '';
  constructor(){
    this.msg = 'Default message here';
  }

  public setMsg(msgOverride:string){
    this.msg = msgOverride;
  }
}

const myInstantiatedClass = new MyDetails();

export {myInstantiatedClass};