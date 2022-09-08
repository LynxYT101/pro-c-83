var mouseEvent = "empty";

var last_position_of_x, last_position_of_y; 




var width = screen.width;

var new_width = screen.width - 70;

var new_height = screen.height - 300;

if (width < 992) {

    document.getElementById ("myCanvas").width = new_width;
    document.getElementById ("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";

}

canvas = document.getElementById ("myCanvas");

ctx = canvas.getContext("2d");

color = "black"

width_of_line = 1;

canvas.addEventListener("mousedown", my_mousedown); 

function my_mousedown(e) {

color = document.getElementById ("color").value;

width_of_line = document.getElementById ("width_of_line").value;

mouseEvent = "mouseDown";


}
canvas.addEventListener("mousemove", my_mousemove); 
function my_mousemove(e) {

 var current_position_of_mouse_x = e.clientX - canvas.offsetLeft;

 var current_position_of_mouse_y = e.clientY - canvas.offsetTop;

if (mouseEvent = "mousedown") {

ctx.beginPath();
ctx.strokeStyle = color;
ctx.linewidth = width_of_line

console.log("Last position of x and y coordinates = ");

console.log("x = " + last_position_of_x + "y = " + last_position_of_y);

ctx.moveTo(last_position_of_x, last_position_of_y);



console.log("Current position of x and y coordinates = ");

console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);

ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);

ctx.stroke();

}

last_position_of_x = current_position_of_mouse_x;

last_position_of_y = current_position_of_mouse_y




    
}





canvas.addEventListener("mouseup", my_mouseup); 

function my_mouseup(e) {

mouseEvent = "mouseUP";
    
}

canvas.addEventListener("mouseleave", my_mouseleave); 

function my_mouseleave(e) {

    mouseEvent = "mouseleave";
    
}

function cleararea() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

}





























