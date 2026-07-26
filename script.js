// ==============================
// SIMULADO CTFL
// ==============================

const app = document.getElementById("app");
let questoesSimulado = [];
let paginaAtual = 0;
let respostas = {};
let mostrandoCorrecao = false;
let paginasCorrigidas = [];
let questoesErradas = [];
let modoRevisao = false;

mostrarTelaInicial();

function mostrarTelaInicial() {

    const progresso = localStorage.getItem("progressoCTFL");

    app.innerHTML = `
  
        <div class="container">

            <div class="card">

                <h1>Simulado Foundation Level (CTFL)</h1>

                <p class="descricao-inicial">
                    Prepare-se para a prova resolvendo questões
                    semelhantes ao exame oficial.
                </p>

                <button id="btnIniciar" ${progresso ? "disabled" : ""}>
                    Iniciar Simulado
                </button>

                <button id="btnContinuar" ${!progresso ? "disabled" : ""}>
                    Continuar Simulado
                </button>

                ${!progresso ? 
                "<small>Nenhum simulado salvo encontrado.</small>" 
                : 
                "<small>Existe um simulado em andamento!</small>"
                }

                <button id="btnNovo" ${!progresso ? "disabled" : ""}>
                    Novo Simulado
                </button>


                <div class="espaco-menu"></div>


                <button id="btnMaterial">
                    📚 Material de Estudo
                </button>

                <button id="btnGlossario">
                    📖 Glossário de Termos de Teste
                </button>

            </div>

        </div>

    `;

    
    document
    .getElementById("btnIniciar")
    .addEventListener("click", iniciarSimulado);

    document
    .getElementById("btnContinuar")
    .addEventListener("click", continuarSimulado);

    document
    .getElementById("btnNovo")
    .addEventListener("click", novoSimulado);

    document
    .getElementById("btnMaterial")
    .addEventListener("click", mostrarMaterial);

    document
    .getElementById("btnGlossario")
    .addEventListener("click", mostrarGlossario);

    document
    .getElementById("btnGlossario")
    .addEventListener("click",mostrarGlossario);

}

// ESTA FUNÇÃO FICA AQUI
function iniciarSimulado(){

    questoesSimulado = embaralhar(questoes).slice(0, 40);

    paginaAtual = 0;

    respostas = {};

    salvarProgresso();

    mostrarPagina();

}

function mostrarPagina() {

    const inicio = paginaAtual * 10;
    const fim = inicio + 10;

    const questoesPagina = questoesSimulado.slice(inicio, fim);
    const totalPaginas = Math.ceil(questoesSimulado.length / 10);

    const totalRespondidas = Object.keys(respostas).length;

    const percentual =
    (totalRespondidas / questoesSimulado.length) * 100;

    let html = `

        <div class="container">

            <div id="areaSimulado" class="card">

                <h1>Simulado CTFL</h1>

            <p>
                Página ${paginaAtual + 1} de ${totalPaginas}
            </p>

            <div class="progresso-container">

                <div class="progresso-texto">

                    Progresso do Simulado

                </div>

                <div class="barra-progresso">

                    <div
                        class="barra-preenchimento"
                        style="width:${percentual}%;">
                    </div>

                </div>

                <div class="progresso-info">

                    ${totalRespondidas} de ${questoesSimulado.length}
                    questões respondidas (${percentual.toFixed(0)}%)

                </div>

            </div>

    `;

    questoesPagina.forEach((questao, indice) => {

        html += `

            <div class="questao">

                <h3>${inicio + indice + 1}. ${questao.pergunta}</h3>

        `;

        questao.opcoes.forEach((opcao) => {

    const letra = opcao.charAt(0);

    let classe = "";


    if (mostrandoCorrecao) {

        if (letra === questao.correta) {

            classe = "correta";

        }


        if (
            letra === respostas[questao.id] &&
            respostas[questao.id] !== questao.correta
        ) {

            classe = "errada";

        }

    }


    html += `

        <label
        id="opcao-${questao.id}-${letra}"
        class="opcao ${classe}">

        <input
            type="radio"
            name="${questao.id}"
            value="${letra}"
            ${respostas[questao.id] === letra ? "checked" : ""}
            ${mostrandoCorrecao ? "disabled" : ""}
            onchange="salvarResposta('${questao.id}', '${letra}')">

        ${opcao}

        </label>

    `;

});

        html += `
            
            <div id="explicacao-${questao.id}"></div>
            
            </div>

            

        `;

    });

    html += `

            <div class="botoes">

            <button id="btnAnterior" ${paginaAtual === 0 ? "disabled" : ""}>
            ⬅ Página Anterior
            </button>


            <button id="btnResultado">
            📊 Resultado
            </button>


            ${
            paginaAtual === totalPaginas - 1
            ?
            `
            <button
                id="btnFinalizar"
                disabled
            >
                🏁 Finalizar Simulado
            </button>
            `
            :
            `
            <button
                id="btnProxima"
                disabled
            >
                Próxima ➡
            </button>
            `
            }


            <button id="btnInicio">
            🏠 Página Inicial
            </button>


            </div>


            <!-- Resultado fica separado dos botões -->
            <div id="resultado"></div>


            </div>

        </div>

`;

    app.innerHTML = html;

    const questoesDaPagina = questoesSimulado.slice(inicio, fim);

    const todasRespondidas = questoesDaPagina.every(
        questao => respostas[questao.id]
    );

    const btnProximaAtual = document.getElementById("btnProxima");

    if(btnProximaAtual){

        btnProximaAtual.disabled = false;

    }

    // Verifica se TODAS as questões do simulado foram respondidas
    const todasRespondidasSimulado =
        Object.keys(respostas).length === questoesSimulado.length;

    const btnFinalizarAtual = document.getElementById("btnFinalizar");

    if(btnFinalizarAtual){

        btnFinalizarAtual.disabled = !todasRespondidasSimulado;

    }
    

    const btnProxima = document.getElementById("btnProxima");

    if(btnProxima){

        btnProxima.addEventListener("click", proximaPagina);

    }

    const btnFinalizar = document.getElementById("btnFinalizar");

    if(btnFinalizar){

        btnFinalizar.addEventListener("click", finalizarSimulado);

    }

    document
    .getElementById("btnAnterior")
    .addEventListener("click", paginaAnterior);

    document
.getElementById("btnResultado")
.addEventListener("click", function(e){

    e.preventDefault();

    this.blur();


    // Guarda posição atual da tela
    const scrollAtual = window.scrollY;


    const validou = mostrarCorrecao();


    if(validou){

        mostrarResultado();


        // Aguarda o HTML atualizar
        requestAnimationFrame(() => {

        document
        .getElementById("resultado")
        .scrollIntoView({
            behavior:"smooth",
            block:"start"
        });

    });

    }

});

    document
    .getElementById("btnInicio")
    .addEventListener("click", mostrarTelaInicial);

}

function embaralhar(lista){

    const copia = [...lista];

    for(let i = copia.length - 1; i > 0; i--){

        const j = Math.floor(Math.random() * (i + 1));

        [copia[i], copia[j]] = [copia[j], copia[i]];

    }

    return copia;

}

function proximaPagina(){

    const inicio = paginaAtual * 10;
    const fim = inicio + 10;

    const questoesDaPagina = questoesSimulado.slice(inicio, fim);

    let questoesPendentes = [];


    questoesDaPagina.forEach((questao, indice)=>{

        if(!respostas[questao.id]){

            questoesPendentes.push(inicio + indice + 1);

        }

    });


    if(questoesPendentes.length > 0){

        alert(
            `⚠️ Responda todas as questões desta página antes de continuar.\n\nQuestões pendentes: ${questoesPendentes.join(", ")}`
        );

        return;

    }


    // Sai do modo correção ao mudar de página
    mostrandoCorrecao = paginasCorrigidas[paginaAtual + 1] || false;


    paginaAtual++;

    salvarProgresso();

    mostrarPagina();

}


function finalizarSimulado(){

    let acertos = 0;
    let erros = 0;

    questoesSimulado.forEach((questao)=>{

        if(respostas[questao.id] === questao.correta){

            acertos++;

        }else{

            erros++;

        }

    });

    const total = questoesSimulado.length;

    const percentual = ((acertos / total) * 100).toFixed(1);

    let situacao = "";
    let cor = "";

    if(percentual >= 70){

        situacao = "✅ APROVADO";
        cor = "#2ecc71";

    }else{

        situacao = "❌ REPROVADO";
        cor = "#e74c3c";

    }

    app.innerHTML = `

    <div class="container">

        <div class="card">

            <h1>🎉 Simulado Finalizado</h1>

            <hr>

            <h2>Resultado Final</h2>

            <p><strong>Total de Questões:</strong> ${total}</p>

            <p><strong>✅ Acertos:</strong> ${acertos}</p>

            <p><strong>❌ Erros:</strong> ${erros}</p>

            <p><strong>📊 Aproveitamento:</strong> ${percentual}%</p>

            <h2 style="color:${cor}; margin-top:25px;">
                ${situacao}
            </h2>

            <br>

            <button id="btnRevisarErradas">
                🔍 Revisar Questões Erradas
            </button>

            <button id="btnNovoSimulado">
                🔄 Novo Simulado
            </button>

        </div>

    </div>

    `;

    document
        .getElementById("btnNovoSimulado")
        .addEventListener("click", novoSimulado);

    document
        .getElementById("btnRevisarErradas")
        .addEventListener("click", revisarQuestoesErradas);

}

