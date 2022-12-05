let table;

function preload() {
  table = loadTable("dataset/graph_data.csv", "csv", "header");
}

function setup() {
  createCanvas(800, 600);
  background(220);

  console.log(table);
  textAlign(CENTER, TOP);
  for (let r = 0; r < table.getRowCount(); r++) {
    const name = table.getString(r, "class");
    const serving = table.getNum(r, "Serving");
    const exam_score = table.getNum(r, "exam_score");
    const x = random(0, width);
    const y = random(0, height);
    const size = map(serving, 0, 280, 0, 100);
    const fillColor = map(exam_score, 0, 26, 100, 0);
    fill(fillColor, 50, 50);
    circle(x, y, size);
    fill(0);
    text(name, x, y + size / 2 + 5);
  }
}

function draw() {
  // rect(10, 20, 30, 40);
  // put drawing code here
}
