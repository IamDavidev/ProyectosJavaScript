"strict mode"


const setColor = ()=>{
    const select = color.value;
        //=> este valor ya cambia en tiempo real como vayamos sellecionando el color lo imprime en patalla
        //console.log(select)
    salida.innerHTML = select;
    caja.style.background= select;
        (select == "#000000") ? salida.style.color = '#ffffff': salida.style.color = '#000000';

}


const saveColor = (select)=>{
    localStorage.setItem('colorValue', select)
    //=> aqui lo que hacemos es llamar a que se guarde el cambio de color que agamos y esto hara que se almacene en el localStorage

}