function revisarQuestoesErradas(){

    questoesErradas = [];


    questoesSimulado.forEach((questao)=>{

        const respostaUsuario = respostas[questao.id];


        if(
            respostaUsuario &&
            respostaUsuario !== questao.correta
        ){

            questoesErradas.push(questao);

        }

    });


    if(questoesErradas.length === 0){

        alert("🎉 Parabéns! Você não possui questões erradas.");

        return;

    }


    modoRevisao = true;


    let html = `

    <div class="container">

        <div class="card">

        <button
        id="btnVoltarResultadoTopo"
        class="btn-voltar">

            ⬅ Voltar ao Resultado

        </button>

            <h1>
            🔍 Revisão das Questões Erradas
            </h1>


            <p>
            Total de questões para revisar:
            ${questoesErradas.length}
            </p>

            

    `;


    questoesErradas.forEach((questao, indice)=>{


        const respostaUsuario = respostas[questao.id];


        html += `

        <div class="questao">


            <h3>
            ${indice + 1}. ${questao.pergunta}
            </h3>


        `;


        questao.opcoes.forEach((opcao)=>{


            const letra = opcao.charAt(0);


            let classe = "";


            if(letra === questao.correta){

                classe = "correta";

            }


            if(letra === respostaUsuario){

                classe = "errada";

            }


            html += `

            <div class="opcao ${classe}">

                ${opcao}

            </div>

            `;


        });


        html += `


        <div class="explicacao">

            <strong>Resposta correta:</strong>
            ${questao.correta}

            <br><br>

            <strong>Explicação:</strong>

            <p>
            ${questao.explicacao}
            </p>


        </div>


        


        </div>


        `;


    });


    html += `


        <button id="btnVoltarResultadoRodape">

            ⬅ Voltar ao Resultado

        </button>


        </div>

    </div>
    


    `;
    


    app.innerHTML = html;

    function voltarResultado(){

    modoRevisao = false;

    finalizarSimulado();

}

document
.getElementById("btnVoltarResultadoTopo")
.addEventListener(
    "click",
    voltarResultado
);

document
.getElementById("btnVoltarResultadoRodape")
.addEventListener(
    "click",
    voltarResultado
);

    


}

function salvarResposta(id, resposta){

    respostas[id] = resposta;

    salvarProgresso();


    // Atualiza a barra de progresso
    const totalRespondidas = Object.keys(respostas).length;

    const percentual =
    (totalRespondidas / questoesSimulado.length) * 100;


    const barra = document.querySelector(".barra-preenchimento");

    const texto = document.querySelector(".progresso-info");


    if(barra){

        barra.style.width = percentual + "%";

    }


    if(texto){

        texto.innerHTML = `
            ${totalRespondidas} de ${questoesSimulado.length}
            questões respondidas (${percentual.toFixed(0)}%)
        `;

    }


    // ===============================
    // VERIFICA SE AS 10 QUESTÕES DA PÁGINA
    // FORAM RESPONDIDAS
    // ===============================

    const inicio = paginaAtual * 10;
    const fim = inicio + 10;

    const questoesDaPagina = questoesSimulado.slice(inicio, fim);

    const todasRespondidas = questoesDaPagina.every(
        questao => respostas[questao.id]
    );

    const btnProxima = document.getElementById("btnProxima");

    if(btnProxima){

        btnProxima.disabled = !todasRespondidas;

    }

}

function mostrarCorrecao(){

    const inicio = paginaAtual * 10;
    const fim = inicio + 10;

    const questoesDaPagina = questoesSimulado.slice(inicio, fim);

    let questoesPendentes = [];

    questoesDaPagina.forEach((questao, indice)=>{

        if(!respostas[questao.id]){
            questoesPendentes.push(inicio + indice + 1);
        }

    });

    if(questoesPendentes.length > 0){

        alert(
            `⚠️ Responda todas as questões desta página antes de ver o resultado.\n\nQuestões pendentes, numero: ${questoesPendentes.join(", ")}`
        );

        mostrandoCorrecao = false;

        return false;
    }

    mostrandoCorrecao = true;

    paginasCorrigidas[paginaAtual] = true;

    salvarProgresso();

    // LIBERA O BOTÃO PRÓXIMA
    const btnProxima = document.getElementById("btnProxima");

    if (btnProxima) {
        btnProxima.disabled = false;
    }

    aplicarCorrecaoVisual();

    mostrarExplicacoes();

    return true;
}

function paginaAnterior(){

    paginaAtual--;

    mostrandoCorrecao = paginasCorrigidas[paginaAtual] || false;

    mostrarPagina();

}

function salvarProgresso(){

    const progresso = {

        questoes: questoesSimulado,

        pagina: paginaAtual,

        respostas: respostas,

        paginasCorrigidas: paginasCorrigidas

    };


    localStorage.setItem(
        "progressoCTFL",
        JSON.stringify(progresso)
    );

}

function continuarSimulado(){

    const progresso = localStorage.getItem("progressoCTFL");


    if(!progresso){

        alert("Nenhum progresso encontrado.");

        return;

    }


    const dados = JSON.parse(progresso);


    questoesSimulado = dados.questoes;

    paginaAtual = dados.pagina;

    respostas = dados.respostas;


    paginasCorrigidas = dados.paginasCorrigidas || [];


    mostrandoCorrecao = paginasCorrigidas[paginaAtual] || false;


    mostrarPagina();


    if(mostrandoCorrecao){

        mostrarExplicacoes();

    }

}

function novoSimulado(){

    const confirmar = confirm(
        "Deseja iniciar um novo simulado?\n\nTodo o progresso atual será apagado."
    );

    if(confirmar){

        localStorage.removeItem("progressoCTFL");

        questoesSimulado = [];
        respostas = {};
        paginaAtual = 0;
        mostrandoCorrecao = false;
        paginasCorrigidas = [];   // <-- Faltava isso

        mostrarTelaInicial();

    }

}

function mostrarExplicacoes(){

    const inicio = paginaAtual * 10;
    const fim = inicio + 10;

    const questoesDaPagina = questoesSimulado.slice(inicio, fim);


    questoesDaPagina.forEach((questao)=>{

        const campo = document.getElementById(
            `explicacao-${questao.id}`
        );


        if(campo){

            campo.innerHTML = `

            <div class="explicacao">

                <p>
                Resposta correta:
                ${questao.correta}
                </p>

                <p>
                Explicação:
                ${questao.explicacao}
                </p>

            </div>

            `;

        }

    });

}

function mostrarResultado(){

    let acertos = 0;
    let erros = 0;
    let respondidas = 0;


    const inicio = paginaAtual * 10;
    const fim = inicio + 10;


    const questoesDaPagina = questoesSimulado.slice(inicio, fim);


    questoesDaPagina.forEach((questao)=>{

        const respostaUsuario = respostas[questao.id];


        if(respostaUsuario){

            respondidas++;


            if(respostaUsuario === questao.correta){

                acertos++;

            }
            else{

                erros++;

            }

        }

    });


    const percentual = ((acertos / questoesDaPagina.length) * 100).toFixed(1);


    const totalRespondidas = Object.keys(respostas).length;


    const progresso = ((totalRespondidas / questoesSimulado.length) * 100).toFixed(0);



    document.getElementById("resultado").innerHTML = `

        <div class="resultado">

            <h2><br>📊 Resultado da Página</h2>


            <p>
                Questões respondidas:
                ${respondidas}/10
            </p>


            <p>
                ✅ Acertos:
                ${acertos}
            </p>


            <p>
                ❌ Erros:
                ${erros}
            </p>


            <h3>
                Aproveitamento:
                ${percentual}%
            </h3>


            <p>
                Progresso do Simulado:
                ${totalRespondidas}/${questoesSimulado.length}
                (${progresso}%)
            </p>


        </div>

    `;

}

function aplicarCorrecaoVisual(){

    const inicio = paginaAtual * 10;
    const fim = inicio + 10;

    const questoesDaPagina = questoesSimulado.slice(inicio, fim);

    questoesDaPagina.forEach((questao)=>{

        // Marca a alternativa correta
        const correta = document.getElementById(
            `opcao-${questao.id}-${questao.correta}`
        );

        if(correta){

            correta.classList.add("correta");

        }

        // Marca a alternativa errada escolhida
        const respostaUsuario = respostas[questao.id];

        if(
            respostaUsuario &&
            respostaUsuario !== questao.correta
        ){

            const errada = document.getElementById(
                `opcao-${questao.id}-${respostaUsuario}`
            );

            if(errada){

                errada.classList.add("errada");

            }

        }

    });

}

