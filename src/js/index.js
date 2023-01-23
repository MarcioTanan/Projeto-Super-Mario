//Objetiv1o

// passo 1 - dar um jeito de pegar o elemento que representa o botão na tela usando o js
const botaoTrailer = document.querySelector(".botao-trailer");


//passo 2 - dar um jeito de identificar quando o usuário clicar no botão
botaoTrailer.addEventListener("click", () => {
  
//passo 4 - abrir modal
  modal.classList.add("aberto");
});


//passo 3 - dar um jeito de pegar o elemento da modal no js
const modal = document.querySelector(".modal");



//Objetivo 2


//passo 1 - dar um jeito de pegar o elemento de fechar modal usando js
const botaoFecharModal = document.querySelector(".fechar-modal");

//passo 2 - dar um jeito de identificar quando o usuário clicar no x
botaoFecharModal.addEventListener("click", () => {
  //passo 3 - fechar a modal
  modal.classList.remove("aberto");
})