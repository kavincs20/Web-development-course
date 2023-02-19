//console.log(process.argv[2])
//'C:\\Program Files\\nodejs\\node.exe',argv[0]
//'D:\\javascript\\input_addition.js',argv[1]
//'kavin'argv[2]


//operation
let addition =(num1,num2)=>{
    console.log(num1+num2)
}
let subtraction =(num1,num2)=>{
    console.log(num1-num2)
}
let multiplication =(num1,num2)=>{
    console.log(num1*num2)
}
let division =(num1,num2)=>{
    console.log(num1/num2)
}
let modulus =(num1,num2)=>{
    console.log(num1%num2)
}

let op = (process.argv[2])
let num1 = parseInt(process.argv[3])
let num2 = parseInt(process.argv[4])

function init(){
    switch(op){
        case '+':addition(num1,num2);
        break;
        case '-':subtraction(num1,num2);
        break;
        case '*':multiplication(num1,num2);
        break;
        case '/':division(num1,num2);
        break;
        case '%':modulus(num1,num2);
        break;
    }
}
init()