function mostrarMaterial(){

    app.innerHTML = `

    <div class="container">

        <div class="card">

            <h1>📚 Material de Estudo</h1>

            <p>
                Selecione um capítulo para estudar.
            </p>

            <div class="menu-capitulos">

                <button id="cap1">
                    📖 Capítulo 1<br>
                    <small>Fundamentos de Teste</small>
                </button>

                <button id="cap2">
                    📖 Capítulo 2<br>
                    <small>Testes no Ciclo de Vida</small>
                </button>

                <button id="cap3">
                    📖 Capítulo 3<br>
                    <small>Testes Estáticos</small>
                </button>

                <button id="cap4">
                    📖 Capítulo 4<br>
                    <small>Técnicas de Teste</small>
                </button>

                <button id="cap5">
                    📖 Capítulo 5<br>
                    <small>Gestão de Testes</small>
                </button>

                <button id="cap6">
                    📖 Capítulo 6<br>
                    <small>Ferramentas de Teste</small>
                </button>

            </div>

            <button id="btnVoltarMaterial">
                ⬅ Voltar
            </button>

        </div>

    </div>

    `;

    document.getElementById("btnVoltarMaterial")
        .addEventListener("click", mostrarTelaInicial);

    document.getElementById("cap1")
        .addEventListener("click", mostrarCapitulo1);

    document.getElementById("cap2")
        .addEventListener("click", mostrarCapitulo2);

    document.getElementById("cap3")
        .addEventListener("click", mostrarCapitulo3);

    document.getElementById("cap4")
        .addEventListener("click", mostrarCapitulo4);

    document.getElementById("cap5")
        .addEventListener("click", mostrarCapitulo5);

    document.getElementById("cap6")
        .addEventListener("click", mostrarCapitulo6);

}

function mostrarCapitulo1(){

    app.innerHTML = `

    <div class="container">

        <div class="card">

            <h1>📖 Capítulo 1</h1>

            <button id="btnVoltarCapitulo">
                ⬅ Voltar aos Capítulos
            </button>

            <h2>Fundamentos de Teste</h2>

            <hr>

            <p>
                Conteúdo do Capítulo 1...
            </p>

            

        </div>

    </div>

    `;

    document
        .getElementById("btnVoltarCapitulo")
        .addEventListener("click", mostrarMaterial);

}

function mostrarCapitulo2(){

    app.innerHTML = `

    <div class="container">

        <div class="card">

            <h1>📖 Capítulo 2</h1>

            <h2>Testes durante o Ciclo de Vida do Software</h2>

            <hr>

            <p>
                Conteúdo do Capítulo 2...
            </p>

            <button id="btnVoltarCapitulo">
                ⬅ Voltar aos Capítulos
            </button>

        </div>

    </div>

    `;

    document
        .getElementById("btnVoltarCapitulo")
        .addEventListener("click", mostrarMaterial);

}

function mostrarCapitulo3(){

    app.innerHTML = `

    <div class="container">

        <div class="card">

            <h1>📖 Capítulo 3</h1>

            <h2>Testes Estáticos</h2>

            <hr>

            <p>
                Conteúdo do Capítulo 3...
            </p>

            <button id="btnVoltarCapitulo">
                ⬅ Voltar aos Capítulos
            </button>

        </div>

    </div>

    `;

    document
        .getElementById("btnVoltarCapitulo")
        .addEventListener("click", mostrarMaterial);

}

function mostrarCapitulo4(){

    app.innerHTML = `

    <div class="container">

        <div class="card">

            <h1>📖 Capítulo 4</h1>

            <h2>Análise e Projeto de Testes</h2>

            <hr>

            <p>
                Conteúdo do Capítulo 4...
            </p>

            <button id="btnVoltarCapitulo">
                ⬅ Voltar aos Capítulos
            </button>

        </div>

    </div>

    `;

    document
        .getElementById("btnVoltarCapitulo")
        .addEventListener("click", mostrarMaterial);

}

function mostrarCapitulo5(){

    app.innerHTML = `

    <div class="container">

        <div class="card">

            <h1>📖 Capítulo 5</h1>

            <h2>Gerenciamento das Atividades de Teste</h2>

            <hr>

            <p>
                Conteúdo do Capítulo 5...
            </p>

            <button id="btnVoltarCapitulo">
                ⬅ Voltar aos Capítulos
            </button>

        </div>

    </div>

    `;

    document
        .getElementById("btnVoltarCapitulo")
        .addEventListener("click", mostrarMaterial);

}

function mostrarCapitulo6(){

    app.innerHTML = `

    <div class="container">

        <div class="card">

            <h1>📖 Capítulo 6</h1>

            <h2>Ferramentas de Teste</h2>

            <hr>

            <p>
                Conteúdo do Capítulo 6...
            </p>

            <button id="btnVoltarCapitulo">
                ⬅ Voltar aos Capítulos
            </button>

        </div>

    </div>

    `;

    document
        .getElementById("btnVoltarCapitulo")
        .addEventListener("click", mostrarMaterial);

}

function mostrarGlossario(){

    app.innerHTML = `

    <div class="container">

        <div class="card">


            <h1>
                📖 Glossário de Termos de Teste
            </h1>


            <hr>


            <h2>A</h2>

            <p>
            <strong>Ambiente de Teste:</strong>
            Ambiente onde os testes são executados,
            contendo hardware, software e configurações necessárias.
            </p>


            <p>
            <strong>Análise de Valor Limite:</strong>
            Técnica de teste que verifica valores
            próximos aos limites de entrada.
            </p>



            <h2>B</h2>

            <p>
            <strong>Bug:</strong>
            Defeito ou falha encontrada em um software.
            </p>


            <p>
            <strong>Base de Teste:</strong>
            Documentação ou informações utilizadas
            para criar os casos de teste.
            </p>



            <h2>C</h2>

            <p>
            <strong>Caso de Teste:</strong>
            Conjunto de condições, entradas e resultados
            esperados usados para verificar uma funcionalidade.
            </p>


            <p>
            <strong>Cobertura de Teste:</strong>
            Medida utilizada para avaliar quanto do sistema
            foi testado.
            </p>



            <br>


            <button id="btnVoltarGlossario">
                ⬅ Voltar
            </button>


        </div>

    </div>


    `;


    document
    .getElementById("btnVoltarGlossario")
    .addEventListener(
        "click",
        mostrarTelaInicial
    );

}

function mostrarCapitulo1(){

    app.innerHTML = `

    <div class="container">

        <div class="card material-estudo">

        <button 
        id="btnVoltarTopoCapitulo" 
        class="btn-voltar">

            ⬅ Voltar aos Capítulos

        </button>

            <h1><br>Capítulo 1 - Fundamentos de Teste</h1>

            <h2>1.1 O que é Teste?</h2>

            <p>
            Teste de software consiste em um conjunto de atividades executadas para
            avaliar um sistema, componente ou produto, verificando se ele atende aos
            requisitos especificados e identificando possíveis defeitos antes da
            entrega ao cliente.
            </p>

            <p>
            O objetivo principal do teste não é provar que o software está perfeito,
            mas encontrar defeitos que possam comprometer sua qualidade, desempenho,
            segurança ou funcionamento.
            </p>

            <div class="destaque">
                <strong>💡 Dica para a prova:</strong><br>
                Testes demonstram a presença de defeitos, mas nunca a sua ausência.
            </div>

            <hr>

            <h2>1.2 Por que os testes são necessários?</h2>

            <p>
            Atualmente praticamente todas as atividades dependem de software.
            Falhas podem gerar prejuízos financeiros, perda de dados, danos à imagem
            da empresa e até colocar vidas em risco.
            </p>

            <p>
            A realização de testes reduz riscos e aumenta a confiança na qualidade
            do produto antes de sua implantação.
            </p>

            <h3>Os testes ajudam a:</h3>

            <ul>

                <li>✔ Encontrar defeitos antes da entrega.</li>

                <li>✔ Evitar retrabalho.</li>

                <li>✔ Melhorar a qualidade do software.</li>

                <li>✔ Reduzir custos de manutenção.</li>

                <li>✔ Aumentar a satisfação do cliente.</li>

            </ul>

            <hr>

            <h2>1.3 Objetivos do Teste</h2>

            <p>Os principais objetivos são:</p>

            <ul>

                <li>Confirmar que o software atende aos requisitos.</li>

                <li>Encontrar defeitos.</li>

                <li>Reduzir riscos do projeto.</li>

                <li>Auxiliar na tomada de decisão sobre liberar ou não o software.</li>

                <li>Fornecer informações sobre a qualidade do produto.</li>

            </ul>

            <div class="destaque">

                <strong>🎯 Na prova ISTQB:</strong>

                <p>
                Lembre-se que o objetivo do teste NÃO é provar que o sistema funciona
                perfeitamente.
                </p>

            </div>

            <hr>

            <h2>1.4 Erro, Defeito e Falha</h2>

            <table class="tabela-estudo">

                <tr>

                    <th>Termo</th>

                    <th>Descrição</th>

                </tr>

                <tr>

                    <td><strong>Erro (Mistake)</strong></td>

                    <td>Equívoco humano cometido por uma pessoa.</td>

                </tr>

                <tr>

                    <td><strong>Defeito (Bug/Fault)</strong></td>

                    <td>Problema inserido no software devido a um erro humano.</td>

                </tr>

                <tr>

                    <td><strong>Falha (Failure)</strong></td>

                    <td>Comportamento incorreto observado durante a execução.</td>

                </tr>

            </table>

            <h3>Exemplo</h3>

            <p>

            Desenvolvedor calcula:

            <br><br>

            <strong>10 + 10 = 15</strong>

            <br><br>

            O erro foi cometido pelo desenvolvedor.

            O código incorreto é o defeito.

            Quando o usuário recebe 15 como resultado, ocorre a falha.

            </p>

            <hr>

            <h2>1.5 Qualidade</h2>

            <p>

            Qualidade é o grau em que um produto atende às necessidades dos usuários
            e aos requisitos definidos.

            </p>

            <p>

            Um software de qualidade deve ser:

            </p>

            <ul>

                <li>✔ Confiável</li>

                <li>✔ Seguro</li>

                <li>✔ Fácil de usar</li>

                <li>✔ Rápido</li>

                <li>✔ Fácil de manter</li>

            </ul>

            <hr>

            <h2>1.6 Os 7 Princípios do Teste</h2>

            <ol>

                <li><strong>Testes mostram a presença de defeitos.</strong></li>

                <li><strong>Teste exaustivo é impossível.</strong></li>

                <li><strong>Teste antecipado economiza tempo e dinheiro.</strong></li>

                <li><strong>Defeitos tendem a se concentrar.</strong></li>

                <li><strong>Paradoxo do pesticida.</strong></li>

                <li><strong>Teste depende do contexto.</strong></li>

                <li><strong>Ausência de erros é uma falácia.</strong></li>

            </ol>

            <div class="destaque">

                <strong>⭐ Memorize estes sete princípios.</strong>

                <p>

                Eles são um dos assuntos que mais aparecem na certificação CTFL.

                </p>

            </div>

            <hr>

            <h2>Resumo do Capítulo</h2>

            <ul>

                <li>✔ Testes aumentam a qualidade do software.</li>

                <li>✔ Testes reduzem riscos.</li>

                <li>✔ Erro → Defeito → Falha.</li>

                <li>✔ Qualidade significa atender requisitos.</li>

                <li>✔ Memorize os 7 princípios do teste.</li>

            </ul>

            <button id="btnVoltarMaterial">

                ⬅ Voltar aos Capítulos

            </button>

        </div>

    </div>

    `;

    document
        .getElementById("btnVoltarMaterial")
        .addEventListener("click", mostrarMaterial);

    document
    .getElementById("btnVoltarTopoCapitulo")
    .addEventListener(
        "click",
        mostrarMaterial
    );

}

