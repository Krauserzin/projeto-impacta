var titulo = document.getElementById('titulo');
//titulo.contextContent ='Lista de Atletas';

//acesso do elemento por classes
//var titulo2 = document.getElementById('title');
//acessa o elemento por nome de tag, id com #, ou classe com ou classe
//var titulo3 = document.querySelector('#titulo')

titulo.txtcontent = 'lista de atletas';

var botaoAdicionaAtleta = document.getElementById('inserir');

botaoAdicionaAtleta.addEventListener('click', function (e) {
  //previne o comportamento padrão
  e.preventDefault();

  //acessando o form
  var form = document.querySelector('#registro');

  //pegar e guardar o valor de cada input 
  var nome = form.nome.value;
  var idade = form.idade.value;
  var modalidade = form.modalidade.value;
  var pontos = form.pontos.value;

  //criar atleta tr
  var atletaTr = document.createElement('tr');

  //criar as tds
  var nomeTd = document.createElement('td');
  var idadeTd = document.createElement('td');
  var modalidadeTd = document.createElement('td');
  var pontosTd = document.createElement('td');

  //document.querySelectorAll('.error').forEach(element => element.remove());

  removeElementError();

  if (nome == '' || idade == '' || modalidade == '' || pontos == '') {
    messageError('Não pode inserir dado com campo vazio');

  } else if (pontos < 0 || idade <0){ 
    messageError('Não aceita numeros negativos');
    
  }
  
  else if (pontos <= 100) {
    //vamos inserir dados na tabela
    nomeTd.textContent = nome;
    idadeTd.textContent = idade;
    modalidadeTd.textContent = modalidade;
    pontosTd.textContent = pontos;

    // montar as tds na tr
    atletaTr.appendChild(nomeTd);
    atletaTr.appendChild(idadeTd);
    atletaTr.appendChild(modalidadeTd);
    atletaTr.appendChild(pontosTd);

    //acessa a tabela de atletas
    var tabelaAtletas = document.getElementById('tabela-atletas');

    // insere a tr com tds, na tbody
    tabelaAtletas.appendChild(atletaTr);

    form.reset();

  } else if (pontos > 100) {
    // não pode inserir e deve avisar o usuário

    messageError('A pontuação não deve ser maior que 100');
  }

  //funcao de mensagem de erro
  function messageError(textError) {
    var spanError = document.createElement('span');
    spanError.textContent = `${textError}`;
    spanError.classList.add('error');

    var inError = document.getElementById('pontos');
    inError.after(spanError);
  }

  //função remove o elemento de erro
  function removeElementError() {
    var removeError = document.querySelector('.error');
    if (removeError != null) {
      removeError.remove();
    }
  }

});