//Create variables here
var dog,dogImage,happyDog,happyDogImage, dataBase, foodS, foodStock,readStock;
 

function preload()
{
  //load images here
  dogImage=loadImage("images/dogImg.png")
  happyDogImage=loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  dog=createSprite(250,250,20,20)
  dog.addImage(dogImage)
  foodStock=database.ref('Food');
  foodStock.on("value",readStock)

}


function draw() {  

  drawSprites();
  //add styles here

}



