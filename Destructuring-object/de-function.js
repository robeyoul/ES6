//normal

var studentInfo= (students)=>{
  console.log(`name: ${students.name}; 
  roll: ${students.roll};
  age : ${students.age}`)
}

var student1= {
  name: 'raju',
  roll: 23,
  age: 20
}

studentInfo(student1)


// using destructure


var studentDetails = ({name,roll,age})=>{
  console.log(`name : ${name};
  roll : ${roll}; 
  age : ${age}`)
}

const student2={
  name: 'Asha',
  roll: 10,
  age: 15
  
}

studentDetails(student2)