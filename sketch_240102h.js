let newColor;
let oldColor;
let bg;
function setup() {
  // Set the canvas' width and height
  // using the browser's dimensions.
  createCanvas(windowWidth, windowHeight);

  background(249, 246, 238);

  oldColor = color("black");
  newColor = oldColor;
  bg = color(249, 246, 238);

  about = createA("https://www.instagram.com/pixel.pshr/", "about", "_blank");
  about.position(50, 50);
  about.style("font-family", "Arial");
  about.style("font-size", "13px");
  about.style("color", oldColor);

  about.mouseOver(aboutOver);
  about.mouseOut(aboutOut);

  instagram = createA(
    "https://www.instagram.com/pixel.pshr/",
    "instagram",
    "_blank"
  );
  instagram.style("align", "right");
  instagram.position(windowWidth - 100, 50);
  instagram.style("font-family", "Arial");
  instagram.style("font-size", "13px");
  instagram.style("color", oldColor);

  instagram.mouseOver(instaOver);
  instagram.mouseOut(instaOut);

  arena = createA("https://www.are.na/lp/index", "are.na", "_blank");
  arena.style("align", "right");
  arena.position(windowWidth - 150, 50);
  arena.style("font-family", "Arial");
  arena.style("font-size", "13px");
  arena.style("color", oldColor);

  arena.mouseOver(arenaOver);
  arena.mouseOut(arenaOut);

  linked = createA(
    "http://www.linkedin.com/in/pixelpshr",
    "linkedin",
    "_blank"
  );
  linked.style("align", "right");
  linked.position(windowWidth - 207, 50);
  linked.style("font-family", "Arial");
  linked.style("font-size", "13px");
  linked.style("color", oldColor);

  linked.mouseOver(linkedOver);
  linked.mouseOut(linkedOut);

  spheres = createA(
    "https://aworkinprogress.cargo.site/spheres-of-influence",
    "spheres of influence",
    "_self"
  );
  
  spheres.position(120,200);
  spheres.style("font-family", "Arial");
  spheres.style("font-size", "13px");
  spheres.style("color", oldColor);
  spheres.style("background-color", bg);

  spheres.mouseOver(spheresOver);
  spheres.mouseOut(spheresOut);
}

function draw() {
  background(249, 246, 238);
  noFill();
  stroke(0, 0, 0);
  bezier(120, 200, 10, 10, 90, 90, windowWidth - 100, windowHeight - 200);
}

function aboutOver() {
  newColor = color("green");
  about.style("color", newColor);
}
function linkedOver() {
  newColor = color("green");
  linked.style("color", newColor);
}
function arenaOver() {
  newColor = color("green");
  arena.style("color", newColor);
}
function instaOver() {
  newColor = color("green");
  instagram.style("color", newColor);
}
function spheresOver() {
  newColor = color("green");
  spheres.style("color", newColor);
}

function aboutOut() {
  about.style("color", oldColor);
}
function linkedOut() {
  linked.style("color", oldColor);
}
function arenaOut() {
  arena.style("color", oldColor);
}
function instaOut() {
  instagram.style("color", oldColor);
}
function spheresOut() {
  spheres.style("color", oldColor);
}