function mostrarCapitulo2(){

    app.innerHTML = `

    <div class="container">

        <div class="card material-estudo">

        <button 
        id="btnVoltarTopoCapitulo" 
        class="btn-voltar">

            ⬅ Voltar aos Capítulos

        </button>

            <h1><br>Capítulo 2 - Testes ao Longo do Ciclo de Vida</h1>

            <h2>2.1 Testes em Diferentes Modelos de Desenvolvimento</h2>

            <p>
            Os testes devem acompanhar todo o ciclo de desenvolvimento do software,
            independentemente da metodologia utilizada.
            </p>

            <p>
            O ISTQB destaca que os testes não devem acontecer apenas no final do
            projeto, mas durante todo o processo de desenvolvimento.
            </p>

            <div class="destaque">

                <strong>💡 Dica para a prova:</strong>

                <p>
                Quanto mais cedo um defeito é encontrado,
                menor será o custo para corrigi-lo.
                </p>

            </div>

            <hr>

            <h2>2.2 Modelo Cascata (Waterfall)</h2>

            <p>

            No modelo Cascata, cada fase precisa ser concluída antes da próxima.

            </p>

            <ul>

                <li>Levantamento de requisitos</li>

                <li>Projeto</li>

                <li>Implementação</li>

                <li>Testes</li>

                <li>Implantação</li>

                <li>Manutenção</li>

            </ul>

            <p>

            Neste modelo, normalmente os testes acontecem apenas após o
            desenvolvimento.

            </p>

            <div class="destaque">

                <strong>⚠ Desvantagem</strong>

                <p>

                Defeitos descobertos tardiamente possuem maior custo
                de correção.

                </p>

            </div>

            <hr>

            <h2>2.3 Modelo V (V-Model)</h2>

            <p>

            O Modelo V relaciona cada fase de desenvolvimento com uma fase de teste.

            </p>

            <table class="tabela-estudo">

                <tr>

                    <th>Desenvolvimento</th>

                    <th>Teste Correspondente</th>

                </tr>

                <tr>

                    <td>Requisitos</td>

                    <td>Teste de Aceitação</td>

                </tr>

                <tr>

                    <td>Especificação</td>

                    <td>Teste de Sistema</td>

                </tr>

                <tr>

                    <td>Projeto</td>

                    <td>Teste de Integração</td>

                </tr>

                <tr>

                    <td>Codificação</td>

                    <td>Teste Unitário</td>

                </tr>

            </table>

            <p>

            Esse é um dos modelos mais cobrados na certificação.

            </p>

            <hr>

            <h2>2.4 Desenvolvimento Ágil</h2>

            <p>

            Nos métodos ágeis, desenvolvimento e testes acontecem continuamente.

            </p>

            <ul>

                <li>✔ Entregas frequentes</li>

                <li>✔ Feedback constante</li>

                <li>✔ Testes automatizados</li>

                <li>✔ Integração Contínua</li>

                <li>✔ Colaboração entre equipes</li>

            </ul>

            <div class="destaque">

                <strong>💡 Na prova</strong>

                <p>

                Em projetos ágeis o testador participa desde o início do projeto.

                </p>

            </div>

            <hr>

            <h2>2.5 Níveis de Teste</h2>

            <p>

            O ISTQB divide os testes em quatro níveis principais.

            </p>

            <table class="tabela-estudo">

                <tr>

                    <th>Nível</th>

                    <th>Objetivo</th>

                </tr>

                <tr>

                    <td>Teste Unitário</td>

                    <td>Validar componentes individuais.</td>

                </tr>

                <tr>

                    <td>Teste de Integração</td>

                    <td>Validar comunicação entre módulos.</td>

                </tr>

                <tr>

                    <td>Teste de Sistema</td>

                    <td>Validar o sistema completo.</td>

                </tr>

                <tr>

                    <td>Teste de Aceitação</td>

                    <td>Confirmar que atende às necessidades do cliente.</td>

                </tr>

            </table>

            <hr>

            <h2>2.6 Tipos de Teste</h2>

            <h3>Teste Funcional</h3>

            <p>

            Avalia se o sistema faz exatamente aquilo que foi especificado.

            </p>

            <h3>Teste Não Funcional</h3>

            <p>

            Avalia características como:

            </p>

            <ul>

                <li>Desempenho</li>

                <li>Segurança</li>

                <li>Usabilidade</li>

                <li>Escalabilidade</li>

                <li>Compatibilidade</li>

            </ul>

            <h3>Teste Estrutural</h3>

            <p>

            Baseia-se na estrutura interna do software,
            normalmente analisando o código.

            </p>

            <h3>Teste de Mudança</h3>

            <ul>

                <li>Reteste</li>

                <li>Teste de Regressão</li>

            </ul>

            <div class="destaque">

                <strong>🎯 Pegadinha da prova</strong>

                <p>

                Reteste verifica se o defeito foi corrigido.

                </p>

                <p>

                Regressão verifica se outras funcionalidades
                não foram afetadas.

                </p>

            </div>

            <hr>

            <h2>2.7 Teste de Regressão</h2>

            <p>

            Sempre que ocorre uma alteração no sistema,
            existe o risco de impactar funcionalidades já existentes.

            </p>

            <p>

            O teste de regressão garante que mudanças recentes
            não introduziram novos defeitos.

            </p>

            <hr>

            <h2>Resumo do Capítulo</h2>

            <ul>

                <li>✔ Testes devem ocorrer durante todo o ciclo de vida.</li>

                <li>✔ Modelo V relaciona desenvolvimento e testes.</li>

                <li>✔ Métodos Ágeis realizam testes continuamente.</li>

                <li>✔ Existem quatro níveis de teste.</li>

                <li>✔ Funcional ≠ Não Funcional.</li>

                <li>✔ Reteste ≠ Regressão.</li>

            </ul>

            <div class="destaque">

                <strong>⭐ O que mais cai na prova</strong>

                <ul>

                    <li>Modelo V</li>

                    <li>Níveis de Teste</li>

                    <li>Tipos de Teste</li>

                    <li>Reteste x Regressão</li>

                    <li>Desenvolvimento Ágil</li>

                </ul>

            </div>

            <button id="btnVoltarMaterial">

                ⬅ Voltar aos Capítulos

            </button>

        </div>

    </div>

    `;

    document
        .getElementById("btnVoltarMaterial")
        .addEventListener("click", mostrarMaterial);

    document
    .getElementById("btnVoltarTopoCapitulo")
    .addEventListener(
        "click",
        mostrarMaterial
    );

}

