Webcam.set({
    width:350,
    heigth:300,
    image_format:"png",
    png_quality:100
});
Webcam.attach("#camera");
function snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML ='<img id="captured_image" src="'+data_uri+'">'
    })


}
console.log('ml5 version', ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/YWHKvgLyU/model.json",modelLoded);


function modelLoded()
{
    console.log("model is loded");
}


function speak()
{
var synth =window.speechSynthesis;
speak_data1=" the first prediction is"+prediction_1;
speak_data2=" the second prediction is"+prediction_2;
var utterthis=new SpeechSynthesisUtterance(speak_data1+speak_data2);
synth.speak(utterthis);
}
