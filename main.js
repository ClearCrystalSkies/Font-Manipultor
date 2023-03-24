var difference = 0;
function prload(){}
function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 430);
    canvas.position(560, 100);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function gotPoses(results ){
    if (results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        console.log("Left wrist x  =" + leftWristX );
        rightWristX  = results[0].pose.rightWrist.x;
        console.log("Right wrist x =" + rightWristX);
        difference = Math.floor(leftWristX - rightWristX);
        console.log(difference);
    }
}
function draw(){
    background("#fff0000");
    fill("green");
    text('Yashita', 100, 250);
    textSize(difference);
}
function modelLoaded(){
    console.log(" Model has Loaded")
}