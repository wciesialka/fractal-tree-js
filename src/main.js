(function(window, document, undefined)
{
    window.onload = init;
})(window,document,undefined);

var tree = null;

function init()
{

    var canvas = document.getElementById("canvas");
    var angle_form = document.getElementById("angle_form");
    var angle_span = document.getElementById("angle_span");
    angle_span.innerHTML = "Angle: " + angle_form.value;
    var grow_button = document.getElementById("grow_button");
    var angle = parseFloat(angle_form.value);
    angle_form.onchange = function(ev) {
        var src = ev.srcElement;
        angle = parseFloat(src.value);
        angle_span.innerHTML = "Angle: " + src.value;
    };
    
    tree = new Branch(null, 100, Math.PI + (Math.PI/2));

    grow_button.onclick = function()
    {
        tree.grow(-angle, angle);
        console.log(tree);
    }

    tick = function(){
        draw(canvas);
    };
    window.setInterval(tick, 10);
}

function line(ctx, x1, y1, x2, y2)
{
    var sx = ctx.x;
    var sy = ctx.y;
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
    ctx.moveTo(sx,sy);
}

function draw(canvas)
{
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#332233";
    ctx.fillRect(0,0,canvas.width, canvas.height);

    drawBranch = function(branch)
    {
        ctx.strokeStyle = "#FFFFFF";
        line(ctx,branch.startX, branch.startY, branch.endX, branch.endY);
        if(branch.left != null)
        {
            drawBranch(branch.left);
        }
        if(branch.right != null)
        {
            drawBranch(branch.right);
        }
    }
    drawBranch(tree);
}