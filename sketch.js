let width = 400;
let height = 400;

function setup() {
    createCanvas(windowWidth, windowHeight); // w, h
}

function draw() {
    stroke(0);
    // draw a rectangle to define the area
    line(0,0,width,0);
    line(0,0,0,height);
    line(width,0,width,height);
    line(0,height,width,height);

    // draw two triangles
    fill(0);
    triangle(0, 0, 100, 0, 0, 200);
    triangle(400,400,300,400,400,200);
    beginShape();
    vertex(100, 400);
    vertex(0, 400);
    vertex(0, 200);
    vertex(100, 200);
    vertex(100,100);
    vertex(150,100);
    vertex(250,300);
    vertex(300,300);
    vertex(300,200);
    vertex(400,200);
    vertex(400,0);
    vertex(300,0);
    endShape(CLOSE);
}
