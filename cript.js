// seleções de elementos
const texto = document.querySelector('#text');
const select = document.querySelector('#tipo');
const codi = document.querySelector('#codificar');
const decodi = document.querySelector('#decodificar');
const divChave = document.querySelector('#chave');
const chave = document.querySelector('.chave-input');
const resul = document.querySelector('.resultado');
const btn = document.querySelector('.btn-cript');

//funções
function toggleCesar(e){ //aparecer e desaparecer a chave
    const valor = select.value;
    if(valor === "cifra_de_cesar"){
        divChave.style.display = 'block'
    }else{
        divChave.style.display = "none"
    }
}

function codificar(e){
    e.preventDefault();
    const valor = texto.value.toUpperCase().split('');
    const chaveCesar = +chave.value;
    let total = []
    if(texto.value === ''){
        return false
    }
    if(select.value === "cifra_de_cesar" && codi.checked){//loop
        valor.forEach(function(letra){
            const codASC = letra.charCodeAt()//codigo asc
            const resultado = ((codASC -65 + chaveCesar) % 26) + 65;
            total.push(String.fromCharCode(resultado))
        })
    } else if(select.value === "cifra_de_cesar" && decodi.checked){//para descodificar eu só mudei o perador para que ele fizesse a função contraria..
        valor.forEach(function(letra){
            const codASC = letra.charCodeAt()//codigo asc
            const resultado = ((codASC +65 - chaveCesar) % 26) + 65;
            total.push(String.fromCharCode(resultado))
        })
    }
    return resul.value = total.join('')//aparecer o resultado, o join é para junta a arry a uma string...
}


//eventos
select.addEventListener('change', toggleCesar)
btn.addEventListener("click", codificar)