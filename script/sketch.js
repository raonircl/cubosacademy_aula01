let personagem;
let grama;
const tamanho = 64;
let andarX = 0;
let andarY = 0;
const velocidade = 64;
const velMobile = 10;
let bolasDeFogo = [];

function preload() {
  personagem = loadImage('./img/person.png');
  grama = loadImage('./img/grass.png');
  bolaDeFogoImg = loadImage('./img/fireball.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  for (let x = 0; x < width; x += tamanho) {
    for (let y = 0; y < height; y += tamanho) {
      image(grama, x, y, tamanho, tamanho);
    }
  }

  image(personagem, andarX, andarY, tamanho, tamanho);

  for (let bola of bolasDeFogo) {
    bola.update();
    bola.display();
  }
}

function keyPressed() {
  if (keyIsDown(DOWN_ARROW) && andarY + tamanho < windowHeight) {
    andarY += velocidade;
  }

  if (keyIsDown(UP_ARROW) && andarY > 0) {
    andarY -= velocidade;
  }

  if (keyIsDown(RIGHT_ARROW) && andarX + tamanho < windowWidth) {
    andarX += velocidade;
  }

  if (keyIsDown(LEFT_ARROW) && andarX > 0) {
    andarX -= velocidade;
  }

  if (keyCode === 32) {
    let bolaDeFogo = new BolaDeFogo(andarX + tamanho / 2, andarY + tamanho / 2);
    bolasDeFogo.push(bolaDeFogo);
  }
}

function touchMoved() {
  if (mouseX > pmouseX && andarX + tamanho < windowWidth) {
    andarX += velMobile;
  } else if (mouseX < pmouseX && andarX > 0) {
    andarX -= velMobile;
  }

  if (mouseY > pmouseY && andarY + tamanho < windowHeight) {
    andarY += velMobile;
  } else if (mouseY < pmouseY && andarY > 0) {
    andarY -= velMobile;
  }

  return false;
}

function touchStarted() {
  let bolaDeFogo = new BolaDeFogo(andarX + tamanho / 2, andarY + tamanho / 2);
  bolasDeFogo.push(bolaDeFogo);

  return false;
}

class BolaDeFogo {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 5;
  }

  update() {
    this.x += this.speed;
  }

  display() {
    image(bolaDeFogoImg, this.x, this.y, 20, 20);
  }
}
