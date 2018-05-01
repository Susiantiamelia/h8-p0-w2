var Name= ''
var Peran='tabib'

if (Name === '' || Peran === ''){
	console.log('Nama harus diisi!')
}
else if (Name !== '' && Peran === ''){
	console.log('Halo ' + Name + ', Pilih peranmu untuk memulai game!')
}

else if (Peran === 'Ksatria'){
	console.log('Selamat datang di Dunia Proxytia, ' + Name )
		console.log('Halo ' + Peran , Name + ', kamu dapat menyerang dengan senjatamu!')
}

else if(Peran === 'Tabib'){
	console.log('Selamat datang di Dunia Proxytia, ' + Name)
		console.log('Halo ' + Peran , Name + ', kamu akan membantu temanmu yang terluka')
}

else {
	console.log('Selamat datang di Dunia Proxytia, ' + Name)
		console.log('Halo ' + Peran , Name + ', ciptakan keajaiban yang membantu kemenanganmu!')
}
