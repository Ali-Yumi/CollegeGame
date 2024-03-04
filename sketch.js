// http://www.colabeduc.org/descricao/show/1528
// https://www.youtube.com/watch?v=yEnk44ghnqM
var Menu, MenuJogar, MenuOpções, MenuExtras, tela, Extras, Opções;
var Linhas, Colunas, TamanhoDosQuadrados, Grama, Fundo1;
var Fonte8Bit;
var Coração, Balão;
var CapivaraNormal, CapivaraNormalD, CapivaraNormalE;
var CapivaraAgiota, CapivaraAgiotaD, CapivaraAgiotaE;
var CapivaraBruxo, CapivaraBruxoD, CapivaraBruxoE;
var CapivaraBebe, CapivaraBebeD, CapivaraBebeE;
var CapivaraGato, CapivaraGatoD, CapivaraGatoE;
var Rato;
var MovimentoX, MovimentoY, MovimentoD, MovimentoE, MovimentoC, MovimentoB, Velocidade, Andar, Lado;
var Falar, Dialogo,Dialogo1, Sim, Não, Timer, Objetivo;
var music
Falar = false;
Dialogo = 0;
Dialogo1 = 0;
Objetivo = 0;
Timer=0;
Lado = 0;
MovimentoX = 5;
MovimentoY = 390;
MovimentoD = false;
MovimentoE = false;
MovimentoC = false;
MovimentoB = false;
Velocidade = 5;
Andar = 0;
Linhas = 16;
Colunas = 16;
TamanhoDosQuadrados = 800 / 16;
tela = 0;
function preload() {
  Fonte8Bit = loadFont('Fontes/8Bit.ttf');
  Coração = loadImage('Imagens/Coração.png');
  Grama = loadImage('Imagens/Grama.png');
  Fundo1 = loadImage('Imagens/Fundo1.png');
  Balão = loadImage('Imagens/Balão.png');
  CapivaraNormal = loadImage('Imagens/CapivaraNormal.png');
  CapivaraNormalD = loadImage('Imagens/CapivaraNormalD.png');
  CapivaraNormalE = loadImage('Imagens/CapivaraNormalE.png');
  CapivaraAgiota = loadImage('Imagens/CapivaraAgiota.png');
  CapivaraAgiotaD = loadImage('Imagens/CapivaraAgiotaD.png');
  CapivaraAgiotaE = loadImage('Imagens/CapivaraAgiotaE.png');
  CapivaraBruxo = loadImage('Imagens/CapivaraBruxo.png');
  CapivaraBruxoD = loadImage('Imagens/CapivaraBruxoD.png');
  CapivaraBruxoE = loadImage('Imagens/CapivaraBruxoE.png');
  CapivaraGato = loadImage('Imagens/CapivaraGato.png')
  CapivaraGatoD = loadImage('Imagens/CapivaraGatoD.png')
  CapivaraGatoE = loadImage('Imagens/CapivaraGatoE.png')
  CapivaraBebe = loadImage('Imagens/CapivaraBebe.png')
  CapivaraBebeD = loadImage('Imagens/CapivaraBebeD.png')
  CapivaraBebeE = loadImage('Imagens/CapivaraBebeE.png')
  Rato = loadImage('Imagens/Rato.png')
  music = loadSound('Musics/Music.mp3')
}
function setup() {
  createCanvas(800, 600);
  frameRate(30);
  if (music.isPlaying()) {
    music.stop();
  } 
  else {
    music.play();
  }
}
function draw() {
  if (tela == 0) {
    for (let Linha = 0; Linha < Linhas; Linha++) { //Parede do menu
      for (let coluna = 0; coluna < Colunas; coluna++) {
        if ((Linha + coluna) % 2 === 0) {
          fill(102, 154, 237);
        } else {
          fill(71, 74, 255);
        }
        noStroke();
        rect(coluna * TamanhoDosQuadrados, Linha * TamanhoDosQuadrados, TamanhoDosQuadrados, TamanhoDosQuadrados);
      }
    }
    textFont(Fonte8Bit)
    textSize(60)
    fill(255, 0, 0)
    text('C  A  P  Y  B  A  R  A', 213, 95)
    text('D  R  E  A  M', 313, 145)
    text('P  L  A  Y', 315, 245)
    text('G  U  I  A', 315, 345)
    text('E  X  T  R  A  S', 265, 445)
    textSize(20)
    text(mouseX + ' ' + mouseY, 10, 15)
    image(CapivaraNormal, 60, 190, 80, 110)
    image(CapivaraAgiota, 60, 320, 80, 130)
    scale(-1, 1)
    image(CapivaraBebe, -740, 210, 60, 90)
    image(CapivaraBruxo, -750, 320, 85, 130)
    resetMatrix()

    if (mouseX > 300 && mouseX < 500 && mouseY > 200 && mouseY < 250) {
      image(Coração, 250, 200, 50, 50)
    }
    else if (mouseX > 300 && mouseX < 500 && mouseY > 300 && mouseY < 350) {
      image(Coração, 250, 300, 50, 50)
    }
    else if (mouseX > 250 && mouseX < 550 && mouseY > 400 && mouseY < 450) {
      image(Coração, 200, 400, 50, 50)
    }
    else if (mouseX > 300 && mouseX < 500 && mouseY > 100 && mouseY < 150) {
      image(Coração, 250, 100, 50, 50)
    }
  }
  else if (tela == 1) {
    image(Fundo1, 0, -100, 800, 600)
    text(mouseX + ' ' + mouseY, 10, 15)
    image(Grama, 0, 350, 800, 300)
    image(CapivaraBruxo, 200, 250, 100, 150)
    text(MovimentoX + ' ' + MovimentoY, 10, 30)
    if (MovimentoX > 190 && MovimentoX < 310 && MovimentoY > 290 && MovimentoY < 350) {
      image(Balão,270,245,45,40)
      if(Falar){
        fill(255)
        rect(10, 440, 780, 150,50);
        scale(-1,1)
        image(CapivaraBruxo,-800,400,170,230)
        resetMatrix()
        image(CapivaraNormal, 10, 430, 150,210)
        if(Dialogo==0){
          fill(0)
          textFont(Fonte8Bit)
          textSize(30)
          text('Bem vinda ao mundo dos sonhos,'+'\n'+ 'preparada para novas aventuras?',200, 490)
          fill(255,255,255)
          rect(200,540,100,45,40)
          rect(350,540,100,45,40)
          rect(500,540,100,45,40)
          fill(0)
          text('Sim',232,570)
          text('Nao',378,570)
          text('~',390,565)
          text('*SAIR*',510,570)
          textSize(15)
        }
        else if(Dialogo==2){
          fill(255)
          rect(500,540,100,45,40)
          fill(0)
          textFont(Fonte8Bit)
          textSize(30) 
          text('Perfeito, a Capivara Agiota lhe espera',200, 490)
          text('*SAIR*',510,570)
          textSize(15)
        }
        else if(Dialogo==3){
          fill(255)
          rect(500,540,100,45,40)
          fill(0)
          textFont(Fonte8Bit)
          textSize(30) 
          text('Adeus',200, 490)
          text('*SAIR*',510,570)
          textSize(15)
          Timer++
          if(Timer>40){
            tela=0
            Timer=0
            Dialogo=0
          }
        }
      }
    }
    if (MovimentoX > 710){
      tela=2
      MovimentoX=10
    }
    capivara()
  }
  else if (tela == 2) {
    image(Fundo1, 0, -100, 800, 600)
    text(mouseX + ' ' + mouseY, 10, 15)
    image(Grama, 0, 350, 800, 300)
    image(CapivaraGato, 200, 300, 80, 100)
    image(Rato, 500, 550, 40, 30)
    image(Rato, 400, 570, 40, 30)
    image(Rato, 380, 400, 40, 30)
    image(Rato, 600, 380, 40, 30)
    if (MovimentoX > 190 && MovimentoX < 310 && MovimentoY > 290 && MovimentoY < 350) {
      image(Balão,270,245,45,40)
      if(Falar){
        fill(255)
        rect(10, 440, 780, 150,50);
        scale(-1,1)
        image(CapivaraGato,-800,450,120,160)
        resetMatrix()
        image(CapivaraNormal, 10, 430, 150,210)
        if(Dialogo1 == 0){
          fill(0)
          textFont(Fonte8Bit)
          textSize(30)
          text('Ola, eu sou a capivara Gato'+'\n'+ 'Poderia pegalos para mim?',200, 490)
          fill(255,255,255)
          rect(200,540,100,45,40)
          rect(350,540,100,45,40)
          rect(500,540,100,45,40)
          fill(0)
          text('Sim',232,570)
          text('Nao',378,570)
          text('~',390,565)
          text('*SAIR*',510,570)
          textSize(15)
        }
        else if(Dialogo1 == 1){
          fill(0)
          textFont(Fonte8Bit)
          textSize(30)
          text('Obrigado',200, 490)
          Timer++
          if(Timer>40){
            Timer=0
            Dialogo1=0
            Falar=false;
          }
        }
      }
      else if(Dialogo1 == 1){
        if(MovimentoX > 350 && MovimentoX < 420 && MovimentoY > 290 && MovimentoY < 350){

        }
      }
    }
    capivara();
    if(MovimentoX<5){
      tela=1
      MovimentoX=705
    }
  }
  else if (tela == 3) {
  }
}
function mouseClicked() {
  if (tela == 0) {
    if (mouseX > 300 && mouseX < 500 && mouseY > 200 && mouseY < 250) {
      tela = 1
    }
  }
  else if (tela == 1) {
  }
  else if (tela == 2) {
  }
  else if (tela == 3) {
  }
}
function keyPressed() {
  if (tela == 1 || tela == 2) {
    if (key === 'ArrowUp') {
      MovimentoC = true;
    } else if (key === 'ArrowDown') {
      MovimentoB = true;
    } else if (key === 'ArrowLeft') {
      MovimentoE = true;
    } else if (key === 'ArrowRight') {
      MovimentoD = true;
    }
    else if (key === 'e'){
      Falar=!Falar
    }
    else if (key === '1' && Dialogo == 0){
      Dialogo=2
    }
    else if (key === '2' && Dialogo == 0){
      Dialogo=3
    }
    else if (key === '3'){
      Falar=!Falar
      Dialogo=0
    }
    else if (key === '1' && Dialogo1 == 0){
      Dialogo1 = 1
    }
  }
}
function keyReleased() {
  if (tela == 1 || tela == 2) {
    if (key === 'ArrowUp') {
      MovimentoC = false;
    } else if (key === 'ArrowDown') {
      MovimentoB = false;
    } else if (key === 'ArrowLeft') {
      MovimentoE = false;
    } else if (key === 'ArrowRight') {
      MovimentoD = false;
    }
  }
}
function capivara(){
  if (MovimentoE && MovimentoB && MovimentoX > 0 && MovimentoY < 490) {
    MovimentoX -= Velocidade / 2;
    MovimentoY += Velocidade / 2;
    scale(-1, 1)
    if (Andar < 5) {
      image(CapivaraNormalD, -MovimentoX, MovimentoY, -80, 110)
      Andar++
    }
    else if (Andar >= 5 && Andar <= 10) {
      image(CapivaraNormalE, -MovimentoX, MovimentoY, -80, 110)
      Andar++
    }
    else if (Andar > 10 && Andar <= 15) {
      image(CapivaraNormalD, -MovimentoX, MovimentoY, -80, 110)
      Andar++
    }
    else if (Andar > 15 && Andar <= 20) {
      image(CapivaraNormal, -MovimentoX, MovimentoY, -80, 110)
      Andar++
    }
    else {
      image(CapivaraNormal, -MovimentoX, MovimentoY, -80, 110)
      Andar = 0
    }
    Lado = 1
  }
  else if (MovimentoE && MovimentoC && MovimentoX > 0 && MovimentoY > 290) {
    MovimentoX -= Velocidade / 2;
    MovimentoY -= Velocidade / 2;
    scale(-1, 1)
    if (Andar < 5) {
      image(CapivaraNormalD, -MovimentoX, MovimentoY, -80, 110)
      Andar++
    }
    else if (Andar >= 5 && Andar <= 10) {
      image(CapivaraNormalE, -MovimentoX, MovimentoY, -80, 110)
      Andar++
    }
    else if (Andar > 10 && Andar <= 15) {
      image(CapivaraNormalD, -MovimentoX, MovimentoY, -80, 110)
      Andar++
    }
    else if (Andar > 15 && Andar <= 20) {
      image(CapivaraNormal, -MovimentoX, MovimentoY, -80, 110)
      Andar++
    }
    else {
      image(CapivaraNormal, -MovimentoX, MovimentoY, -80, 110)
      Andar = 0
    }
    Lado = 1
  }
  else if (MovimentoD && MovimentoC && MovimentoX < 720 && MovimentoY > 290) {
    MovimentoX += Velocidade / 2;
    MovimentoY -= Velocidade / 2;
    if (Andar < 5) {
      image(CapivaraNormalD, MovimentoX, MovimentoY, 80, 110)
      Andar++
    }
    else if (Andar >= 5 && Andar <= 10) {
      image(CapivaraNormalE, MovimentoX, MovimentoY, 80, 110)
      Andar++
    }
    else if (Andar > 10 && Andar <= 15) {
      image(CapivaraNormalD, MovimentoX, MovimentoY, 80, 110)
      Andar++
    }
    else if (Andar > 15 && Andar <= 20) {
      image(CapivaraNormal, MovimentoX, MovimentoY, 80, 110)
      Andar++
    }
    else {
      image(CapivaraNormal, MovimentoX, MovimentoY, 80, 110)
      Andar = 0
    }
    Lado = 0
  }
  else if (MovimentoD && MovimentoB && MovimentoX < 720 && MovimentoY < 490) {
    MovimentoX += Velocidade / 2;
    MovimentoY += Velocidade / 2;
    if (Andar < 5) {
      image(CapivaraNormalD, MovimentoX, MovimentoY, 80, 110)
      Andar++
    }
    else if (Andar >= 5 && Andar <= 10) {
      image(CapivaraNormalE, MovimentoX, MovimentoY, 80, 110)
      Andar++
    }
    else if (Andar > 10 && Andar <= 15) {
      image(CapivaraNormalD, MovimentoX, MovimentoY, 80, 110)
      Andar++
    }
    else if (Andar > 15 && Andar <= 20) {
      image(CapivaraNormal, MovimentoX, MovimentoY, 80, 110)
      Andar++
    }
    else {
      image(CapivaraNormal, MovimentoX, MovimentoY, 80, 110)
      Andar = 0
    }
    Lado = 0

  }
  else if (MovimentoE && MovimentoX > 0) {
    MovimentoX -= Velocidade;
    scale(-1, 1)
    if (Andar < 5) {
      image(CapivaraNormalD, -MovimentoX, MovimentoY, -80, 110)
      Andar++
    }
    else if (Andar >= 5 && Andar <= 10) {
      image(CapivaraNormalE, -MovimentoX, MovimentoY, -80, 110)
      Andar++
    }
    else if (Andar > 10 && Andar <= 15) {
      image(CapivaraNormalD, -MovimentoX, MovimentoY, -80, 110)
      Andar++
    }
    else if (Andar > 15 && Andar <= 20) {
      image(CapivaraNormal, -MovimentoX, MovimentoY, -80, 110)
      Andar++
    }
    else {
      image(CapivaraNormal, -MovimentoX, MovimentoY, -80, 110)
      Andar = 0
    }
    Lado = 1

  }
  else if (MovimentoD && MovimentoX < 720) {
    MovimentoX += Velocidade;
    if (Andar < 5) {
      image(CapivaraNormalD, MovimentoX, MovimentoY, 80, 110)
      Andar++
    }
    else if (Andar >= 5 && Andar <= 10) {
      image(CapivaraNormalE, MovimentoX, MovimentoY, 80, 110)
      Andar++
    }
    else if (Andar > 10 && Andar <= 15) {
      image(CapivaraNormalD, MovimentoX, MovimentoY, 80, 110)
      Andar++
    }
    else if (Andar > 15 && Andar <= 20) {
      image(CapivaraNormal, MovimentoX, MovimentoY, 80, 110)
      Andar++
    }
    else {
      image(CapivaraNormal, MovimentoX, MovimentoY, 80, 110)
      Andar = 0
    }
    Lado = 0
  }
  else if (MovimentoC && MovimentoY > 290) {
    MovimentoY -= Velocidade;
    if (Lado == 0) {
      if (Andar < 5) {
        image(CapivaraNormalD, MovimentoX, MovimentoY, 80, 110)
        Andar++
      }
      else if (Andar >= 5 && Andar <= 10) {
        image(CapivaraNormalE, MovimentoX, MovimentoY, 80, 110)
        Andar++
      }
      else if (Andar > 10 && Andar <= 15) {
        image(CapivaraNormalD, MovimentoX, MovimentoY, 80, 110)
        Andar++
      }
      else if (Andar > 15 && Andar <= 20) {
        image(CapivaraNormal, MovimentoX, MovimentoY, 80, 110)
        Andar++
      }
      else {
        image(CapivaraNormal, MovimentoX, MovimentoY, 80, 110)
        Andar = 0
      }
      image(CapivaraNormal, MovimentoX, MovimentoY, 80, 110)
    }
    else {
      scale(-1, 1)
      if (Andar < 5) {
        image(CapivaraNormalD, -MovimentoX, MovimentoY, -80, 110)
        Andar++
      }
      else if (Andar >= 5 && Andar <= 10) {
        image(CapivaraNormalE, -MovimentoX, MovimentoY, -80, 110)
        Andar++
      }
      else if (Andar > 10 && Andar <= 15) {
        image(CapivaraNormalD, -MovimentoX, MovimentoY, -80, 110)
        Andar++
      }
      else if (Andar > 15 && Andar <= 20) {
        image(CapivaraNormal, -MovimentoX, MovimentoY, -80, 110)
        Andar++
      }
      else {
        image(CapivaraNormal, -MovimentoX, MovimentoY, -80, 110)
        Andar = 0
      }
      image(CapivaraNormal, -MovimentoX, MovimentoY, -80, 110)
    }
  }
  else if (MovimentoB && MovimentoY < 490) {
    MovimentoY += Velocidade;
    if (Lado == 0) {
      if (Andar < 5) {
        image(CapivaraNormalD, MovimentoX, MovimentoY, 80, 110)
        Andar++
      }
      else if (Andar >= 5 && Andar <= 10) {
        image(CapivaraNormalE, MovimentoX, MovimentoY, 80, 110)
        Andar++
      }
      else if (Andar > 10 && Andar <= 15) {
        image(CapivaraNormalD, MovimentoX, MovimentoY, 80, 110)
        Andar++
      }
      else if (Andar > 15 && Andar <= 20) {
        image(CapivaraNormal, MovimentoX, MovimentoY, 80, 110)
        Andar++
      }
      else {
        image(CapivaraNormal, MovimentoX, MovimentoY, 80, 110)
        Andar = 0
      }
      image(CapivaraNormal, MovimentoX, MovimentoY, 80, 110)
    }
    else {
      scale(-1, 1)
      if (Andar < 5) {
        image(CapivaraNormalD, -MovimentoX, MovimentoY, -80, 110)
        Andar++
      }
      else if (Andar >= 5 && Andar <= 10) {
        image(CapivaraNormalE, -MovimentoX, MovimentoY, -80, 110)
        Andar++
      }
      else if (Andar > 10 && Andar <= 15) {
        image(CapivaraNormalD, -MovimentoX, MovimentoY, -80, 110)
        Andar++
      }
      else if (Andar > 15 && Andar <= 20) {
        image(CapivaraNormal, -MovimentoX, MovimentoY, -80, 110)
        Andar++
      }
      else {
        image(CapivaraNormal, -MovimentoX, MovimentoY, -80, 110)
        Andar = 0
      }
      image(CapivaraNormal, -MovimentoX, MovimentoY, -80, 110)
    }
  }
  else {
    if (Lado == 0) {
      image(CapivaraNormal, MovimentoX, MovimentoY, 80, 110)
    }
    else {
      scale(-1, 1)
      image(CapivaraNormal, -MovimentoX, MovimentoY, -80, 110)
    }
  }
}