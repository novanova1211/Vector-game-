var col = 8;  //my cols and rows base for the drawing of the graphs
var row = 8;
var canvasWidth = 800;
var canvasHeight = 800;

var cellSize; 
var gridWidth; 
var gridHeight;  
var offsetX;  
var offsetY;  // make variables will serve purposes later 

let first_vector;


function setup() {
    createCanvas(canvasWidth, canvasHeight); 

    cellSize = min(canvasWidth / col, canvasHeight / row); 
    gridWidth = cellSize * col;
    gridHeight= cellSize * row; 
    offsetX = (canvasWidth - gridWidth) / 2;
    offsetY = (canvasHeight - gridHeight) / 2; 

    vector1_placement();
}

class vector_1 {
constructor(col, row){

    this.col = col;
    this.row = row;
    this.width = 100;
    this.height = 25;
    this.visible = true;
    }

    draw()  {
    
    if (!this.visible) return;

    let xCenter = offsetX + this.col * cellSize;
    let yCenter = offsetY + this.row * cellSize;

    let length = 100;   // how long the arrow is
    let thickness = 6;  // line thickness

     // Arrow body (right direction)
    let x2 = xCenter + length;
    let y2 = yCenter;

    push();

    stroke(0);
    strokeWeight(thickness);
    line(xCenter, yCenter, x2, y2);

    // Arrowhead

    fill(0);
    noStroke();
    translate(x2, y2);
    triangle(-20, -10, -20, 10, 0, 0);
    pop();

    }
}

function vector1_placement() {

let placement = prompt(" What line do you want your first Vector to be 1 line 2 line etc input a number 1-7: ")

if (placement === "1") {
    first_vector = new vector_1 (0,1);
}

else if (placement === "2") {
    first_vector = new vector_1 (0,2);
}

else if (placement === "3") {
    first_vector = new vector_1 (0,3);
}

else if (placement === "4") {
    first_vector = new vector_1 (0,4);
}

else if (placement === "5") {
    first_vector = new vector_1 (0,5);
}

else if (placement === "6") {
    first_vector = new vector_1 (0,6);
}

else if (placement === "7") {
    first_vector = new vector_1 (0,7);
}

}

function draw() { 
    background(51);

    for (var i = 0; i < col; i++) {
        for (var j = 0; j < row; j++) {
            var x = offsetX + i *cellSize;
            var y = offsetY + j *cellSize; 

            stroke(0);
            fill(255);
            rect(x, y, cellSize, cellSize);
        }
    }

    
    if (first_vector.visible){
        first_vector.draw();
    }
}



