function setup() {
    createCanvas(400, 400);
    background("blue");
  }
  
  function draw() {
    stroke("yellow");
    fill("red");
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 45);
    }
  }