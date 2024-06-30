const notaContainer = document.querySelectorAll('.nota-container');
const opcaoControle = document.querySelectorAll('.opcaoControle');
const  claves = document.querySelectorAll('.clave');
const botao = document.querySelector('.botao-pronto');
const tempo = document.querySelector('.tempo');
const respostascerta = document.querySelectorAll('.certos');
const respostaserrada = document.querySelectorAll('.errados');
const selecioneClave = document.querySelector('.selecione-clave');
const jogar = document.querySelector('.jogar');
const claveEscolhida = document.querySelector('.clave-escolhida');
const result = document.querySelector('.menu-placar');
const imagemClave = document.querySelectorAll('.imagemClave')


var resultado = -10
var opcao = -10
var transformar = null
var resposta = null
var aleatorio = 0
var difficulty = 120;
var notavalor = -10;
var respostasCertas=0;
var respostasErradas = 0
var time = 90
var alreadyPlayed = 0

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
    switch (resultado) {
        case 0:
            imagemClave[0].style.display = 'block';
            break;
        case 1:
            imagemClave[1].style.display = 'block';
            break;
        case 2:
            imagemClave[2].style.display = 'block';
            break;
    }
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
    
    object[aleatorio].style.display = 'flex'
    setInterval(() => {
        if(y>1000){
            object[aleatorio].style.display = 'none'
            y=-30
            object[aleatorio].style.transition = `all 0s`
            object[aleatorio].style.transform = `translateY(-${y+=30}px)`
            object[aleatorio].style.transition = `all 0.4s`
            aleatorio = Math.floor(Math.random()*12)
            alreadyPlayed=false
            object[aleatorio].style.display = 'flex'
        }
        object[aleatorio].style.transform = `translateY(-${y+=30}px)`
        
    },difficulty);

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
            result.style.display='block'
            respostaserrada[1].innerText = "Erradas: "+respostasErradas
            respostascerta[1].innerText = "Certos: "+respostasCertas
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
    if(alreadyPlayed==false){
        if(transformar == resposta){
            respostasCertas++
            respostascerta[0].innerText = "Certos: "+respostasCertas
            alreadyPlayed=true
        }
        else{
            respostasErradas++
            respostaserrada[0].innerText = "Erradas: "+respostasErradas
            alreadyPlayed=true
        }
    }
    
}


