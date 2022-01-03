//recebi ajuda da Debora Serra turma 19 tribo B

let lista = document.querySelector('ol');
let botao = document.querySelector('#criar-tarefa');
let input = document.querySelector('input');
let botaoApagar = document.querySelector('#apaga-tudo');
let botaoRemover = document.querySelector('#remover-finalizados');

botao.addEventListener('click', recebeClik);
  function recebeClik(){
    let ordemLista = document.createElement('li');
    let valor = input.value;
    ordemLista.innerHTML = valor;
    lista.appendChild(ordemLista);
    input.value = ""; 
    ordemLista.addEventListener('click', corDoTexto);
    ordemLista.addEventListener('dblclick', riscaItem);
}
function corDoTexto(e){
  let descolorir = document.querySelectorAll('li');
  for(let i=0; i<descolorir.length; i+=1){
    descolorir[i].style.backgroundColor = 'rgb(255, 255, 255)';
  }
 e.target.style.backgroundColor = 'rgb(128, 128, 128)';
}
function riscaItem(e){
  e.target.classList.toggle('completed');
}

botaoApagar.addEventListener('click', apagaItem);
function apagaItem(){
  let apItem = document.querySelectorAll('li');
  for (let i=0; i<apItem.length; i+=1){
    lista.removeChild(apItem[i]);
  }

}

botaoRemover.addEventListener('click', removeItem);
function removeItem(){
  let reItem = document.querySelectorAll('li');
  for (let i=0; i<reItem.length; i+=1){
    if(reItem[i].classList.contains('completed')){
    lista.removeChild(reItem[i]);
    }
  }
}