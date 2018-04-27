function xo(xoxo){
  var x = 0
  var o = 0
  var result;
  for(var z=0; z <xoxo.length; z++){
    if(xoxo[z] === 'x'){
      x += 1 
    }
    else {
      o += 1
    }
  }
  if(x === o){
    result = true
  }
  else { result = false
  }
  return result
}

console.log(xo('xoxoxo'));
console.log(xo('oxooxo'));
console.log(xo('oxo'));
console.log(xo('xxxooo'));
console.log(xo('xoxooxxo'));