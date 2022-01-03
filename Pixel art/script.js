//Recebi ajuda da Debora Serra tb
let cores = document.querySelectorAll('.color');
cores[0].style.backgroundColor = 'black'
cores[1].style.backgroundColor = 'DeepSkyBlue'
cores[2].style.backgroundColor = 'yellow'
cores[3].style.backgroundColor = 'pink'

  for (let i=0; i<cores.length; i+=1){
    let findColor = cores[i];
    findColor.addEventListener('click', clicando)
  } 
  function clicando(e){
    let corSelected = document.querySelector('.selected');
    corSelected.classList.remove('selected');
    e.target.classList.add('selected');
  }
// a cor selecionada passa para o quadradinho qndo clicar
  //todos os qdradinhos escutem o click
    //chamar os quadradinhos
  let quadradinho = document.querySelectorAll('.pixel');
    //um for pra passar neles
  for (let i=0; i<quadradinho.length; i+=1){
    quadradinho[i].addEventListener('click', pixelClik);
  }
    //add o auscutador de evento
  function pixelClik(e){
    let receberCor = document.querySelector('.selected').style.backgroundColor;
  //fazer o quadradinho clicado receber a cor selecionada
  //chamar a cor selecionada
  //fazer uma condicicao 
  //comparar se as cores sao diferentes, se for recebe a cor selecionada
  if (e.target.style.backgroundColor !== receberCor){
    e.target.style.backgroundColor = receberCor
  } else if(e.target.style.backgroundColor === receberCor){
    e.target.style.backgroundColor = 'white';
  }
  //se nao for recebe branco  
  }
  let bottun = document.querySelector('#clear-board');
  bottun.addEventListener('click', bottunClik);
  function bottunClik(){
    let myPixel = document.querySelectorAll('.pixel');
    for (let i=0; i<myPixel.length; i+=1){
      myPixel[i].style.backgroundColor = 'white';
    }

  } 