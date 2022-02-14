// 3 types of function

//1) normal function

// function definition
// function function_name(parameter1 parameter2){
    // do something
// }

// function invoke
// function_name(arg1,arg2);

function add(a,b){
    console.log(a+b);
}
// add(2,3);
// function are treated as first class citizen in javascript
// ->> function can be returned
// function can be passed as parameter 



// 2) FUNCTION Expression

function calculator(str,a,b){
    if(str=='add'){
        return function add() {
           console.log(a+b);
        }
    }
        
    // else if (str=='sub'){
        //     return function sub(){
        //         return a-b;
        // }
    
}

let returnedfunc = calculator('add',2,3);
// console.log("returned function is \n"+ returnedfunc);
returnedfunc();

let sayHi=function abcd() {
    // console.log("hello guys i am functon expression");
}


// console.log("line 47");
sayHi(); // ( ) -this bracket uses for call the sayHi function 

// IIFE -IMMEDIATEL INVOKE FUNCTION EXPRESSION -self invokation by the value directly

function add(a,b){
    return a+b;
}
add(2,3);

let additionIIFE = (function add(a,b) {
    console.log(a+b); 
})(20,30);   // IIFE- wrap up whole function in a open bracket
//               and use for minimize the syntaxes
// console.log(additionIIFE); // direct call by function name 