function mostrarCapitulo3(){

    app.innerHTML = `

    <div class="container">

        <div class="card material-estudo">

        <button 
        id="btnVoltarTopoCapitulo" 
        class="btn-voltar">

            ⬅ Voltar aos Capítulos

        </button>

            <h1><br>Capítulo 3 - Teste Estático</h1>

            <h2>3.1 O que é Teste Estático?</h2>

            <p>

            O teste estático consiste na avaliação de documentos, requisitos,
            diagramas, especificações e código-fonte sem executar o software.

            </p>

            <p>

            Seu principal objetivo é identificar defeitos o mais cedo possível,
            reduzindo custos e evitando que erros avancem para as próximas fases
            do desenvolvimento.

            </p>

            <div class="destaque">

                <strong>💡 Dica para a prova:</strong>

                <p>

                Teste estático NÃO executa o software.

                </p>

            </div>

            <hr>

            <h2>3.2 Benefícios do Teste Estático</h2>

            <ul>

                <li>✔ Encontrar defeitos antes da implementação.</li>

                <li>✔ Reduzir custos de correção.</li>

                <li>✔ Melhorar a qualidade dos documentos.</li>

                <li>✔ Aumentar o compartilhamento de conhecimento entre a equipe.</li>

                <li>✔ Detectar inconsistências e ambiguidades.</li>

            </ul>

            <div class="destaque">

                <strong>⚠ Atenção</strong>

                <p>

                Corrigir um defeito durante a fase de requisitos custa muito menos
                do que corrigi-lo após a implantação do sistema.

                </p>

            </div>

            <hr>

            <h2>3.3 Revisões (Reviews)</h2>

            <p>

            Revisões são avaliações realizadas por pessoas para identificar defeitos
            em documentos, código ou outros artefatos.

            </p>

            <p>

            Elas também ajudam na padronização dos processos e no compartilhamento
            de conhecimento entre os membros da equipe.

            </p>

            <hr>

            <h2>3.4 Tipos de Revisão</h2>

            <table class="tabela-estudo">

                <tr>

                    <th>Tipo</th>

                    <th>Objetivo</th>

                </tr>

                <tr>

                    <td>Revisão Informal</td>

                    <td>Sem processo formal; rápida e simples.</td>

                </tr>

                <tr>

                    <td>Walkthrough</td>

                    <td>Autor apresenta o trabalho para obter feedback.</td>

                </tr>

                <tr>

                    <td>Revisão Técnica</td>

                    <td>Avaliação realizada por especialistas.</td>

                </tr>

                <tr>

                    <td>Inspeção</td>

                    <td>Processo formal com papéis definidos e registro de defeitos.</td>

                </tr>

            </table>

            <div class="destaque">

                <strong>🎯 Na prova</strong>

                <p>

                A Inspeção é considerada o tipo de revisão mais formal.

                </p>

            </div>

            <hr>

            <h2>3.5 Papéis em uma Revisão</h2>

            <ul>

                <li><strong>Autor:</strong> produz o documento.</li>

                <li><strong>Moderador:</strong> conduz a revisão.</li>

                <li><strong>Revisor:</strong> identifica defeitos.</li>

                <li><strong>Secretário:</strong> registra os defeitos encontrados.</li>

                <li><strong>Gerente:</strong> acompanha resultados e indicadores.</li>

            </ul>

            <hr>

            <h2>3.6 Processo de Revisão</h2>

            <ol>

                <li>Planejamento</li>

                <li>Início da revisão</li>

                <li>Preparação individual</li>

                <li>Reunião de revisão (quando necessária)</li>

                <li>Correção dos defeitos</li>

                <li>Acompanhamento</li>

            </ol>

            <p>

            Nem todos os tipos de revisão utilizam todas essas etapas.

            </p>

            <hr>

            <h2>3.7 Sucesso das Revisões</h2>

            <p>

            Alguns fatores aumentam a eficiência das revisões.

            </p>

            <ul>

                <li>Boa preparação.</li>

                <li>Objetivos bem definidos.</li>

                <li>Participantes capacitados.</li>

                <li>Tempo adequado para revisão.</li>

                <li>Ambiente colaborativo.</li>

            </ul>

            <div class="destaque">

                <strong>⚠ Evite</strong>

                <ul>

                    <li>Culpar pessoas pelos defeitos.</li>

                    <li>Transformar a revisão em auditoria.</li>

                    <li>Discussões desnecessárias.</li>

                </ul>

            </div>

            <hr>

            <h2>3.8 Análise Estática</h2>

            <p>

            A análise estática utiliza ferramentas para identificar problemas
            automaticamente, sem executar o software.

            </p>

            <p>

            Ela pode detectar:

            </p>

            <ul>

                <li>✔ Código duplicado.</li>

                <li>✔ Variáveis não utilizadas.</li>

                <li>✔ Possíveis vazamentos de memória.</li>

                <li>✔ Problemas de segurança.</li>

                <li>✔ Violações de padrões de codificação.</li>

            </ul>

            <div class="destaque">

                <strong>💡 Importante</strong>

                <p>

                Ferramentas de análise estática ajudam,
                mas não substituem as revisões realizadas por pessoas.

                </p>

            </div>

            <hr>

            <h2>3.9 Revisão x Análise Estática</h2>

            <table class="tabela-estudo">

                <tr>

                    <th>Revisão</th>

                    <th>Análise Estática</th>

                </tr>

                <tr>

                    <td>Realizada por pessoas.</td>

                    <td>Realizada por ferramentas.</td>

                </tr>

                <tr>

                    <td>Encontra ambiguidades.</td>

                    <td>Encontra problemas técnicos.</td>

                </tr>

                <tr>

                    <td>Compartilha conhecimento.</td>

                    <td>Automatiza verificações.</td>

                </tr>

            </table>

            <hr>

            <h2>Resumo do Capítulo</h2>

            <ul>

                <li>✔ Teste estático não executa o software.</li>

                <li>✔ Revisões encontram defeitos cedo.</li>

                <li>✔ Inspeção é a revisão mais formal.</li>

                <li>✔ Ferramentas realizam análise estática.</li>

                <li>✔ Revisão e análise estática são complementares.</li>

            </ul>

            <div class="destaque">

                <strong>⭐ O que mais cai na prova</strong>

                <ul>

                    <li>Diferença entre teste estático e dinâmico.</li>

                    <li>Tipos de revisão.</li>

                    <li>Papéis da inspeção.</li>

                    <li>Processo de revisão.</li>

                    <li>Análise estática.</li>

                </ul>

            </div>

            <button id="btnVoltarMaterial">

                ⬅ Voltar aos Capítulos

            </button>

        </div>

    </div>

    `;

    document
        .getElementById("btnVoltarMaterial")
        .addEventListener("click", mostrarMaterial);

    document
    .getElementById("btnVoltarTopoCapitulo")
    .addEventListener(
        "click",
        mostrarMaterial
    );

}

