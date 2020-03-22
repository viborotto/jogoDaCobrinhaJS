let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); //reendeniza o desenho dentro do canvas
let box = 32;//cada quadradinho 32 pixel
let snake = [];
snake[0] = {
  x: 8 * box,
  y: 8 * box
}

function criarBG() {
  context.fillStyle = "lightgreen"; //definindo a cor
  context.fillRect(0, 0, 16 * box, 16 * box); //desenhar o retangulo do jogo
}
//criando cobrinha
function criarCobrinha(){
  for(i=0; i< snake.length; i++){
    context.fillStyle = "green";
    context.fillRect(snake[i].x, snake[i].y, box, box);
  }
}


criarBG();
criarCobrinha();