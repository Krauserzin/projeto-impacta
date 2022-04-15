$(document).ready(function(){

    //:gt(0) seleciona todos os elementos que não estão na primeira posição
    $('#carousel > img:gt(0)').hide();
        
    setInterval(function(){
      $('#carousel > img:first')
        .fadeOut(1000)
        //next() se começarmos no primeiro item podemos encontrar o elemento seguinte
        .next()
        .fadeIn(1000)
        // fadeIn() é um método do jQuery que faz o elemento aparecer 
        .end()
        //end()retorna a ação para o elemento anterior
        .appendTo('#carousel');
        //appendTo() adiciona o elemento selecionado ao final do carousel
    }, 3000);
    
 });

