var newCanvas;
var x;
var p1;
var p2;
var button;
var select0;
var select1;
var select2;
var select3;
var select4;
var select5;
var select6;
var slider;

function setup() {
  myCanvas = createCanvas(windowWidth, 500);
  myCanvas.position(0, 150);
  //GO! button not clicked yet
  x = false;

  //first explanation text
  p1 = createP("Choose one word from each list, then press GO!");
  p1.position(50, 40);

  //second explanation text
  p2 = createP("Set the dimension of the text");
  p2.position(50, 663);


  select0 = createSelect();
  select0.option("annoying");
  select0.option("pain in the ass");
  select0.option("pisser");
  select0.position(50, 100);
  select1 = createSelect("typeface");
  select1.option("Comic Sans");
  select1.option("Jokerman");
  select1.option("Papyrus");
  select1.position(182, 100);
  select2 = createSelect("when");
  select2.option("on Christmas");
  select2.option("while I was sleeping");
  select2.option("at 2 a.m.");
  select2.position(298, 100);
  select3 = createSelect("offer");
  select3.option("exposure");
  select3.option("a beer");
  select3.option("his Fiat Panda 141A");
  select3.position(462, 100);
  select4 = createSelect("program");
  select4.option("Paint");
  select4.option("Word");
  select4.option("Excel");
  select4.position(628, 100);
  select5 = createSelect("mood");
  select5.option("excited");
  select5.option("furious");
  select5.option("satisfied");
  select5.position(706, 100);
  select6 = createSelect("colour");
  select6.option("Make it Pop");
  select6.option("Worst Designer");
  select6.option("Big Logo");
  select6.position(800, 100);

  button = createButton("GO!");
  button.position(938, 94);

  slider = createSlider(6, 32, 21);
  slider.position(300, 680);


}

function changeX() {
  // GO! button clicked
  x = true
}

function draw() {
  button.mousePressed(changeX);
  background(color("#1e1e1e"));
  if (x) {
    textSize(slider.value());
    fill("#e1e1e1");
    text("There once was an extremely " + select0.value() + " client who loved " + select1.value() + ", so much so, that he phoned me " + select2.value() + " to design his new business cards with that font. Then, he realised that he had to pay me, so he decided to offer to me " + select3.value() + ". After I agreed the deal, I realized that InDesign crashed and couldn't be used. So I decided to project the business cards with " + select4.value() + ". The client was really " + select5.value() + " and I won the " + select6.value() + " award. Even if it wasn't an important award to put in my Portfolio I was happy because I received my client's congratulations and " + select3.value() + ", too. 🤷🏻‍♂️", 50, 50, 900, 900);
  }
}
