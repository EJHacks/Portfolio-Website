function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    background(0); 
    frameRate(30); 
}

function draw() {
    fill(0, 10);
    rect(0, 0, width, height);

    fill(random(255), random(255), random(255), 150);
    ellipse(random(width), random(height), 5, 5);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(0); 
}





