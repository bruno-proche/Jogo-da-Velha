let jogador = "X";
let fimDeJogo = false;
let tabuleiro = [
    "", "", "",
    "", "", "",
    "", "", ""
];


let casas = document.querySelectorAll(".casa");
let reiniciarbtn = document.getElementById("reiniciar");



casas.forEach((casa, indice) => {


    casa.addEventListener("click", () => {
        if(fimDeJogo){
            return;
        }

    if(tabuleiro[indice] == ""){

    tabuleiro[indice] = jogador;

    casa.textContent = jogador;

    if (jogador == "X") {

        casa.style.color = "#3498db";
    } else {
        casa.style.color = "#e74c3c";
    }


    if(verificarVitoria()){

        alert("Jogador " + jogador + " venceu!");

        fimDeJogo = true;

        return;

    }


    if(verificarEmpate()){

        alert("Empate!");
        fimDeJogo = true;
        return;

    }


    trocarJogador();

}

    });


});


function trocarJogador(){

    if(jogador == "X"){

        jogador = "O";

    }else{

        jogador = "X";

    }
    console.log(jogador);

    document.getElementById("vez").textContent =
    "Vez do jogador: " + jogador;

}
function verificarVitoria(){

    let possibilidades = [

        [0,1,2],
        [3,4,5],
        [6,7,8],

        [0,3,6],
        [1,4,7],
        [2,5,8],

        [0,4,8],
        [2,4,6]

    ];


    for(let combinacao of possibilidades){

        let a = combinacao[0];
        let b = combinacao[1];
        let c = combinacao[2];


        if(
            tabuleiro[a] != "" &&
            tabuleiro[a] == tabuleiro[b] &&
            tabuleiro[a] == tabuleiro[c]
        ){

            return true;

        }

    }


    return false;

}
function verificarEmpate(){
    
    console.log(tabuleiro);

    for(let casa of tabuleiro){

        if(casa == ""){

            return false;

        }

    }

    return true;
}
function reiniciarJogo(){

    jogador = "X";
    fimDeJogo = false;
    
    for(let i = 0; i < tabuleiro.length; i++){

        tabuleiro[i] = "";
        casas[i].textContent = "";
        casas[i].style.color = "";
}
    document.getElementById("vez").textContent =
    "Vez do jogador: " + jogador;
}
reiniciarbtn.addEventListener("click", reiniciarJogo);
