function errorHandler(err,req,res, next){
  console.log(err)
  let statusCode = 500;
  let errorCode = "UNKNOWN_ERROR"
  let message = 'Something went wrong'
  console.log(err.name, '-----ini error')
 

  if(err.name == 'SequelizeValidationError'){
    statusCode = 400;
    let arr = []
    console.log(err)
    for(var i = 0; i < err.errors.length; i++){
       arr.push(err.errors[i].message)
    }
    console.log(arr)
    errorCode = 'VALIDATION_ERROR';
    message = arr
  }else if(err.name == 'DATA_NOT_FOUND'){
    statusCode = 404  
    errorCode = 'INVALID_ID'
    message = "Data not found"
  }else if(err.name == 'JsonWebTokenError'){
    statusCode = 401
    errorCode = 'USER_NOT_AUTHENTICATED'
    message = "Invalid User"
  }else if(err.name == 'Forbidden access'){
    statusCode = 403
    errorCode = 'FORBIDDEN_ACCESS'
    message = "You are not authorized to access the file"
  }else if(err.name == 'ReferenceError'){
    statusCode = 500 
    errorCode = 'INTERNAL_SERVER_ERROR'
    message = "Refference error"
  }else if(err.name == 'Login Error'){
    statusCode = 400
    errorCode = 'VALIDATION_ERROR'
    message = "Invalid Name/Password"
  }else if(err.name == 'OWN_PRODUCT'){
    statusCode = 401
    errorCode = 'FORBIDDEN'
    message = "You cant buy your own product"
  }else if(err.name == "This email is taken. Try another"){
    statusCode = 400
    errorCode = 'VALIDATION_ERROR'
    message = "This email is taken. Try another"
  }else if(err.name == "OUT_OF_STOCK"){
    statusCode = 400
    errorCode = 'VALIDATION_ERROR'
    message = "This product is currently out of stock"
  }else if(err.name === "INSUFFICIENT_STOCK"){
    statusCode = 400
    errorCode = 'VALIDATION_ERROR'
    message = "This product stock is insufficient for the amount you have set, you might want to decrease the amount of the product in you cart first"
  } else if(err.name === "EMAIL_VALIDATION_ERROR") {
    statusCode = 400
    errorCode = 'EMAIL_VALIDATION_ERROR'
    message = "You haven't validate your email yet"
  }

  res.status(statusCode).json({
    error: errorCode, message: message
  })
}

module.exports = errorHandler