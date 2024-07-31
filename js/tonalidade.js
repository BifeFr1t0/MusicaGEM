const claveOpcao = document.querySelectorAll('.option');
const botao = document.querySelector('.botao-pronto');
const dClave = document.querySelector('.select-clave');
const oControle = document.querySelectorAll('.opcaoControle');
const body = document.querySelector('body')
const resposta = document.querySelector('.resposta')
const claveResposta = document.querySelector('.clave-resposta')
const maior = document.querySelector('.maior')
const optionDo = document.querySelectorAll('.do')
const optionSol = document.querySelectorAll('.sol')
const optionFa = document.querySelectorAll('.fa')
const pontosCertos = document.querySelector('.pontos-certos')
const pontosErrados = document.querySelector('.pontos-errados')
const tempo = document.querySelector('.tempo')
const containerControle = document.querySelector('.container-controle')
const menuBack = document.querySelector('.menu-back')

var time = 90;
var opcao = 0;
var resultado = 0;
var isBemol = false
var isSustenido = false
var respostasCertas = 0;
var respostasErradas =0


var aleatorio = Math.floor(Math.random()*15);
function chamarClave(){
    aleatorio = Math.floor(Math.random()*15);
    // console.log(aleatorio)
    switch (resultado) {
        case 0:
            optionSol[aleatorio].style.display = 'flex';
            break;
        case 1:
            optionDo[aleatorio].style.display = 'flex';
            break;
        case 2:
            optionFa[aleatorio].style.display = 'flex';
            break;
        
    }
}

function reconhecerClave(){
    switch(claveResposta.innerText){ 
        case 'Dó':
            return 0;
        case 'Sol':
            return 1;
        case 'Ré':
            return 2;
        case 'Lá':
            return 3;
        case 'Mi':
            return 4;
        case 'Si':
            return 5;
        case 'Fá#':
            return 6;
        case 'Dó#':
            return 7;
        case 'Fá':
            return 8;
        case 'Sib':
            return 9;
        case 'Mib':
            return 10;
        case 'Láb':
            return 11;
        case 'Réb':
            return 12;
        case 'Solb':
            return 13;
        case 'Dób':
            return 14;
        
    }
}
function continuarJogo(){
    if(reconhecerClave() == aleatorio){
        respostasCertas++;
        pontosCertos.innerText = "Certos: " + respostasCertas;
    }
    else{
        respostasErradas++;
        pontosErrados.innerText = "Errados: " + respostasErradas;
    }
    switch (resultado) {
        case 0:
            optionSol[aleatorio].style.display = 'none';
            break;
    
        case 1:
            optionDo[aleatorio].style.display = 'none';
            break;
    
        case 2:
            optionFa[aleatorio].style.display = 'none';
            break;
    }
    
    chamarClave()
}
function iniciarTempo(){
    var interval = setInterval(() => {
        time--;
        tempo.innerText = "Tempo: " + time;
        if(time==0){
            clearInterval(interval);
            oControle.forEach(btn => {
                btn.style.display = 'none';
            });
            optionDo[aleatorio].style.display = 'none';
            optionSol[aleatorio].style.display = 'none';
            optionFa[aleatorio].style.display = 'none';
            resposta.style.display = 'none';
            containerControle.style.fontSize = "5vw";
            containerControle.style.margin = "5px";
            menuBack.style.display = 'flex';
        }
    }, 1000);
    
}
claveOpcao.forEach((element, index) => {
    element.addEventListener('click', () => {
        opcao = index;
        
        claveOpcao.forEach(btn => {
            btn.style.background = 'transparent';
        });
       
        element.style.background = 'rgba(0, 0, 0, 0.226)';
    });
});


botao.addEventListener('click', () => {
    setTimeout(() => {
        resultado = opcao;
        dClave.style.display = 'none'
        resposta.style.display='flex'
        containerControle.style.display='flex'
        body.style.writingMode = 'vertical-lr'
        oControle.forEach(btn => {
            btn.style.display = 'flex';
        });
        chamarClave()
        iniciarTempo()
    }, 150);
    
    
    
});

oControle.forEach((element)=>{
    element.addEventListener('click',()=>{
        
        if(element.innerText === 'b' && (claveResposta.innerText != '')){
            if(!isBemol){claveResposta.innerHTML += element.innerText; isBemol=true}
            
        }
        if(element.innerText === '#' && (claveResposta.innerText == 'Dó' || claveResposta.innerText == 'Fá')){
            if(!isSustenido){claveResposta.innerHTML += element.innerText; isSustenido=true}
            
        }
        else{
            if(element.innerText != 'OK' && element.innerText != 'b'){
                isBemol = false
                isSustenido = false
                claveResposta.innerHTML = element.innerText
            }
        }
        if(element.innerText != ''){
            maior.style.display = 'flex';
        }
        if(element.innerText =='OK'){
            continuarJogo()
        }
    })
})
