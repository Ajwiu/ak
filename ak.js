let canvas = document.getElementById("canvas");

let context = canvas.getContext("2d");
//let square = canvas.getSquare("3d");

var window_height = window.innerHeight; 
var window_width = window.innerWidth;

canvas.width = window_width;
canvas.height = window_height;

//canvas.style.background = "#ff8";

//context.fillRect(300, 0, 100, 200);
//context.fillStyle = "yellow";
//context.fillRect(400, 50, 150, 200);
context.strokeRect(650, 460, 80, 40); // obok tego na glownym po prawej 1
context.strokeRect(730, 465, 200, 30); // po prawej prawego 2
context.strokeRect(300, 470, 350, 30); //ten nad glownym
context.strokeRect(300, 500, 400, 100); //glowny element
context.strokeRect(550, 600, 60, 20); //element 1 od magazynku

//context.beginPath();
//context.moveTo(300 ,470);
//context.lineTo(280,490);

//context.moveTo(300 ,500);
//context.lineTo(280,490);
//context.stroke();
//context.closePath();
//context.fillStyle = "red";

//context.fillRect(100,500,100,100);

//context.strokeStyle = "blue";
//context.lineWidth = 20;
//context.arc(100,100, 50,0,Math.PI * 2, false);
//context.stroke();
//context.closePath();

//context.beginPath();
//context.moveTo(810 ,480);
//context.lineTo(1100,525);
//context.stroke();
//context.closePath();
context.beginPath();
context.moveTo(930 ,470);
context.lineTo(1045,470);
// prawa prawej 3
context.moveTo(930 ,490);
context.lineTo(1040,490);
context.stroke();
context.closePath();

context.beginPath();
context.moveTo(600 ,500);
context.lineTo(935,500);

context.moveTo(935 ,500);
context.lineTo(935,580);
//PRAWA CZESC OBOK GLOWNEGO ELEMENTU
context.moveTo(700 ,600);
context.lineTo(935,580);
context.stroke();
context.closePath();

context.beginPath();
context.moveTo(935 ,520);
context.lineTo(1100,520);
// prawa prawej glownego xD
context.moveTo(935 ,560);
context.lineTo(1100,560);
context.stroke();
context.closePath();
//context.fillStyle("white");
context.strokeRect(1100, 520, 170, 40); //prawa prawej prawej glonwgo

context.beginPath();
context.moveTo(1100 ,520);
context.lineTo(1045,470);
// prawa prawej 3
//context.moveTo(1000 ,550, 60, 20);
//context.lineTo(950,490, 60 , 20);
context.stroke();
context.closePath();

context.beginPath();
context.moveTo(1040,490);
context.lineTo(1065,520);
//ta jebana kreska prawej prawej 4
context.stroke();
context.closePath();

context.beginPath();
context.moveTo(252 ,522);
context.lineTo(299,500);
context.stroke();
context.closePath();

context.beginPath();
context.moveTo(250 ,514);
context.lineTo(233,495);
context.stroke();
context.closePath();
