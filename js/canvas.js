const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "#15064E";
const canvasList = [drawCanvas0,drawCanvas1,drawCanvas2,drawCanvas3,drawCanvas4,drawCanvas5,drawCanvas6,drawCanvas7,drawCanvas8]

function limpiarCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawCanvas0() {
    ctx.beginPath();
    ctx.moveTo(0, 400);
    ctx.lineTo(100, 320);
    ctx.lineTo(200, 400);
    ctx.fill();
  }
  
  function drawCanvas1() {
    ctx.fillRect(103, 340, -6, -320);
    ctx.fillRect(103, 20, 203, 6);
    ctx.fillRect(300, 26, 6, 50);
  }
  
  function drawCanvas2() {
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.arc(303, 123, 50, 0, Math.PI * 2, true);
    ctx.stroke();
  }
  
  function drawCanvas3() {
    ctx.fillRect(300, 173, 6, 120);
  }
  
  function drawCanvas4() {
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(303, 290);
    ctx.lineTo(353, 340);
    ctx.stroke();
  }
  
  function drawCanvas5() {
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(303, 290);
    ctx.lineTo(253, 340);
    ctx.stroke();
  }
  
  function drawCanvas6() {
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(303, 220);
    ctx.lineTo(250, 190);
    ctx.stroke();
  }
  
  function drawCanvas7() {
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(303, 220);
    ctx.lineTo(353, 190);
    ctx.stroke();
  }
  
  function drawCanvas8() {
    ctx.lineWidth = 6;
    ctx.strokeStyle = "darkred";
    ctx.beginPath();
    ctx.moveTo(220, 190);
    ctx.lineTo(380, 160);
    ctx.stroke();
  }