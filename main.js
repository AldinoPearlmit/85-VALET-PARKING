myCanvas=document.getElementById("myCanvas");
ctx=myCanvas.getContext("2d");

greencar_width=75;
greencar_height=100;

greencar_x=5;
greencar_y=225;

background_image="parkingLot.jpg";
greencar_image="car2.jpg";



background_image = "parkingLot.jpg";
greencar_image = "car2.png";


function add() {
	background_imageTag=new Image();
    background_imageTag.onload=uploadBackground;
    background_imageTag.src=background_image;

    greencar_imageTag=new Image();
    greencar_imageTag.onload=uploadBackground;
    greencar_imageTag.src=greencar_image;
}

function uploadBackground() {
	ctx.drawImage(background_imageTag,0,0,myCanvas.width,myCanvas.height);
}

function uploadgreencar() {
	ctx.drawImage(greencar_imageTag,greencar_x,greencar_y,greencar_height,greencar_width);	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);

		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_y>0)
        {
            greencar_y=greencar_y-10;
            uploadBackground();
            greencar_image();
            console.log("it is moving up");
        }
}

function down()
{
	if(greencar_y<300)
    {
        greencar_y=greencar_y+10;
        uploadBackground();
        greencar_image();
        console.log("it is moving down");
    }
}

function left()
{
	if(greencar_x>0)
    {
        greencar_x=greencar_x-10;
        uploadBackground();
        greencar_image();
        console.log("it is moving left");
    }
}

function right()
{
	if(greencar_x<500)
    {
        greencar_x=greencar_x+10;
        uploadBackground();
        greencar_image();
        console.log("it is moving right");
    }
}
