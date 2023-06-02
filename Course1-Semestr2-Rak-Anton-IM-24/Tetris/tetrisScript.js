let gameAreaCanvas = {
  canvas: document.createElement("canvas"),
  createAreaCanvas: function(){
    this.canvas.width=400;
    this.canvas.height=600;
    this.context=this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
  }
}

const allGameBlock = [
  block0={
    j:3, k:0,
    m:4, n:0,
    o:3, e:1,
    g:4, h:1
  },
  block1={
    j:3, k:0,
    m:4, n:0,
    o:3, e:1
  },
  block2={
    j:3, k:0,
    m:4, n:0,
    g:4, h:1
  },
  block3={
    m:4, n:0,
    o:3, e:1,
    g:4, h:1
  },
  block4={
    j:3, k:0,
    o:3, e:1,
    g:4, h:1
  },
  block5={
    j:3, k:0,
    m:4, n:0,
  },
  block6={
    o:3, e:1,
    g:4, h:1
  },
  block7={
    j:3, k:0,
    o:3, e:1,
  },
  block8={
    m:4, n:0,
    g:4, h:1
  },
  block9={
    j:3, k:0,
  },
  block10={
    m:4, n:0
  },
  block11={
    g:4, h:1
  },
  block12={
    o:3, e:1,
  }
]
let activeBlock;
let z; 
let gameArea = [];
let gameInterval;
let start = 0;

function gameStart(){
  if(start==0){
    start = 1;
    createGameArea();
    paintArea();
    newBlock();
    gameInterval = setInterval(moveDown, 700);
  }
}

function createGameArea(){
  for(i=0;i<8;i++){
    gameArea[i]=[];
    for(p=0;p<12;p++){
      gameArea[i][p]=0;
    }
  }
}

function checkStartPosition(){
  checkLine();
  if(gameArea[3][0]==0 && gameArea[4][0]==0 && gameArea[3][1]==0 && gameArea[4][0]==0){
    newBlock();}
  else {start=0; clearInterval(gameInterval);}
}

function newBlock(){
  z = Math.round(Math.random()*12);
  activeBlock = Object.assign({}, allGameBlock[z]);
  if(z==0){gameArea[activeBlock.j][activeBlock.k]=1;gameArea[activeBlock.m][activeBlock.n]=1;gameArea[activeBlock.o][activeBlock.e]=1;gameArea[activeBlock.g][activeBlock.h]=1;paintArea();return activeBlock;}
  if(z==1){gameArea[activeBlock.j][activeBlock.k]=1;gameArea[activeBlock.m][activeBlock.n]=1;gameArea[activeBlock.o][activeBlock.e]=1;paintArea();return activeBlock;}
  if(z==2){gameArea[activeBlock.j][activeBlock.k]=1;gameArea[activeBlock.m][activeBlock.n]=1;gameArea[activeBlock.g][activeBlock.h]=1;paintArea();return activeBlock;}
  if(z==3){gameArea[activeBlock.m][activeBlock.n]=1;gameArea[activeBlock.o][activeBlock.e]=1;gameArea[activeBlock.g][activeBlock.h]=1;paintArea();return activeBlock;}
  if(z==4){gameArea[activeBlock.j][activeBlock.k]=1;gameArea[activeBlock.o][activeBlock.e]=1;gameArea[activeBlock.g][activeBlock.h]=1;paintArea();return activeBlock;}
  if(z==5){gameArea[activeBlock.j][activeBlock.k]=1;gameArea[activeBlock.m][activeBlock.n]=1;paintArea();return activeBlock;}
  if(z==6){gameArea[activeBlock.o][activeBlock.e]=1;gameArea[activeBlock.g][activeBlock.h]=1;paintArea();return activeBlock;}
  if(z==7){gameArea[activeBlock.j][activeBlock.k]=1;gameArea[activeBlock.o][activeBlock.e]=1;paintArea();return activeBlock;}
  if(z==8){gameArea[activeBlock.m][activeBlock.n]=1;gameArea[activeBlock.g][activeBlock.h]=1;paintArea();return activeBlock;}
  if(z==9){gameArea[activeBlock.j][activeBlock.k]=1;paintArea();return activeBlock;}
  if(z==10){gameArea[activeBlock.m][activeBlock.n]=1;paintArea();return activeBlock;}
  if(z==11){gameArea[activeBlock.g][activeBlock.h]=1;paintArea();return activeBlock;}
  if(z==12){gameArea[activeBlock.o][activeBlock.e]=1;paintArea();return activeBlock;}
}

