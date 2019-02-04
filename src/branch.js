function Branch(parent, len, ang) {
    this.left = null;
    this.right = null;
    this.len = len;
    if (parent == null) {
        this.start = {x: 300, y: 400};
        this.ang = ang;
    } else {
        this.start = parent.end;
        this.ang = (parent.ang + ang);
    }
    this.end = {x: this.start.x + (len * Math.cos(this.ang)), y: this.start.y + (len * Math.sin(this.ang))};

    this.grow = function (factor, lAng, rAng) {
        var gLen = this.len * factor;
        if (gLen > 2) {
            if (this.left == null) {
                this.left = new Branch(this, gLen, lAng);
            } else {
                this.left.grow(factor, lAng, rAng);
            }
            if (this.right == null) {
                this.right = new Branch(this, gLen, rAng);
            } else {
                this.right.grow(factor, lAng, rAng);
            }
        }
    }
}