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
    const y = random(100, height-100);
    const size = map(exam_score, 0, 100, 0, 100);
    const fillColor = map(pass_rate, 0, 100, 255, 0);

    if (x==1){
      var rand_value = random(100, 300);
      var x_c = width - rand_value;
    }

    if (x==0){
      var rand_value = random(100, 200);
      var x_c = rand_value;
    }

    fill(fillColor, 50, 50);
    circle(x_c, y, size);
    fill(0);
    text(name, x_c, y + size / 2 + 5);
  }
}

function draw() {
  // rect(10, 20, 30, 40);
  // put drawing code here
}