function mostrarCapitulo4(){

    app.innerHTML = `

    <div class="container">

        <div class="card material-estudo">

        <button 
        id="btnVoltarTopoCapitulo" 
        class="btn-voltar">

            ⬅ Voltar aos Capítulos

        </button>

            <h1><br>Capítulo 4 - Técnicas de Teste</h1>

            <h2>4.1 O que são Técnicas de Teste?</h2>

            <p>

            As técnicas de teste são métodos utilizados para criar casos de teste de
            forma organizada e eficiente, aumentando a probabilidade de encontrar
            defeitos importantes no software.

            </p>

            <p>

            O ISTQB classifica essas técnicas em três grandes grupos:

            </p>

            <ul>

                <li>✔ Técnicas Caixa-Preta (Black Box)</li>

                <li>✔ Técnicas Caixa-Branca (White Box)</li>

                <li>✔ Técnicas Baseadas na Experiência</li>

            </ul>

            <div class="destaque">

                <strong>💡 Dica para a prova</strong>

                <p>

                Caixa-Preta observa o comportamento do sistema.

                Caixa-Branca observa a estrutura interna.

                </p>

            </div>

            <hr>

            <h2>4.2 Técnicas Caixa-Preta</h2>

            <p>

            As técnicas Caixa-Preta utilizam apenas os requisitos,
            especificações e regras de negócio.

            </p>

            <p>

            O testador não precisa conhecer o código-fonte.

            </p>

            <h3>As principais técnicas são:</h3>

            <ul>

                <li>Particionamento por Equivalência</li>

                <li>Análise de Valor Limite</li>

                <li>Tabela de Decisão</li>

                <li>Transição de Estados</li>

            </ul>

            <hr>

            <h2>4.3 Particionamento por Equivalência</h2>

            <p>

            Consiste em dividir os dados de entrada em grupos
            que devem apresentar o mesmo comportamento.

            </p>

            <h3>Exemplo</h3>

            <p>

            Idade permitida:

            18 a 60 anos.

            </p>

            <table class="tabela-estudo">

                <tr>

                    <th>Classe</th>

                    <th>Exemplo</th>

                </tr>

                <tr>

                    <td>Inválida</td>

                    <td>15 anos</td>

                </tr>

                <tr>

                    <td>Válida</td>

                    <td>25 anos</td>

                </tr>

                <tr>

                    <td>Inválida</td>

                    <td>70 anos</td>

                </tr>

            </table>

            <div class="destaque">

                <strong>🎯 Na prova</strong>

                <p>

                Basta escolher um representante de cada classe.

                </p>

            </div>

            <hr>

            <h2>4.4 Análise de Valor Limite</h2>

            <p>

            A experiência mostra que muitos defeitos acontecem
            exatamente nos limites permitidos.

            </p>

            <h3>Exemplo</h3>

            <p>

            Campo aceita valores de 1 até 100.

            </p>

            <table class="tabela-estudo">

                <tr>

                    <th>Valor</th>

                    <th>Motivo</th>

                </tr>

                <tr>

                    <td>0</td>

                    <td>Logo abaixo</td>

                </tr>

                <tr>

                    <td>1</td>

                    <td>Limite inferior</td>

                </tr>

                <tr>

                    <td>2</td>

                    <td>Logo acima</td>

                </tr>

                <tr>

                    <td>99</td>

                    <td>Logo abaixo</td>

                </tr>

                <tr>

                    <td>100</td>

                    <td>Limite superior</td>

                </tr>

                <tr>

                    <td>101</td>

                    <td>Logo acima</td>

                </tr>

            </table>

            <div class="destaque">

                <strong>💡 Memorize</strong>

                <p>

                Os limites normalmente possuem mais defeitos.

                </p>

            </div>

            <hr>

            <h2>4.5 Tabela de Decisão</h2>

            <p>

            Utilizada quando existem várias regras de negócio
            envolvendo combinações de condições.

            </p>

            <h3>Exemplo</h3>

            <p>

            Um cliente recebe desconto apenas quando:

            </p>

            <ul>

                <li>É cliente Premium.</li>

                <li>Compra acima de R$ 500.</li>

            </ul>

            <table class="tabela-estudo">

                <tr>

                    <th>Premium</th>

                    <th>Compra > 500</th>

                    <th>Desconto</th>

                </tr>

                <tr>

                    <td>Sim</td>

                    <td>Sim</td>

                    <td>Sim</td>

                </tr>

                <tr>

                    <td>Sim</td>

                    <td>Não</td>

                    <td>Não</td>

                </tr>

                <tr>

                    <td>Não</td>

                    <td>Sim</td>

                    <td>Não</td>

                </tr>

                <tr>

                    <td>Não</td>

                    <td>Não</td>

                    <td>Não</td>

                </tr>

            </table>

            <div class="destaque">

                <strong>🎯 Muito cobrado</strong>

                <p>

                Toda combinação possível deve ser analisada.

                </p>

            </div>

            <hr>

            <h2>4.6 Transição de Estados</h2>

            <p>

            Utilizada quando o comportamento do sistema muda
            conforme seu estado atual.

            </p>

            <h3>Exemplo</h3>

            <p>

            Caixa eletrônico.

            </p>

            <ul>

                <li>Sem cartão</li>

                <li>Cartão inserido</li>

                <li>Senha informada</li>

                <li>Operação autorizada</li>

            </ul>

            <p>

            Cada ação faz o sistema mudar de estado.

            </p>

            <table class="tabela-estudo">

                <tr>

                    <th>Estado Atual</th>

                    <th>Ação</th>

                    <th>Novo Estado</th>

                </tr>

                <tr>

                    <td>Sem cartão</td>

                    <td>Inserir cartão</td>

                    <td>Cartão inserido</td>

                </tr>

                <tr>

                    <td>Cartão inserido</td>

                    <td>Digitar senha</td>

                    <td>Autenticado</td>

                </tr>

                <tr>

                    <td>Autenticado</td>

                    <td>Saque</td>

                    <td>Operação concluída</td>

                </tr>

            </table>

            <div class="destaque">

                <strong>⚠ Atenção</strong>

                <p>

                Essa técnica é muito usada em sistemas bancários,
                login, máquinas de estados e aplicativos.

                </p>

            </div>

            <hr>

            <hr>

<h2>4.7 Técnicas Caixa-Branca</h2>

<p>
    As técnicas Caixa-Branca (White Box) utilizam a estrutura interna do software para criar casos de teste.
</p>

<p>
    O testador precisa conhecer o código-fonte, fluxo do programa ou lógica implementada.
</p>

<div class="destaque">
    <strong>💡 Dica para a prova</strong>
    <p>
        Caixa-Branca verifica "COMO" o software funciona.
    </p>
</div>

<hr>

<h2>4.8 Cobertura de Declarações (Statement Coverage)</h2>

<p>
    Essa técnica mede quantas instruções do código foram executadas durante os testes.
</p>

<p>
    O objetivo é executar cada linha de código pelo menos uma vez.
</p>

<table class="tabela-estudo">
    <tr>
        <th>Código</th>
        <th>Executado?</th>
    </tr>
    <tr>
        <td>Linha 1</td>
        <td>✔</td>
    </tr>
    <tr>
        <td>Linha 2</td>
        <td>✔</td>
    </tr>
    <tr>
        <td>Linha 3</td>
        <td>✖</td>
    </tr>
</table>

<p>
    Cobertura = Linhas executadas ÷ Total de linhas.
</p>

<div class="destaque">
    <strong>🎯 Na prova</strong>
    <p>
        Cobertura de Declarações garante que cada instrução foi executada, mas não garante que todas as decisões foram testadas.
    </p>
</div>

<hr>

<h2>4.9 Cobertura de Decisões (Decision Coverage)</h2>

<p>
    Além de executar as linhas de código, é necessário que cada decisão assuma os dois resultados possíveis:
</p>

<ul>
    <li>✔ Verdadeiro (TRUE)</li>
    <li>✔ Falso (FALSE)</li>
</ul>

<h3>Exemplo</h3>

<div class="destaque">
    <pre>
if (idade >= 18){
    liberarCadastro();
}
    </pre>
</div>

<p>
    Devem existir testes para:
</p>

<ul>
    <li>Idade = 20 → TRUE</li>
    <li>Idade = 15 → FALSE</li>
</ul>

<div class="destaque">
    <strong>💡 Importante</strong>
    <p>
        Cobertura de Decisão é mais completa que Cobertura de Declarações.
    </p>
</div>

<hr>

<h2>4.10 Técnicas Baseadas na Experiência</h2>

<p>
    São técnicas que dependem da experiência, conhecimento e intuição do testador.
</p>

<p>
    Quanto maior a experiência do profissional, maior sua capacidade de identificar defeitos.
</p>

<hr>

<h2>4.11 Adivinhação de Erros (Error Guessing)</h2>

<p>
    O testador utiliza sua experiência para prever onde o sistema provavelmente possui defeitos.
</p>

<h3>Exemplos</h3>

<ul>
    <li>Campo vazio.</li>
    <li>Data inválida.</li>
    <li>Números negativos.</li>
    <li>Caracteres especiais.</li>
    <li>Campos muito grandes.</li>
    <li>Upload de arquivos enormes.</li>
</ul>

<div class="destaque">
    <strong>⭐ Muito cobrado</strong>
    <p>
        Não existe procedimento formal. Tudo depende da experiência do testador.
    </p>
</div>

<hr>

<h2>4.12 Testes Exploratórios</h2>

<p>
    No teste exploratório, aprender, projetar e executar os testes acontecem simultaneamente.
</p>

<p>
    O testador explora o sistema enquanto aprende seu funcionamento.
</p>

<h3>Características</h3>

<ul>
    <li>✔ Pouca documentação.</li>
    <li>✔ Alta criatividade.</li>
    <li>✔ Muito utilizado em métodos Ágeis.</li>
    <li>✔ Excelente para encontrar defeitos inesperados.</li>
</ul>

<hr>

<h2>4.13 Escolha da Técnica de Teste</h2>

<p>
    Na prática, normalmente utilizamos várias técnicas em conjunto.
</p>

<table class="tabela-estudo">
    <tr>
        <th>Situação</th>
        <th>Técnica Recomendada</th>
    </tr>
    <tr>
        <td>Faixas de valores</td>
        <td>Particionamento por Equivalência</td>
    </tr>
    <tr>
        <td>Valores extremos</td>
        <td>Análise de Valor Limite</td>
    </tr>
    <tr>
        <td>Regras de negócio</td>
        <td>Tabela de Decisão</td>
    </tr>
    <tr>
        <td>Fluxos do sistema</td>
        <td>Transição de Estados</td>
    </tr>
    <tr>
        <td>Código-fonte</td>
        <td>Caixa-Branca</td>
    </tr>
    <tr>
        <td>Experiência</td>
        <td>Error Guessing</td>
    </tr>
</table>

<hr>

<h2>Resumo do Capítulo</h2>

<ul>
    <li>✔ Caixa-Preta testa funcionalidades.</li>
    <li>✔ Caixa-Branca testa estrutura interna.</li>
    <li>✔ Particionamento divide entradas em classes.</li>
    <li>✔ Valor Limite testa extremos.</li>
    <li>✔ Tabela de Decisão testa regras.</li>
    <li>✔ Transição de Estados testa mudanças de estado.</li>
    <li>✔ Cobertura de Declarações executa linhas.</li>
    <li>✔ Cobertura de Decisão executa TRUE e FALSE.</li>
    <li>✔ Error Guessing depende da experiência.</li>
    <li>✔ Teste Exploratório aprende enquanto testa.</li>
</ul>

<div class="destaque">
    <strong>⭐ O que mais cai na prova</strong>
    <ul>
        <li>Diferença entre Caixa-Preta e Caixa-Branca.</li>
        <li>Particionamento por Equivalência.</li>
        <li>Análise de Valor Limite.</li>
        <li>Tabela de Decisão.</li>
        <li>Transição de Estados.</li>
        <li>Statement Coverage.</li>
        <li>Decision Coverage.</li>
        <li>Error Guessing.</li>
        <li>Teste Exploratório.</li>
    </ul>
</div>

    <button id="btnVoltarMaterial" class="btn-voltar">

        ⬅ Voltar aos Capítulos

    </button>


    `;



    document
        .getElementById("btnVoltarMaterial")
        .addEventListener("click", mostrarMaterial);

    document
    .getElementById("btnVoltarTopoCapitulo")
    .addEventListener(
        "click",
        mostrarMaterial
    );

}

