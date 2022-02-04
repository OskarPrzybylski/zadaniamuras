function emptyRectangles() {
  var canvas = document.getElementById("canvas-1")

    var ctx = canvas.getContext('2d')

    ctx.strokeStyle = '#ff0000'
    ctx.strokeRect(0,0,50,50)
    ctx.strokeStyle = '#ff01aa'
    ctx.strokeRect(0,60,50,50)
    ctx.strokeStyle = '#abab12'
    ctx.strokeRect(60,0,50,50)
}

function fullfilledRectangles() {
  var canvas = document.getElementById("canvas-2")

  var ctx = canvas.getContext('2d')

  ctx.fillStyle = '#88a'
  ctx.fillRect(0,0,50,50)
  ctx.fillStyle = '#12abab'
  ctx.fillRect(0,60,50,50)
  ctx.fillStyle = '#99112a'
  ctx.fillRect(60,0,50,50)
}


function triangle() {
  var canvas = document.getElementById("canvas-3")

  var ctx = canvas.getContext('2d')
  ctx.beginPath()
  ctx.moveTo(0, 0)
  ctx.lineTo(0, 45)
  ctx.lineTo(150, 150)
  ctx.closePath()

  ctx.lineWidth = 1
  ctx.strokeStyle = '#666666'
  ctx.stroke()
}

function rightTriangle() {
  var canvas = document.getElementById("canvas-4")

  var ctx = canvas.getContext('2d')
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(0, 150);
  ctx.lineTo(150, 150);
  ctx.closePath();

  ctx.lineWidth = 1;
  ctx.strokeStyle = '#666666';
  ctx.stroke();
}

function customShape() {
  var canvas = document.getElementById("canvas-5")

  var ctx = canvas.getContext('2d')

  ctx.fillStyle = '#ff0000'
  ctx.fillRect(0,0,125,100)

  ctx.clearRect(0, 0, 15, 15)
  ctx.clearRect(110, 0, 15, 15)
  ctx.clearRect(110, 85, 15, 15)
  ctx.clearRect(0, 85, 15, 15)
}

function drawArcs() {
  var canvas = document.getElementById("canvas-6")

  var ctx = canvas.getContext('2d')
  ctx.beginPath()
  ctx.arc(50, 50, 25, 0, 2 * Math.PI)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(125, 50, 25, 0, Math.PI)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(200, 50, 25, 0, 0.5 * Math.PI)
  ctx.stroke()
}

function fullCircle(ctx, x, y) {
  ctx.beginPath()
  ctx.arc(x, y, 25, 0, 2 * Math.PI)
  ctx.stroke()
}

function olympicCircles() {
  var canvas = document.getElementById("canvas-7")

  var ctx = canvas.getContext('2d')
  fullCircle(ctx, 50, 50)
  fullCircle(ctx, 110, 50)
  fullCircle(ctx, 170, 50)

  fullCircle(ctx, 80, 80)
  fullCircle(ctx, 140, 80)
}

emptyRectangles()
fullfilledRectangles()
triangle()
rightTriangle()
customShape()
drawArcs()
olympicCircles()