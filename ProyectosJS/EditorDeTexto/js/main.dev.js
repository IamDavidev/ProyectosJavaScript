'use strict';

const texto = document.querySelector('#editor')

const vista = document.querySelector('#vista')

const codigo = ()=>{

    vista.srcdoc = texto.value

}



