(function(window, document, undefined)
{
    window.onload = init;
})(window,document,undefined);

function init()
{

    var canvas = document.getElementById("canvas");
    var angle_form = document.getElementById("angle_form");
    var angle_span = document.getElementById("angle_span");
    angle_span.innerHTML = "Angle: " + angle_form.value;
    var grow_button = document.getElementById("grow_button");
    grow_button.onclick = grow;
    var angle = angle_form.value;
    angle_form.onchange = function(ev) {
        var src = ev.srcElement;
        angle = src.value;
        angle_span.innerHTML = "Angle: " + src.value;
    };

    tick = function(){
        draw(canvas);
    };
    window.setInterval(tick, 10);
}

function draw(canvas)
{
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#332233";
    ctx.fillRect(0,0,canvas.width, canvas.height);
}

function grow()
{
    console.log("Grow!");
}