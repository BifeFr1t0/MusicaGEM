const formulaOpcao = document.querySelectorAll(".formula")
const valorOpcao = document.querySelectorAll(".valor")
const compasso = document.querySelectorAll(".compasso")
const valorSimplesComposto = document.querySelectorAll(".simples-composto")
const form = document.querySelector(".form")
const btn = document.querySelector(".botao-pronto")
const val = document.querySelector(".val")
const mov = document.querySelector(".mov")
const Qtime= document.querySelector(".tempo")
const jogar= document.querySelector(".jogar")
const menuPlacar= document.querySelector(".menu-placar")
const Qcertos = document.querySelectorAll(".certos")
const Qerrados = document.querySelectorAll(".errados")
opcaoFormula = null
opcaoValor = null
opcaoSimComp = null
var aleatorio = Math.floor(Math.random()*13)

var time= 90
var certos = 0
var errados = 0

var correctFormula = [2,0,0,0,1,1,1,2,2,0,0,1,2]
var correctSimplesComposto = [0,0,0,0,0,0,0,0,0,1,1,1,1]
var correctValor = [1,0,0,1,0,1,2,1,2,1,2,2,2]


finalForm = null
finalValor = null
finalSimC = null
formulaOpcao.forEach((element, index) => {
    element.addEventListener('click', () => {
        
        formulaOpcao.forEach(btn => {
            btn.classList.remove('active')
        });
       
        element.classList.add('active')
        opcaoFormula = index;
        form.innerText = element.innerText
    });
});
valorOpcao.forEach((element, index) => {
    element.addEventListener('click', () => {
        valorOpcao.forEach(btn => {
            btn.classList.remove('active')
        });
       
        element.classList.add('active')
        opcaoValor = index;
        mov.innerText = element.innerText
    });
});
valorSimplesComposto.forEach((element, index) => {
    element.addEventListener('click', () => {

        valorSimplesComposto.forEach(btn => {
            btn.classList.remove('active')
        });
       
        element.classList.add('active')
        opcaoSimComp = index;
        val.innerText = element.innerText
    });
});

btn.addEventListener('click', () => {
    finalForm = opcaoFormula
    finalValor = opcaoValor
    finalSimC = opcaoSimComp

    if(correctFormula[aleatorio] == finalForm && correctSimplesComposto[aleatorio] == finalSimC && correctValor[aleatorio] == finalValor){
        certos++
        Qcertos[0].innerText = "Certos: "+certos
        continueJogo()
    }
    else{
        errados++
        Qerrados[0].innerText = "Errados: "+errados
        continueJogo()
    }
    form.innerText = ""
    val.innerText = ""
    mov.innerText = ""
})
function continueJogo(){
    compasso[aleatorio].style.display = "none";
    aleatorio = Math.floor(Math.random()*13)
    compasso[aleatorio].style.display = "block";
}
function comecarJogo(){
    setInterval(() => {
        time--
        Qtime.innerText = "Tempo: "+time
        if(time==0){
            jogar.style.display = "none"
            menuPlacar.style.display = "block"
            Qcertos[1].innerText = "Certos: "+certos
            Qerrados[1].innerText = "Errados: "+errados
        
        }
    }, 1000);

    compasso[aleatorio].style.display = "block";
    
}
comecarJogo()
