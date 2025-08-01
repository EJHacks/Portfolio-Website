function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
}

function draw() {
    background(0,10);
    fill(random(0,256), random(0,256), random(0,256));
    ellipse(random(width),random(height),5,5)
    
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}






