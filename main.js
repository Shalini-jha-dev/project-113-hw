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
    fill('rgb(0,255,0)');
    circle(70, 70, 90);
    fill('rgb(100%,0%,10%)');
    rect(115, 50, 505, 30);
    fill('rgb(0,255,0)');
    circle(650, 70, 90);
    fill('rgb(100%,0%,10%)');
    rect(640, 115, 30, 450);
    fill('rgb(0,255,0)');
    circle(660, 550, 90);
    fill('rgb(100%,0%,10%)');
    rect(110, 540, 505, 30);
    fill('rgb(0,255,0)');
    circle(70, 550, 90);
    fill('rgb(100%,0%,10%)');
    rect(55, 115, 30, 390);
}

function take_snapshot(){
    save('frame_image.png');
}

function filter_tint(){
    tint_color = document.getElementById("color_name").value ;
}

function choose_styles(){
    window.location = "frame2.html"
}