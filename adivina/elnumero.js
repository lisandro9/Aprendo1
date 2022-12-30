let inputTag = document.getElementById('input-number');
let formTag = document.getElementById('FormItem');
let ulTag = document.getElementById('attemp-history');
let divTag = document.getElementById('message-text');
let h3Tag = document.getElementById('life-counter');

let secretNumber = 4;
let vidas = 8;
updateLifeCounter(vidas);

function updateLifeCounter(lifeCount){
	let text = "Vidas: ";
	let counter = 0;
	while(counter < lifeCount) {
		text = text + "♥";
		counter++;
	}
	text = text + ' ' + lifeCount; 
	h3Tag.textContent = text;
}

formTag.addEventListener('submit', (evt)=> {
	evt.preventDefault();
	let currentValue = inputTag.value;
	// validar si hay vidas
	if (secretNumber == currentValue){
		// mostrar aviso
		alert('ganaste');
	} else {
		//valio verga
		vidas--;
		updateLifeCounter(vidas);
		if(vidas <= 0){
			// se acabo
			alert('perdiste');
		}
		alert('Intentalo denuevo');

		if (currentValue > num) {
			alert("el número que pensé es menor");
		}

		if (currentValue < num) {
			alert("el número que pensé es mayor");
		}	
	}
	
});


function iniciar() {
	let num = Math.floor((Math.random() * 100) + 1);
	while (vidas > 0) {
		let numero = prompt("Te quedan " + vidas +
			" vidas. Escribe el número: ");
		if (numero == num) {
			alert("¡Felicidades, ganaste! :D ");

		}
		
		}
		if (numero < num) {
			alert("el número que pensé es mayor");
		}
		vidas--;
	}

//Alan gei
