let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); //reendeniza o desenho dentro do canvas
let box = 32;//cada quadradinho 32 pixel

function criarBG() {
  context.fillStyle = "lightgreen"; //definindo a cor
  context.fillRect(0, 0, 16 * box, 16 * box); //desenhar o retangulo do jogo
}

criarBG();