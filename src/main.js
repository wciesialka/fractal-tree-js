(function (window, document, undefined) {
    window.onload = init;
})(window, document, undefined);

var tree = null;

function init() {

    var canvas = document.getElementById("canvas");

    var angle_form = document.getElementById("angle_form");
    var angle_num = document.getElementById("angle_num")
    angle_num.value = angle_form.value;
    var angle = parseFloat(angle_form.value);
    angle_form.onchange = function (ev) {
        var src = ev.srcElement;
        if(src.value < src.min)
        {
            src.value = src.min;
        } else if(src.value > src.max)
        {
            src.value = src.max;
        }
        angle = parseFloat(src.value);
        if(angle_num.value != src.value)
        {
            angle_num.value = src.value;
        }
    };
    angle_num.onchange = function (ev) {
        var src = ev.srcElement;
        if(src.value < src.min)
        {
            src.value = src.min;
        } else if (src.value > src.max)
        {
            src.value = src.max;
        }
        angle = parseFloat(src.value);
        if(angle_form.value != src.value)
        {
            angle_form.value = src.value;
        }
    };

    var grow_length_form = document.getElementById("grow_length_form");
    var grow_length_num = document.getElementById("grow_length_num");
    grow_length_num.value = grow_length_form.value;
    var grow_length = parseFloat(grow_length_form.value);
    grow_length_form.onchange = function (ev) {
        var src = ev.srcElement;
        if(src.value < src.min)
        {
            src.value = src.min;
        } else if(src.value > src.max)
        {
            src.value = src.max;
        }
        grow_length = parseFloat(src.value);
        if(grow_length_num.value != src.value)
        {
            grow_length_num.value = src.value;
        }
    };
    grow_length_num.onchange = function (ev) {
        var src = ev.srcElement;
        if(src.value < src.min)
        {
            src.value = src.min;
        } else if(src.value > src.max)
        {
            src.value = src.max;
        }
        grow_length = parseFloat(src.value);
        if(grow_length_form.value != src.value)
        {
            grow_length_form.value = src.value;
        }

    }

    tree = new Branch(null, 100, Math.PI + (Math.PI / 2));

    var grow_button = document.getElementById("grow_button");
    grow_button.onclick = function () {
        tree.grow(grow_length, angle);
    };

    tick = function () {
        draw(canvas);
    };
    window.setInterval(tick, 10);
}

function line(ctx, x1, y1, x2, y2) {
    ctx.save();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.restore();
}

function draw(canvas) {
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#332233";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    drawBranch = function (branch) {
        ctx.strokeStyle = "#FFFFFF";
        line(ctx, branch.start.x, branch.start.y, branch.end.x, branch.end.y);
        if (branch.left != null) {
            drawBranch(branch.left);
        }
        if (branch.right != null) {
            drawBranch(branch.right);
        }
    }
    drawBranch(tree);
}