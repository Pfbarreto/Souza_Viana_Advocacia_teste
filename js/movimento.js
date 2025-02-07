const elements = document.querySelectorAll('.movimento') 

const my_observer= new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if (entry.isIntersecting){
            entry.target.classList.add('show')
        } else{
            entry.target.classList.remove('show')
        }
    })

})

elements.forEach((element)=> my_observer.observe(element)) 


/**/


const N_formulario = document.querySelectorAll('.estaticox');
const formulario = document.querySelector('.secao_formulario');
const indo_formulario = document.querySelectorAll('.indo_para_formulario');
const bt_voltar = document.querySelector('.voltar_pagina');

function sumindo_pagina() {
    N_formulario.forEach(element => element.classList.add("sumindo"));
    formulario.classList.remove("sumindo");
}

indo_formulario.forEach(botao => botao.addEventListener("click",sumindo_pagina));

function voltar_pagina() {
    N_formulario.forEach(element => element.classList.remove("sumindo"));
    formulario.classList.add("sumindo")
    
}

bt_voltar.addEventListener("click",voltar_pagina);