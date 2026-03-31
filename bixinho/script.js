const bicho = document.getElementById("bicho");
const btn = document.getElementById("btn");
const fundo = document.getElementById("fundo");

const estados = {
    normal: "c.png",
    clicado: "cc.png",
    feliz: "csf.png",
    fome: "coelhob.png",
    morto: "cm.png"
};

let contador = 0;
let intervalo = null;
let timeClick = null;
let timeOut = null;
let vivo = true;

function trocarFundo(novaImagem) {
    fundo.classList.add("trocando");

    setTimeout(() => {
        fundo.src = novaImagem;
        fundo.classList.remove("trocando");
    }, 800);
}

function iniciarTempo() {
    if (intervalo) clearInterval(intervalo);

    intervalo = setInterval(() => {
        contador++;
        console.log("Tempo:", contador);

        if (contador === 10) {
            bicho.src = estados.fome;
            trocarFundo("casa.png");
        }

        if (contador === 30) {
            bicho.src = estados.morto;
            trocarFundo("cemiterio.jpeg");
            vivo = false;
            clearInterval(intervalo);
            console.log("O coelho morreu 😢");
        }
    }, 1000);
}

function alimentar() {
    if (!vivo) {
        alert("Seu coelho morreu 😢");
        return;
    }

    bicho.src = estados.clicado;
    trocarFundo("casa.png");

    contador = 0;

    if (intervalo) clearInterval(intervalo);
    iniciarTempo();

    if (timeClick) clearTimeout(timeClick);
    if (timeOut) clearTimeout(timeOut);

    timeClick = setTimeout(() => {
        bicho.src = estados.feliz;

        timeOut = setTimeout(() => {
            bicho.src = estados.normal;
            trocarFundo("casa.png");
        }, 2000);
    }, 500);
}

btn.addEventListener("click", alimentar);

bicho.src = estados.normal;
fundo.src = "casa.png";
iniciarTempo();