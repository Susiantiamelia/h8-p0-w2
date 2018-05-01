// Tugas 1
function shoutOut(){
	 var a = 'Halo Function'
	return a;
}

console.log(shoutOut())


// Tugas 2
function calculateMultiply(num1, num2){
 var a = 0
 a = num1 * num2
 return a
}

var hasilPerkalian = calculateMultiply(5,6);
console.log(hasilPerkalian);


// Tugas 3
function processSentence(nama, age, adress, hobby){
 var a;
  a = 'Nama Saya ' + nama + ', umur saya ' + age + ' tahun, alamat saya di ' + adress + ', dan saya punya hobby yaitu ' + hobby +'!'; 
return a;
}

var fullSentence = processSentence('Agus',30,'Jln. Malioboro, Yogjakarta','gaming');
console.log(fullSentence);