function moveDown(){
  if(z==0){
    if(gameArea[activeBlock.o][activeBlock.e+1]!=1 && gameArea[activeBlock.g][activeBlock.h+1]!=1 && activeBlock.e<11 &&  activeBlock.h<11){
      gameArea[activeBlock.j][activeBlock.k]=0;gameArea[activeBlock.m][activeBlock.n]=0;gameArea[activeBlock.o][activeBlock.e]=0;gameArea[activeBlock.g][activeBlock.h]=0;
      activeBlock.k +=1; activeBlock.n +=1; activeBlock.e +=1; activeBlock.h +=1;
      gameArea[activeBlock.j][activeBlock.k]=1;gameArea[activeBlock.m][activeBlock.n]=1;gameArea[activeBlock.o][activeBlock.e]=1;gameArea[activeBlock.g][activeBlock.h]=1;paintArea();}
    else checkStartPosition();
  }
  if(z==1){
    if(gameArea[activeBlock.o][activeBlock.e+1]!=1 && gameArea[activeBlock.m][activeBlock.n+1]!=1 && activeBlock.e<11 &&  activeBlock.n<10){
      gameArea[activeBlock.j][activeBlock.k]=0;gameArea[activeBlock.m][activeBlock.n]=0;gameArea[activeBlock.o][activeBlock.e]=0;
      activeBlock.k +=1; activeBlock.n +=1; activeBlock.e +=1;
      gameArea[activeBlock.j][activeBlock.k]=1;gameArea[activeBlock.m][activeBlock.n]=1;gameArea[activeBlock.o][activeBlock.e]=1;paintArea();}
    else checkStartPosition();
  }
  if(z==2){
    if(gameArea[activeBlock.j][activeBlock.k+1]!=1 && gameArea[activeBlock.g][activeBlock.h+1]!=1 && activeBlock.k<10 &&  activeBlock.h<11){
      gameArea[activeBlock.j][activeBlock.k]=0;gameArea[activeBlock.m][activeBlock.n]=0;gameArea[activeBlock.g][activeBlock.h]=0;
      activeBlock.k +=1; activeBlock.n +=1; activeBlock.h +=1;
      gameArea[activeBlock.j][activeBlock.k]=1;gameArea[activeBlock.m][activeBlock.n]=1;gameArea[activeBlock.g][activeBlock.h]=1;paintArea();}
    else checkStartPosition();
  }
  if(z==3){
    if(gameArea[activeBlock.o][activeBlock.e+1]!=1 && gameArea[activeBlock.g][activeBlock.h+1]!=1 && activeBlock.e<11 &&  activeBlock.h<11){
      gameArea[activeBlock.m][activeBlock.n]=0;gameArea[activeBlock.o][activeBlock.e]=0;gameArea[activeBlock.g][activeBlock.h]=0;
      activeBlock.n +=1; activeBlock.e +=1; activeBlock.h +=1;
      gameArea[activeBlock.m][activeBlock.n]=1;gameArea[activeBlock.o][activeBlock.e]=1;gameArea[activeBlock.g][activeBlock.h]=1;paintArea();}
    else checkStartPosition();
  }
  if(z==4){
    if(gameArea[activeBlock.o][activeBlock.e+1]!=1 && gameArea[activeBlock.g][activeBlock.h+1]!=1 && activeBlock.e<11 &&  activeBlock.h<11){
      gameArea[activeBlock.j][activeBlock.k]=0;gameArea[activeBlock.o][activeBlock.e]=0;gameArea[activeBlock.g][activeBlock.h]=0;
      activeBlock.k +=1; activeBlock.e +=1; activeBlock.h +=1;
      gameArea[activeBlock.j][activeBlock.k]=1;gameArea[activeBlock.o][activeBlock.e]=1;gameArea[activeBlock.g][activeBlock.h]=1;paintArea();}
    else checkStartPosition();
  }
  if(z==5){
    if(gameArea[activeBlock.j][activeBlock.k+1]!=1 && gameArea[activeBlock.m][activeBlock.n+1]!=1 && activeBlock.k<11 &&  activeBlock.n<11){
      gameArea[activeBlock.j][activeBlock.k]=0;gameArea[activeBlock.m][activeBlock.n]=0;
      activeBlock.k +=1; activeBlock.n +=1;
      gameArea[activeBlock.j][activeBlock.k]=1;gameArea[activeBlock.m][activeBlock.n]=1;paintArea();}
    else checkStartPosition();
  }
  if(z==6){
    if(gameArea[activeBlock.o][activeBlock.e+1]!=1 && gameArea[activeBlock.g][activeBlock.h+1]!=1 && activeBlock.e<11 &&  activeBlock.h<11){
      gameArea[activeBlock.o][activeBlock.e]=0;gameArea[activeBlock.g][activeBlock.h]=0;;
      activeBlock.e +=1; activeBlock.h +=1;
      gameArea[activeBlock.o][activeBlock.e]=1;gameArea[activeBlock.g][activeBlock.h]=1;paintArea();}
    else checkStartPosition();
  }
  if(z==7){
    if(gameArea[activeBlock.o][activeBlock.e+1]!=1 && activeBlock.e<11 ){
      gameArea[activeBlock.j][activeBlock.k]=0;gameArea[activeBlock.o][activeBlock.e]=0;
      activeBlock.k +=1; activeBlock.e +=1;
      gameArea[activeBlock.j][activeBlock.k]=1;gameArea[activeBlock.o][activeBlock.e]=1;paintArea();}
    else checkStartPosition();
  }
  if(z==8){
    if(gameArea[activeBlock.g][activeBlock.h+1]!=1 && activeBlock.h<11 ){
      gameArea[activeBlock.m][activeBlock.n]=0;gameArea[activeBlock.g][activeBlock.h]=0;
      activeBlock.n +=1; activeBlock.h +=1;
      gameArea[activeBlock.m][activeBlock.n]=1;gameArea[activeBlock.g][activeBlock.h]=1;paintArea();}
    else checkStartPosition();
  }
  if(z==9){
    if(gameArea[activeBlock.j][activeBlock.k+1]!=1 && activeBlock.k<11 ){
      gameArea[activeBlock.j][activeBlock.k]=0;
      activeBlock.k +=1;
      gameArea[activeBlock.j][activeBlock.k]=1;paintArea();}
    else checkStartPosition();
  }
  if(z==10){
    if(gameArea[activeBlock.m][activeBlock.n+1]!=1 && activeBlock.n<11 ){
      gameArea[activeBlock.m][activeBlock.n]=0;
      activeBlock.n +=1;
      gameArea[activeBlock.m][activeBlock.n]=1;paintArea();}
    else checkStartPosition();
  }
  if(z==11){
    if(gameArea[activeBlock.g][activeBlock.h+1]!=1 && activeBlock.h<11 ){
      gameArea[activeBlock.g][activeBlock.h]=0;
      activeBlock.h +=1;
      gameArea[activeBlock.g][activeBlock.h]=1;paintArea();}
    else checkStartPosition();
  }
  if(z==12){
    if(gameArea[activeBlock.o][activeBlock.e+1]!=1 && activeBlock.e<11 ){
      gameArea[activeBlock.o][activeBlock.e]=0;
      activeBlock.e +=1;
      gameArea[activeBlock.o][activeBlock.e]=1;paintArea();}
    else checkStartPosition();
  }
}

