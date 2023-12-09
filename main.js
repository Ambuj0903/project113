function preload()
{

}

function setup()
{
    canvas = createCanvas(500,400);
    canvas.position(70,200);
    video = createCapture(VIDEO);
    video.size(300,300)
    video.hide()
}

function draw()
{
    image(video,100,80,300,250);
    fill(255,255,0);
    stroke(255,255,0);
    circle(40,40,50);
    circle(460,40,50);
    circle(40,360,50);
    circle(460,360,50);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    rect(63,27,375,25);
    rect(63,347,375,25);
    rect(27,63,25,275);
    rect(448,63,25,275)
   


}

function take_snapshot()
{
    save("yoo.png");
}


