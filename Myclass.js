class MyClass{
    constructor(email){
        console.log("hi this is constructor", email);
        this.email=email
    }
    getMsg(myname){
        console.log("hello this is a method", myname); 
        this.x=myname
        console.log(this.x, this.email);
        
    }
    sum(a,b){
        console.log(a+b);
        console.log("Name is ",this.x )
    }
}
let x=new MyClass("janki@gmail.com")  //object created
x.getMsg("kiran")
x.getMsg("jyoti")
x.sum(10,40)

class Class2 extends MyClass{
    method1(){
        console.log("abc");
        
    }
}
let y=new Class2()
y.method1()
y.getMsg("janki")