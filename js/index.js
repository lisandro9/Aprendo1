function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function eleccion(jugada) {
    let resultado = "";
    if (jugada == 1) {
        resultado = "Piedra ✊";
    }

    else if (jugada == 2) {
        resultado = " Papel 🧻";
    }
    else if (jugada == 3) {
        resultado = " Tijera 💇‍♂️";
    }
    else { resultado = "?"; }
    return resultado;
}
function Victoria(triunfos, pc, jugador) {

    if (pc == jugador) {
        return triunfos;
    }

    else if (jugador == 1 && pc == 3) {

        return triunfos + 1;
    }
    else if (jugador == 2 && pc == 1) {

        return triunfos + 1;
    }
    else if (jugador == 3 && pc == 2) {

        return triunfos + 1;
    }
    else {

        return triunfos;


    }
}
let jugador = 0;
let pc = 0;
let triunfos = 0;
let perdidas = 0;
while (triunfos < 3 && perdidas < 3) {
    pc = aleatorio(1, 3);

    jugador = prompt("Elige, 1 para piedra, 2 para papel y 3 para tijera")
    eleccion(jugador);
    //alert("Elegiste " + jugador)
    // 1 piedra, 2 papel, 3 tijera

    alert("Tu eliges: " + eleccion(jugador));
    alert("Pc elige: " + eleccion(pc));

    // combate uwu

    triunfos = Victoria(triunfos, pc, jugador);
    perdidas = Victoria(perdidas, jugador, pc);
}
alert("Ganaste " + triunfos + " veces. Perdiste " + perdidas + " Veces.");