function moveLeft(){
if(start==1){
  if(z==0){
    if(gameArea[activeBlock.o-1][activeBlock.e]!=1 && activeBlock.o>0){
      gameArea[activeBlock.j][activeBlock.k]=0;gameArea[activeBlock.m][activeBlock.n]=0;gameArea[activeBlock.o][activeBlock.e]=0;gameArea[activeBlock.g][activeBlock.h]=0;
      activeBlock.j -=1; activeBlock.m -=1; activeBlock.o -=1; activeBlock.g -=1;
      gameArea[activeBlock.j][activeBlock.k]=1;gameArea[activeBlock.m][activeBlock.n]=1;gameArea[activeBlock.o][activeBlock.e]=1;gameArea[activeBlock.g][activeBlock.h]=1;paintArea();}
  }
  if(z==1){
    if(gameArea[activeBlock.o-1][activeBlock.e]!=1 && activeBlock.o>0){
      gameArea[activeBlock.j][activeBlock.k]=0;gameArea[activeBlock.m][activeBlock.n]=0;gameArea[activeBlock.o][activeBlock.e]=0;
      activeBlock.j -=1; activeBlock.m -=1; activeBlock.o -=1;
      gameArea[activeBlock.j][activeBlock.k]=1;gameArea[activeBlock.m][activeBlock.n]=1;gameArea[activeBlock.o][activeBlock.e]=1;paintArea();}
  }
  if(z==2){
    if(gameArea[activeBlock.j-1][activeBlock.k]!=1 && activeBlock.j>0 && gameArea[activeBlock.g-1][activeBlock.h]!=1 && activeBlock.g>1){
      gameArea[activeBlock.j][activeBlock.k]=0;gameArea[activeBlock.m][activeBlock.n]=0;gameArea[activeBlock.g][activeBlock.h]=0;
      activeBlock.j -=1; activeBlock.m -=1; activeBlock.g -=1;
      gameArea[activeBlock.j][activeBlock.k]=1;gameArea[activeBlock.m][activeBlock.n]=1;gameArea[activeBlock.g][activeBlock.h]=1;paintArea();}
  }
  if(z==3){
    if(gameArea[activeBlock.o-1][activeBlock.e]!=1 && activeBlock.o>0){
      gameArea[activeBlock.m][activeBlock.n]=0;gameArea[activeBlock.o][activeBlock.e]=0;gameArea[activeBlock.g][activeBlock.h]=0;
      activeBlock.m -=1; activeBlock.o -=1; activeBlock.g -=1;
      gameArea[activeBlock.m][activeBlock.n]=1;gameArea[activeBlock.o][activeBlock.e]=1;gameArea[activeBlock.g][activeBlock.h]=1;paintArea();}
  }
  if(z==4){
    if(gameArea[activeBlock.o-1][activeBlock.e]!=1 && activeBlock.o>0){
      gameArea[activeBlock.j][activeBlock.k]=0;gameArea[activeBlock.o][activeBlock.e]=0;gameArea[activeBlock.g][activeBlock.h]=0;
      activeBlock.j -=1; activeBlock.o -=1; activeBlock.g -=1;
      gameArea[activeBlock.j][activeBlock.k]=1;gameArea[activeBlock.o][activeBlock.e]=1;gameArea[activeBlock.g][activeBlock.h]=1;paintArea();}
  }
  if(z==5){
    if(gameArea[activeBlock.j-1][activeBlock.k]!=1 && activeBlock.j>0){
      gameArea[activeBlock.j][activeBlock.k]=0;gameArea[activeBlock.m][activeBlock.n]=0;
      activeBlock.j -=1; activeBlock.m -=1;
      gameArea[activeBlock.j][activeBlock.k]=1;gameArea[activeBlock.m][activeBlock.n]=1;paintArea();}
  }
  if(z==6){
    if(gameArea[activeBlock.o-1][activeBlock.e]!=1 && activeBlock.o>0){
      gameArea[activeBlock.o][activeBlock.e]=0;gameArea[activeBlock.g][activeBlock.h]=0;;
      activeBlock.o -=1; activeBlock.g -=1;
      gameArea[activeBlock.o][activeBlock.e]=1;gameArea[activeBlock.g][activeBlock.h]=1;paintArea();}
  }
  if(z==7){
    if(gameArea[activeBlock.o-1][activeBlock.e]!=1 && activeBlock.o>0){
      gameArea[activeBlock.j][activeBlock.k]=0;gameArea[activeBlock.o][activeBlock.e]=0;
      activeBlock.j -=1; activeBlock.o -=1;
      gameArea[activeBlock.j][activeBlock.k]=1;gameArea[activeBlock.o][activeBlock.e]=1;paintArea();}
  }
  if(z==8){
    if(gameArea[activeBlock.g-1][activeBlock.h]!=1 && activeBlock.g>0){
      gameArea[activeBlock.m][activeBlock.n]=0;gameArea[activeBlock.g][activeBlock.h]=0;
      activeBlock.m -=1; activeBlock.g -=1;
      gameArea[activeBlock.m][activeBlock.n]=1;gameArea[activeBlock.g][activeBlock.h]=1;paintArea();}
  }
  if(z==9){
    if(gameArea[activeBlock.j-1][activeBlock.k]!=1 && activeBlock.j>0){
      gameArea[activeBlock.j][activeBlock.k]=0;
      activeBlock.j -=1;
      gameArea[activeBlock.j][activeBlock.k]=1;paintArea();}
  }
  if(z==10){
    if(gameArea[activeBlock.m-1][activeBlock.n]!=1 && activeBlock.m>0){
      gameArea[activeBlock.m][activeBlock.n]=0;
      activeBlock.m -=1;
      gameArea[activeBlock.m][activeBlock.n]=1;paintArea();}
  }
  if(z==11){
    if(gameArea[activeBlock.g-1][activeBlock.h]!=1 && activeBlock.g>0){
      gameArea[activeBlock.g][activeBlock.h]=0;
      activeBlock.g -=1;
      gameArea[activeBlock.g][activeBlock.h]=1;paintArea();}
  }
  if(z==12){
    if(gameArea[activeBlock.o-1][activeBlock.e]!=1 && activeBlock.o>0){
      gameArea[activeBlock.o][activeBlock.e]=0;
      activeBlock.o -=1;
      gameArea[activeBlock.o][activeBlock.e]=1;paintArea();}
  }
}
}

