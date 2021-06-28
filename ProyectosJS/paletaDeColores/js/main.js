"strict mode";

color.value = storage
//=> para que guarde los cambios 

//=> mandamos a lamar el setcolor cuando la pagina carge para poder almecenar los cambios en el documento 
setColor();

color.addEventListener('input',setColor)
//=> Evento con el que se cambia de color...

color.addEventListener('change',()=>{
    saveColor(color.value)
})
//=> con esto se van a guardar los cambios en el localStorage 
