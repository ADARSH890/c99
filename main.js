var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();

}
recognition.onresult=function(event){
    console.log(event);
    content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    speak();
}
function speak(){
    synth=window.speechSynthesis
    speak_data=document.getElementById("textbox").innerHTML;
    var utterthis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);

}
 





Webcam.set({
    Width:360,
    height:250,
    image_format:"jpeg",
    jpeg_quality:90
});
cam=document.getElementById("camera");
Webcam.attach(cam);