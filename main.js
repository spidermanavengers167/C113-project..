function preload(){
    
}
function setup(){
canvas=createCanvas(640,480)
canvas.center()
video=createCapture(VIDEO)
video.size(640,480)
video.hide()
poseNet=ml5.poseNet(video,modelLoaded)
poseNet.on('pose',GotPoses)
}
function draw(){
image(video,0,0,640,480)
}
function modelLoaded(){
    console.log("PoseNet Has been Initialized")
}
function GotPoses(results){
    if(results.length>0){
        console.log(results)
        console.log("nosex= "+results[0].pose.nose.x)
        console.log("nosey= "+results[0].pose.nose.y)
}
        
}
function take_snapshot(){
save("Hello.png")
}