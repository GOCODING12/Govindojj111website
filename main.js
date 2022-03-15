Webcam.set({
    width: 345,
    height: 299,
    image_format:'png',
    png_quality:90

}); 

camera=document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot() {
    Webcam.snap(function (data_uri) {
            document.getElementById("result").innerHTML='<img id="gen" src="'+data_uri+'"/>';
        }
    ); 
} 

console.log(ml5.version);
var classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/rNq8ccV-I/model.json',modelLoaded);

function modelLoaded() {
    console.log("modelLoaded");
}


function speak() {
    var synth = window.speechSynthesis; 
     speakdata12="The Hand guesture is"+p1;
     var utter=new SpeechSynthesisUtterance(speakdata12+speakdata13);
     synth.speak(utter);
}


function check() {
    img = document.getElementById("gen");
    classifier.classify(img,gotresult);
} 

function gotresult(error,result) {
    if(error){
        console.error(error);
    } 
    else{
        console.log(result); 
        document.getElementById("result_hand_guesture").innerHTML=result[0].label; 
        document.getElementById("hand_guesture").innerHTML=result[1].label; 
        p1=result[0].label;
       speak();
       if(result[0].label=="Like")
       {
           document.getElementById("hand_guesture").innerHTML="&#128077;";
       }

       if(result[0].label=="Close hand")
       {
           document.getElementById("hand_guesture").innerHTML="&#9994;";
       } 

       if(result[0].label=="Slap")
       {
           document.getElementById("hand_guesture").innerHTML="&#128400;";
       } 

       if(result[1].label=="Like")
       {
           document.getElementById("hand_guesture").innerHTML="&#128077;";
       }

       if(result[1].label=="Close hand")
       {
           document.getElementById("hand_guesture").innerHTML="&#9994;";
       } 

       if(result[1].label=="Slap")
       {
           document.getElementById("hand_guesture").innerHTML="&#128400;";
       }
    } 
}