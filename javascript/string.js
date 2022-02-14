// strring is sequencing of characters 

var str="hello pepcoders";
// h e l l o <space> p e p c o  d  e  r  s
// 0 1 2 3 4    5    6 7 8 9 10 11 12 13 14 << example of sequencing 
console.log(str);
console.log(str[4]);

// string are immutable in js
str[4]="z";
console.log(str); 
console.log(str.length);
 
// string method

// 1) slice method 
// slice(start,end) -->>> start index is inclusive and end is exclusive 
                            //  (start,end)->> format of slice -(slice mtlb cutting kr diya )
var slicedstr=str.slice(3,12);
console.log(slicedstr);             // print=lo pepcod  -(3 sepahle ka or 12 k baad sab ka slice kar diya ) 
console.log(str);   
var slicedstr=str.slice(6);     // start se leke puri end tk string kategi 
console.log(slicedstr);        // print =pepcoders

// substring method

// substr(start,length); start index se suru hoga or aage jitni length tak character cover karne hai 

let ans = str.substr(2,6);  // 2 se aage 6tak elements cover karega 
console.log(ans);
console.log(str);      // str in same or unchanged 

// replacing 
str="YOLO";
console.log(str);  // print YOLO

// tolower() and uppercase()
console.log(str.toLowerCase());  // print yolo
console.log(str.toUpperCase());  //print YOLO
str="fomo"
console.log(str);

// concatenation method -> 2 combine and 2 string and make them one  string 
let firststr="believe in";
let secondstr=" yourself";

let concatenatedstr=firststr+secondstr;
console.log(concatenatedstr);  //print-->> belive in yourself

// concat method 
let concatstr=firststr.concat(secondstr," and me ");
console.log(concatstr);   // print ->> believe in yourself and me 

// trim method ->> removes all the whitespaces of starting and ending of string 
let trimstr = "                hello      how   are  you   ";
console.log(trimstr);
console.log(trimstr.length);
console.log(trimstr.trim()); 
console.log(trimstr.trim().length);
