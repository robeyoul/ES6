// rest operator create an array

// function 1

function sum(...num){
  return num
}
let adding= sum(10,20,40,49,50)
console.log(adding)

// function 2

var printNumber = (a,b,...c)=>{
  
  console.log(`a:${a}; b:${b}; c:${c}`)
}

printNumber(10,20,50,60,5,073,975)


//create new array


var arr=[20,40,40,30,40]

//create new array from existing array

var arr2=[...arr, 90,70,550,68,9,8]

console.log(arr2);


// object


var person ={
  name:'raju',
  roll: 23,
  email: 'raju@gmail.com'
}

console.log(person)

//create new object

let person2= {
  
  ...person,
  gender: 'male',
  hobby: 'reading'
}


console.log(person2)

