let empate = 0 ;
let jugador1 = 0;
let jugador2 = 0;

function mostrarNombre(){
    let nombre = document.querySelector("#nombreUsuario").value
    document.querySelector("#jugador1Nombre").textContent=nombre
}

function jugadaUsuario(jugada){
const usuario = document.getElementById("Jusuario")
if ( jugada === 1) {
    usuario.src = "img/piedra.png"
} else if (jugada === 2) {
    usuario.src = "img/papel.png"
} else if (jugada === 3) {
    usuario.src = "img/tijera.png"
}

let jb = jugadaBot();
Puntaje(jugada,jb)

}

function jugadaBot(){
    let azar = Math.floor(Math.random()*3)+1
    console.log(azar);
    let bot = document.getElementById("Jbot")

    if( azar === 1) {
        console.log("piedra");
        bot.src = "img/piedra.png"
    } else if (azar === 2) {
        console.log("papel");
        bot.src = "img/papel.png"
    } else if (azar === 3) {
        console.log("tijera");
        bot.src = "img/tijera.png"
    }
    return azar
}

function Puntaje(u,b){
    
if((u==1 && b ==1) || (u == 2 && b == 2) || (u == 3 && b == 3) ){
    empate++;
    document.querySelector("#ptsEmpates").textContent= empate;
} else if(u==1 && b ==3 || u==2 && b==1 || u==3 && b==2){
    jugador1++
    document.querySelector("#ptsJugador1").textContent= jugador1;
} else if (u==3 && b ==1 || u==1 && b==2 || u==2 && b==3){
    jugador2++
    document.querySelector("#ptsJugador2").textContent= jugador2;

}
}
function reiniciar(){
    empate=0
    jugador1=0
    jugador2=0

    document.querySelector("#ptsJugador2").textContent= jugador2;
    document.querySelector("#ptsJugador1").textContent= jugador1;
    document.querySelector("#ptsEmpates").textContent= empate;

}



