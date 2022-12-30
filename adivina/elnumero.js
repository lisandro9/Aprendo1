

function iniciar() {
	let vidas = 10;
	let num = Math.floor((Math.random() * 100) + 1);
	while (vidas > 0) {
		let numero = prompt("Te quedan " + vidas +
			" vidas. Escribe el número: ");
		if (numero == num) {
			alert("¡Felicidades, ganaste! :D ");

		}
		if (numero > num) {
			alert("el número que pensé es menor");
		}
		if (numero < num) {
			alert("el número que pensé es mayor");
		}
		vidas--;
	}

	if (vidas == 0) {
		alert("Lo siento, perdiste :( ");
	}
//Alan gei
} 
