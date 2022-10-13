function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("game");
	instializeInSetup(mario);
	video = createCapture(VIDEO);
	video.parent("vid");
	video.size(800, 400);
	poseNet = ml5.poseNet(video, modalLoaded);
	poseNet.on('pose', gotResults);

}

function draw() {
	game()
}

function modalLoaded(){
	console.log("modal loaded succesfully");
}

function gotResults(result){
	if(result.length>0){
		noseX = result[0].pose.nose.x;
		noseY = result[0].pose.nose.y;
	}
}






