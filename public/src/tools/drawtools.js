function drawLine(g, x1, y1, x2, y2, c = 0xFFFFFF) {
    g.lineStyle(2, c, 1);
    g.moveTo(x1, y1);
    g.lineTo(x2,y2);
    g.endFill();
    g.lineStyle(2, c, 0);
}

function drawCircle(g, x, y, r, c = 0xFFFFFF) {
    g.beginFill(c);
    g.drawCircle(x, y, r);
    g.endFill();
}