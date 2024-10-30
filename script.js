 // Elementos do DOM
 const musicForm = document.getElementByld('musicForm');
 const musicTableBody = document.querySelector('#musicTable tbody');
 const exportBtn = document.getElementById('exportBtn');

  //Função para adicionar uma linha na tabela
musicForm.addEventListener('submit',function(event){
    event.preventDefault();

    const numero = document.getElementById('numero').Value;
    const musica = document.getElementById('musica').Value;
    const genero = document.getElementById('genero').Value;
    const cantor = document.getElementById('cantor').Value;
    const autoria = document.getElementById('autoria').Value;

    const newRow = document.createElement('tr');
    newRow.innerHTML =
      <td>$(numero)</td>
      <td>$(musica)</td>
      <td>$(genero)</td>
      <td>$(cantor)</td>
      <td>$(autoria)</td>
    ´;

    musicTableBody.appendChild(newRow);

    // limpar o formulário
    musicForm.reset();
  });

  //Função para exportar a tabela como planilha dinâmica
  exportBtn.addEventListener('click',function(){
    const tableRows = document.querySelectorAll('#musicTable tr')
    const csvContent = [];

    //Extrair dados da tabela
    tableRows.forEach(row => {
      const rowData