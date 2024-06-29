const redirectLink = document.querySelectorAll('.redirect');

redirectLink.forEach((element,index)=>{
    switch(index){
        case 0:
            element.addEventListener('click',()=>{
                window.location.href = 'treino-tonalidade.html';
            })
            break;
        case 1:
            element.addEventListener('click',()=>{
                window.location.href = 'leitura-notas.html';
            })
            break;
        case 2:
            element.addEventListener('click',()=>{
                window.location.href = 'leitura-compasso.html';
            })
            break;
        case 3:
            element.addEventListener('click',()=>{
                window.location.href = 'https://congregacaocristanobrasil.org.br/musica/msa';
            })
            break;
    }
    

})

