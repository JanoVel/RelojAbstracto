let tileSize = 40;
let tileWidth = 13;
let tileHeight = 17;

function setup(){
  createCanvas(520, 680);
  background(255);
  strokeWeight(4);
  stroke('#464F4E');
  frameRate(1);
}

function draw() {
  background('#0f0f0f');
  //strokeWeight(2);
  // draw 3 horizontal spaces
  for (let y = 0; y < tileHeight; y += 8) {
    for (let x = 0; x < tileWidth; x ++) {
      line(x * tileSize, y * tileSize, (x + 1) * tileSize, (y + 1) * tileSize);
    }
  }
  // draw 3 vertical spaces
  for (let x = 0; x < tileWidth; x += 6) {
    for (let y = 1; y < tileHeight -1; y ++) {
      if (y != 8) {
        line(x * tileSize, y * tileSize, (x + 1) * tileSize, (y + 1) * tileSize);
      }
    }
  }
  drawDigit(1, 1, floor(hour() / 10));
  drawDigit(7, 1, hour() % 10);
  drawDigit(1, 9, floor(minute() / 10));
  drawDigit(7, 9, minute() % 10);
}

function drawDigit(offsetX, offsetY, digit){
  let digitWidth = 5;
  let digitHeight = 7;
  //define the shape of the digits in a two dimensional array
  let digits = [
    [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1], //0
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0], //1
    [1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1], //2
    [1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1], //3
    [1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], //4
    [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1], //5
    [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1], //6
    [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], //7
    [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1], //8
    [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1]  //9
  ];
  
  // draw digit
  for (let y = 0; y < digitHeight; y ++) {
    for (let x = 0; x < digitWidth; x ++) {
      if (digits[digit][y * digitWidth + x] > 0) {
        //strokeWeight(3);
        line((x + offsetX) * tileSize, (y + offsetY + 1) * tileSize, (x + offsetX + 1) * tileSize, (y + offsetY) * tileSize);
      } else {
        //strokeWeight(2);
        line((x + offsetX) * tileSize, (y + offsetY) * tileSize, (x + offsetX + 1) * tileSize, (y + offsetY + 1) * tileSize);
      }
    }
  }
}
