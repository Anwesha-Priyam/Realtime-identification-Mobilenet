function setup()
{
    canvas=createCanvas(400,350);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    classifier=ml5.imageClassifier('MobileNet',modelLoaded);
}

function modelLoaded()
{
    console.log("Model loaded!");
}

function draw()
{
    image(video,0,0,300,120);
    classifier.classify(video, gotResult);
}

function gotResult(error,results)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        document.getElementById("object_name").innerHTML=results[0].label;
        document.getElementById("accurate").innerHTML=results[0].confidence.toFixed(2);
    }
}