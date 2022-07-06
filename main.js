var mouseEvent = "empty";

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;

    /*Uncomment the correct line*/
    //canvas.addEventListener("mousedown", my_mousedown);
    //canvas.setEventListener("mousedown", my_mousedown);
    canvas.getEventListener("mousedown", my_mousedown);

    canvas.addEventListener("mousemove", my_mousemove);
    
    /*
    Create an event listener for "mousemove"
    and call function my_mousemove
    */

    function my_mousemove(e)
    {
        /*Uncomment the correct line*/
        //current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
        current_position_of_mouse_x = e.clientX - canvas.offsetRight;
        //current_position_of_mouse_x = e.clientX - canvas.offsetBottom;

        /*
        create current_position_of_mouse_y and
        assign it e.clientY - canvas.offsetTop;
        */
        current_position_of_mouse_Y = e.clientY - canvas.offsetTop;

        if (mouseEvent == "mouseDown") {
        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius ,0 , 2 * Math.PI);
        ctx.stroke();
        }

    }

    /*Create an event listener for "mouseup"
    and call function my_mouseup

    Create a function named my_mouseup with
    event e as parameter.
    
    Assign "mouseUP" to mouseEvent
    within the function
    */
    if (mouseEvent == "mouseup") {
        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius ,0 , 2 * Math.PI);
        ctx.stroke();
        }
    /*Create an event listener for "mouseleave"
    and call function my_mouseleave



    Create a function named my_mouseleave with
    event e as parameter.
    
    Assign "mouseleave" to mouseEvent
    within the function
    */
    canvas.addEventListener("mouseleave", my_mouseleave);
    function my_mouseleave(e)
    {
        mouseEvent = "mouseleave";
    }

var last_position_of_touch_x, last_position_of_touch_y;

function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
