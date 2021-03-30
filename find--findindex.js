// find is a method for finding 1st value
// based on condition


//find

var arr1=[21,33,24,97,44,2,4]

var finding= arr1.find((x)=>{
 return (x%2===0)

})

console.log(finding)

// findIndex

// findIndex method find a index num
// based on a condition

var arr2=[21,33,24,97,44,2,4]

var findingIndex= arr2.findIndex((x)=>{
 return (x%2===0)

})

console.log(findingIndex)


// apply both together

var arr3 = [5,10,15,20,25,30]

var search= (value)=>{
  if(value%3===0)
    return value
  
}


var firstElement= arr3.find(search)
var elementIndex= arr3.findIndex(search)

console.log(firstElement);
console.log(elementIndex);


// work with object

var student=[
  
    {name: 'raju', roll: 23, gpa:2.5},
    {name:'asha', roll: 10, gpa: 3.5 },
    {name: 'saju', roll:15, gpa: 4.30},
    {name: 'akhi', roll:32, gpa: 4.50}
  ]
  
  var findGpa= student.find((x)=>{
    return x.gpa>4
  })
  
  console.log(findGpa)



