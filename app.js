let angle = 0;
let w = 35;
let ma;
let maxD;

function setup() {
    createCanvas(400, 400, WEBGL);
    maxD = dist(0,0,200,200);
}

function draw() {

    var dirX = (mouseX / width - 0.5) * 2;
    var dirY = (mouseY / height - 0.5) * 2;

    background(255);
    ortho(-400,400, -500,500,-500,1000);
    //directionalLight(255,255,255,0,-1,0); 
    	// Orange point light on the right
	ambientLight(20, 20, 100);
    directionalLight(0, 100 , 100, 1, 1, 0);
	// Blue directional light from the left
	directionalLight(250, 250, 0, -1, 0, 0);
    // directionalLight(0, 200, 200, -1, 0, 0);
	// Yellow spotlight from the front
	// pointLight(255, 255, 109, 0, 0, 300);
    translate(0,50, -50);
    rotateX( 2*dirY * - PI/4);
    rotateY(2*dirX*PI/4);
    // translate(width / 2, height / 2);
    rectMode(CENTER);

    
    for (let z = 0; z < height; z += w) {
        for (let x = 0; x < width; x += w) {
            push();
            let d= dist(x,z,width/2, height/2);
            let offset = map(d,0, maxD, -4, 4);
            let a = angle + offset;
            let h = map(sin(a), -1, 1, 150, 500);
            translate(x - width/2 ,0, z - height/2 );
            noStroke();
            ambientMaterial(250);
            box (w, h ,w);
            pop();
        }
    }
    angle += -0.06;
}