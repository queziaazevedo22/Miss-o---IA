const caixaprincipal = document.querySelector(".caixa-principal");
const caixaperguntas = document.querySelector(".caixa-perguntas");
const caixaalternativas = document.querySelector(".caixa-alternativas");
const caixaresultado = document.querySelector(".caixa-resultado");
const textoresultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Pergunta 1",
        alternativas: [
            "alternativa 1",
            "alternativa 2"
        ]
    },
    {
        enunciado: "Pergunta 2",
        alternativas: [
            "alternativa 1",
            "alternativa 2"
        ]
    }
    {
        enunciado: "Pergunta 3",
        alternativas: [
            "alternativa 1",
            "alternativa 2"
        ]
    },
    {
        enunciado: "Pergunta 4",
        alternativas: [
            "alternativa 1",
            "alternativa 2"
        ]
    },
];

let atual = 0;
let perguntaatual;

function mostrapergunta() {
    perguntaatual = perguntas[atual];
    caixaperguntas.textContent = perguntaatual.enunciado;
    mostraalternativas();
}

function mostrapergunta() {
    for(const alternativa of perguntaatual.alternativas) {
        const botaalternativas = document.createElement("button");
        botaoalternativas.textContent = alternativa;
        
    }
}

mostrapergunta();