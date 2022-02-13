var character, enemy,enemyGroup;
var shockwave, fireball, laser, bluefire,spacebackground;
var gameState="start";
function preload(){
    shockwave= loadImage("shockwave.png");
    laser= loadImage("th-3.png");
    fireball= loadImage("th.png");
    bluefire= loadImage("th-2.png");
    spacebackground= loadImage("spacebg.jpeg");
    boom= loadImage("boom.jpeg");
   
}

function setup(){
createCanvas(2000,1000)
    character = createSprite(70,470,100,100);
    enemyGroup= new Group();
    bullet= createSprite(character.x,character.y,10,10);
    bullet.addImage("fireball",fireball);
    bullet.setCollider("circle",0,0,100);
    bullet.debug=true;
    
}

function draw(){
   background(spacebackground);
   drawSprites();
   if(gameState==="start"){

   
   if(keyIsDown(UP_ARROW)){
    character.y-= 10;
   }
   if(keyIsDown(DOWN_ARROW)){
      character.y+= 10;
     }
     if(mouseDown('leftButton')){
      shoot();
     }
     enemi();
     if(enemyGroup.isTouching(bullet)){
      bulletContact();
     }
     if(bullet.x>2000){
      bullet.x=character.x;
      bullet.y=character.y;
      bullet.velocityX=0;
     }
     if(enemyGroup.x<0||enemyGroup.isTouching(character)){
      gameState="end";
     
      bullet.velocityX=0;
   
     }
     }
     if(gameState==="end"){
     background(boom);
      enemyGroup.setVelocityXEach(0);
     }
}   

function shoot(){
  
   bullet.velocityX= +10;
}
function sheild(){

}
function enemi(){
   if(frameCount%100===0){
         enemy=createSprite(2000,random(0,950),40,40);
         enemy.velocityX= -3;
         enemyGroup.add(enemy);
         
   }
}
function bulletContact(){
enemy.destroy();
}