/* ----------------------------------
 map create a new array from existing
 array
-----------------------------------*/
"use Strick"

var arr= [1,2,3,4,5]

var arr2= arr.map((x)=>{
  return x*x
})

console.log(arr2)


//example 2

var arr2 =[
    
    {name: 'raju', roll: 23},
    {name: 'Asha', roll: 23},
    {name: 'Elora', roll: 23}
    
  ]
  
 
  
  let ArrName= arr2.map((personName)=>{
    
    return personName.name
  })
   console.log(arr2)
   console.log(ArrName)
   
   
   
var person=['raju','elora','asha','happy']        


var newPerson= person.map((name)=>{
  
  return name.toUpperCase()
})

console.log(person)
console.log(newPerson)
   
   
  
  
  