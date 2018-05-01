// Looping menggunakan Whilw
var count=2;
console.log('LOOPING PERTAMA');

while (count < 21) {
  console.log(count + ' - I love coding');
  count +=2;
}

console.log('LOOPING KEDUA')
while(count > 2) {
  count -=2
  console.log(count + ' - I will become fullstack developer');
}


// Looping menggunakan For
console.log('LOOPING PERTAMA')

for(var angka=0; angka < 21; angka++){
  console.log(angka + ' - I love coding')
}

console.log('LOOPING KEDUA')

for(var angka=20; angka >0; angka--){
  console.log(angka + ' - I will become fullstack developer')
}


// Looping Dengan Kondisi
var count = 1
while (count <101){
  if(count % 2 === 0){
    console.log('GENAP')
    count++
  }
  else{
    console.log('GANJIL')
    count++
  }
}


var counter = 1
while(counter <101){
  if(counter % 3 === 0){
    console.log('3 KELIPATAN 3')
    counter +=2
  }
  else{
    console.log('""')
    counter+=2
  }
}


var hitung = 1
while(hitung <101){
  if(hitung % 6 === 0){
    console.log('6 KELIPATAN 6')
    hitung +=5
  }
  else{
    console.log('""')
    hitung+=5
  }
}


var count = 1
while(count <101){
  if(count % 10 === 0){
    console.log('10 KELIPATAN 10')
    count +=9
  }
  else{
    console.log('""')
    count+=9
  }
}