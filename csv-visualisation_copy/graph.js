let table;

function preload() {
  table = loadTable("dataset/graph_data.csv", "csv", "header");
}

function setup() {
  createCanvas(800, 800);
  background(220);

  console.log(table);
  textAlign(CENTER, TOP);
  for (let r = 0; r < table.getRowCount(); r++) {
    const name = table.getString(r, "class");
    const pass_rate = table.getNum(r, "pass_rate");
    const exam_score = table.getNum(r, "exam_score");
    const x = table.getNum(r, "prediction");
    const y = random(0, height);
    const size = map(exam_score, 0, 100, 0, 100);
    const fillColor = map(pass_rate, 0, 100, 255, 0);

    if (x == 1){
      var x_c = width - 100;
    }

    if (x==0){
      var x_c = 100;
    }

    fill(fillColor, 50, 50);
    circle(x_c, y, size);
    fill(0);
    text(name, x, y + size / 2 + 5);
  }
}

function draw() {
  // rect(10, 20, 30, 40);
  // put drawing code here
}
