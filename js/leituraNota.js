const notaContainer = document.querySelectorAll('.nota-container');
const opcaoControle = document.querySelectorAll('.opcaoControle');
const  claves = document.querySelectorAll('.clave');
const botao = document.querySelector('.botao-pronto');
const tempo = document.querySelector('.tempo');
const respostascerta = document.querySelector('.certos');
const respostaserrada = document.querySelector('.errados');
const selecioneClave = document.querySelector('.selecione-clave');
const jogar = document.querySelector('.jogar');
const claveEscolhida = document.querySelector('.clave-escolhida');
const result = document.querySelector('.result');
var claveChoose = document.createElement('img')
claveChoose.classList.add('img-fluid','w-25','imagemClave')

var resultado = -10
var opcao = -10
var transformar = null
var resposta = null
var aleatorio = 0
var difficulty = 150;
var notavalor = -10;
var respostasCertas=0;
var respostasErradas = 0
var time = 90


claves.forEach((element, index) => {
    element.addEventListener('click', () => {
        opcao = index;
        
        claves.forEach(btn => {
            btn.style.background = 'transparent';
        });
       
        element.style.background = 'rgba(0, 0, 0, 0.226)';
    });
});

botao.addEventListener('click', () => {
    resultado=opcao
    selecioneClave.style.display = 'none';
    jogar.style.display = 'block';
    switch(resultado){
        case 0:
            claveChoose.setAttribute('src',"../images/leitura_notas/sol0.png")
            break;
        case 1:
            claveChoose.setAttribute('src',"../images/leitura_notas/do.png")
            break;
        case 2:
            claveChoose.setAttribute('src',"../images/leitura_notas/fa0.png")
            break;
    }
    claveEscolhida.appendChild(claveChoose)
    comecarJogo()
})
notaContainer.forEach((element,index)=> {
  
    var nota = document.createElement('div');
    nota.classList.add('nota');
    element.appendChild(nota);
    // nota.style.display = 'none';

    if(index ==0 || index == 12){
        nota.classList.add('cortada')
    }
    nota.style.display = 'none';
});

var object = document.querySelectorAll('.nota')


function comecarJogo(){
    var y=-30
    aleatorio = Math.floor(Math.random()*12)
    var test= aleatorio
    object[aleatorio].style.display = 'flex'
    setInterval(() => {
        object[aleatorio].style.transform = `translateY(-${y+=30}px)`
        if(y>700){
            object[aleatorio].style.display = 'none'
            y=-90
            aleatorio = Math.floor(Math.random()*12)
            object[aleatorio].style.display = 'flex'
        }
    },difficulty);

//     setInterval(() => {
//     y=-30
//     aleatorio = Math.floor(Math.random()*12)
//     object[aleatorio].style.display = 'flex'
// }, 6500);

    opcaoControle.forEach((element)=>{
        element.addEventListener('click',()=>{
            resposta = opcaoControl(element)
            reconhecerClave()
        })
    })
    setInterval(() => {
        time--
        tempo.innerText = "Tempo: "+time
        if(time==0){
            jogar.style.display='none'
            result.style.display='flex'
        }
    },1000);
    
}
function opcaoControl(opcao){
    switch (opcao.innerText) {
        case "Dó":
            return 0
        case "Ré":
            return 1
        case "Mi":
            return 2
        case "Fá":
            return 3
        case "Sol":
            return 4
        case "Lá":
            return 5
        case "Si":
            return 6
        
    }
}
function reconhecerClave(){
    switch (aleatorio) {
        case 0:
            if(resultado==0){transformar= 0}
            if(resultado==1){transformar= 1}
            if(resultado==2){transformar= 2}
            break;
        case 1:
            if(resultado==0){transformar= 1}
            if(resultado==1){transformar= 2}
            if(resultado==2){transformar= 3}
            break;
        case 2:
            if(resultado==0){transformar= 2}
            if(resultado==1){transformar= 3}
            if(resultado==2){transformar= 4}
            break;
        case 3:
            if(resultado==0){transformar= 3}
            if(resultado==1){transformar= 4}
            if(resultado==2){transformar= 5}
            break;
        case 4:
            if(resultado==0){transformar= 4}
            if(resultado==1){transformar= 5}
            if(resultado==2){transformar= 6}
            break;
        case 5:
            if(resultado==0){transformar= 5}
            if(resultado==1){transformar= 6}
            if(resultado==2){transformar= 0}
            break;
        case 6:
            if(resultado==0){transformar= 6}
            if(resultado==1){transformar= 0}
            if(resultado==2){transformar= 1}
            break;
        case 7:
            if(resultado==0){transformar= 0}
            if(resultado==1){transformar= 1}
            if(resultado==2){transformar= 2}
            break;
        case 8:
            if(resultado==0){transformar= 1}
            if(resultado==1){transformar= 2}
            if(resultado==2){transformar= 3}
            break;
        case 9:
            if(resultado==0){transformar= 2}
            if(resultado==1){transformar= 3}
            if(resultado==2){transformar= 4}
            break;
        case 10:
            if(resultado==0){transformar= 3}
            if(resultado==1){transformar= 4}
            if(resultado==2){transformar= 5}
            break;
        case 11:
            if(resultado==0){transformar= 4}
            if(resultado==1){transformar= 5}
            if(resultado==2){transformar= 6}
            break;
        case 12:
            if(resultado==0){transformar= 5}
            if(resultado==1){transformar= 6}
            if(resultado==2){transformar= 0}
            break;
       
            
        
        
        
    }
    
    if(transformar == resposta){
        respostasCertas++
        respostascerta.innerText = "Certos: "+respostasCertas
    }
    else{
        respostasErradas++
        respostaserrada.innerText = "Erradas: "+respostasErradas
    }
}


