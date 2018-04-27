function bandingkanAngka(angka1, angka2){
	var result;
	if( angka1 === angka2){
		result = '-1'
	}
	else if (angka2 > angka1){
		result = true
	}
	else{
		result = false
	}
return result
}

console.log(bandingkanAngka(5, 8)); 
console.log(bandingkanAngka(5, 3)); 
console.log(bandingkanAngka(4, 4)); 
console.log(bandingkanAngka(3, 3)); 
console.log(bandingkanAngka(17, 2)); 