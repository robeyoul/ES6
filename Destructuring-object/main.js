/* -----------
  before Es6
-------------*/

var person ={
  
  Name:'Raju',
  Roll: 29
}

console.log(person)
var name = person.Name
var roll = person.Roll

console.log(name)
console.log(roll);

/* -----------------------------
  destructuring object using ES6
-------------------------------*/
console.log('-------way 1 --------')

var person1 ={
  
  Name:'Raju',
  Roll: 29
}

let {Name,Roll}= person1

console.log(Name)
console.log(Roll)

/* -----------
  Using Function
-----------------*/

function print(manName,manEmail){
  return 'hello '+ manName+';'+ 'email : '+ manEmail
}


var print=print('Raju','Raju@gmail.com')
console.log(print)


let {a1,a2}=print

console.log(a1)

