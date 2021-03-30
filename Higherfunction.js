
//example 1

function square(x){
  console.log(`square of ${x} : ${x*x}`)
}


function higherOrderFunctuon(num,callback){
  callback(num)
}

higherOrderFunctuon(6,square)

