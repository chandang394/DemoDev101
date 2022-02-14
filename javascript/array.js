// array is a collection of elements

let cars=["BMW","AUDII","MG",1,2,3,true];

// IN JS YOU CAN STORE DIFFRENT VALUE OF DIFFRENT TYPES IN AN ARRAY
console.log(cars);

// accessing the element of array 
console.log(cars[0]);
console.log(cars[2]); 

// replacing the element in array
cars[3]="mahindra";
console.log(cars[3]);

// adding element in array
cars[7]="honda";
console.log(cars[7]);

// methods of an arraay
// 1)pop method->>  this method removes the element from the last of array

cars.pop();
console.log("after poping the element\n "+cars);

// 2) push method ->>> it is push the element in last of the array
cars.push("TATA");
console.log("after the pushing the element\n"+cars);

cars.pop();
console.log(cars);

// 3) unshift method -->> this add element at the starting the array
cars.unshift("JLR");
cars.unshift("mustang");
console.log(cars);

// 4) shift method-->> this removes the element from 0th index of the array
cars.shift();
console.log(cars); 
console.log(cars.length);

// 2D ARRAY STARTING
["a","b","c"] // arrays of strings
[1,2,3] // arrays of numbers
let array2d=[["bmw",2,null,45],
[4,true,6],
[7,"8",9],
[10,11,12],
]; // arrays of array
console.log(array2d); // printing 2d arry
console.table(array2d); // prints 2d array in the form of table 
 let res=array2d[3];
 console.log(res);     // print 3rd index element 
 console.log(res[2]);
 console.log(array2d[1][2]);
 console.log(array2d[1][3]); // undefined because there was no value in array
 console.log(array2d.length); // no of rwo in 2d array
 console.log(array2d[0].length); // no of column in 2 d array

//  2D ARRAY ME VALUE KAISE DAALE
array2d[1][2]=false;
console.table(array2d);


