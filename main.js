function prload(){
}
function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 430);
    canvas.position(560, 100);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    background("#fff0000");
}
function modelLoaded(){
    console.log(" Model has Loaded")
}
function gotPoses(results ){
    if (results.length > 0){
        console.log(results);
    }
}