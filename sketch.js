let imgCima;
let imgBaixo;
let raioLupa = 120;

function preload() {
  imgCima = loadImage('principal.jpg');
  imgBaixo = loadImage('escondida.jpg');
}

function setup() {
  // Help blind or low-vision users understand your sketch
  createCanvas(800, 800);
}

function draw() {
  image(imgCima, 0, 0, width, height);

  if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
    
    if (mouseIsPressed) {
      raioLupa = 180;
    } else {
      raioLupa = 120;
    }

    let tremorX = mouseX + random(-3, 3);
    let tremorY = mouseY + random(-3, 3);


    push();
    drawingContext.save();
    
    drawingContext.beginPath();
    drawingContext.arc(tremorX, tremorY, raioLupa, 0, TWO_PI);
    drawingContext.clip();

    image(imgBaixo, 0, 0, width, height);
    
    drawingContext.restore();
    pop();

    noFill();
    stroke(0, 255, 200);
    strokeWeight(4);
    ellipse(tremorX, tremorY, raioLupa * 2, raioLupa * 2);
  }
}
