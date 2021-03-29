// before es6

var arr =[20,30,25]

var a= arr[0]
var b= arr[1]
var c= arr[2]

console.log(arr)
console.log(a)
console.log(b)
console.log(c)


/* --------------
using es6 for de structuring
 -------------------*/
 
 console.log('______way 1_______')

const arr1= [20,30,25]

let [x,y,z]=arr1

console.log(arr1);
console.log(x);
console.log(y);
console.log(z);



/* 
Destructuring using function
*/
console.log('____way 2_____')



function arr2(){
  return [90,70,60,50]
}


console.log(arr2());
let [a1,a2, ,a4]= arr2()

console.log(a1)
console.log(a2)
console.log(a4)


/* 
##############
##############
*/
console.log('______way 3_______');

let [x1,x2,x3]= [60,50,49]

console.log(x1)
console.log(x2)
console.log(x3)


