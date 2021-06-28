"use strict";
' use strict';

var element = document.querySelector('#canvas');
var ctx = element.getContext('2d');
var wdt = document.body.clientWidth;
var htg = document.body.clientHeight;
element.width = wdt;
element.height = htg;
var color = prompt('de que color va a hacer la matriz ponlo en hexadecimal "#FFFFFF"');

if (color === "#000000") {
  color = "#0108C6";
} else if (color === "") {
  color = "#4caf50";
} else {
  color;
}

var position = Array(300).join(0).split('');

var initMatrix = function initMatrix() {
  ctx.fillStyle = 'rgba(0,0,0,0.15)';
  ctx.fillRect(0, 0, wdt, htg);
  ctx.fillStyle = color;
  ctx.font = "26pt";
  position.map(function (y, index) {
    var letras = String.fromCharCode(1e6 + Math.random() * 30);
    var x = index * 15;
    canvas.getContext('2d').fillText(letras, x, y);
    y > 100 + Math.random() * 1e5 ? position[index] = 0 : position[index] = y + 15;
  });
};

setInterval(initMatrix, 60);