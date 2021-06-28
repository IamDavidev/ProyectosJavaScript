"strict mode";
const color = document.getElementById('color')
//console.log(color.value)

const salida = document.querySelector('#salida') 
//console.log(salida)

const caja = document.querySelector('.caja-color')
// Es la caja donde vamos a guardor todos los calores de los colores 

const storage  = localStorage.getItem('colorValue')|| '#808080'
//=> son los datos que vamos almacenar  en localStoragwe