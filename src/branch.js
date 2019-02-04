function Branch(parent, len, ang)
{
    this.left = null;
    this.right = null;
    this.len = len;
    if(parent == null)
    {
        this.startX = 300;
        this.startY = 400;
        this.ang = ang;
    } else
    {
        this.startX = parent.endX;
        this.startY = parent.endY;
        this.ang = (parent.ang + ang);
    }
    this.endX = this.startX + (len * Math.cos(this.ang));
    this.endY = this.startY + (len * Math.sin(this.ang));

    this.grow = function(lAng, rAng)
    {
        var gLen = this.len * 0.6;
        if(gLen > 2)
        {
            if(this.left == null)
            {
                this.left = new Branch(this, gLen, lAng);
            } else
            {
                this.left.grow(lAng, rAng);
            }
            if(this.right == null)
            {
                this.right = new Branch(this, gLen, rAng);
            } else
            {
                this.right.grow(lAng, rAng);
            }
        }
    }
}