function moveRight(){
  if(start==1){
  if(z==0){
    if(gameArea[activeBlock.g+1][activeBlock.h]!=1 && activeBlock.g<7){
      gameArea[activeBlock.j][activeBlock.k]=0;gameArea[activeBlock.m][activeBlock.n]=0;gameArea[activeBlock.o][activeBlock.e]=0;gameArea[activeBlock.g][activeBlock.h]=0;
      activeBlock.j +=1; activeBlock.m +=1; activeBlock.o +=1; activeBlock.g +=1;
      gameArea[activeBlock.j][activeBlock.k]=1;gameArea[activeBlock.m][activeBlock.n]=1;gameArea[activeBlock.o][activeBlock.e]=1;gameArea[activeBlock.g][activeBlock.h]=1;paintArea();}
  }
  if(z==1){
    if(gameArea[activeBlock.o+1][activeBlock.e]!=1 && gameArea[activeBlock.m+1][activeBlock.n]!=1 && activeBlock.o<6 && activeBlock.m<7){
      gameArea[activeBlock.j][activeBlock.k]=0;gameArea[activeBlock.m][activeBlock.n]=0;gameArea[activeBlock.o][activeBlock.e]=0;
      activeBlock.j +=1; activeBlock.m +=1; activeBlock.o +=1;
      gameArea[activeBlock.j][activeBlock.k]=1;gameArea[activeBlock.m][activeBlock.n]=1;gameArea[activeBlock.o][activeBlock.e]=1;paintArea();}
  }
  if(z==2){
    if(gameArea[activeBlock.g+1][activeBlock.h]!=1 && activeBlock.g<7){
      gameArea[activeBlock.j][activeBlock.k]=0;gameArea[activeBlock.m][activeBlock.n]=0;gameArea[activeBlock.g][activeBlock.h]=0;
      activeBlock.j +=1; activeBlock.m +=1; activeBlock.g +=1;
      gameArea[activeBlock.j][activeBlock.k]=1;gameArea[activeBlock.m][activeBlock.n]=1;gameArea[activeBlock.g][activeBlock.h]=1;paintArea();}
  }
  if(z==3){
    if(gameArea[activeBlock.g+1][activeBlock.h]!=1 && activeBlock.g<7){
      gameArea[activeBlock.m][activeBlock.n]=0;gameArea[activeBlock.o][activeBlock.e]=0;gameArea[activeBlock.g][activeBlock.h]=0;
      activeBlock.m +=1; activeBlock.o +=1; activeBlock.g +=1;
      gameArea[activeBlock.m][activeBlock.n]=1;gameArea[activeBlock.o][activeBlock.e]=1;gameArea[activeBlock.g][activeBlock.h]=1;paintArea();}
  }
  if(z==4){
    if(gameArea[activeBlock.g+1][activeBlock.h]!=1 && activeBlock.g<7){
      gameArea[activeBlock.j][activeBlock.k]=0;gameArea[activeBlock.o][activeBlock.e]=0;gameArea[activeBlock.g][activeBlock.h]=0;
      activeBlock.j +=1; activeBlock.o +=1; activeBlock.g +=1;
      gameArea[activeBlock.j][activeBlock.k]=1;gameArea[activeBlock.o][activeBlock.e]=1;gameArea[activeBlock.g][activeBlock.h]=1;paintArea();}
  }
  if(z==5){
    if(gameArea[activeBlock.m+1][activeBlock.n]!=1 && activeBlock.m<7){
      gameArea[activeBlock.j][activeBlock.k]=0;gameArea[activeBlock.m][activeBlock.n]=0;
      activeBlock.j +=1; activeBlock.m +=1;
      gameArea[activeBlock.j][activeBlock.k]=1;gameArea[activeBlock.m][activeBlock.n]=1;paintArea();}
  }
  if(z==6){
    if(gameArea[activeBlock.g+1][activeBlock.h]!=1 && activeBlock.g<7){
      gameArea[activeBlock.o][activeBlock.e]=0;gameArea[activeBlock.g][activeBlock.h]=0;;
      activeBlock.o +=1; activeBlock.g +=1;
      gameArea[activeBlock.o][activeBlock.e]=1;gameArea[activeBlock.g][activeBlock.h]=1;paintArea();}
  }
  if(z==7){
    if(gameArea[activeBlock.o+1][activeBlock.e]!=1 && activeBlock.o<7){
      gameArea[activeBlock.j][activeBlock.k]=0;gameArea[activeBlock.o][activeBlock.e]=0;
      activeBlock.j +=1; activeBlock.o +=1;
      gameArea[activeBlock.j][activeBlock.k]=1;gameArea[activeBlock.o][activeBlock.e]=1;paintArea();}
  }
  if(z==8){
    if(gameArea[activeBlock.g+1][activeBlock.h]!=1 && activeBlock.g<7){
      gameArea[activeBlock.m][activeBlock.n]=0;gameArea[activeBlock.g][activeBlock.h]=0;
      activeBlock.m +=1; activeBlock.g +=1;
      gameArea[activeBlock.m][activeBlock.n]=1;gameArea[activeBlock.g][activeBlock.h]=1;paintArea();}
  }
  if(z==9){
    if(gameArea[activeBlock.j+1][activeBlock.k]!=1 && activeBlock.j<7){
      gameArea[activeBlock.j][activeBlock.k]=0;
      activeBlock.j +=1;
      gameArea[activeBlock.j][activeBlock.k]=1;paintArea();}
  }
  if(z==10){
    if(gameArea[activeBlock.m+1][activeBlock.n]!=1 && activeBlock.m<7){
      gameArea[activeBlock.m][activeBlock.n]=0;
      activeBlock.m +=1;
      gameArea[activeBlock.m][activeBlock.n]=1;paintArea();}
  }
  if(z==11){
    if(gameArea[activeBlock.g+1][activeBlock.h]!=1 && activeBlock.g<7){
      gameArea[activeBlock.g][activeBlock.h]=0;
      activeBlock.g +=1;
      gameArea[activeBlock.g][activeBlock.h]=1;paintArea();}
  }
  if(z==12){
    if(gameArea[activeBlock.o+1][activeBlock.e]!=1 && activeBlock.o<7){
      gameArea[activeBlock.o][activeBlock.e]=0;
      activeBlock.o +=1;
      gameArea[activeBlock.o][activeBlock.e]=1;paintArea();}
  }
}
}

