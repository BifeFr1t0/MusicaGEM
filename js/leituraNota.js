const notaContainer = document.querySelectorAll('.nota-container');
const opcaoControle = document.querySelectorAll('.opcaoControle');
const claves = document.querySelectorAll('.clave');
const botao = document.querySelector('.botao-pronto');
const tempo = document.querySelector('.tempo');
const respostasCerta = document.querySelectorAll('.certos');
const respostasErrada = document.querySelectorAll('.errados');
const selecioneClave = document.querySelector('.selecione-clave');
const jogar = document.querySelector('.jogar');
const result = document.querySelector('.menu-placar');
const imagemClave = document.querySelectorAll('.imagemClave');
const diff = document.querySelectorAll('.dificuldade')

let resultado = -10;
let resultadoDiff = -10;
let opcao = -10;
let transformar = null;
let resposta = null;
let aleatorio = 0;
let difficulty = 120;
let respostasCertas = 0;
let respostasErradas = 0;
let time = 90;
let alreadyPlayed = false;
let opcaoDiff = -10
let certo = false


claves.forEach((element, index) => {
    element.addEventListener('click', () => {
        opcao = index;

        claves.forEach(btn => {
            btn.style.background = 'transparent';
        });

        element.style.background = 'rgba(0, 0, 0, 0.226)';
    });
});
diff.forEach((element, index) => {
    element.addEventListener('click', () => {
        opcaoDiff = index;

        diff.forEach(btn => {
            btn.style.outline = 'transparent';
        });

        element.style.outline = '4px solid rgba(0, 0, 0, 0.5)';
    });
});

botao.addEventListener('click', () => {
    resultado = opcao;
    resultadoDiff = opcaoDiff;
    if(resultado != -10 && resultadoDiff != -10){
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
    switch (resultadoDiff) {
        case 0:
            difficulty= 120
            break;
    
        case 1:
            difficulty= 60
            break;
    }
    
    comecarJogo();
}
});

notaContainer.forEach((element, index) => {
    let nota = document.createElement('div');
    nota.classList.add('nota');
    element.appendChild(nota);

    if (index === 0 || index === 12) {
        nota.classList.add('cortada');
    }
    nota.style.display = 'none';
});

const object = document.querySelectorAll('.nota');

function comecarJogo() {
    let y = -30;
    aleatorio = Math.floor(Math.random() * 12);

    object[aleatorio].style.display = 'flex';
    setInterval(() => {
        if(alreadyPlayed && certo){
            object[aleatorio].classList.add('gif')
            setTimeout(() => {
                object[aleatorio].style.display = 'none'
                y = -30;
                alreadyPlayed = false;
                
                object[aleatorio].classList.remove('gif')
                aleatorio = Math.floor(Math.random() * 12);
                object[aleatorio].style.display = 'flex';
                
            },280);
        }
    
    },350);
    setInterval(() => {
        
        object[aleatorio].style.transition = `all 0.4s`;

        if (y > 1000) {
            object[aleatorio].style.display = 'none';
            
            y = -30;
            object[aleatorio].classList.remove('gif')
            alreadyPlayed = false;
            aleatorio = Math.floor(Math.random() * 12);
            object[aleatorio].style.display = 'flex';
        }
        
        if(y == -30){
            object[aleatorio].style.transition = `all 0s`;
        }
        object[aleatorio].style.transform = `translateY(-${y += 30}px)`;
    }, difficulty);

    opcaoControle.forEach((element) => {
        element.addEventListener('click', () => {
            resposta = opcaoControleClick(element);
            reconhecerClave();
        });
    });

    setInterval(() => {
        time--;
        tempo.innerText = "Tempo: " + time;
        if (time === 0) {
            jogar.style.display = 'none';
            result.style.display = 'block';
            respostasErrada[1].innerText = "Erradas: " + respostasErradas;
            respostasCerta[1].innerText = "Certos: " + respostasCertas;
        }
    }, 1000);
}

function opcaoControleClick(opcao) {
    switch (opcao.innerText) {
        case "Dó":
            return 0;
        case "Ré":
            return 1;
        case "Mi":
            return 2;
        case "Fá":
            return 3;
        case "Sol":
            return 4;
        case "Lá":
            return 5;
        case "Si":
            return 6;
    }
}

function reconhecerClave() {
    switch (aleatorio) {
        case 0:
        case 7:
            transformar = resultado === 0 ? 0 : resultado === 1 ? 1 : 2;
            break;
        case 1:
        case 8:
            transformar = resultado === 0 ? 1 : resultado === 1 ? 2 : 3;
            break;
        case 2:
        case 9:
            transformar = resultado === 0 ? 2 : resultado === 1 ? 3 : 4;
            break;
        case 3:
        case 10:
            transformar = resultado === 0 ? 3 : resultado === 1 ? 4 : 5;
            break;
        case 4:
        case 11:
            transformar = resultado === 0 ? 4 : resultado === 1 ? 5 : 6;
            break;
        case 5:
        case 12:
            transformar = resultado === 0 ? 5 : resultado === 1 ? 6 : 0;
            break;
        case 6:
            transformar = resultado === 0 ? 6 : resultado === 1 ? 0 : 1;
            break;
    }

    if (!alreadyPlayed) {
        if (transformar === resposta) {
            respostasCertas++;
            respostasCerta[0].innerText = "Certos: " + respostasCertas;
            alreadyPlayed = true;
            certo = true
        } else {
            respostasErradas++;
            respostasErrada[0].innerText = "Erradas: " + respostasErradas;
            certo = false
            alreadyPlayed = true;
        }
    }
}