function mostrarCapitulo5(){

    app.innerHTML = `

    <div class="container">

        <div class="card material-estudo">

        <button 
        id="btnVoltarTopoCapitulo" 
        class="btn-voltar">

            ⬅ Voltar aos Capítulos

        </button>


            <h1>
                <br>Capítulo 5 - Gerenciamento de Testes
            </h1>


            <hr>


            <h2>
                5.1 Introdução ao Gerenciamento de Testes
            </h2>


            <p>
                O gerenciamento de testes envolve todas as atividades necessárias
                para planejar, acompanhar e controlar um processo de teste.
            </p>


            <p>
                O objetivo é garantir que os testes sejam realizados de forma
                organizada, eficiente e alinhada aos objetivos do projeto.
            </p>


            <div class="destaque">

                <strong>
                    💡 Dica para a prova
                </strong>

                <p>
                    Gerenciamento de testes não é apenas executar testes,
                    envolve planejamento, controle e comunicação.
                </p>

            </div>


            <hr>


            <h2>
                5.2 Planejamento de Testes
            </h2>


            <p>
                O planejamento define como os testes serão realizados,
                quais recursos serão necessários e quais objetivos devem ser alcançados.
            </p>


            <h3>
                Um plano de teste pode conter:
            </h3>


            <ul>

                <li>
                    ✔ Objetivos dos testes
                </li>


                <li>
                    ✔ Escopo do teste
                </li>


                <li>
                    ✔ Estratégia de teste
                </li>


                <li>
                    ✔ Recursos necessários
                </li>


                <li>
                    ✔ Cronograma
                </li>


                <li>
                    ✔ Critérios de entrada e saída
                </li>


            </ul>



            <div class="destaque">

                <strong>
                    🎯 Na prova
                </strong>

                <p>
                    O plano de teste é um documento vivo,
                    podendo ser atualizado durante o projeto.
                </p>

            </div>



            <hr>



            <h2>
                5.3 Estimativa de Testes
            </h2>


            <p>
                A estimativa determina o esforço necessário para executar
                as atividades de teste.
            </p>


            <p>
                Ela considera fatores como:
            </p>


            <ul>

                <li>
                    ✔ Quantidade de funcionalidades
                </li>

                <li>
                    ✔ Complexidade do sistema
                </li>

                <li>
                    ✔ Experiência da equipe
                </li>

                <li>
                    ✔ Ferramentas disponíveis
                </li>

                <li>
                    ✔ Tempo disponível
                </li>

            </ul>



            <hr>



            <h2>
                5.4 Monitoramento e Controle de Testes
            </h2>


            <p>
                O monitoramento acompanha o andamento dos testes,
                enquanto o controle realiza ações quando necessário.
            </p>


            <table class="tabela-estudo">


                <tr>

                    <th>
                        Monitoramento
                    </th>

                    <th>
                        Controle
                    </th>

                </tr>


                <tr>

                    <td>
                        Mede o progresso.
                    </td>

                    <td>
                        Toma ações corretivas.
                    </td>

                </tr>


                <tr>

                    <td>
                        Analisa métricas.
                    </td>

                    <td>
                        Ajusta planejamento.
                    </td>

                </tr>


            </table>



            <hr>



            <h2>
                5.5 Métricas de Teste
            </h2>


            <p>
                Métricas ajudam a avaliar a qualidade e o progresso dos testes.
            </p>


            <h3>
                Exemplos:
            </h3>


            <ul>

                <li>
                    ✔ Quantidade de casos executados
                </li>


                <li>
                    ✔ Quantidade de defeitos encontrados
                </li>


                <li>
                    ✔ Taxa de aprovação dos testes
                </li>


                <li>
                    ✔ Cobertura de teste
                </li>


                <li>
                    ✔ Tempo gasto em testes
                </li>

            </ul>



            <hr>



            <h2>
                5.6 Riscos em Testes
            </h2>


            <p>
                Risco é um evento que pode causar impacto negativo
                nos objetivos do projeto.
            </p>


            <h3>
                Tipos de risco:
            </h3>


            <table class="tabela-estudo">


                <tr>

                    <th>
                        Tipo
                    </th>

                    <th>
                        Exemplo
                    </th>

                </tr>


                <tr>

                    <td>
                        Risco do Produto
                    </td>

                    <td>
                        Falhas no software.
                    </td>

                </tr>


                <tr>

                    <td>
                        Risco do Projeto
                    </td>

                    <td>
                        Falta de tempo ou recursos.
                    </td>

                </tr>


            </table>



            <div class="destaque">

                <strong>
                    ⚠ Atenção
                </strong>


                <p>
                    Testes ajudam a reduzir riscos,
                    mas não eliminam todos os riscos.
                </p>


            </div>



            <hr>



            <h2>
                5.7 Gestão de Defeitos
            </h2>


            <p>
                Um defeito encontrado durante os testes deve ser registrado,
                analisado e acompanhado.
            </p>


            <h3>
                Informações comuns de um relatório de defeito:
            </h3>


            <ul>

                <li>
                    ✔ Identificação do defeito
                </li>


                <li>
                    ✔ Descrição do problema
                </li>


                <li>
                    ✔ Passos para reproduzir
                </li>


                <li>
                    ✔ Ambiente encontrado
                </li>


                <li>
                    ✔ Severidade
                </li>


                <li>
                    ✔ Prioridade
                </li>


            </ul>



            <hr>



            <h2>
                5.8 Severidade x Prioridade
            </h2>


            <table class="tabela-estudo">


                <tr>

                    <th>
                        Severidade
                    </th>

                    <th>
                        Prioridade
                    </th>

                </tr>


                <tr>

                    <td>
                        Impacto técnico do defeito.
                    </td>

                    <td>
                        Urgência para correção.
                    </td>

                </tr>


            </table>



            <div class="destaque">

                <strong>
                    Exemplo:
                </strong>


                <p>
                    Um erro visual no botão principal pode ter baixa severidade,
                    mas alta prioridade.
                </p>


            </div>



            <hr>



            <h2>
                5.9 Relatórios de Teste
            </h2>


            <p>
                Os relatórios apresentam informações sobre o andamento
                e resultados dos testes.
            </p>


            <p>
                Podem incluir:
            </p>


            <ul>

                <li>
                    ✔ Testes executados
                </li>


                <li>
                    ✔ Testes aprovados
                </li>


                <li>
                    ✔ Testes falhos
                </li>


                <li>
                    ✔ Defeitos encontrados
                </li>


                <li>
                    ✔ Riscos identificados
                </li>


            </ul>



            <hr>



            <h2>
                Resumo do Capítulo
            </h2>


            <ul>

                <li>
                    ✔ Gerenciamento organiza o processo de teste.
                </li>


                <li>
                    ✔ Planejamento define objetivos e estratégias.
                </li>


                <li>
                    ✔ Métricas acompanham o progresso.
                </li>


                <li>
                    ✔ Riscos devem ser identificados e tratados.
                </li>


                <li>
                    ✔ Defeitos devem ser registrados e acompanhados.
                </li>


                <li>
                    ✔ Relatórios comunicam resultados dos testes.
                </li>


            </ul>



            <div class="destaque">


                <strong>
                    ⭐ O que mais cai na prova
                </strong>


                <ul>

                    <li>
                        Diferença entre monitoramento e controle.
                    </li>


                    <li>
                        Risco de produto x risco de projeto.
                    </li>


                    <li>
                        Severidade x prioridade.
                    </li>


                    <li>
                        Conteúdo de um relatório de defeito.
                    </li>


                    <li>
                        Objetivo do plano de teste.
                    </li>


                </ul>


            </div>



            <button id="btnVoltarMaterial">

                ⬅ Voltar aos Capítulos

            </button>


        </div>

    </div>


    `;



    document
        .getElementById("btnVoltarMaterial")
        .addEventListener("click", mostrarMaterial);

    document
    .getElementById("btnVoltarTopoCapitulo")
    .addEventListener(
        "click",
        mostrarMaterial
    );


}

