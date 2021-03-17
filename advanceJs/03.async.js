function delayLog(time, msg){
  var promise = new Promise( (resolve, reject) => {
    setTimeout( () => resolve(msg) , time)
  } )

  return promise
  
}

async function test(){
  var message = await delayLog(2000, "hello")
  console.log(message)
}

test()