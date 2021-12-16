canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

var events = "nothing";
canvas.addEventListener("mousedown" , mousedown);
function mousedown(e){
    events = "mousedown";
}

canvas.addEventListener("mouseleave" , mouseleave);
function mouseleave(e){
    events = "mouseleave";
}

canvas.addEventListener("mouseup" , mouseup);
function mouseup(e){
    events = "mouseup";
}

canvas.addEventListener("mousemove" , mousemove);
function mousemove(e){
        mouse_currentX = e.clientX - canvas.offsetLeft;
        mouse_currentY = e.clientY - canvas.offsetTop;
        
    if(events=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = "red";
        ctx.lineWidth = 5;
        ctx.arc(mouse_currentX,mouse_currentY,50,0,2*Math.PI);
        ctx.stroke();
    }
}