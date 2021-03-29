
/* -----------------------------------
    from this array, find student name
    who's gpa is above 3.00
------------------------------------*/


var student=[
      
      {
        name:'raju',
        roll:23,
        gpa:3.25
      },
      
      {
        name:'elora',
        roll:22,
        gpa:3.95
      },
      
      {
        name:'saju',
        roll:10,
        gpa:2.95
      },
      
      {
        name:'asha',
        roll:33,
        gpa:2.09
      }
      
  ]
  
  console.log(student)
  
  const StudentName=()=>{
    
   return student.filter((x)=>{
      return x.gpa>3
    }).map((y)=>{
      return y.name
    })
  }
  
  let name=StudentName()
  
  console.log(name)