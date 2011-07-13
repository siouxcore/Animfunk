/**
* put your function in the yourFunc method
**/

float yourFunc(float x){
  return x;
};

size(400,400);
background(255);
smooth();
// first let's draw axis
line(50, 350, 350, 350);
line(50, 50, 50, 350);
// the legend
PFont font;
font = loadFont("FFScala-Bold-12.vlw"); 
textFont(font); 
fill(0, 102, 153);
textAlign(RIGHT);
text("end", 45, 60);
text("start", 45, 350);
textAlign(CENTER);
text("time", 200, 370);
// then the curve
noFill();
stroke(255,0,0);
beginShape();
for(int i = 0; i <= 100; i++){
    float val = norm(i,0,100);
    float valy = yourFunc(val);
    float x = map( 
        val,
        0,
        1,
        50,
        350  );
    float y = map( 
        valy,
        0,
        1,
        350,
        50  );
    vertex( x, y );
}
endShape();
// the points
noStroke();
fill(255,0,0);
for(int i = 0; i <= 100; i+=5){
    float val = norm(i,0,100);
    float valy = yourFunc(val);
    float x = 50;
    float y = map( 
        valy,
        0,
        1,
        350,
        50  );
    ellipse( x, y, 4, 4 );
}
PImage img = createImage(400,400,RGB);
img.loadPixels();
loadPixels();
for(int i=0; i<400*400; i++){
  img.pixels[i] = pixels[i];  
}
img.updatePixels();
updatePixels();
img.save("myFunction.PNG");