function checkLine(){
  for(p=11;p>=0;p--){
    if(gameArea[0][p]==1 && gameArea[1][p]==1 && gameArea[2][p]==1 && gameArea[3][p]==1 && gameArea[4][p]==1 && gameArea[5][p]==1 && gameArea[6][p]==1 && gameArea[7][p]==1){
      gameArea[0][p]=0; gameArea[1][p]=0; gameArea[2][p]=0; gameArea[3][p]=0; gameArea[4][p]=0; gameArea[5][p]=0; gameArea[6][p]=0; gameArea[7][p]=0;
      for(v=p-1;v>=0;v--){
        for(i=0;i<8;i++){
          if(gameArea[i][v]==1){
            gameArea[i][v]=0;
            gameArea[i][v+1]=1;
          }
        }
      }
      if(p!=11){p++;}
      paintArea()
    }
  }
}

function paintArea(){
  console.log(gameArea);
  contextGameBlock=gameAreaCanvas.context;
  contextGameBlock.fillStyle="white";
  contextGameBlock.fillRect(0,0,400,600);
  contextGameBlock.fillStyle="green";
  for(i=0;i<8;i++){
    for(p=0;p<12;p++){
      if(gameArea[i][p]==1){
        let oX=i*50;
        let oY=p*50;
        contextGameBlock.fillRect(oX,oY,50,50);
      }
    }
  }
}