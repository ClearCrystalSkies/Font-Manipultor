Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});
Webcam.attach('#camera');
camera = document.getElementById("camera");
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/L5MzVk9qs/model.json', modelLoaded);
function ImageCapture() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='capturedImg' src='" + data_uri +"'>" 
    })
}
console.log("ml5 version :", ml5.version);
function modelLoaded(){
    console.log("Model has now been loaded.");
}
function check(){
    img = document.getElementById("capturedImg");
    classifier.classify(img, gotResult);
}
function gotResult( error, results){
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("Result_member").innerHTML = "The Family Memebr is " + results.object[0].label;
        document.getElementById("Result_accuracy").innerHTML = "The Acurracy is " + results.object[0].confidence.toFixed(3);
    }
}