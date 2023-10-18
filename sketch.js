var Menu1, MenuJogar, MenuOpções, MenuExtras, tela, Extras, Opções;
var Enemy, EnemyX, EnemyY, EnemyXP, EnemyXN, EnemyYP, EnemyYN, EnemyTam, Pontos; // Definição das variaveis
EnemyX = Math.floor(Math.random()*5000)
EnemyY = Math.floor(Math.random()*5000) // Posição aleatoria do inimigo
EnemyXP = EnemyX+25;
EnemyYP = EnemyY+25;
EnemyXN = EnemyX-25;
EnemyYN = EnemyY-25; // Calculo da area do inimigo
EnemyTam = 50; // tamanho do inimigo
Pontos = 0; // Pontuação do jogador
tela = 0; // Tela inicial
function preload() { //Carregamento das imagens utilizadas
  Menu1= loadImage('Imagens/Menu1.png');
  MenuJogar= loadImage('Imagens/MenuJogar.png');
  MenuOpções= loadImage('Imagens/MenuOpções.png');
  MenuExtras= loadImage('Imagens/MenuExtras.png');
  Extras= loadImage('Imagens/Extras.png');
  Opções= loadImage('Imagens/Aguarde.png');
}
function setup() { //Criação da tela
  createCanvas(windowWidth, windowHeight);
}
function draw(){ //Imagens que serão geradas em cada tela
  if (tela==0) { //Imagens que vão ser trocadas a medida que o usuario passe o mouse por elas
    image(Menu1, 0, 0,windowWidth, windowHeight);
    if (mouseX > 550 && mouseX < 790 && mouseY > 280 && mouseY < 390) {
      image(MenuJogar,  0, 0,windowWidth, windowHeight);
    }
    if (mouseX > 550 && mouseX < 790 && mouseY > 400 && mouseY < 500) {
      image(MenuOpções,  0, 0,windowWidth, windowHeight);
    }
    if (mouseX > 550 && mouseX < 790 && mouseY > 510 && mouseY < 650) {
      image(MenuExtras,  0, 0,windowWidth, windowHeight);
    }
  }
  if (tela==1){ //Tela do jogo com a criação dos inimigos, limitação de onde os inimigos aparecem, pontuação e o desenho do botão de menu para voltar
    background(0,0,0);
    if(EnemyY<=50 || EnemyY >= windowHeight || EnemyX>=windowWidth){
      EnemyX = Math.floor(Math.random()*5000);
      EnemyY = Math.floor(Math.random()*5000);
      EnemyXP = EnemyX+25;
      EnemyYP = EnemyY+25;
      EnemyXN = EnemyX-25;
      EnemyYN = EnemyY-25;
    }
    rect(windowWidth-80,5,80,30,20);
    textSize(20);
    fill(0,0,0)
    text('Menu',windowWidth-65,27);
    fill(255,255,255)
    circle(EnemyX,EnemyY,EnemyTam);
    textSize(16);
    text('Pontuação: ' + Pontos, 10, 20);
  }
  if (tela==2){ // Tela de opções que ainda esta em criação para futuramente colocar opções de volume, mudança de controle, brilho, e outras coisas
    background(0,0,0);
    fill(255,255,255)
    rect(windowWidth-80,5,80,30,20);
    textSize(20);
    fill(0,0,0)
    text('Menu',windowWidth-65,27);
    fill(255,255,255)
    textSize(16);
    text('Mouse X: ' + mouseX, 10, 20);
    text('Mouse Y: ' + mouseY, 10, 40);
    image(Opções, windowWidth/4, windowHeight/4, 514, 318)
  }
  if (tela==3){ // Tela de apresentação do criador do jogo e do professor
      background(0,0,0);
      fill(255,255,255)
      rect(windowWidth-80,5,80,30,20);
      textSize(20);
      fill(0,0,0)
      text('Menu',windowWidth-65,27);
      fill(255,255,255)
      textSize(16);
      text('Mouse X: ' + mouseX, 10, 20);
      text('Mouse Y: ' + mouseY, 10, 40);
      image(Extras, windowWidth/4, windowHeight/4, 586, 295)
  }
}
function mouseClicked() {
  if(tela==0){ //Função dos botões para entrar em outras telas a partir do menu
    if(mouseX > 550 && mouseX < 790 && mouseY > 280 && mouseY < 390) {
      tela=1;
    }
    if(mouseX > 550 && mouseX < 790 && mouseY > 400 && mouseY < 500) {
      tela=2;
    } 
    if(mouseX > 550 && mouseX < 790 && mouseY > 510 && mouseY < 650) {
      tela=3;
    }
  }
  if(tela==1){ //Função do botão de menu e para quando clicar em algum inimigo, ele mudar de posição e aumentar sua pontuação
    if(mouseX > windowWidth-80 && mouseY < 35){
      tela=0;
    }
    if(mouseX > EnemyXN && mouseX < EnemyXP && mouseY > EnemyYN && mouseY < EnemyYP){
      EnemyX = Math.floor(Math.random()*5000)
      EnemyY = Math.floor(Math.random()*5000)
      EnemyXP = EnemyX+25;
      EnemyYP = EnemyY+25;
      EnemyXN = EnemyX-25;
      EnemyYN = EnemyY-25;
      Pontos++
    }
  }
  if(tela==2){ //Função do botão de menu
    if(mouseX > windowWidth-80 && mouseY < 35){
      tela=0;
    }
  }
  if(tela==3){ //Função do botão de menu
    if(mouseX > windowWidth-80 && mouseY < 35){
      tela=0;
    }
  }
}
//Link do video explicativo https://youtu.be/t4kxUieYoVc
