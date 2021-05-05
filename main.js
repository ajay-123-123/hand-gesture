Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot()
{Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
});
}
    console.log('mlf version:',ml5.version);
    classifier = ml5.imageClassifier('teachablemachine.withgoogle.com/models/OfJKDmIJJ//model.json',modelL0aded);
    function modelLoaded(){
        console.log('Moadel Loaded!');
    }
