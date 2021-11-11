var noseX = 0;
var noseY = 0;

// Preload
function preload() 
{
    clownNose = loadImage("https://i.postimg.cc/PrHGfLP7/mustash-2-217178.png");
}

// Setup
function setup() 
{ 
    // Canvas
    canvas = createCanvas(600, 480);
    canvas.center();

    // Webcam
    webcam = createCapture(VIDEO);
    webcam.size(600, 480);
    webcam.hide();

    poseNet = ml5.poseNet(webcam, modelloaded);
    poseNet.on('pose', gotPose);
}

// Draw
function draw() 
{ 
    image(webcam,0, 0, 600, 480);

    image(clownNose, noseX, noseY, 120, 120);
}

// Apply the Filtieuer and save the Image
function apply() 
{ 
    save("mySelfiePictureWithFilterTakenByJohnKhokhar.jpg");
}

function modelloaded() 
{  
    console.log("Model Loaded...");
}

function gotPose(result) 
{ 
    if (result.length > 0) 
    { 
        console.log(result);
        console.log("Nose X" + result[0].pose.nose.x);
        console.log("Nose Y" + result[0].pose.nose.y);

        // Nose Positions
        noseX = result[0].pose.nose.x - 55;
        noseY = result[0].pose.nose.y - 38;
    }
}

// noice