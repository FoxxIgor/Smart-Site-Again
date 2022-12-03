camera = document.getElementById("camera");
Webcam.set({
    width:350,
    height:310,
    image_format:'png',
    png_quality:90
});
Webcam.attach('#camera');
function capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img src='"+data_uri+"' id='photo'>";
    });
}
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/t6kEutxrc/model.json", indentify);
console.log(classifier);
function indentify(){
    img = document.getElementById("photo");
    classifier.classify(img, result);
}
function result(error, result){
    if(error){
        console.error("Error");
    }
    else{
        console.log(result);
        document.getElementById("objectResult").innerHTML=result[0].label;
        porcentagem = result[0].confidence.toFixed(2);
        porcentagem=porcentagem*100;
        document.getElementById("precisionResult").innerHTML=porcentagem+"%";
    }
        
    
}