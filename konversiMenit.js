function konversiMenit(menit){
  var hour;
  var minute;
  var result;
  
  hour = Math.floor(menit / 60)
  minute = menit % 60
  
  result = hour + ':' + minute
  
  return result;
}

console.log(konversiMenit(105));
console.log(konversiMenit(63));
console.log(konversiMenit(124));
console.log(konversiMenit(53));
console.log(konversiMenit(88));
console.log(konversiMenit(120));