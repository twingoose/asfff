function setup()
{
video =  createCapture(VIDEO);
video.size(550,500);

canvas = createCanvas(550,500);
canvas.position(600,220);

poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function draw()
{

    background('#cc4e5c');
}

function modelLoaded ()
{
console.log('poseNet Is Initialize!');
}


function gotPoses ()
{
if(results.length > 0)
{
    console.log(results);
}
}


noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function gotPoses(results)
{
if (results.length >0)
{
console.log(results);
noseX = results[0].pose.nose;
noseY = results[0].pose.nose;
console.log("noseX =" + noseX +" noseY = " + noseY)    ;

leftWristX = results[0].pose.leftWrist.x;
rightWristX = results[0].pose.leftWrist.x;
difference = floor(leftWrist - rightWrist);

console.log("leftWristX = " + leftWristX +"rightWrist = " + rightWristX + "difference = " + difference);
}
}

function draw()
{
background('#969A97');

document.getElementById("square_side".innerHTML = "Width And Height of a square will be = " + difference +"px")
fill('# F90093');
stroke('# F90093');
square(noseX,noseY,difference)
}

