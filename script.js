// Elemenos do DOM
const musicForm=document.getElementByld('musicForm');
const musicTableBody = document.querySelector('#musicTable tbody');
const exportBtn = document.getElementByld(exportBtn);

//Função para adicionar uma linha na tabela
musicForm.addEventListener('submit',function(event) {
     event.preventDefault();
     const numero = document.getElementByld('numero').value;
     const musica = document.getElementByld('musica').value;
     const genero = document.getElementByld('genero').value;
     const cantor = document.getElementByld('cantor').value;
     const autoria = document.getElementByld('autoria').value;

     const newRow = document.createElement('tr');
     newRow.innerHTML =
     <td>${numero}</td>
     <td>${musica}</td>
     <td>${genero}</td>
     <td>${cantor}</td>
     <td>${autoria}</td>