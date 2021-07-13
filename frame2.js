function preload(){

}

function setup(){
    canvas = createCanvas(730,600);
    canvas.position(450,500);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";
}

function draw(){
    image(video,60,60,600,500);
    tint(tint_color);
    fill(color(0, 0, 255));
    rect(15, 50, 700, 30);
    fill(color(0, 0, 255));
    rect(640, 15, 30, 750);
    fill(color(0, 0, 255));
    rect(5, 550, 700, 30);
    fill(color(0, 0, 255));
    rect(50, 25, 30, 750);
}

function take_snapshot(){
    save('frame_image.png');
}

function filter_tint(){
    tint_color = document.getElementById("color_name").value ;
}