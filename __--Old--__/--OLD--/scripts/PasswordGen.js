


function Password(length=Number, numbers=Boolean, symbols=Boolean) {
  let charset;
  let lettersUse = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let numbersUse = '0123456789';
  let symbolsUse = `%/*@$!#&()-.?`;
  
  if(numbers == true) {
    charset = lettersUse + numbersUse;
  }else{
    if(numbers == false) {
      charset = lettersUse;
    }else{
      if(typeof numbers == undefined) {
        console.log('Please fill properly as show Password(length=Number, numbers=Boolean, symbols=Boolean)');
      }
    }
  }
  
  
  if(symbols == true) {
    charset = charset + symbolsUse;
  }else{
    if(symbols == false) {
      charset = charset;
    }else{
      if(typeof symbols == undefined) {
        console.log('Please fill properly as show Password(length=Number, numbers=Boolean, symbols=Boolean)');
      }
    }
  }
    
    
    
    
    
    
    
    retVal = "";
    
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}










module.exports = {
  Password
}

