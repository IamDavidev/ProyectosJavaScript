' use strict';
// llamada al HTML
const element = document.querySelector('#canvas') 
const ctx  = element.getContext('2d');


// => dimenciones de canvas
const wdt = document.body.clientWidth;
const htg = document.body.clientHeight;
element.width = wdt
element.height = htg

// =>color de la matrix
let color = prompt('pon el color de la matrix (pon su nombre o ponlo hexadecimal) ')
if(color === "#000000"){
    color = "#0108C6"
}else if (color === "" ) {
    color = "#4caf50";
}else{
    color
}


// codigo de la matrix 
const position = Array (300).join(0).split('');
const initMatrix = ()=>{

    ctx.fillStyle = 'rgba(0,0,0,0.15)'
    ctx.fillRect(0,0,wdt,htg)
    
  
    ctx.fillStyle = color ;
  
    ctx.font = "26pt";

    position.map ((y, index)=>{
            const letras  = String.fromCharCode(1e6 + Math.random() *30  )
            const x = index * 15;
            
            canvas.getContext('2d').fillText(letras , x , y )

            y > 100 + Math.random()* 1e5 ? position[index] = 0  : position[index] = y + 15; 

        });
}


setInterval(initMatrix, 65)