function mostrarCapitulo6(){

    app.innerHTML = `

    <div class="container">

        <div class="card material-estudo">

        <button 
        id="btnVoltarTopoCapitulo" 
        class="btn-voltar">

            ⬅ Voltar aos Capítulos

        </button>


            <h1>
                <br>Capítulo 6 - Ferramentas de Teste
            </h1>


            <hr>


            <h2>
                6.1 Introdução às Ferramentas de Teste
            </h2>


            <p>
                As ferramentas de teste são softwares utilizados para apoiar
                atividades do processo de teste.
            </p>


            <p>
                Elas podem auxiliar desde o planejamento até a execução,
                análise e acompanhamento dos resultados.
            </p>


            <div class="destaque">

                <strong>
                    💡 Dica para a prova
                </strong>

                <p>
                    Ferramentas não substituem o testador.
                    Elas ajudam a aumentar eficiência e qualidade.
                </p>

            </div>


            <hr>


            <h2>
                6.2 Tipos de Ferramentas de Teste
            </h2>


            <p>
                Existem diferentes categorias de ferramentas,
                cada uma com objetivos específicos.
            </p>


            <table class="tabela-estudo">


                <tr>

                    <th>
                        Tipo de Ferramenta
                    </th>

                    <th>
                        Objetivo
                    </th>

                </tr>


                <tr>

                    <td>
                        Gerenciamento de Testes
                    </td>

                    <td>
                        Planejar, organizar e acompanhar testes.
                    </td>

                </tr>


                <tr>

                    <td>
                        Gerenciamento de Defeitos
                    </td>

                    <td>
                        Registrar e acompanhar problemas encontrados.
                    </td>

                </tr>


                <tr>

                    <td>
                        Automação de Testes
                    </td>

                    <td>
                        Executar testes automaticamente.
                    </td>

                </tr>


                <tr>

                    <td>
                        Teste de Desempenho
                    </td>

                    <td>
                        Avaliar velocidade e capacidade do sistema.
                    </td>

                </tr>


            </table>



            <hr>



            <h2>
                6.3 Ferramentas de Gerenciamento de Testes
            </h2>


            <p>
                Essas ferramentas ajudam a controlar casos de teste,
                planos, execuções e resultados.
            </p>


            <h3>
                Podem controlar:
            </h3>


            <ul>

                <li>
                    ✔ Casos de teste
                </li>


                <li>
                    ✔ Cenários de teste
                </li>


                <li>
                    ✔ Execuções realizadas
                </li>


                <li>
                    ✔ Resultados obtidos
                </li>


                <li>
                    ✔ Relatórios
                </li>


            </ul>


            <div class="destaque">

                <strong>
                    🎯 Na prova
                </strong>


                <p>
                    Ferramentas de gerenciamento ajudam na organização,
                    mas não criam uma boa estratégia de teste sozinhas.
                </p>


            </div>



            <hr>



            <h2>
                6.4 Ferramentas de Gerenciamento de Defeitos
            </h2>


            <p>
                São utilizadas para registrar, acompanhar e controlar
                defeitos encontrados durante os testes.
            </p>


            <h3>
                Um registro de defeito normalmente possui:
            </h3>


            <ul>

                <li>
                    ✔ Identificação
                </li>


                <li>
                    ✔ Descrição do problema
                </li>


                <li>
                    ✔ Passos para reprodução
                </li>


                <li>
                    ✔ Evidências
                </li>


                <li>
                    ✔ Severidade
                </li>


                <li>
                    ✔ Status do defeito
                </li>


            </ul>



            <hr>



            <h2>
                6.5 Ferramentas de Automação de Testes
            </h2>


            <p>
                A automação utiliza ferramentas para executar testes
                automaticamente.
            </p>


            <p>
                Ela é muito utilizada quando existem testes repetitivos
                que precisam ser executados várias vezes.
            </p>


            <h3>
                Benefícios:
            </h3>


            <ul>

                <li>
                    ✔ Maior velocidade de execução.
                </li>


                <li>
                    ✔ Repetição dos testes com facilidade.
                </li>


                <li>
                    ✔ Redução de trabalho manual.
                </li>


                <li>
                    ✔ Maior cobertura de testes.
                </li>


            </ul>



            <div class="destaque">

                <strong>
                    ⚠ Atenção
                </strong>


                <p>
                    Nem todos os testes devem ser automatizados.
                    Testes exploratórios e avaliações visuais normalmente
                    dependem da atuação humana.
                </p>


            </div>



            <hr>



            <h2>
                6.6 Riscos da Automação
            </h2>


            <p>
                Apesar dos benefícios, a automação também possui riscos.
            </p>


            <ul>

                <li>
                    ❌ Alto custo inicial.
                </li>


                <li>
                    ❌ Necessidade de manutenção dos scripts.
                </li>


                <li>
                    ❌ Falsa sensação de qualidade.
                </li>


                <li>
                    ❌ Automatizar testes inadequados.
                </li>


            </ul>



            <hr>



            <h2>
                6.7 Ferramentas e Integração com Desenvolvimento
            </h2>


            <p>
                Muitas equipes utilizam ferramentas integradas ao processo
                de desenvolvimento de software.
            </p>


            <p>
                Essa integração permite acompanhar alterações,
                executar testes automaticamente e identificar problemas rapidamente.
            </p>


            <h3>
                Exemplos:
            </h3>


            <ul>

                <li>
                    ✔ Integração contínua (CI)
                </li>


                <li>
                    ✔ Execução automática de testes
                </li>


                <li>
                    ✔ Controle de versão
                </li>


                <li>
                    ✔ Monitoramento de qualidade
                </li>


            </ul>



            <hr>



            <h2>
                6.8 Escolhendo uma Ferramenta de Teste
            </h2>


            <p>
                A escolha de uma ferramenta deve considerar as necessidades
                da organização.
            </p>


            <table class="tabela-estudo">


                <tr>

                    <th>
                        Critério
                    </th>

                    <th>
                        Exemplo
                    </th>

                </tr>


                <tr>

                    <td>
                        Objetivo
                    </td>

                    <td>
                        Qual problema a ferramenta resolve?
                    </td>

                </tr>


                <tr>

                    <td>
                        Custo
                    </td>

                    <td>
                        Licença e manutenção.
                    </td>

                </tr>


                <tr>

                    <td>
                        Integração
                    </td>

                    <td>
                        Compatibilidade com outros sistemas.
                    </td>

                </tr>


                <tr>

                    <td>
                        Conhecimento da equipe
                    </td>

                    <td>
                        Facilidade de utilização.
                    </td>

                </tr>


            </table>



            <hr>



            <h2>
                Resumo do Capítulo
            </h2>


            <ul>

                <li>
                    ✔ Ferramentas apoiam o processo de teste.
                </li>


                <li>
                    ✔ Ferramentas não substituem o profissional de teste.
                </li>


                <li>
                    ✔ Automação é indicada principalmente para testes repetitivos.
                </li>


                <li>
                    ✔ Nem todo teste deve ser automatizado.
                </li>


                <li>
                    ✔ Ferramentas ajudam no gerenciamento de testes e defeitos.
                </li>


                <li>
                    ✔ A escolha da ferramenta depende do contexto.
                </li>


            </ul>



            <div class="destaque">


                <strong>
                    ⭐ O que mais cai na prova
                </strong>


                <ul>

                    <li>
                        Benefícios e riscos da automação.
                    </li>


                    <li>
                        Ferramentas não substituem testes bem planejados.
                    </li>


                    <li>
                        Diferença entre ferramenta de teste e ferramenta de gerenciamento.
                    </li>


                    <li>
                        Quando automatizar ou não automatizar.
                    </li>


                    <li>
                        Objetivo das ferramentas de gerenciamento de defeitos.
                    </li>


                </ul>


            </div>



            <button id="btnVoltarMaterial">

                ⬅ Voltar aos Capítulos

            </button>


        </div>

    </div>


    `;



    document
        .getElementById("btnVoltarMaterial")
        .addEventListener("click", mostrarMaterial);

    document
    .getElementById("btnVoltarTopoCapitulo")
    .addEventListener(
        "click",
        mostrarMaterial
    );

        


}

function mostrarGlossario(){

    let html = `

    <div class="container">

        <div class="card material-estudo">


            <button 
            id="btnVoltarTopoGlossario"
            class="btn-voltar">

                ⬅ Voltar

            </button>



            <h1>
                <br>📖 Glossário de Termos de Teste
            </h1>


            <p>
                <br>Principais termos utilizados no CTFL 4.0
            </p>


            <input 
            type="text"
            id="buscarGlossario"
            placeholder="🔎 Pesquisar termo..."
            >


            <div id="listaGlossario">


    `;


    termosGlossario.forEach((item)=>{


        html += `


        <div class="termo">


            <h3>
                ${item.termo}
            </h3>


            <p>
                ${item.definicao}
            </p>


        </div>


        `;


    });



    html += `


            </div>


            <button id="btnVoltarGlossario">

                ⬅ Voltar

            </button>


        </div>

    </div>


    `;



    app.innerHTML = html;

    document
    .getElementById("btnVoltarTopoGlossario")
    .addEventListener(
        "click",
        mostrarTelaInicial
    );



    document
    .getElementById("btnVoltarGlossario")
    .addEventListener(
        "click",
        mostrarTelaInicial
    );



    document
    .getElementById("buscarGlossario")
    .addEventListener(
        "input",
        filtrarGlossario
    );


}

function filtrarGlossario(){


    const pesquisa =
    document
    .getElementById("buscarGlossario")
    .value
    .toLowerCase();



    const termos =
    document.querySelectorAll(".termo");



    termos.forEach((item)=>{


        const texto =
        item.innerText.toLowerCase();



        if(texto.includes(pesquisa)){


            item.style.display="block";


        }else{


            item.style.display="none";


        }


    });


}