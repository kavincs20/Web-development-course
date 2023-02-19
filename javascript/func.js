//function calling and printing the result
function getname(firstname){
    console.log(firstname)
}
var firstname="kavin";
getname(firstname);


//funtion calling and returning the value to the result variable
function getnames(firstname){
    return firstname + "!Hi";
}
var firstname="kavin";
let result = getnames(firstname);
console.log(result)


//arrow function
let returnsomething = (num1,num2)=>{
    console.log(num1+num2);
}
returnsomething(10,20)