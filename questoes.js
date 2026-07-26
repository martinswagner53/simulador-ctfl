const questoes = [

        {
        "id": "q1",
        "pergunta": "Qual das seguintes afirmações descreve um objetivo de teste válido?",
        "opcoes": [
        "A) Para comprovar que não existem defeitos não corrigidos no sistema em teste.",
        "B) Para comprovar que não haverá falhas após a implementação do sistema em produção.",
        "C) Para reduzir o nível de risco do objeto de teste e aumentar a confiança no nível de qualidade.",
        "D) Para verificar se não existem combinações de entradas não testadas."
        ],
        "correta": "C",
        "explicacao": "Os testes identificam defeitos e falhas, o que reduz o nível de risco e, ao mesmo tempo, aumenta a confiança no nível de qualidade do objeto de teste."
    },
    {
        "id": "q2",
        "pergunta": "Qual das seguintes opções apresenta um exemplo de atividades de teste que contribuem para o sucesso?",
        "opcoes": [
        "A) A participação de testadores em diversas atividades do ciclo de vida de desenvolvimento de software (SDLC) ajudará a detectar defeitos nos produtos de trabalho.",
        "B) Os testadores tentam não atrapalhar os desenvolvedores enquanto eles estão codificando, para que os desenvolvedores escrevam um código melhor.",
        "C) Os testadores que colaboram com os usuários finais ajudam a melhorar a qualidade dos relatórios de defeitos durante a integração de componentes e os testes de sistema.",
        "D) Os testadores certificados elaborarão casos de teste muito melhores do que os testadores não certificados."
        ],
        "correta": "A",
        "explicacao": "É importante que os testadores estejam envolvidos desde o início do ciclo de vida do desenvolvimento de software (SDLC). Isso aumentará a compreensão das decisões de projeto e permitirá a detecção precoce de defeitos."
    },
    {
        "id": "q3",
        "pergunta": "Você foi designado como testador em uma equipe que está desenvolvendo um novo sistema de forma incremental. Você notou que nenhuma alteração foi feita nos casos de teste de regressão existentes por várias iterações e nenhum novo defeito de regressão foi identificado. Seu gerente está satisfeito, mas você não. Qual princípio de teste explica seu ceticismo?",
        "opcoes": [
        "A) Os testes se desgastam",
        "B) Falácia da ausência de defeitos",
        "C) Os defeitos se agrupam.",
        "D) Testes exaustivos são impossíveis"
        ],
        "correta": "A",
        "explicacao": "Esse princípio significa que, se os mesmos testes forem repetidos várias vezes, eventualmente esses testes não encontrarão mais nenhum novo defeito. Provavelmente é por isso que todos os testes foram aprovados nesta versão também."
    },
    {
        "id": "q4",
        "pergunta": "Você trabalha em uma equipe que desenvolve um aplicativo móvel para pedidos de comida. Nesta versão, a equipe decidiu implementar a funcionalidade de pagamento. Qual das seguintes atividades faz parte da análise de testes?",
        "opcoes": [
        "A) Estima-se que o teste de integração com o serviço de pagamento levará 8 dias-pessoa.",
        "B) Decidiram que a equipe deveria testar se é possível dividir o pagamento adequadamente entre vários usuários.",
        "C) Utilizando a análise de valores limite (BVA) para derivar os dados de teste para os casos de teste que verificam o processamento correto do pagamento do valor mínimo permitido.",
        "D) Analisar a discrepância entre o resultado real e o resultado esperado após a execução de um caso de teste que verifica o processo de pagamento com cartão de crédito e reportar um defeito."
        ],
        "correta": "B",
        "explicacao": "Este é um exemplo de definição de condições de teste, que faz parte da análise de teste."
    },
    {
        "id": "q5",
        "pergunta": "Qual dos seguintes fatores tem uma influência SIGNIFICATIVA na abordagem do teste?\ni. O SDLC\nii. O número de defeitos detectados in projetos anteriores\niii. Os riscos identificados do produto\niv. Novos requisitos regulamentares impõem testes caixa-branca formais.\nv. Configuração do ambiente de teste",
        "opcoes": [
        "A) i, ii têm influência significativa",
        "B) i, iii, iv têm influência significativa",
        "C) ii, iv, v têm influência significativa",
        "D) iii, v têm influência significativa"
        ],
        "correta": "B",
        "explicacao": "O SDLC influencia a abordagem de teste (i). Os riscos identificados no produto são um dos fatores mais importantes (iii). Os requisitos regulatórios são fatores importantes que influenciam a abordagem de teste (iv)."
    },
    {
        "id": "q6",
        "pergunta": "Quais das DUAS tarefas a seguir pertencem PRINCIPALMENTE a uma função de teste?",
        "opcoes": [
        "A) Configurar ambientes de teste",
        "B) Manter o backlog do produto",
        "C) Projetar soluções para novos requisitos",
        "D) Crie o plano de testes",
        "E) Analise a base de testes"
        ],
        "correta": "A, E",
        "explicacao": "Configurar ambientes de teste (A) é feito pelos testadores. Analisar a base de testes (E) também é feito por eles, uma vez que se trata de uma tarefa técnica realizada como parte de uma análise de teste."
    },
    {
        "id": "q7",
        "pergunta": "Quais das seguintes habilidades (iv) são as habilidades MAIS importantes de um testador?\ni. Ter conhecimento da área\nii. Criando uma visão de produto\niii. Ser um bom jogador de equipe\niv. Planejar e organizar o trabalho da equipe.\nv. Pensamento crítico",
        "opcoes": [
        "A) ii e iv são importantes",
        "B) i, iii e v são importantes",
        "C) i, ii e v são importantes",
        "D) iii e iv são importantes"
        ],
        "correta": "B",
        "explicacao": "Ter conhecimento do domínio (i) é uma habilidade importante para um testador; ser um bom colaborador em equipe (iii) é uma habilidade importante; e o pensamento crítico (v) é uma das habilidades mais importantes dos testadores."
    },
    {
        "id": "q8",
        "pergunta": "De que forma a abordagem de equipe multidisciplinar se manifesta nas interações entre os testadores e os representantes da empresa?",
        "opcoes": [
        "A) Representantes empresariais decidem sobre as abordagens de automação de testes.",
        "B) Os testadores ajudam os representantes da empresa a definir uma estratégia de testes.",
        "C) Os representantes comerciais não fazem parte da abordagem de equipe completa.",
        "D) Os testadores ajudam os representantes da empresa a criar testes de aceite adequados."
        ],
        "correta": "D",
        "explicacao": "Os testadores trabalharão em estreita colaboração com os representantes da área de negócios para garantir que os níveis de qualidade desejados sejam alcançados. Isso inclui apoiá-los e colaborar com eles para ajudá-los a criar testes de aceite adequados."
    },
    {
        "id": "q9",
        "pergunta": "Considere a seguinte regra: “para cada atividade do SDLC existe uma atividade de teste correspondente”. Em quais modelos de SDLC essa regra se aplica?",
        "opcoes": [
        "A) Somente em modelos de desenvolvimento sequencial",
        "B) Somente em modelos de desenvolvimento iterativo",
        "C) Somente em modelos de desenvolvimento iterativos e incrementais",
        "D) Em modelos de desenvolvimento sequencial, incremental e iterativo"
        ],
        "correta": "D",
        "explicacao": "Esta regra se aplica a todos os modelos SDLC."
    },
    {
        "id": "q10",
        "pergunta": "Qual das seguintes afirmações descreve MELHOR a abordagem de desenvolvimento orientado a testes de aceite (ATDD)?",
        "opcoes": [
        "A) Em ATDD, os critérios de aceite são normalmente criados com base no formato dado/quando/então.",
        "B) Em ATDD, os casos de teste são criados principalmente durante o teste de componentes e são orientados ao código.",
        "C) Em ATDD, São criados testes, baseados em critérios de aceite, para orientar o desenvolvimento do software relacionado.",
        "D) Em ATDD, os testes são baseados no comportamento desejado do software, o que facilita a compreensão por parte dos membros da equipe."
        ],
        "correta": "C",
        "explicacao": "No desenvolvimento orientado por testes de aceite (ATDD), os testes são escritos a partir de critérios de aceite como parte do processo de design."
    },
    {
        "id": "q11",
        "pergunta": "Qual das seguintes opções NÃO é um exemplo da abordagem \"shift-left\"?",
        "opcoes": [
        "A) Revisar os requisitos do usuário antes que sejam formalmente aceitos pelos stakeholders.",
        "B) Escrever um teste de componente antes de escrever o código correspondente.",
        "C) Executar um teste de eficiência de desempenho para um componente durante o teste do componente.",
        "D) Escrever um script de teste antes de configurar o processo de gerenciamento de configuração."
        ],
        "correta": "D",
        "explicacao": "Os scripts de teste devem estar sujeitos ao gerenciamento de configuração, portanto, não faz sentido criar os scripts de teste antes que esse processo seja configurado."
    },
    {
        "id": "q12",
        "pergunta": "Qual dos argumentos abaixo você usaria para convencer seu gerente a organizar retrospectivas ao final de cada ciclo de lançamento?",
        "opcoes": [
        "A) As retrospectivas estão muito em voga atualmente e os clientes apreciariam se as adicionássemos aos nossos processos.",
        "B) Organizar retrospectivas economizará dinheiro para a organização, pois sem elas os representantes dos usuários finais não fornecem feedback imediato sobre o produto.",
        "C) As fragilidades nos processos identificadas durante a retrospectiva podem ser analisadas e servir como uma lista de tarefas para o programa de melhoria contínua de processos da organização.",
        "D) As retrospectivas abrangem cinco valores, incluindo coragem e respeito, que são cruciais para manter a melhoria contínua na organização."
        ],
        "correta": "C",
        "explicacao": "Retrospectivas realizadas regularmente, quando acompanhadas de atividades de acompanhamento adequadas, são fundamentais para a melhoria contínua do desenvolvimento e dos testes."
    },
    {
        "id": "q13",
        "pergunta": "Quais tipos de falhas (1-4) se encaixam melhor em quais níveis de teste (A-D)?\n1. Falhas no comportamento do sistema quando este se desvia das necessidades de negócio do usuário.\n2. Falhas na comunicação entre componentes\n3. Falhas de lógica no código\n4. Falhas na implementação incorreta de regras de negócio\n\nA. Teste de componentes\nB. Teste de integração de componentes\nC. Teste de sistema\nD. Testes de aceite",
        "opcoes": [
        "A) 1D, 2B, 3A, 4C",
        "B) 1D, 2B, 3C, 4A",
        "C) 1B, 2A, 3D, 4C",
        "D) 1C, 2B, 3A, 4D"
        ],
        "correta": "A",
        "explicacao": "A base para os testes de aceite são as necessidades de negócios do usuário (1D); A comunicação entre componentes é testada durante os testes de integração de componentes (2B); Falhas na lógica podem ser detectadas durante os testes de componentes (3A); As regras de negócios são a base para os testes de sistema (4C)."
    },
    {
        "id": "q14",
        "pergunta": "Você está testando uma história de usuário com três critérios de aceite: AC1, AC2 e AC3. O AC1 é coberto pelo caso de teste TC1, o AC2 pelo TC2 e o AC3 pelo TC3. O histórico de execução dos testes mostra três execuções em três versões consecutivas do software, conforme descrito a seguir:\n\nExecução 1 | Execução 2 | Execução 3\nTC1: (1) Falhou | (4) Aprovado | (7) Aprovado\nTC2: (2) Aprovado | (5) Falhou | (8) Aprovado\nTC3: (3) Falhou | (6) Falhou | (9) Aprovado\n\nOs testes são repetidos assim que você for informado de que todos os resultados foram satisfatórios. Os defeitos encontrados durante o teste foram corrigidos e uma nova versão do software foi disponibilizada.\nQuais dos testes acima são executados como testes de regressão?",
        "opcoes": [
        "A) Apenas 4, 7, 8, 9",
        "B) Apenas 5, 7",
        "C) Apenas 4, 6, 8, 9",
        "D) Apenas 5, 6"
        ],
        "correta": "B",
        "explicacao": "O TC2 foi aprovado na Execução 1 (teste 2), portanto, o teste (5) é um teste de regressão. O TC1 foi aprovado na Execução 2 (teste 4), portanto, o teste (7) também é um teste de regressão. Os demais são testes de confirmação (retestes)."
    },
    {
        "id": "q15",
        "pergunta": "Qual das seguintes opções NÃO é um benefício dos testes estáticos?",
        "opcoes": [
        "A) Ter um gerenciamento de defeitos menos dispendioso devido à facilidade de detectar defeitos em fases posteriores do ciclo de vida de desenvolvimento de software (SDLC)",
        "B) Corrigir defeitos encontrados durante testes estáticos geralmente é muito menos dispendioso do que corrigir defeitos encontrados durante testes dinâmicos.",
        "C) Identificar defeitos de código que poderiam não ter sido detectados apenas com testes dinâmicos.",
        "D) Detecção de lacunas e inconsistências nos requisitos"
        ],
        "correta": "A",
        "explicacao": "O gerenciamento de defeitos não é menos dispendioso em fases posteriores. Encontrar e corrigir defeitos em fases posteriores do SDLC é mais caro. As demais opções são vantagens reais do teste estático."
    },
    {
        "id": "q16",
        "pergunta": "Qual das seguintes opções representa um benefício do feedback precoce e frequente?",
        "opcoes": [
        "A) Isso melhora o processo de teste for projetos futuros.",
        "B) Isso obriga os clientes a priorizar suas necessidades com base nos riscos acordados.",
        "C) Isso fornece uma medida da qualidade das mudanças.",
        "D) Isso ajuda a evitar mal-entendidos quanto aos requisitos."
        ],
        "correta": "D",
        "explicacao": "O feedback precoce e frequente pode evitar mal-entendidos sobre os requisitos."
    },
    {
        "id": "q17",
        "pergunta": "As avaliações utilizadas na sua organização possuem os seguintes atributos:\n• Existe a função de um escriba.\n• O principal objetivo é avaliar a qualidade.\n• A reunião é conduzida pelo autor do produto do trabalho.\n• Existe preparação individual.\n• É produzido um relatório de revisão.",
        "opcoes": [
        "A) Revisão informal",
        "B) Passo a passo",
        "C) Análise técnica",
        "D) Inspeção"
        ],
        "correta": "B",
        "explicacao": "O propósito de avaliar a qualidade é um dos objetivos mais importantes de uma revisão. É necessário um moderador/condução pelo próprio autor em walkthroughs (passo a passo), o que não é permitido em inspeções e normalmente não é feito em revisões técnicas."
    },
    {
        "id": "q18",
        "pergunta": "Qual das seguintes afirmações NÃO é um fator que contribui para avaliações bem-sucedidas?",
        "opcoes": [
        "A) Os participantes devem dedicar tempo suficiente para a revisão.",
        "B) Dividir grandes projetos em partes menores para tornar o esforço necessário menos intenso.",
        "C) Os participantes devem evitar comportamentos que possam indicar tédio, exasperação ou hostilidade para com os outros participantes.",
        "D) As falhas encontradas devem ser reconhecidas, valorizadas e tratadas de forma objetiva."
        ],
        "correta": "D",
        "explicacao": "Durante as revisões (teste estático), é possível encontrar defeitos, não falhas. As falhas só se manifestam durante a execução do software (teste dinâmico)."
    },
    {
        "id": "q19",
        "pergunta": "Qual das seguintes opções é uma característica das técnicas de teste baseadas na experiência?",
        "opcoes": [
        "A) Os casos de teste são criados com base em informações detalhadas do projeto.",
        "B) Os itens testados na seção de código da interface são usados para medir a cobertura.",
        "C) As técnicas de teste dependem fortemente do conhecimento que o testador tem do software e do domínio de negócios.",
        "D) Os casos de teste são usados para identificar desvios em relação aos requisitos."
        ],
        "correta": "C",
        "explicacao": "Esta é uma característica comum das técnicas de teste baseadas em experiência. Esse conhecimento e experiência incluem o uso esperado do software, seu ambiente, defeitos prováveis e a distribuição desses defeitos."
    },
    {
        "id": "q20",
        "pergunta": "Você está testando um formulário simplificado de busca de apartamentos que possui apenas dois critérios de busca:\n• andar (com três opções possíveis: térreo; primeiro andar; segundo andar ou andar superior)\n• Tipo de jardim (com três opções possíveis: sem jardim; jardim pequeno; jardim grande)\nCada apartamento no térreo possui jardim, enquanto os apartamentos nos andares superiores não. O formulário possui um mecanismo de validação integrado que impede o uso de critérios de busca que violem essa regra.\nCada teste possui dois valores de entrada: andar e tipo de jardim. Você deseja aplicar o particionamento de equivalência (EP) para abranger cada andar e cada tipo de jardim em seus testes.\nQual é o número mínimo de casos de teste para atingir 100% de cobertura de EP para partições válidas?",
        "opcoes": [
        "A) 3",
        "B) 4",
        "C) 5",
        "D) 6"
        ],
        "correta": "B",
        "explicacao": "A situação é descrita como cobertura de “cada opção”. Precisamos de dois casos para o térreo (jardim pequeno e grande) e mais dois casos para cobrir os outros dois andares (onde o tipo será obrigatoriamente sem jardim). Total de 4 casos: TC1(térreo, j. pequeno), TC2(térreo, j. grande), TC3(1º andar, sem jardim), TC4(2º andar+, sem jardim)."
    },
    {
        "id": "q21",
        "pergunta": "Você está testando um sistema que calcula a nota final do curso para um determinado aluno. A nota final é atribuída com base no resultado final, de acordo com as seguintes regras:\n• 0 a 50 pontos: reprovado\n• 51 a 60 pontos: razoável\n• 61 a 70 pontos: satisfatório\n• 71 a 80 pontos: bom\n• 81 a 90 pontos: muito bom\n• 91 a 100 pontos: excelente\nVocê preparou o seguinte conjunto de casos de teste:\nTC1: 91 (excelente)\nTC2: 50 (fracassado)\nTC3: 81 (muito bom)\nTC4: 60 (justo)\nTC5: 70 (satisfatório)\nTC6: 80 (bom)\nQual é a cobertura alcançada para a análise de valor limite (BVA) de dois valores para o resultado final? Isso é alcançado com os casos de teste existentes?",
        "opcoes": [
        "A) 50%",
        "B) 60%",
        "C) 33,3%",
        "D) 100%"
        ],
        "correta": "A",
        "explicacao": "Existem 12 valores de limite para os valores finais: 0, 50, 51, 60, 61, 70, 71, 80, 81, 90, 91 e 100. Os casos de teste abrangem seis deles (TC1 – 91, TC2 – 50, TC3 – 81, TC4 – 60, TC5 – 70 e TC7/TC6 – 51/80). Portanto, os casos de teste cobrem 6/12 = 50%."
    },
    {
        "id": "q22",
        "pergunta": "Sua loja favorita de aluguel de bicicletas acaba de implementar um novo sistema de Gestão de Relacionamento com o Cliente e pediu a você, um de seus clientes mais fiéis, para testá-lo.\nAs funcionalidades implementadas são as seguintes:\n• Qualquer pessoa pode alugar uma bicicleta, mas os membros recebem um desconto de 20%.\n• No entanto, se o prazo de devolução for perdido, o desconto não estará mais disponível.\n• Após 15 aluguéis, os membros ganham um presente: uma camiseta.\nA tabela de decisão que descreve as funcionalidades implementadas tem a seguinte aparência:\n\nCondições | R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8\nSer membro | T | T | T | T | F | F | F | F\nPrazo não cumprido | T | F | T | F | T | F | F | T\n15º aluguel | F | F | T | T | F | F | T | T\nAções\n20% de desconto | | X | | X | | | | \nCamiseta de presente | | | X | X | | | | X\n\nCom base APENAS na descrição das funcionalidades do sistema de Gestão de Relacionamento com o Cliente (CRM), qual das regras acima descreve uma situação impossível?",
        "opcoes": [
        "A) R4",
        "B) R2",
        "C) R6",
        "D) R8"
        ],
        "correta": "D",
        "explicacao": "Não há desconto para um não-membro que também tenha perdido um prazo, mas apenas os membros podem receber uma camiseta de presente. Portanto, a ação da regra R8 não está correta com base na especificação."
    },
    {
        "id": "q23",
        "pergunta": "Você testa um sistema cujo ciclo de vida é modelado pelo diagrama de transição de estados mostrado abaixo. O sistema inicia no estado INIT e termina sua operação no estado OFF. [Diagrama: INIT -> test -> DEBUG MODE -> done -> OFF; INIT -> run -> IN OPERATION -> error -> DEBUG MODE; IN OPERATION -> pause -> ON HOLD -> resume -> IN OPERATION; ON HOLD -> done -> OFF]\nQual é o número MÍNIMO de casos de teste para obter uma cobertura de transições válida?",
        "opcoes": [
        "A) 4",
        "B) 2",
        "C) 7",
        "D) 3"
        ],
        "correta": "D",
        "explicacao": "As transições “teste” e “erro” não podem ocorrer em um único caso de teste. Isso também vale para as duas transições “concluído” (done). Isso significa que precisamos de pelo menos três casos de teste para obter cobertura de transição total (ex: TC1: teste, concluído; TC2: execução, erro, concluído; TC3: execução, pausa, retomada, pausa, concluído)."
    },
    {
        "id": "q24",
        "pergunta": "Seu conjunto de testes atingiu 100% de cobertura de instruções. Qual é a consequência desse fato?",
        "opcoes": [
        "A) Cada instrução no código que contém um defeito foi executada pelo menos uma vez.",
        "B) Qualquer conjunto de testes que contenha mais casos de teste do que o seu conjunto de testes também atingirá 100% de cobertura de instruções.",
        "C) Cada caminho no código foi executado pelo menos uma vez.",
        "D) Todas as combinações de valores de entrada foram testadas pelo menos uma vez."
        ],
        "correta": "A",
        "explicacao": "Como é alcançada uma cobertura de 100% das instruções, todas as instruções, incluindo aquelas com defeitos, devem ter sido executadas e avaliadas pelo menos uma vez."
    },
    {
        "id": "q25",
        "pergunta": "Qual das seguintes afirmações NÃO é verdadeira para testes caixa-branca?",
        "opcoes": [
        "A) Durante os testes caixa-branca, toda a implementação do software é considerada.",
        "B) As métricas de cobertura de código-fonte (caixa-branca) podem ajudar a identificar testes adicionais para aumentar a cobertura do código.",
        "C) As técnicas de teste caixa-branca podem ser usadas em testes estáticos.",
        "D) Os testes caixa-branca podem ajudar a identificar lacunas na implementação dos requisitos."
        ],
        "correta": "D",
        "explicacao": "Essa é a fraqueza das técnicas de teste de caixa aberta (caixa-branca). Elas não são capazes de identificar a implementação ausente, pois se baseiam exclusivamente na estrutura do objeto de teste existente, e não na especificação externa de requisitos."
    },
    {
        "id": "q26",
        "pergunta": "Qual das seguintes opções descreve MELHOR o conceito por trás do palpite errôneo (adivinhação de erros)?",
        "opcoes": [
        "A) A detecção de erros envolve o uso do seu conhecimento e experiência com defeitos encontrados no passado e erros típicos cometidos por desenvolvedores.",
        "B) A tentativa de adivinhar erros envolve usar sua experiência pessoal em desenvolvimento e os erros que você cometeu como desenvolvedor.",
        "C) A adivinhação de erros exige que você imagine ser o usuário do objeto de teste e tente adivinhar os erros que ele poderia cometer ao interagir com o objeto.",
        "D) A detecção automática de erros exige que você reproduza rapidamente a tarefa de desenvolvimento para identificar os tipos de erros que um desenvolvedor poderia cometer."
        ],
        "correta": "A",
        "explicacao": "O conceito básico por trás da adivinhação de erros é que o testador tenta adivinhar quais erros podem ter sido cometidos pelo desenvolvedor e quais defeitos podem estar presentes no objeto de teste com base na experiência anterior (e, às vezes, em listas de verificação)."
    },
    {
        "id": "q27",
        "pergunta": "No seu projeto, houve um atraso no lançamento de um aplicativo totalmente novo e a execução dos testes começou tarde, mas você possui um conhecimento detalhado do domínio e boas habilidades analíticas. A lista completa de requisitos ainda não foi compartilhada com a equipe, mas a gerência está solicitando a apresentação de alguns resultados de testes.\nQual técnica de teste é a mais adequada para esta situação?",
        "opcoes": [
        "A) Testes baseados em listas de verificação",
        "B) Erro de adivinhação",
        "C) Testes exploratórios",
        "D) Teste de ramificação"
        ],
        "correta": "C",
        "explicacao": "O teste exploratório é mais útil quando há poucas especificações conhecidas e/ou há um prazo apertado para a execução dos testes."
    },
    {
        "id": "q28",
        "pergunta": "Qual das seguintes opções descreve MELHOR a forma como os critérios de aceite podem ser documentados?",
        "opcoes": [
        "A) Realizar retrospectivas para determinar as reais necessidades dos stakeholders em relação a uma determinada história de usuário.",
        "B) Utilizando o formato dado/quando/então para descrever uma condição de teste de exemplo relacionada a uma determinada história de usuário.",
        "C) Utilizar a comunicação verbal para reduzir o risco de mal-entendidos sobre os critérios de aceite por parte de outras pessoas.",
        "D) Documentar os riscos relacionados a uma determinada história de usuário em um plano de testes para facilitar o teste baseado em riscos dessa história de usuário."
        ],
        "correta": "B",
        "explicacao": "O formato dado/quando/então (Given/When/Then) é a maneira padrão de documentar fisicamente os critérios de aceite de uma user story no desenvolvimento de software."
    },
    {
        "id": "q29",
        "pergunta": "Considere a seguinte história de usuário:\nComo editor\nQuero revisar o conteúdo antes de ser publicado.\npara que eu possa garantir que a gramática esteja correta.\ne seus critérios de aceite:\n• O usuário pode fazer login no sistema de gerenciamento de conteúdo com a função de \"Editor\".\n• O editor pode visualizar páginas de conteúdo existentes.\n• O editor pode editar o conteúdo da página.\n• O editor pode adicionar comentários de marcação.\n• O editor pode salvar as alterações.\n• O editor pode reatribuir a função de \"proprietário do conteúdo\" para fazer atualizações.\nQual das seguintes opções é o MELHOR exemplo de um teste ATDD para esta história de usuário?",
        "opcoes": [
        "A) Teste se o editor consegue salvar o documento após editar o conteúdo da página.",
        "B) Teste se o proprietário do conteúdo consegue iniciar sessão e fazer atualizações no conteúdo.",
        "C) Teste se o editor consegue agendar a publicação do conteúdo editado.",
        "D) Teste se o editor pode ser realocado para outro editor para fazer atualizações."
        ],
        "correta": "A",
        "explicacao": "Este teste abrange diretamente dois critérios de aceite explícitos da história: um sobre a edição do conteúdo da página e outro sobre o salvamento das alterações pelo editor."
    },
    {
        "id": "q30",
        "pergunta": "Como os testadores agregam valor ao planejamento de iteração e lançamento?",
        "opcoes": [
        "A) Os testadores determinam a prioridade das histórias de usuário a serem desenvolvidas.",
        "B) Os testadores se concentram apenas nos aspectos funcionais do sistema a ser testado.",
        "C) Os testadores participam da identificação e avaliação detalhadas dos riscos das histórias de usuário.",
        "D) Os testadores garantem o lançamento de software de alta qualidade por meio do planejamento antecipado dos testes durante o processo de lançamento."
        ],
        "correta": "C",
        "explicacao": "De acordo com o programa de estudos, a participação na identificação e avaliação detalhada dos riscos associados às histórias de usuário é uma das principais maneiras pelas quais os testadores agregam valor ao planejamento de iteração e lançamento."
    },
    {
        "id": "q31",
        "pergunta": "Quais das DUAS opções a seguir são critérios de saída para testar um sistema?",
        "opcoes": [
        "A) Preparação do ambiente de teste",
        "B) A capacidade do testador de fazer login no objeto de teste.",
        "C) A densidade de defeitos estimada foi atingida.",
        "D) Os requisitos são traduzidos para o formato dado/quando/então.",
        "E) Os testes de regressão são automatizados."
        ],
        "correta": "C, E",
        "explicacao": "A densidade estimada de defeitos é uma medida de diligência/qualidade (C) e pertence aos critérios de saída. A automação dos testes de regressão é um critério de conclusão (E), pertencendo também aos critérios de saída. As demais opções são critérios de entrada."
    },
    {
        "id": "q32",
        "pergunta": "Sua equipe utiliza a técnica de estimativa de três pontos para estimar o esforço de teste necessário para um novo recurso de alto risco. As seguintes estimativas foram feitas:\n• Estimativa mais otimista: 2 horas-pessoa\n• Estimativa mais provável: 11 horas-pessoa\n• Estimativa mais pessimista: 14 horas-pessoa\nQual é a estimativa final?",
        "opcoes": [
        "A) 9 horas - pessoa",
        "B) 14 horas-pessoa",
        "C) 11 horas-pessoa",
        "D) 10 horas- pessoa"
        ],
        "correta": "D",
        "explicacao": "Na técnica de estimativa de três pontos (PERT), a fórmula é: E = (otimista + 4 * mais provável + pessimista) / 6. Calculando: E = (2 + (4 × 11) + 14) / 6 = (2 + 44 + 14) / 6 = 60 / 6 = 10 horas-pessoa."
    },
    {
        "id": "q33",
        "pergunta": "Você está testando um aplicativo móvel que permite aos usuários encontrar um restaurante próximo com base no tipo de comida que desejam comer. Considere a seguinte lista de casos de teste, prioridades (ou seja, um número menor significa uma prioridade maior) e dependências:\n\nNúmero do CT | Condição de teste coberta | Prioridade | Dependência lógica\nTC 001 | Selecione o tipo de alimento | 3 | nenhum\nTC 002 | Selecione o restaurante | 2 | TC 001\nTC 003 | Obtenha instruções | 1 | TC 002\nTC 004 | Ligue para o restaurante | 2 | TC 002\nTC 005 | Faça uma reserva | 3 | TC 002\n\nQual dos seguintes casos de teste deve ser executado como o terceiro?",
        "opcoes": [
        "A) TC 003",
        "B) TC 005",
        "C) TC 002",
        "D) TC 001"
        ],
        "correta": "A",
        "explicacao": "O teste TC 001 deve vir primeiro por não ter dependências. Em segundo vem o TC 002 para satisfazer as dependências dos demais. Em seguida, executa-se o TC 003 para satisfazer a prioridade mais alta (1). Portanto, o terceiro a ser executado é o TC 003."
    },
    {
        "id": "q34",
        "pergunta": "Considere as seguintes categorias de teste (1-4) e quadrantes de teste ágil (A-D):\n1. Testes de usabilidade\n2. Teste de componentes\n3. Testes funcionais\n4. Testes de confiabilidade\n\nA. Quadrante de testes ágeis Q1: voltado para a tecnologia, dando suporte à equipe de desenvolvimento\nB. Quadrante de testes ágeis Q2: voltado para o negócio, dando suporte à equipe de desenvolvimento\nC. Quadrante de testes ágeis Q3: voltado para o negócio, análise crítica do produto\nD. Quadrante de testes ágeis Q4: tecnologia voltada para o produto, análise crítica.\n\nComo as seguintes categorias de teste se relacionam com os quadrantes de teste ágil?",
        "opcoes": [
        "A) 1C, 2A, 3B, 4D",
        "B) 1D, 2A, 3C, 4B",
        "C) 1C, 2B, 3D, 4A",
        "D) 1D, 2B, 3C, 4A"
        ],
        "correta": "A",
        "explicacao": "O teste de usabilidade está no terceiro quadrante (1-C); O teste de componentes está no primeiro quadrante (2-A); O teste funcional está no segundo quadrante (3-B); O teste de confiabilidade está no quarto quadrante (4-D)."
    },
    {
        "id": "q35",
        "pergunta": "Durante a análise de risco, o seguinte risco foi identificado e avaliado:\n• Risco: O tempo de resposta é muito longo para gerar um relatório.\n• Probabilidade de risco: média; impacto do risco: alto\n• Resposta ao risco:\n  o Uma equipe de testes independente realiza testes de eficiência de desempenho durante os testes do sistema.\n  o Uma amostra selecionada de usuários finais realiza testes alfa e beta antes do lançamento.\n\nQue medidas se propõem tomar em resposta a este risco analisado?",
        "opcoes": [
        "A) aceite do risco",
        "B) Plano de contingência",
        "C) Mitigação de riscos",
        "D) Transferência de risco"
        ],
        "correta": "C",
        "explicacao": "As ações propostas estão diretamente relacionadas à execução de testes focados no problema, o que é uma forma ativa de mitigação de risco (reduzir a probabilidade ou impacto antes do lançamento)."
    },
    {
        "id": "q36",
        "pergunta": "Qual produto de trabalho pode ser usado por uma equipe ágil para mostrar a quantidade de trabalho que foi concluída e a quantidade total de trabalho restante para uma determinada iteração?",
        "opcoes": [
        "A) Critérios de aceite",
        "B) Relatório de defeitos",
        "C) Relatório de conclusão do teste",
        "D) Gráfico de Burndown"
        ],
        "correta": "D",
        "explicacao": "Gráficos de burndown são uma representação gráfica do trabalho restante em relação ao tempo restante. Eles são atualizados diariamente, portanto, podem mostrar continuamente o andamento do trabalho dentro de uma iteração."
    },
    {
        "id": "q37",
        "pergunta": "Você precisa atualizar um dos scripts de teste automatizados para atender a um novo requisito. Qual processo indica que você deve criar uma versão do script de teste no repositório de testes?",
        "opcoes": [
        "A) Gestão de rastreabilidade",
        "B) Testes de manutenção",
        "C) Gerenciamento de configuração",
        "D) Engenharia de requisitos"
        ],
        "correta": "C",
        "explicacao": "Para dar suporte aos testes, o gerenciamento de configuração envolve o controle de versão, histórico e integridade de todos os itens e artefatos de teste (como os scripts automatizados)."
    },
    {
        "id": "q38",
        "pergunta": "Você recebeu o seguinte relatório de defeito dos desenvolvedores, informando que a anomalia descrita neste relatório de teste não é reproduzível.\n\n\"O aplicativo trava.\n03/05/2022 – John Doe – Rejeitado\nO aplicativo trava após inserir “Entrada de teste: $ä” no campo Nome na tela de criação de novo usuário. Tentei sair e entrar com a conta test_admin01, mas o problema persiste. Tentei com outras contas de administrador de teste, e o problema continua. Nenhuma mensagem de erro é exibida; o log (em anexo) contém a notificação de erro fatal. De acordo com o caso de teste TC-1305, o aplicativo deveria aceitar a entrada fornecida e criar o usuário. Por favor, corrijam isso com alta prioridade, pois essa funcionalidade está relacionada ao REQ-0012, que é um novo requisito crítico para o negócio.\"\n\nQue informações essenciais estão FALTANDO neste relatório de testes e que teriam sido úteis para os desenvolvedores?",
        "opcoes": [
        "A) Resultado esperado e resultado real",
        "B) Referências e estado do defeito",
        "C) Ambiente de teste e item de teste",
        "D) Prioridade e gravidade"
        ],
        "correta": "C",
        "explicacao": "O relatório descreve bem os passos, o resultado esperado/real e o impacto, mas não diz em qual ambiente de teste (SO, banco, hardware) a anomalia foi detectada, e também não especifica qual sistema/aplicativo e sua respectiva versão (item de teste) foram afetados."
    },
    {
        "id": "q39",
        "pergunta": "Que atividade de teste uma ferramenta de preparação de dados suporta?",
        "opcoes": [
        "A) Monitoramento e controle de testes",
        "B) Análise de teste",
        "C) Projeto e implementação de testes",
        "D) Conclusão do teste"
        ],
        "correta": "C",
        "explicacao": "O projeto e a implementação de testes podem incluir a identificação, criação ou aquisição das ferramentas e insumos necessários para a execução dos testes, como os dados de teste."
    },
    {
        "id": "q40",
        "pergunta": "Qual item identifica corretamente um risco potencial da execução de testes automatizados?",
        "opcoes": [
        "A) Isso pode introduzir regressões desconhecidas na produção.",
        "B) Pode ser que não estejam sendo alocados esforços suficientes para a manutenção do software de teste.",
        "C) Pode não ser suficientemente confiável em ferramentas e softwares de teste associados.",
        "D) Isso pode reduzir o tempo alocado para testes manuais."
        ],
        "correta": "B",
        "explicacao": "A alocação incorreta ou subestimada de esforços para manter os scripts e o software de teste atualizados conforme o sistema evolui é um risco clássico e expressivo da automação."
    },
    {
        "id": "qa1",
        "pergunta": "Você recebeu uma tarefa: analisar e corrigir as causas de falhas em um novo sistema a ser lançado. Que atividade você está realizando?",
        "opcoes": [
        "A) Depuração",
        "B) Teste de software",
        "C) Levantamento de requisitos",
        "D) Gestão de defeitos"
        ],
        "correta": "A",
        "explicacao": "A depuração (debugging) é o processo de encontrar, analisar e remover as causas de falhas em um componente ou sistema. O teste apenas detecta os defeitos, não os corrige."
    },
    {
        "id": "qa2",
        "pergunta": "Em muitas empresas de software, o departamento de testes é chamado de departamento de Garantia da Qualidade (QA). Essa frase está correta ou não? Por quê?",
        "opcoes": [
        "A) Está correto. Testes e controle de qualidade significam exatamente a mesma coisa.",
        "B) Está correto. Esses termos podem ser usados indistintamente, pois tanto os testes quanto o controle de qualidade concentram suas atividades nas mesmas questões de qualidade.",
        "C) Não está correto. Testar é algo mais abrangente; os testes incluem todas as atividades relacionadas à qualidade. A Garantia da Qualidade (QA) concentra-se nos processos relacionados à qualidade.",
        "D) Não está correto. A Garantia da Qualidade (QA) concentra-se em processos relacionados à qualidade, enquanto os testes concentram-se em demonstrar que um componente ou sistema é adequado à sua finalidade e em detectar defeitos."
        ],
        "correta": "D",
        "explicacao": "Testes e garantia de qualidade não são a mesma coisa. A garantia de qualidade concentra-se no estabelecimento, monitoramento e aprimoramento dos processos, enquanto o teste foca na avaliação do produto e detecção de defeitos."
    },
    {
        "id": "qa3",
        "pergunta": "O toque de um telefone em uma cabine vizinha distrai um programador, levando-o a programar incorretamente a lógica que verifica o limite superior de uma variável de entrada. Posteriormente, durante os testes do sistema, um testador percebe que esse campo de entrada aceita valores inválidos. Qual das seguintes opções descreve corretamente um limite superior codificado incorretamente?",
        "opcoes": [
        "A) A causa raiz",
        "B) Um fracasso",
        "C) Um erro",
        "D) Um defeito"
        ],
        "correta": "D",
        "explicacao": "O problema inserido fisicamente no código-fonte devido ao erro humano do programador é formalmente classificado como um defeito (ou falha interna/bug)."
    },
    {
        "id": "qa4",
        "pergunta": "Considere o seguinte software de teste:\n• Carta de Teste 04.018 | Duração da sessão: 1 hora\n• Explorar: Página de inscrição\n• Com: Diferentes conjuntos de dados de entrada incorretos\n• Para descobrir: Defeitos relacionados à aceite do processo de registro com entrada incorreta.\nQual atividade de teste gera esse software de teste como saída?",
        "opcoes": [
        "A) Planejamento de testes",
        "B) Monitoramento e controle de testes",
        "C) Análise de teste",
        "D) Projeto de teste"
        ],
        "correta": "D",
        "explicacao": "O material de teste em questão (uma carta de sessão ou carta de teste usada em testes exploratórios) é derivado e gerado como resultado da atividade de projeto de teste."
    },
    {
        "id": "qa5",
        "pergunta": "Qual das seguintes opções é o MELHOR exemplo de como a rastreabilidade auxilia nos testes?",
        "opcoes": [
        "A) Realizar a análise de impacto de uma mudança fornecerá informações sobre a conclusão dos testes.",
        "B) A análise da rastreabilidade entre os casos de teste e os resultados dos testes fornecerá informações sobre o nível estimado de risco residual.",
        "C) Realizar a análise de impacto de uma mudança ajudará a selecionar os casos de teste corretos para testes de regressão.",
        "D) Analisar a rastreabilidade entre a base de testes, os objetos de teste e os casos de teste ajudará na seleção de dados de teste para atingir a cobertura esperada do objeto de teste."
        ],
        "correta": "C",
        "explicacao": "Realizar a análise de impacto das alterações com base no mapeamento de rastreabilidade ajuda diretamente a equipe na seleção assertiva dos casos de teste que devem compor o ciclo de testes de regressão."
    },
    {
        "id": "qa6",
        "pergunta": "Qual das seguintes opções melhor explica um benefício da independência dos testes?",
        "opcoes": [
        "A) A utilização de uma equipe de testes independente permite que a gestão do projeto atribua a responsabilidade pela qualidade do produto à equipe de testes.",
        "B) Se for possível contratar uma equipe de testes externa à organização, isso trará benefícios claros, pois essa equipe externa não será tão facilmente influenciada pelas preocupações da gestão de projetos com a entrega e pela necessidade de cumprir prazos rigorosos.",
        "C) Uma equipe de testes independente pode trabalhar separadamente dos desenvolvedores, não precisa se distrair com mudanças nos requisitos do projeto e pode restringir a comunicação com os desenvolvedores ao registro de defeitos por meio do sistema de gerenciamento de defeitos.",
        "D) Quando as especificações contêm ambiguidades e inconsistências, suposições são feitas sobre sua interpretação, e um testador independente pode ser útil para questionar essas suposições e a interpretação feita pelo desenvolvedor."
        ],
        "correta": "D",
        "explicacao": "As especificações nunca são perfeitas, fazendo com que desenvolvedores façam suposições. Um testador independente traz um olhar isento e é extremamente útil para questionar e verificar essas suposições e interpretações."
    },
    {
        "id": "qa7",
        "pergunta": "Você trabalha como testador em uma equipe que segue o modelo V. Qual das seguintes atividades PODE ser realizada nas fases iniciais do SDLC (Ciclo de Vida de Desenvolvimento de Software)?",
        "opcoes": [
        "A) Execução de teste dinâmico",
        "B) Teste estático",
        "C) Planejamento de testes",
        "D) Execução de testes de aceite",
        "E) Testes de manutenção"
        ],
        "correta": "B, C",
        "explicacao": "Em modelos de desenvolvimento sequencial, nas fases iniciais, os testadores participam de revisões de requisitos (teste estático) (B). Além disso, o planejamento de testes (C) pode ser iniciado logo no começo do ciclo, antes da criação física do código ou design detalhado."
    },
    {
        "id": "qa8",
        "pergunta": "Quais das seguintes opções representam vantagens do DevOps?\ni. Lançamento de produtos mais rápido e tempo de chegada ao mercado mais curto.\nii. Aumenta a necessidade de testes manuais repetitivos.\niii. Disponibilidade constante de software executável\niv. Redução no número de testes de regressão associados à refatoração de código.\nv. Configurar a estrutura de automação de testes é barato, já que tudo é automatizado.",
        "opcoes": [
        "A) i, ii, iv são vantagens",
        "B) iii, v são vantagens",
        "C) i, iii são vantagens",
        "D) ii, iv, v são vantagens"
        ],
        "correta": "C",
        "explicacao": "O lançamento mais rápido do produto e tempo de mercado mais curto são vantagens do DevOps (i), assim como a disponibilidade constante de software executável por meio de CI/CD (iii). Automatizar não é barato (v) e a necessidade de testes manuais diminui, não aumenta (ii)."
    },
    {
        "id": "qa9",
        "pergunta": "Você trabalha como testador em um projeto de aplicativo móvel para pedidos de comida para um de seus clientes. O cliente lhe enviou uma lista de requisitos. Um deles, com alta prioridade, diz:\n“Em 95% dos casos, o pedido deve ser processado em menos de 10 segundos”.\nVocê criou um conjunto de casos de teste nos quais foram feitos vários pedidos aleatórios, o tempo de processamento foi medido e os resultados dos testes foram comparados com os requisitos. Que tipo de teste você realizou?",
        "opcoes": [
        "A) Funcional, pois os casos de teste abrangem os requisitos de negócio do usuário para o sistema.",
        "B) Não funcionais, pois medem o desempenho do sistema.",
        "C) Funcional, porque os casos de teste interagem com a interface do usuário.",
        "D) Teste caixa-branca, pois precisamos conhecer a estrutura interna do programa para medir o tempo de processamento do pedido."
        ],
        "correta": "B",
        "explicacao": "Este é um exemplo clássico de teste de eficiência de desempenho, que avalia a rapidez sob determinadas condições. Sendo assim, enquadra-se na categoria de testes não funcionais (avalia como o sistema faz, e não o que faz)."
    },
    {
        "id": "qa10",
        "pergunta": "A estratégia de testes da sua organização sugere que, quando um sistema for desativado, a migração de dados deverá ser testada. Em qual tipo de teste é MAIS provável que esse teste seja realizado?",
        "opcoes": [
        "A) Testes de manutenção",
        "B) Teste de regressão",
        "C) Testes de confiabilidade",
        "D) Testes de integração"
        ],
        "correta": "A",
        "explicacao": "Modificações no ambiente, como a migração de dados devido à desativação ou substituição de um sistema legado, são testadas tipicamente sob o escopo de testes de manutenção."
    },
    {
        "id": "qa11",
        "pergunta": "A seguir, apresentamos uma lista dos produtos de trabalho gerados no SDLC (Ciclo de Vida de Desenvolvimento de Software).\ni. Requisitos de negócios\nii. Agendar\niii. Orçamento de teste\niv. Código executável de terceiros\nv. Histórias de usuário e seus critérios de aceite\nQuais deles podem ser revisados?",
        "opcoes": [
        "A) Os itens i e iv podem ser revisados.",
        "B) Os itens i, ii, iii e iv podem ser revisados.",
        "C) i, ii, iii e v podem ser revisados.",
        "D) iii, iv, v podem ser revisados"
        ],
        "correta": "C",
        "explicacao": "Podem ser revisados (teste estático) os requisitos de negócios (i), cronogramas/agendas (ii), orçamentos de teste (iii) e histórias de usuário (v). O código executável de terceiros (iv) só pode ser testado de forma dinâmica."
    },
    {
        "id": "qa12",
        "pergunta": "Decida quais das seguintes afirmações (iv) são verdadeiras para testes estáticos.\ni. Com esse teste, é mais fácil identificar comportamentos externos anormais.\nii. Discrepâncias em relação a um padrão de codificação são mais fáceis de encontrar com este teste.\niii. Ele identifica falhas causadas por defeitos durante a execução do software.\niv. O objetivo do teste é identificar defeitos o mais cedo possível.\nv. A falta de cobertura para requisitos críticos de segurança é mais fácil de identificar e corrigir.",
        "opcoes": [
        "A) i, iv, v são verdadeiros para testes estáticos.",
        "B) i, iii e iv são verdadeiros para testes estáticos.",
        "C) ii e iii são verdadeiras para testes estáticos.",
        "D) ii, iv e v são verdadeiras para testes estáticos."
        ],
        "correta": "D",
        "explicacao": "O teste estático facilita encontrar desvios de padrões de código (ii), tem o objetivo de achar defeitos precocemente (iv) e ajuda a identificar lacunas de cobertura em requisitos (v). Comportamentos externos (i) e falhas em execução (iii) pertencem ao teste dinâmico."
    },
    {
        "id": "qa13",
        "pergunta": "Qual das seguintes afirmações sobre avaliações formais é VERDADEIRA?",
        "opcoes": [
        "A) Algumas avaliações não exigem mais de uma função.",
        "B) O processo de revisão possui diversas atividades.",
        "C) A documentação a ser analisada não é distribuída antes da reunião de revisão, com exceção do produto do trabalho para tipos de revisão específicos.",
        "D) Os defeitos encontrados durante a revisão não são relatados, pois não são detectados pelos testes dinâmicos."
        ],
        "correta": "B",
        "explicacao": "As revisões formais seguem um processo estruturado que é composto por diversas atividades sequenciais (planejamento, início, preparação individual, reunião, acompanhamento, etc.)."
    },
    {
        "id": "qa14",
        "pergunta": "Que tarefas a gestão pode assumir durante uma avaliação formal?",
        "opcoes": [
        "A) Assumir a responsabilidade geral pela revisão.",
        "B) Decidir o que deve ser revisto.",
        "C) Garantir o bom funcionamento das reuniões de avaliação e moderá-las, se necessário.",
        "D) Registrar informações de revisão, como decisões de revisão."
        ],
        "correta": "B",
        "explicacao": "A gestão (management) é responsável por decidir o que deve ser revisado, além de alocar tempo e recursos nos projetos para a execução dessas revisões."
    },
    {
        "id": "qa15",
        "pergunta": "Um sistema de armazenamento de vinho utiliza um dispositivo de controle que mede a temperatura T da adega (medida em °C, arredondada para o grau mais próximo) e alerta o usuário caso ela se desvie do valor ideal de 12, de acordo com as seguintes regras:\n• Se T = 12, o sistema indica \"temperatura ideal\".\n• Se T < 12, o sistema diz: \"a temperatura está muito baixa!\"\n• Se T > 12, o sistema diz: \"a temperatura está muito alta!\"\nDeseja-se utilizar a análise de valor de contorno (BVA) de 3 pontos para verificar o comportamento do dispositivo de controle.\nQual é o conjunto MÍNIMO de entradas de teste que atinge 100% da cobertura desejada?",
        "opcoes": [
        "A) 11, 12, 13",
        "B) 10, 12, 14",
        "C) 10, 11, 12, 13, 14",
        "D) 10, 11, 13, 14"
        ],
        "correta": "C",
        "explicacao": "Na análise de valor limite de 3 pontos para o valor 12, avaliamos o limite e os vizinhos imediatos de cada partição. Para T < 12 (limite 11), T = 12 (limite 12) e T > 12 (limite 13). Considerando os extremos válidos ao redor das transições de decisão por inteiro, os valores necessários são 10, 11, 12, 13 e 14."
    },
    {
        "id": "qa16",
        "pergunta": "Qual das seguintes afirmações sobre testes de ramificação está CORRETA?",
        "opcoes": [
        "A) Si um programa incluir apenas ramificações incondicionais, então uma cobertura de ramificação de 100% pode ser alcançada sem executar nenhum caso de teste.",
        "B) Se os casos de teste exercitarem todos os ramos incondicionais no código, então será alcançada uma cobertura de ramos de 100%.",
        "C) Se a cobertura de extratos atingir 100%, então a cobertura de agências também atingirá 100%.",
        "D) Se for alcançada uma cobertura de 100% dos ramos, então todos os resultados de decisão em cada instrução de decisão no código serão executados."
        ],
        "correta": "D",
        "explicacao": "Alcançar 100% de cobertura de ramificação (branch coverage) significa que todos os resultados possíveis de cada decisão (verdadeiro e falso) foram exercitados."
    },
    {
        "id": "qa17",
        "pergunta": "Você está testando um aplicativo móvel que permite aos clientes acessar e gerenciar suas contas bancárias. Você está executando um conjunto de testes que envolve a avaliação de cada tela e de cada campo em cada tela, comparando-os com uma lista geral de boas práticas de interface do usuário, derivada de um livro popular sobre o assunto, que visa maximizar a usabilidade de tais aplicativos.\nQual das seguintes opções MELHOR categoriza a técnica de teste que você está utilizando?",
        "opcoes": [
        "A) Caixa preta",
        "B) Exploratório",
        "C) Baseado em lista de verificação",
        "D) Erro de adivinhação"
        ],
        "correta": "C",
        "explicacao": "Utilizar uma lista estruturada de critérios, boas práticas ou regras derivadas de uma fonte externa para guiar e verificar o objeto de teste configura a técnica de teste baseado em lista de verificação (checklist-based testing)."
    },
    {
        "id": "qa18",
        "pergunta": "Qual das seguintes opções descreve MELHOR a abordagem colaborativa para a escrita de histórias de usuário?",
        "opcoes": [
        "A) As histórias de usuário são criadas por testadores e desenvolvedores e, em seguida, aprovadas pelos representantes da empresa.",
        "B) As histórias de usuário são criadas em conjunto por representantes de negócios, desenvolvedores e testadores.",
        "C) As histórias de usuário são criadas por representantes da área de negócios e verificadas por desenvolvedores e testadores.",
        "D) As histórias de usuário são criadas de forma a serem independentes, negociáveis, valiosas, estimáveis, pequenas e testáveis."
        ],
        "correta": "B",
        "explicacao": "A abordagem colaborativa baseia-se no conceito dos Três Amigos (Three Amigos), onde representantes de negócios, desenvolvedores e testadores criam as histórias em conjunto."
    },
    {
        "id": "qa19",
        "pergunta": "Considere a seguinte parte de um plano de testes:\n\"Os testes serão realizados utilizando testes de componentes e testes de integração de componentes. As normas exigem a comprovação de que 100% de cobertura de ramificações foi alcançada para cada componente classificado como crítico.\"\nA qual parte do plano de testes pertence esta parte?",
        "opcoes": [
        "A) Comunicação",
        "B) Registro de riscos",
        "C) Contexto do teste",
        "D) Abordagem de teste"
        ],
        "correta": "D",
        "explicacao": "Definir quais níveis de teste serão aplicados e quais metas/métricas de cobertura de código são obrigatórias faz parte do desenho da abordagem de teste (test approach)."
    },
    {
        "id": "qa20",
        "pergunta": "Sua equipe usa o Planning Poker para estimar o esforço de teste necessário para um novo recurso. Existe uma regra na equipe que permite aplicar regras como \"aceitar o número com mais votos\" caso não haja tempo suficiente para chegar a um consenso e a variação nos resultados seja pequena.\nApós duas rodadas, não se chegou a um consenso, então a terceira rodada foi iniciada. Você pode ver os resultados da estimativa na tabela abaixo:\nRodada 1: [21, 2, 5, 34, 13, 8, 2]\nRodada 2: [13, 8, 8, 34, 13, 8, 5]\nRodada 3: [13, 8, 13, 13, 13, 13, 8]\nQual das seguintes opções é o MELHOR exemplo do próximo passo?",
        "opcoes": [
        "A) O Product Owner precisa intervir e tomar a decisão final.",
        "B) Aceitar 13 como a estimativa final do teste, pois este valor obteve a maioria dos votos.",
        "C) Nenhuma outra ação é necessária. Chegou-se a um consenso.",
        "D) Remova o novo recurso da versão atual, pois ainda não se chegou a um consenso."
        ],
        "correta": "B",
        "explicacao": "Conforme a regra da equipe citada no enunciado, se não houver tempo e a variação for pequena, aceita-se o número com maior recorrência. Na rodada 3, o número 13 obteve a ampla maioria dos votos."
    },
    {
        "id": "qa21",
        "pergunta": "Qual das seguintes afirmações é VERDADEIRA em relação à pirâmide de testes?",
        "opcoes": [
        "A) Isso enfatiza a importância de se ter muito mais testes nos níveis mais baixos de avaliação.",
        "B) Isso sugere que cada teste de baixo nível verifica grande parte da funcionalidade.",
        "C) Este documento descreve a distribuição dos tipos de teste ao longo do ciclo de vida de desenvolvimento de software (SDLC).",
        "D) Isso não tem impacto na construção de testes automatizados."
        ],
        "correta": "A",
        "explicacao": "A pirâmide de testes demonstra graficamente e recomenda que a maior base de testes automatizados deve estar concentrada nos níveis mais baixos (testes de componentes/unitários), diminuindo a quantidade conforme sobe o nível."
    },
    {
        "id": "qa22",
        "pergunta": "Durante a análise de risco, a equipe considerou o seguinte risco: \"O sistema permite um desconto muito alto para um cliente\". A equipe estimou que o impacto do risco é muito alto. O que se pode dizer sobre a probabilidade de risco?",
        "opcoes": [
        "A) É também muito elevado. Um alto impacto de risco implica sempre uma alta probabilidade de risco.",
        "B) É muito baixo. Alto impacto de risco sempre implica baixa probabilidade de risco.",
        "C) Não se pode afirmar nada sobre a probabilidade do risco. O impacto do risco e a probabilidade do risco são independentes.",
        "D) A probabilidade de risco não é importante quando o impacto é tão elevado. Não é necessário defini-la."
        ],
        "correta": "C",
        "explicacao": "A probabilidade de um risco acontecer e o impacto financeiro/técnico caso ele ocorra são duas variáveis completamente independentes e avaliadas separadamente."
    },
    {
        "id": "qa23",
        "pergunta": "A lista a seguir contém os riscos identificados para o desenvolvimento de um novo produto de software:\ny. A gerência realoca dois testadores experientes para outro projeto.\nii. O sistema não está em conformidade com os padrões de segurança.\niii. O tempo de resposta do sistema excede os requisitos do usuário.\niv. Os stakeholders têm expectativas imprecisas.\nv. Pessoas com deficiência têm problemas ao usar o sistema.\nQuais deles representam riscos do projeto?",
        "opcoes": [
        "A) i e iv são riscos do projeto",
        "B) iv e v são riscos do projeto",
        "C) i, iii são riscos do projeto",
        "D) ii, v são riscos do projeto"
        ],
        "correta": "A",
        "explicacao": "Riscos de projeto envolvem a gestão, recursos e restrições do processo (i e iv). Os itens ii, iii e v são riscos associados à qualidade final do produto do software (riscos de produto)."
    },
    {
        "id": "qa24",
        "pergunta": "Qual das seguintes opções é um exemplo de como a análise de risco do produto influencia a abrangência e o escopo dos testes?",
        "opcoes": [
        "A) O gerente de testes monitora e reporta diariamente o nível de todos os riscos conhecidos, para que os stakeholders possam tomar uma decisão informada sobre a data de lançamento.",
        "B) Um dos riscos identificados foi a \"falta de suporte a bancos de dados de código aberto\", então a equipe decidiu integrar o sistema a um banco de dados de código aberto.",
        "C) Durante a análise quantitativa de riscos, a equipe estimou o nível total de todos os riscos identificados e o apresentou como o risco residual total antes dos testes.",
        "D) A avaliação de riscos revelou um nível muito alto de riscos de desempenho, portanto, decidiu-se realizar testes detalhados de eficiência de desempenho logo no início do ciclo de vida de desenvolvimento de software (SDLC)."
        ],
        "correta": "D",
        "explicacao": "Identificar um risco alto de performance e alterar o escopo para mitigar o problema precocemente com testes de desempenho detalhados ilustra perfeitamente os testes baseados em riscos influenciando a estratégia de testes."
    },
    {
        "id": "qa25",
        "pergunta": "Quais das DUAS opções a seguir são métricas comuns usadas para relatar o nível de qualidade do objeto de teste?",
        "opcoes": [
        "A) Número de defeitos encontrados durante os testes do sistema",
        "B) Esforço total no projeto de testes dividido pelo número de casos de teste projetados.",
        "C) Número de procedimentos de teste executados",
        "D) Número de defeitos encontrados dividido pelo tamanho do produto.",
        "E) Tempo necessário para reparar um defeito"
        ],
        "correta": "A, D",
        "explicacao": "O volume bruto de defeitos detectados no nível de sistema (A) e a densidade de defeitos calculada pelo tamanho do software (D) são métricas diretas sobre a qualidade intrínseca do objeto de teste."
    },
    {
        "id": "qa26",
        "pergunta": "Qual das seguintes informações contidas em um relatório de progresso de teste é a MENOS útil para representantes comerciais?",
        "opcoes": [
        "A) Obstáculos aos testes",
        "B) Cobertura de agências alcançada",
        "C) Progresso do teste",
        "D) Novos riscos dentro do ciclo de testes"
        ],
        "correta": "B",
        "explicacao": "Representantes comerciais buscam visões de alto nível sobre riscos, impedimentos e prazos. Métricas puramente técnicas de cobertura estrutural de código como cobertura de ramificações/agências (branch coverage) são de baixo valor para eles."
    },
    {
        "id": "q41",
        "pergunta": "Qual das seguintes opções é um exemplo de por que os testes são necessários?",
        "opcoes": [
        "A) Os testes dinâmicos aumentam a qualidade ao fazer com que os objetos de teste falhem de maneiras que os usuários jamais conseguiriam reproduzir.",
        "B) Os testes estáticos são usados pelos desenvolvedores para identificar falhas em seu código mais cedo do que seria possível por meio de testes dinâmicos.",
        "C) A análise estática fornece aos clientes evidências de que os elementos do sistema que não geram resultados estão aptos para serem lançados.",
        "D) As revisões aumentam a qualidade das especificações de requisitos e levam a uma menor necessidade de alterações nos produtos de trabalho derivados."
        ],
        "correta": "D",
        "explicacao": "As revisões são uma forma de teste estático que pode ser aplicada desde o início do ciclo de vida do desenvolvimento de software e são usadas para encontrar defeitos que podem ser corrigidos antes que as atividades de desenvolvimento subsequentes desperdicem esforços com requisitos falhos."
    },
    {
        "id": "q42",
        "pergunta": "Qual das seguintes afirmações sobre garantia da qualidade (GQ) e/ou controle da qualidade (CQ) está correta?",
        "opcoes": [
        "A) O controle de qualidade é realizado como parte dos testes.",
        "B) Os testes são realizados como parte do controle de qualidade.",
        "C) Testar é outro termo para controle de qualidade.",
        "D) Os testes são realizados como parte do controle de qualidade."
        ],
        "correta": "B",
        "explicacao": "O controle de qualidade visa atingir níveis adequados de qualidade, concentrando-se na identificação e correção de defeitos do produto. Os testes são uma parte significativa do controle de qualidade e ajudam a detectar esses defeitos."
    },
    {
        "id": "q43",
        "pergunta": "Um dos 'princípios de teste' afirma que o teste exaustivo é impossível. Qual das seguintes opções é um exemplo de como esse princípio é abordado na prática?",
        "opcoes": [
        "A) Criar casos de teste que cubram todas as saídas especificadas possíveis.",
        "B) Documentar todas as variações possíveis de entrada de teste e priorizá-las com base na importância.",
        "C) Comece os testes o mais cedo possível com revisões e outras abordagens de testes estáticos.",
        "D) Utilizando particionamento de equivalência e análise de valores limite para gerar casos de teste."
        ],
        "correta": "D",
        "explicacao": "O uso de particionamento de equivalência e análise de valores limite para gerar casos de teste é uma maneira de abordar o princípio, pois essas técnicas de teste fornecem uma forma sistemática de derivar um subconjunto finito de todos os casos de teste possíveis."
    },
    {
        "id": "q44",
        "pergunta": "Qual atividade de teste envolve trabalhar com requisitos de dados de teste, condições de teste, requisitos de ambiente de teste e casos de teste?",
        "opcoes": [
        "A) Projeto de teste",
        "B) Execução de teste",
        "C) Análise de teste",
        "D) Implementação de teste"
        ],
        "correta": "A",
        "explicacao": "O projeto de testes envolve o uso de condições de teste para criar casos de teste e outros recursos necessários, como requisitos de dados de teste e roteiros de testes exploratórios. Os requisitos do ambiente de teste também são especificados."
    },
    {
        "id": "q45",
        "pergunta": "Qual das seguintes opções tem MAIOR probabilidade de impactar a forma como os testes são realizados para um determinado objeto de teste?",
        "opcoes": [
        "A) O nível médio de experiência da equipe de marketing da organização.",
        "B) O conhecimento dos usuários de que um novo sistema está sendo desenvolvido para eles.",
        "C) O número de anos de experiência dos membros da equipe de testes.",
        "D) Estrutura organizacional do usuário final para um aplicativo comercial de streaming de música."
        ],
        "correta": "C",
        "explicacao": "O número de anos de experiência dos membros da equipe de testes de eficiência de desempenho ajudará a determinar as capacidades e o conhecimento (por exemplo, de diferentes ferramentas e tipos de defeitos) que os membros da equipe aplicarão ao realizar os testes."
    },
    {
        "id": "q46",
        "pergunta": "Qual das seguintes afirmações é um exemplo CORRETO do valor da rastreabilidade?",
        "opcoes": [
        "A) A rastreabilidade entre os riscos mitigados e os casos de teste aprovados fornece um meio de determinar o nível de risco residual.",
        "B) A rastreabilidade entre os requisitos do usuário e os resultados dos testes fornece um meio de medir o progresso do projeto em relação aos objetivos de negócios.",
        "C) A rastreabilidade entre os testadores e os casos de teste que falharam fornece um meio de determinar o nível de habilidade dos testadores.",
        "D) A rastreabilidade entre os riscos identificados e as condições de teste documentadas fornece um meio de determinar quais riscos valem a pena testar."
        ],
        "correta": "B",
        "explicacao": "A rastreabilidade entre os requisitos do usuário e os resultados dos testes indica quais requisitos do usuário foram testados e, portanto, fornece um meio de medir o progresso do projeto (no contexto de testes) em relação aos objetivos de negócio."
    },
    {
        "id": "q47",
        "pergunta": "Qual das seguintes opções é MAIS provável de ser um exemplo de um testador usando uma habilidade genérica durante os testes?",
        "opcoes": [
        "A) O profundo conhecimento do testador sobre diversos jogos de computador fez com que ele se desse bem com um dos desenvolvedores, que também era fã de jogos.",
        "B) O testador era um ex-piloto e, portanto, tinha melhores condições de compreender os critérios de aceite do sistema de controle do helicóptero.",
        "C) O testador tinha experiência anterior como programador e utilizou suas habilidades nessa área para se comunicar melhor com os analistas de negócios.",
        "D) O testador teve muito cuidado para não cometer erros ao gerar metodicamente os casos de teste antes de iniciar sua sessão de testes exploratórios."
        ],
        "correta": "B",
        "explicacao": "O conhecimento do domínio, que permite compreender e comunicar com usuários finais e representantes de negócios, é uma das habilidades genéricas exigidas dos testadores. Um testador com experiência como piloto estaria mais apto a compreender os critérios de aceitação do sistema de controle do helicóptero."
    },
    {
        "id": "q48",
        "pergunta": "Qual das seguintes opções representa uma vantagem da abordagem que envolve toda a equipe?",
        "opcoes": [
        "A) Isso permite que os membros da equipe assumam qualquer função a qualquer momento.",
        "B) Basta uma única equipe para dar suporte a todo o projeto de desenvolvimento.",
        "C) Isso integra representantes de negócios junto com desenvolvedores na mesma equipe.",
        "D) Isso gera uma sinergia de equipe que beneficia todo o projeto."
        ],
        "correta": "D",
        "explicacao": "Ao aproveitar ao máximo as diversas habilidades de cada membro da equipe, a abordagem que envolve toda a equipe fomenta uma dinâmica superior, promove uma comunicação e colaboração robustas e gera uma sinergia que beneficia todo o projeto."
    },
    {
        "id": "q49",
        "pergunta": "Qual das seguintes afirmações sobre o ciclo de vida de desenvolvimento de software escolhido está CORRETA?",
        "opcoes": [
        "A) Se o desenvolvimento ágil de software for utilizado, a automação dos testes de sistema substitui a necessidade de testes de regressão.",
        "B) Se for utilizado um modelo de desenvolvimento sequencial, os testes dinâmicos normalmente ficam restritos a uma fase posterior do ciclo de vida.",
        "C) Se for utilizado um modelo de desenvolvimento iterativo, os testes de componentes são normalmente realizados manualmente pelos desenvolvedores.",
        "D) Se for utilizado um modelo de desenvolvimento incremental, os testes estáticos são realizados nos incrementos iniciais e os testes dinâmicos nos incrementos posteriores."
        ],
        "correta": "B",
        "explicacao": "Se um modelo de desenvolvimento sequencial for utilizado, então, no início do ciclo de vida do desenvolvimento de software, nenhum código estará disponível para execução e, portanto, durante esse período, são realizados testes estáticos (por exemplo, revisões). Mais tarde no ciclo de vida, quando o código estiver disponível para execução, os testes dinâmicos serão possíveis."
    },
    {
        "id": "q50",
        "pergunta": "Qual das seguintes opções é uma boa prática de teste que se aplica a todos os ciclos de vida de desenvolvimento de software?",
        "opcoes": [
        "A) Os testadores devem revisar os produtos de trabalho como parte da próxima fase de desenvolvimento.",
        "B) Os testadores devem revisar os produtos de trabalho assim que as versões preliminares estiverem disponíveis.",
        "C) Os testadores devem revisar os produtos de trabalho antes do início da análise e do projeto de testes.",
        "D) Os testadores devem revisar os produtos de trabalho imediatamente após a sua publicação."
        ],
        "correta": "B",
        "explicacao": "Os testadores devem revisar os produtos de trabalho assim que os rascunhos estiverem disponíveis para permitir testes antecipados como parte de uma abordagem de \"shift-left\" (deslocamento para a esquerda)."
    },
    {
        "id": "q51",
        "pergunta": "Qual das seguintes opções é um exemplo de uma abordagem de desenvolvimento orientada a testes (TDD)?",
        "opcoes": [
        "A) Desenvolvimento orientado a testes",
        "B) Desenvolvimento orientado pela cobertura",
        "C) Desenvolvimento orientado pela qualidade",
        "D) Desenvolvimento orientado a funcionalidades"
        ],
        "correta": "A",
        "explicacao": "O Desenvolvimento Orientado a Testes (TDD) é um exemplo bem conhecido de uma abordagem de desenvolvimento que prioriza os testes."
    },
    {
        "id": "q52",
        "pergunta": "Qual das seguintes afirmações sobre DevOps está CORRETA?",
        "opcoes": [
        "A) Para acelerar os lançamentos, a integração contínua é usada para incentivar os desenvolvedores a enviar código rapidamente, sem a necessidade de concluir os testes de componentes.",
        "B) Para poder atualizar e lançar sistemas com mais frequência, são necessários muitos testes de regressão automatizados para reduzir o risco de regressão.",
        "C) Para tratar desenvolvedores e operações de forma igualitária, os testadores alocarão mais esforços aos testes de lançamento realizados pelas operações, utilizando uma abordagem de deslocamento para a direita.",
        "D) Para criar maior sinergia entre testadores, desenvolvedores e operações, os testes devem ser totalmente automatizados, sem testes manuais."
        ],
        "correta": "B",
        "explicacao": "O DevOps aprimora os testes de diversas maneiras, como fornecendo feedback rápido sobre a qualidade do código, testes de regressão automatizados que minimizam o risco de regressão e promovendo uma abordagem de \"shift-left\" com submissão de código de alta qualidade e testes de componentes."
    },
    {
        "id": "q53",
        "pergunta": "Qual das seguintes opções tem MAIOR probabilidade de ser realizada como parte dos testes de sistema?",
        "opcoes": [
        "A) Testes de segurança de um sistema de gestão de crédito realizados por uma equipe de testes independente.",
        "B) Testando a interface de um sistema de câmbio com um sistema bancário externo.",
        "C) Teste beta de um sistema de aprendizagem remota desenvolvido por programadores de cursos.",
        "D) Testando as interações entre a interface do usuário e o banco de dados de um sistema de recursos humanos."
        ],
        "correta": "A",
        "explicacao": "Os testes de sistema examinam o comportamento e as capacidades do sistema completo e abrangem testes não funcionais de características de qualidade, incluindo testes de segurança. Esse tipo de teste geralmente é realizado por uma equipe de testes independente com base nas especificações do sistema."
    },
    {
        "id": "q54",
        "pergunta": "Qual das seguintes afirmações está CORRETA?",
        "opcoes": [
        "A) O número de testes de regressão aumenta à medida que o projeto avança, enquanto o número de testes de confirmação diminui com o mesmo período.",
        "B) Os testes de regressão são criados e executados quando o objeto de teste é corrigido, enquanto os testes de confirmação são executados sempre que o objeto de teste é aprimorado.",
        "C) Os testes de regressão visam verificar se o ambiente operacional permanece inalterado, enquanto os testes de confirmação visam testar as alterações feitas no objeto de teste.",
        "D) Os testes de regressão se concentram nos efeitos adversos em código inalterado, enquanto os testes de confirmação se concentram em testar código modificado."
        ],
        "correta": "D",
        "explicacao": "Os testes de regressão garantem que as alterações não tenham efeitos negativos no software não alterado. Os testes de confirmação (retestes) verificam se um defeito foi corrigido e, portanto, se concentram no código alterado."
    },
    {
        "id": "q55",
        "pergunta": "Qual das seguintes opções é um exemplo de defeito que pode ser encontrado por meio de testes estáticos, mas NÃO por meio de testes dinâmicos?",
        "opcoes": [
        "A) Falta de usabilidade proporcionada pela interface do usuário",
        "B) Código sem caminho que o alcance",
        "C) Tempos de resposta lentos para a maioria dos usuários esperados.",
        "D) Funcionalidades obrigatórias que não estão implementadas no código."
        ],
        "correta": "B",
        "explicacao": "Uma revisão de código pode detectar trechos de código inacessíveis por qualquer caminho (código morto), enquanto testes dinâmicos só conseguem exercitar trechos de código acessíveis estruturalmente."
    },
    {
        "id": "q56",
        "pergunta": "Qual das seguintes opções representa um benefício do feedback frequente e antecipado dos stakeholders?",
        "opcoes": [
        "A) Os gerentes sabem quais desenvolvedores são menos produtivos.",
        "B) Isso permite que os gerentes de projeto priorizem suas interações com os stakeholders.",
        "C) Isso facilita a comunicação precoce de possíveis problemas de qualidade.",
        "D) Finais compreendem melhor os motivos do atraso na entrega do produto."
        ],
        "correta": "C",
        "explicacao": "Obter feedback dos stakeholders desde o início e com frequência no processo de desenvolvimento de software facilita a comunicação precoce de potenciais problemas de qualidade, pode evitar mal-entendidos sobre os requisitos e garante alinhamento rápido."
    },
    {
        "id": "q57",
        "pergunta": "Dadas as seguintes descrições de tarefas:\n1. As características de qualidade a serem avaliadas e os critérios de saída são selecionados.\n2. Todos têm acesso ao produto do trabalho.\n3. Anomalias são identificadas no produto do trabalho.\n4. As anomalias são discutidas.\n\nE as seguintes atividades de revisão:\nA. Revisão individual\nB. Início da revisão\nC. Planejamento\nD. Comunicação e análise\n\nQual das seguintes opções MELHOR corresponde às descrições das tarefas e atividades?",
        "opcoes": [
        "A) 1B, 2C, 3D, 4A",
        "B) 1B, 2D, 3C, 4A",
        "C) 1C, 2A, 3B, 4D",
        "D) 1C, 2B, 3A, 4D"
        ],
        "correta": "D",
        "explicacao": "A correspondência correta mapeia: Seleção de características de qualidade ao Planejamento (1C); Garantir acesso ao produto ao Início da revisão (2B); Identificar anomalias à Revisão individual (3A); Discutir anomalias à Comunicação e análise (4D)."
    },
    {
        "id": "q58",
        "pergunta": "Considerando os seguintes papéis nas avaliações:\n1. Escriba\n2. Líder da revisão\n3. Facilitador\n4. Gerente\n\nE as seguintes responsabilidades nas avaliações:\nA. Garante o bom funcionamento das reuniões de avaliação e a criação de um ambiente seguro para a avaliação.\nB. Informações de revisão de registros, como decisões e novas anomalias encontradas durante a reunião de revisão.\nC. Decide o que deve ser analisado e fornece recursos, como pessoal e tempo para a análise.\nD. Assume a responsabilidade geral pela revisão, incluindo a organização de quando e onde ela ocorrerá.\n\nQual das seguintes opções MELHOR descreve as funções e responsabilidades?",
        "opcoes": [
        "A) 1A, 2B, 3D, 4C",
        "B) 1A, 2C, 3B, 4D",
        "C) 1B, 2D, 3A, 4C",
        "D) 1B, 2D, 3C, 4A"
        ],
        "correta": "C",
        "explicacao": "O Escriba registra as informações (1B); o Líder assume a responsabilidade geral e organização (2D); o Facilitador garante o bom funcionamento e ambiente seguro (3A); e o Gerente decide o que deve ser analisado e provê recursos (4C)."
    },
    {
        "id": "q59",
        "pergunta": "Qual das seguintes afirmações descreve MELHOR a diferença entre testes de tabela de decisão e testes de ramificação?",
        "opcoes": [
        "A) Em testes de tabela de decisão, os casos de teste são derivados das instruções de decisão no código. Em testes de ramificação, os casos de teste são derivados do conhecimento do fluxo de controle do objeto de teste.",
        "B) Nos testes de tabela de decisão, os casos de teste são derivados da especificação que descreve a lógica de negócios. Nos testes de ramificação, os casos de teste são baseados na antecipação de possíveis defeitos no código-fonte.",
        "C) Em testes de tabela de decisão, os casos de teste são derivados do conhecimento do fluxo de controle do objeto de teste. Em testes de ramificação, os casos de teste são derivados da especificação que descreve a lógica de negócios.",
        "D) Em testes de tabela de decisão, os casos de teste são independentes de como o software é implementado. Em testes de ramificação, os casos de teste só podem ser criados após o projeto ou a implementação do código."
        ],
        "correta": "D",
        "explicacao": "O teste de tabela de decisão é uma técnica caixa-preta baseada no comportamento especificado, independente da estrutura interna de codificação. O teste de ramificação é uma técnica caixa-branca estrutural, que exige que o código já esteja projetado ou implementado."
    },
    {
        "id": "q60",
        "pergunta": "Os clientes da rede de lava-jatos TestWash possuem cartões com um registro do número de lavagens já realizadas. O valor inicial é 0. Ao entrar no lava-jato, o sistema incrementa o número no cartão em um. Esse valor representa a lavagem atual. Com base nesse número, o sistema determina o desconto a que o cliente tem direito.\nA cada décima lavagem, o sistema oferece um desconto de 10%, e a cada vigésima lavagem, o sistema oferece um desconto adicional de 40% (ou seja, um desconto total de 50%).\nQual dos seguintes conjuntos de dados de entrada (entendidos como os números da lavagem atual) atinge a maior cobertura de partição de equivalência?",
        "opcoes": [
        "A) 19, 20, 30",
        "B) 11, 12, 20",
        "C) 1, 10, 50",
        "D) 10, 29, 30, 31"
        ],
        "correta": "A",
        "explicacao": "As partições válidas de desconto são: sem desconto, 10% de desconto e 50% de desconto. O valor 19 cobre a partição sem desconto, 20 cobre a de 50% e 30 cobre a partição de 10% de desconto. Esses três valores cobrem todas as partições válidas."
    },
    {
        "id": "q61",
        "pergunta": "Você está testando um formulário que verifica se o comprimento da senha inserida está correto. O formulário aceita senhas com o comprimento correto e rejeita senhas muito curtas ou muito longas. A senha é considerada correta se tiver entre 6 e 12 caracteres, inclusive. Caso contrário, é considerada incorreta.\nInicialmente, o formulário está vazio (comprimento da senha = 0). Você aplica a análise de valores limite à variável \"comprimento da senha\".\nSeu conjunto de casos de teste atinge 100% de cobertura de valores limite de 2 valores. A equipe decidiu que, devido ao alto risco deste componente, casos de teste adicionais devem ser incluídos para garantir 100% de cobertura de valores limite de 3 valores.\nQuais comprimentos de senha adicionais devem ser testados para atingir esse objetivo?",
        "opcoes": [
        "A) 4, 5, 13, 14",
        "B) 7, 11",
        "C) 1, 5, 13",
        "D) 1, 4, 7, 11, 14"
        ],
        "correta": "D",
        "explicacao": "O domínio possui três partições: muito curtas (0-5), OK (6-12) e muito longas (13+). Para BVA de 3 valores, precisamos testar: 0, 1, 4, 5, 6, 7, 11, 12, 13, 14. Como a de 2 valores já cobriu 0, 5, 6, 12 e 13, os comprimentos adicionais necessários são 1, 4, 7, 11 e 14."
    },
    {
        "id": "q62",
        "pergunta": "A tabela de decisão a seguir contém as regras para determinar o risco de aterosclerose.\n\nCondições | Regra 1 | Regra 2 | Regra 3 | Regra 4 | Regra 5\nColesterol (mg/dl) | ≤124 | ≤ 124 | 125 – 200 | 125 – 200 | ≥ 201\nPressão arterial (mm Hg) | ≤ 140 | > 140 | ≤ 140 | > 140 | –\nAção\nNível de risco | muito baixo | baixo | médio | alto | muito alto\n\nVocê elaborou os casos de teste com os seguintes dados de entrada:\nTC1 : Colesterol = 125 mg/dl, Pressão arterial = 141 mmHg\nTC2 : Colesterol = 200 mg/dl, Pressão arterial = 201 mmHg\nTC3 : Colesterol = 124 mg/dl, Pressão arterial = 201 mmHg\nTC4 : Colesterol = 109 mg/dl, Pressão arterial = 200 mmHg\nTC5 : Colesterol = 201 mg/dl, Pressão arterial = 140 mmHg\n\nQual é a cobertura da tabela de decisão alcançada por esses casos de teste?",
        "opcoes": [
        "A) 40%",
        "B) 60%",
        "C) 80%",
        "D) 100%"
        ],
        "correta": "B",
        "explicacao": "A tabela possui 5 colunas (regras). Avaliando os CTs: TC1 e TC2 abrangem a Regra 4. TC3 e TC4 abrangem a Regra 2. TC5 abrange a Regra 5. Esses cinco casos de teste cobrem 3 das 5 colunas, atingindo uma cobertura de (3/5) * 100% = 60%."
    },
    {
        "id": "q63",
        "pergunta": "Um sistema de armazenamento pode armazenar até três elements e é modelado por um diagrama de transição de estados. A variável N representa o número de elementos atualmente armazenados. [Diagrama de estados com transições de Adicionar e Remover baseadas nas condições N<2, N=2 e N>0].\nQual dos seguintes casos de teste, representados como sequências de eventos, atinge o nível mais alto de cobertura de transições válidas?",
        "opcoes": [
        "A) Adicionar, Remover, Adicionar, Adicionar, Adicionar",
        "B) Adicionar, Adicionar, Adicionar, Adicionar, Remover, Remover",
        "C) Adicionar, Adicionar, Adicionar, Remover, Remover",
        "D) Adicionar, Adicionar, Adicionar, Remover, Adicionar"
        ],
        "correta": "C",
        "explicacao": "O teste c) pode ser escrito passando por todas as 5 transições válidas do modelo de estado (E1, E2, E4, E5, E3 nesta ordem lógica de manipulação do estoque), atingindo uma cobertura de 100% das transições válidas, enquanto os outros cenários falham ou são parcialmente inviáveis por estouro de limite."
    },
    {
        "id": "q64",
        "pergunta": "Você executou dois casos de teste, T1 e T2, no mesmo código. O teste T1 alcançou 40% de cobertura de instruções e o teste T2 alcançou 65% de cobertura de instruções.\nQual das seguintes afirmações é necessariamente verdadeira?",
        "opcoes": [
        "A) O conjunto de testes composto pelos testes T1 e T2 atinge 105% de cobertura de instruções.",
        "B) Existe pelo menos uma declaração que deve ter sido executada tanto por T1 quanto por T2.",
        "C) Pelo menos 5% das instruções no código testado não são executáveis.",
        "D) O conjunto de testes composto pelos testes T1 e T2 atinge cobertura completa de ramificação."
        ],
        "correta": "B",
        "explicacao": "A cobertura total máxima permitida é 100%. Se as instruções executadas por T1 e T2 fossem completamente disjuntas (sem nenhuma intersecção), a cobertura combinada seria 40% + 65% = 105%, o que é impossível. Portanto, pelo menos 5% das instruções devem ter sido executadas em comum por ambos."
    },
    {
        "id": "q65",
        "pergunta": "Vamos definir a métrica de cobertura de ramificação como BCov = (X / Y) * 100%.\nO que X e Y representam nesta fórmula?",
        "opcoes": [
        "A) X = número de resultados de decisão exercidos pelos casos de teste; Y = número total de resultados de decisão no código",
        "B) X = número de ramificações condicionais exercidas pelos casos de teste; Y = número total de ramificações no código",
        "C) X = número de ramificações exercitadas pelos casos de teste; Y = número total de ramificações no código",
        "D) X = número de ramificações condicionais exercidas pelos casos de teste; Y = número total de resultados de decisão no código"
        ],
        "correta": "C",
        "explicacao": "A cobertura de ramificação (branch coverage) mede a proporção de todas as ramificações (estruturas de transferência de fluxo de controle, sejam elas condicionais ou incondicionais) exercitadas pelos testes em relação ao total existente no grafo do fluxo."
    },
    {
        "id": "q66",
        "pergunta": "Quais das DUAS afirmações a seguir fornecem a MELHOR justificativa para o uso de testes exploratórios?",
        "opcoes": [
        "A) Os testadores não tiveram tempo suficiente para o planejamento e a execução dos testes.",
        "B) A estratégia de teste existente exige que os testadores usem técnicas formais de teste caixa-preta.",
        "C) A especificação é escrita em uma linguagem formal que pode ser processada por uma ferramenta.",
        "D) Os testadores são membros de uma equipe ágil e possuem boas habilidades de programação.",
        "E) Os testadores têm experiência na área de negócios e possuem boas habilidades analíticas."
        ],
        "correta": "A, E",
        "explicacao": "Os testes exploratórios são altamente recomendados quando há poucas especificações conhecidas e restrições severas de tempo (A). Eles se tornam muito mais eficientes quando executados por profissionais com forte conhecimento de domínio de negócio e alta capacidade analítica (E)."
    },
    {
        "id": "q67",
        "pergunta": "Qual das seguintes opções MELHOR se encaixa como um element da lista de verificação usada em testes baseados em listas de verificação?",
        "opcoes": [
        "A) “O desenvolvedor cometeu um erro ao implementar o código”",
        "B) “A cobertura da declaração alcançada ultrapassa 85%”",
        "C) “O programa funciona corretamente em relação aos requisitos funcionais e não funcionais”",
        "D) “As mensagens de erro são escritas em uma linguagem que o usuário possa entender.”"
        ],
        "correta": "D",
        "explicacao": "As listas de verificação devem conter condições ou regras de teste objetivas que possam ser validadas diretamente por um avaliador humano (D). As alternativas A e C são genéricas e a B descreve uma métrica/critério de saída."
    },
    {
        "id": "q68",
        "pergunta": "Considere os seguintes critérios de aceite para uma história de usuário escrita da perspectiva do proprietário de uma loja online:\n\nConsiderando que o usuário está conectado e na página inicial,\nQuando o usuário clicar no botão \"Adicionar Item\",\nEm seguida, o formulário \"Criar Item\" deverá aparecer.\nE o usuário deverá poder inserir um nome e um preço para o novo item.\n\nEm que formato estão escritos esses critérios de aceite?",
        "opcoes": [
        "A) Orientado por regras",
        "B) Orientado a cenários",
        "C) Orientado para o produto",
        "D) Orientado a processos"
        ],
        "correta": "B",
        "explicacao": "O modelo apresentado segue a estrutura formal 'Dado/Quando/Então' (Given/When/Then). Trata-se de um formato de especificação de critérios de aceite orientado a cenários."
    },
    {
        "id": "q69",
        "pergunta": "Sua equipe analisa a seguinte história de usuário para definir os critérios de aceite: \n\"Como cliente cadastrado, quero poder visualizar meus pedidos anteriores no site da empresa para acompanhar minhas compras.\"\nQual dos seguintes casos de teste NÃO será relevante para esta história de usuário?",
        "opcoes": [
        "A) Entrada: o cliente acessa sua conta no site e clica em “ver histórico de pedidos”. Resultado: exibe lista com data, número e custo total de pedidos anteriores.",
        "B) Entrada: o cliente clica em um pedido da lista. Resultado: exibe os itens individuais comprados com seus preços e quantidades.",
        "C) Entrada: o cliente clica no botão “Ordenar em ordem crescente”. Resultado: o sistema exibe o histórico ordenado por número de pedido.",
        "D) Entrada: um cliente não cadastrado se registra com um e-mail válido que não existe no banco de dados. Resultado: o sistema cria a conta com sucesso."
        ],
        "correta": "D",
        "explicacao": "A história de usuário é explícita quanto ao escopo: 'visualizar pedidos anteriores'. O caso de teste D foca no processo de cadastro e registro de uma nova conta de usuário, o que está totalmente fora do escopo funcional dessa história."
    },
    {
        "id": "q70",
        "pergunta": "Sua equipe segue o processo que utiliza o pipeline de entrega DevOps. Os três primeiros passos desse processo são:\n(1) Desenvolvimento de código\n(2) Submeta o código a um sistema de controle de versão e faça o merge com ele na branch “test”.\n(3) Realizar testes de componentes para o código submetido.\nQual dos seguintes é o critério de entrada MAIS adequado para a etapa (2) deste pipeline?",
        "opcoes": [
        "A) A análise estática não retornou nenhum aviso de alta gravidade para o código submetido.",
        "B) O sistema de controle de versão não reporta conflitos ao mesclar o código no branch \"test\".",
        "C) Os testes dos componentes estão compilados e prontos para serem executados.",
        "D) A cobertura da declaração é de pelo menos 80%."
        ],
        "correta": "A",
        "explicacao": "A execução bem-sucedida e limpa da análise estática sem erros críticos (A) deve ser garantida no ambiente local do desenvolvedor antes de submeter o código para integração. A verificação de conflitos (B) e as métricas de cobertura (D) ocorrem depois ou durante a etapa de merge e testes."
    },
    {
        "id": "q71",
        "pergunta": "Você deseja estimar o esforço de teste para o novo projeto usando estimativas baseadas em proporções. Você calcula a proporção entre o esforço de teste e o esforço de desenvolvimento usando dados médios de esforço de desenvolvimento e de teste de quatro projetos históricos semelhantes ao novo. A tabela mostra esses dados históricos:\n\nProjeto | Esforço de desenvolvimento ($) | Esforço de teste ($)\nP1 | 800.000 | 40.000\nP2 | 1.200.000 | 130.000\nP3 | 600.000 | 70.000\nP4 | 1.000.000 | 120.000\n\nO esforço estimado de desenvolvimento para o novo projeto é de US$ 800.000. Qual é a sua estimativa do esforço de teste neste projeto?",
        "opcoes": [
        "A) $ 40.000",
        "B) US$ 80.000",
        "C) $ 81.250",
        "D) US$ 82.500"
        ],
        "correta": "B",
        "explicacao": "O esforço médio de desenvolvimento total é de $3.600.000 e o esforço médio de teste total é de $360.000. Isso define uma proporção média de 1:10 (ou seja, o esforço de teste historicamente representa 10% do esforço de desenvolvimento). Se o desenvolvimento do novo projeto custará $800.000, o teste será 10% disso: $80.000."
    },
    {
        "id": "q72",
        "pergunta": "Você está testando um aplicativo web que permite aos usuários PESQUISAR produtos, VISUALIZAR detalhes do produto, ADICIONAR produtos a um carrinho de compras e FAZER UM PEDIDO. Você preparou sete casos de teste com as seguintes prioridades (1 = prioridade mais alta):\n• TC1: BUSCAR produto A (Prioridade 4)\n• TC2: BUSCAR produto B (Prioridade 4)\n• TC3: VER detalhes do produto A (Prioridade 3)\n• TC4: VER detalhes do produto B (Prioridade 2)\n• TC5: Adicione o produto A ao carrinho (Prioridade 3)\n• TC6: Adicione o produto B ao carrinho (Prioridade 1)\n• TC7: Faça um pedido (Prioridade 5)\n\nDependências lógicas:\n• BUSCA deve ser testada antes de VISUALIZAÇÃO.\n• VISUALIZAÇÃO deve ser testada antes de ADIÇÃO.\n• ADIÇÃO deve ser testada antes de PEDIR.\n\nQual caso de teste deve ser executado como o quarto?",
        "opcoes": [
        "A) TC3",
        "B) TC1",
        "C) TC7",
        "D) TC2"
        ],
        "correta": "B",
        "explicacao": "Para satisfazer as dependências e prioridades do Produto B (que tem prioridade maior), o fluxo começa obrigatoriamente por TC2 -> TC4 -> TC6. Feito isso, para dar seguimento ao fluxo do Produto A, deve-se realizar a sua busca. Portanto, o quarto teste da fila de execução lógica será o TC1."
    },
    {
        "id": "q73",
        "pergunta": "De acordo com o modelo de quadrantes de teste, qual das seguintes opções se enquadra no quadrante Q1 (“voltado para a tecnologia” e “apoio à equipe”)?",
        "opcoes": [
        "A) Testes de usabilidade",
        "B) Testes funcionais",
        "C) Testes de aceite do usuário",
        "D) Teste de integração de componentes"
        ],
        "correta": "D",
        "explicacao": "O quadrante Q1 é focado na tecnologia e auxilia diretamente os desenvolvedores durante a construção interna. O teste de integração de componentes enquadra-se perfeitamente aqui. Testes funcionais e de usabilidade ficam nos quadrantes Q2 e Q3 (voltados para o negócio)."
    },
    {
        "id": "q74",
        "pergunta": "Considerando os seguintes riscos:\n1. A implementação ineficaz do loop causa respostas longas do sistema.\n2. Os consumidores mudam suas preferências.\n3. Inundação da sala de servidores\n4. Pacientes acima de uma certa idade recebem relatórios imprecisos.\n\nE as seguintes atividades de mitigação:\nA. Aceite do risco\nB. Testando a eficiência do desempenho\nC. Utilizando a análise de valores limite como técnica de teste.\nD. Transferência de risco\n\nQual das seguintes opções MELHOR relaciona os riscos com as atividades de mitigação?",
        "opcoes": [
        "A) 1C, 2D, 3A, 4B",
        "B) 1B, 2D, 3A, 4C",
        "C) 1B, 2A, 3D, 4C",
        "D) 1C, 2A, 3D, 4B"
        ],
        "correta": "C",
        "explicacao": "Respostas longas do sistema são mitigadas com testes de eficiência de desempenho (1B). Mudanças externas de preferência de mercado do consumidor são aceitas por estarem fora do controle (2A). Inundação da sala é transferida por seguros (3D). Falhas em faixas de idade específicas exigem testes de limite como BVA (4C)."
    },
    {
        "id": "q75",
        "pergunta": "Qual das seguintes opções é uma métrica de qualidade do produto?",
        "opcoes": [
        "A) Tempo médio até a falha",
        "B) Número de defeitos encontrados",
        "C) Cobertura de requisitos",
        "D) Percentagem de detecção de defeitos"
        ],
        "correta": "A",
        "explicacao": "As métricas de qualidade do produto medem características de qualidade intrínsecas ao software. O tempo médio até a falha (MTTF) mede a confiabilidade/maturidade do produto, configurando uma métrica de qualidade do produto. As demais alternativas medem processos ou aspectos relacionados a defeitos."
    },
    {
        "id": "q76",
        "pergunta": "Você faz parte de uma equipe de testes localizada na América do Norte, que desenvolve um produto para um cliente na Europa. A equipe é ágil, segue a abordagem DevOps e utiliza um pipeline de integração contínua/entrega contínua. Qual das seguintes opções é a forma MENOS eficaz de comunicar o progresso dos testes ao cliente?",
        "opcoes": [
        "A) Cara a cara",
        "B) Painéis de controle",
        "C) E-mail",
        "D) Videoconferência"
        ],
        "correta": "A",
        "explicacao": "O cliente e a equipe estão localizados em frentes continentais e fusos horários totalmente distintos (América do Norte e Europa). A comunicação presencial ('cara a cara') é logisticamente e financeiramente a forma menos viável e eficaz para relatar o progresso ágil e contínuo."
    },
    {
        "id": "q77",
        "pergunta": "Qual das seguintes opções descreve MELHOR um exemplo de como o gerenciamento de configuração (CM) auxilia nos testes?",
        "opcoes": [
        "A) Com o número da versão do ambiente, a ferramenta CM pode recuperar os números de versão das bibliotecas, stubs e drivers usados nesse ambiente.",
        "B) Com um registro dos valores de entrada, a ferramenta CM pode executar os casos de teste para essas configurações e calcular a cobertura.",
        "C) Com os dados referentes à data de compra da licença de software, a ferramenta de gerenciamento de configuração (CM) gera automaticamente informações sobre o vencimento da licença do produto.",
        "D) Com o número da versão do caso de teste, a ferramenta CM pode gerar automaticamente os dados de teste para esse caso."
        ],
        "correta": "A",
        "explicacao": "O gerenciamento de configuração (CM) garante a integridade de todos os itens do teste. Conhecer a versão exata do ambiente permite à ferramenta CM rastrear e recuperar as versões exatas de todos os seus subcomponentes relacionados (como drivers e stubs), mantendo a reprodutibilidade."
    },
    {
        "id": "q78",
        "pergunta": "Você está testando uma função de ordenação que recebe um conjunto de números como entrada e retorna o mesmo conjunto de números ordenados em ordem crescente. O log da execução do teste mostra que a função falhou nos testes TC3 (Entrada: 8 7 3 7 1 / Saída: 1 3 7 8), TC4 (Entrada: -2 -2 -2 -3 -3 / Saída: -3 -2) e TC5 (Entrada: 0 -2 0 3 4 4 / Saída: -2 0 3 4). Qual das seguintes opções fornece a MELHOR descrição da falha que pode ser usada em um relatório de defeitos?",
        "opcoes": [
        "A) O sistema não consegue ordenar vários conjuntos de números. Referência: TC3, TC4, TC5.",
        "B) O sistema parece ignorar duplicados durante a classificação. Referência: TC3, TC4, TC5.",
        "C) O sistema não consegue classificar números negativos. Referência: TC4, TC5.",
        "D) Os controladores TC3, TC4 e TC5 apresentam defeitos (dados de entrada duplicados) e devem ser corrigidos."
        ],
        "correta": "B",
        "explicacao": "Analisando as entradas e saídas que falharam: no TC3, o número 7 estava duplicado e apareceu apenas uma vez no resultado. No TC4, os números -2 e -3 estavam duplicados e sumiram na saída. O mesmo ocorreu com o 0 e o 4 no TC5. Portanto, o sintoma exato e padrão da falha é que a função remove/ignora os valores duplicados."
    },
    {
        "id": "q79",
        "pergunta": "Dadas as seguintes descrições:\n1. Acompanhamento do fluxo de trabalho de suporte\n2. Facilitar a comunicação\n3. Máquinas virtuais\n4. Avaliações de suporte\n\nE as seguintes categorias de ferramentas de teste:\nA. Ferramentas de teste estático\nB. Ferramentas que suportam escalabilidade e padronização de implantação\nC. Ferramentas DevOps\nD. Ferramentas de colaboração\n\nQual das seguintes opções MELHOR corresponde às descrições e categorias?",
        "opcoes": [
        "A) 1A, 2B, 3C, 4D",
        "B) 1B, 2D, 3C, 4A",
        "C) 1C, 2D, 3B, 4A",
        "D) 1D, 2C, 3A, 4B"
        ],
        "correta": "C",
        "explicacao": "Acompanhar fluxos de suporte mapeia-se às Ferramentas DevOps como ferramentas de rastreamento de tarefas (1C). Facilitar a comunicação às ferramentas de colaboração (2D). Máquinas virtuais são usadas para escalabilidade e padronização de ambiente (3B). Avaliações de suporte relacionam-se a revisões/ferramentas estáticas (4A)."
    },
    {
        "id": "q80",
        "pergunta": "Qual das seguintes opções é MAIS provável de ser um benefício da automação de testes?",
        "opcoes": [
        "A) Fornece medidas de cobertura que são complexas demais para serem derivadas por humanos.",
        "B) A responsabilidade pelos testes é compartilhada com o fornecedor da ferramenta.",
        "C) Isso elimina a necessidade de pensamento crítico na análise dos resultados dos testes.",
        "D) Ele gera casos de teste a partir de uma análise do código do programa."
        ],
        "correta": "A",
        "explicacao": "Um dos grandes benefícios práticos das ferramentas de automação e análise estática/dinâmica é a capacidade de monitorar, calcular e expor de forma ágil métricas de cobertura de código extremamente granulares e complexas (como caminhos ou condições de decisão), cuja derivação e contagem manual seriam inviáveis para seres humanos."
    },
    {
        id: "q81",
        pergunta: "Qual das seguintes afirmações descreve um objetivo de teste válido?",
        opcoes: [
            "A) Para comprovar que não existem defeitos não corrigidos no sistema em teste.",
            "B) Para comprovar que não haverá falhas após a implementação do sistema em produção.",
            "C) Para reduzir o nível de risco do objeto de teste e aumentar a confiança no nível de qualidade.",
            "D) Para verificar se não existem combinações de entradas não testadas."
        ],
        correta: "C",
        explicacao: "Os testes identificam defeitos e falhas, o que reduz o nível de risco e, ao mesmo tempo, aumenta a confiança no nível de qualidade do objeto de teste."
    },
    {
        id: "q82",
        pergunta: "Qual das seguintes opções apresenta um exemplo de atividades de teste que contribuem para o sucesso?",
        opcoes: [
            "A) A participação de testadores em diversas atividades do ciclo de vida de desenvolvimento de software (SDLC) ajudará a detectar defeitos nos produtos de trabalho.",
            "B) Os testadores tentam não atrapalhar os desenvolvedores enquanto eles estão codificando, para que os desenvolvedores escrevam um código melhor.",
            "C) Os testadores que colaboram com os usuários finais ajudam a melhorar a qualidade dos relatórios de defeitos durante a integração de componentes.",
            "D) Os testadores certificados elaborarão casos de teste muito melhores do que os testadores não certificados."
        ],
        correta: "A",
        explicacao: "É importante que os testadores estejam envolvidos desde o início do SDLC. Isso aumentará a compreensão das decisões de projeto e permitirá a detecção precoce de defeitos."
    },
    {
        id: "q83",
        pergunta: "Você foi designado como testador em uma equipe que está desenvolvendo um novo sistema de forma incremental. Você notou que nenhuma alteração foi feita nos casos de teste de regressão existentes por várias iterações e nenhum novo defeito de regressão foi identificado. Seu gerente está satisfeito, mas você não. Qual princípio de teste explica seu ceticismo?",
        opcoes: [
            "A) Os testes se desgastam (Paradoxo do Pesticida).",
            "B) Falácia da ausência de defeitos.",
            "C) Os defeitos se agrupam.",
            "D) Testes exaustivos são impossíveis."
        ],
        correta: "A",
        explicacao: "Esse princípio significa que, se os mesmos testes forem repetidos várias vezes, eventualmente esses testes não encontrarão mais nenhum novo defeito."
    },
    {
        id: "q84",
        pergunta: "Você trabalha em uma equipe que desenvolve um aplicativo móvel para pedidos de comida. Nesta versão, a equipe decidiu implementar a funcionalidade de pagamento. Qual das seguintes atividades faz parte da análise de testes?",
        opcoes: [
            "A) Estima-se que o teste de integração com o serviço de pagamento levará 8 dias-pessoa.",
            "B) Decidir que a equipe deveria testar se é possível dividir o pagamento adequadamente entre vários usuários.",
            "C) Utilizando a análise de valores limite (BVA) para derivar os dados de teste para os casos de teste que verificam o processamento correto.",
            "D) Analisar a discrepância entre o resultado real e o esperado após a execução de um caso de teste e reportar um defeito."
        ],
        correta: "B",
        explicacao: "Este é um exemplo de definição de condições de teste, que faz parte da atividade de análise de teste."
    },
    {
        id: "q85",
        pergunta: "Qual dos seguintes fatores tem uma influência SIGNIFICATIVA na abordagem do teste?",
        opcoes: [
            "A) O nível médio de experiência da equipe de marketing da organização.",
            "B) O conhecimento dos usuários de que um Crypto de transações inovador está operando em fuso horário internacional.",
            "C) O número de anos de experiência dos membros da equipe de testes.",
            "D) O modelo de SDLC, os riscos identificados do produto e os novos requisitos regulamentares."
        ],
        correta: "D",
        explicacao: "O SDLC escolhido, os riscos identificados do produto e os requisitos regulatórios são os fatores mais importantes que moldam a abordagem de teste."
    },
    {
        id: "q86",
        pergunta: "Quais das DUAS tarefas a seguir pertencem PRINCIPALMENTE a uma função técnica de teste?",
        opcoes: [
            "A) Configurar ambientes de teste e Criar o plano de testes.",
            "B) Manter o backlog do produto e Projetar soluções para novos requisitos.",
            "C) Analisar a base de testes e Projetar os casos de teste.",
            "D) Criar o plano de testes e Projetar soluções para novos requisitos."
        ],
        correta: "C",
        explicacao: "Analisar a base de testes e projetar os testes correspondentes são atribuições essencialmente técnicas do papel do testador."
    },
    {
        id: "q87",
        pergunta: "Quais das seguintes habilidades são as habilidades genéricas MAIS importantes de um testador?",
        opcoes: [
            "A) Criando uma visão de produto e planejar o trabalho do time.",
            "B) Ter conhecimento da área (domínio), ser um bom jogador de equipe e pensamento crítico.",
            "C) Criando uma visão de produto e organizar o orçamento financeiro.",
            "D) Planejar e organizar o trabalho da equipe de infraestrutura."
        ],
        correta: "B",
        explicacao: "Ter conhecimento do domínio, ser um bom colaborador de equipe e possuir pensamento crítico são habilidades genéricas cruciais destacadas pelo syllabus."
    },
    {
        id: "q88",
        pergunta: "De que forma a abordagem de equipe multidisciplinar se manifesta nas interações entre os testadores e os representantes da empresa?",
        opcoes: [
            "A) Representantes empresariais decidem de forma isolada sobre as abordagens de automação de testes.",
            "B) Os testadores ajudam os representantes da empresa a definir uma estratégia de testes de unidade.",
            "C) Os representantes comerciais não fazem parte da abordagem de equipe completa.",
            "D) Os testadores ajudam os representantes da empresa a criar testes de aceite adequados."
        ],
        correta: "D",
        explicacao: "Na abordagem de equipe completa, os testadores trabalham em estreita colaboração com os representantes de negócio para apoiá-los na criação de testes de aceite adequados."
    },
    {
        id: "q89",
        pergunta: "Considere a seguinte regra: 'para cada atividade do SDLC existe uma atividade de teste correspondente'. Em quais modelos de SDLC essa regra se aplica?",
        opcoes: [
            "A) Somente em modelos de desenvolvimento sequencial.",
            "B) Somente em modelos de desenvolvimento iterativo.",
            "C) Somente em modelos de desenvolvimento iterativos e incrementais.",
            "D) Em modelos de desenvolvimento sequencial, incremental e iterativo."
        ],
        correta: "D",
        explicacao: "Esta regra é uma boa prática universal que se aplica perfeitamente a todos os modelos de ciclo de vida de desenvolvimento de software."
    },
    {
        id: "q90",
        pergunta: "Qual das seguintes afirmações descreve MELHOR a abordagem de desenvolvimento orientado a testes de aceite (ATDD)?",
        opcoes: [
            "A) Em ATDD, os critérios de aceite são normalmente criados com base no formato dado/quando/então.",
            "B) Em ATDD, os casos de teste são criados principalmente durante o teste de componentes e são orientados ao código.",
            "C) Em ATDD, são criados testes baseados em critérios de aceite para orientar o desenvolvimento do software relacionado.",
            "D) Em ATDD, os testes são baseados no comportamento desejado do software, facilitando a compreensão."
        ],
        correta: "C",
        explicacao: "No ATDD, os testes são escritos antes do código a partir dos critérios de aceite acordados, servindo como guia para o desenvolvimento."
    },
        {
        id: "q91",
        pergunta: "Qual das seguintes opções NÃO é um exemplo da abordagem 'shift-left'?",
        opcoes: [
            "A) Revisar os requisitos do usuário antes que sejam formalmente aceitos pelos stakeholders.",
            "B) Escrever um teste de componente antes de escrever o código correspondente.",
            "C) Executar um teste de eficiência de desempenho para um componente durante o teste do componente.",
            "D) Escrever um script de teste antes de configurar o processo de gerenciamento de configuração."
        ],
        correta: "D",
        explicacao: "Os scripts de teste devem estar sujeitos ao gerenciamento de configuração, portanto, não faz sentido criar os scripts antes que esse processo seja devidamente estabelecido."
    },
    {
        id: "q92",
        pergunta: "Qual dos argumentos abaixo você usaria para convencer seu gerente a organizar retrospectivas ao final de cada ciclo de lançamento?",
        opcoes: [
            "A) As retrospectivas estão muito em voga atualmente e os clientes apreciariam se as adicionássemos aos nossos processos.",
            "B) Organizar retrospectivas economizará dinheiro para a organização, pois sem elas os representantes dos usuários finais não fornecem feedback imediato sobre o produto.",
            "C) As fragilidades nos processos identificadas durante a retrospectiva podem ser analisadas e servir como uma lista de tarefas para o programa de melhoria contínua de processos da organização.",
            "D) As retrospectivas abrangem cinco valores, incluindo coragem e respeito, que são cruciais para manter a melhoria contínua na organização."
        ],
        correta: "C",
        explicacao: "Retrospectivas realizadas regularmente, quando acompanhadas de atividades pós-reunião adequadas, são fundamentais para mapear falhas operacionais e gerar a melhoria contínua."
    },
    {
        id: "q93",
        pergunta: "Quais tipos de falhas (1-4) se encaixam melhor em quais níveis de teste (A-D)?\n1. Falhas no comportamento do sistema quando este se desvia das necessidades de negócio.\n2. Falhas na comunicação entre componentes.\n3. Falhas de lógica no código.\n4. Falhas na implementação incorreta de regras de negócio.\n\nNíveis: A. Componentes | B. Integração de componentes | C. Sistema | D. Aceite",
        opcoes: [
            "A) 1D, 2B, 3A, 4C",
            "B) 1D, 2B, 3C, 4A",
            "C) 1B, 2A, 3D, 4C",
            "D) 1C, 2B, 3A, 4D"
        ],
        correta: "A",
        explicacao: "As falhas lógicas ocorrem em componentes (3A); as interfaces de comunicação na integração (2B); regras complexas de fluxo no sistema (4C); e desvios de negócio no aceite (1D)."
    },
    {
        id: "q94",
        pergunta: "Você está testando uma história com 3 critérios (AC1, AC2, AC3) cobertos por 3 testes (TC1, TC2, TC3). Na Execução 1, TC1 e TC3 falham e TC2 passa. Após correções de bugs em uma nova versão, na Execução 2, os testes pendentes são reexecutados. Quais dos testes da Execução 2 funcionam obrigatoriamente como testes de regressão?",
        opcoes: [
            "A) Os testes que antes haviam falhado e agora foram corrigidos.",
            "B) O re-teste direto aplicado sobre as linhas de código modificadas pelo desenvolvedor.",
            "C) Os testes que já haviam passado anteriormente (como o TC2), reexecutados para garantir que a nova build não quebrou o software inalterado.",
            "D) Apenas testes estáticos simulados no repositório de controle de versão."
        ],
        correta: "C",
        explicacao: "Os testes de regressão servem explicitamente para garantir que as alterações e correções aplicadas no sistema não geraram efeitos colaterais adversos em partes não alteradas."
    },
    {
        id: "q95",
        pergunta: "Qual das seguintes opções é um exemplo de defeito que pode ser encontrado por meio de testes estáticos, mas NÃO por meio de testes dinâmicos?",
        opcoes: [
            "A) Falta de usabilidade proporcionada pela interface do usuário.",
            "B) Código sem caminho ou fluxo lógico que o alcance (código morto).",
            "C) Tempos de resposta lentos para a maioria dos usuários esperados sob carga.",
            "D) Funcionalidades obrigatórias contratuais que não foram implementadas no código."
        ],
        correta: "B",
        explicacao: "Uma revisão de código pode detectar trechos de código inacessíveis por qualquer caminho, enquanto testes dinâmicos só conseguem exercitar trechos de código acessíveis."
    },
        {
        id: "q96",
        pergunta: "Qual das seguintes opções representa um benefício do feedback frequente e antecipado dos stakeholders?",
        opcoes: [
            "A) Os gerentes sabem quais desenvolvedores são menos produtivos.",
            "B) Isso permite que os gerentes de projeto priorizem suas interações com os stakeholders.",
            "C) Isso facilita a comunicação precoce de possíveis problemas de qualidade e evita mal-entendidos.",
            "D) Os usuários finais compreendem melhor os motivos do atraso na entrega do produto."
        ],
        correta: "C",
        explicacao: "Obter feedback dos stakeholders desde o início do processo de desenvolvimento de software facilita a comunicação de potenciais problemas de qualidade e evita mal-entendidos sobre os requisitos."
    },
    {
        id: "q97",
        pergunta: "As avaliações utilizadas na sua organização possuem os seguintes atributos: Existe a função de um escriba; O principal objetivo é avaliar a qualidade; A reunião é conduzida pelo autor; Existe preparação individual; É produzido um relatório de revisão. Qual tipo de avaliação é MAIS provável de ser usado?",
        opcoes: [
            "A) Revisão informal",
            "B) Passo a passo (Walkthrough)",
            "C) Análise técnica",
            "D) Inspeção"
        ],
        correta: "B",
        explicacao: "Um passo a passo (walkthrough) é conduzido pelo autor do produto de trabalho e pode servir para avaliar a qualidade e detectar anomalias, contando com preparação individual e papéis definidos."
    },
    {
        id: "q98",
        pergunta: "Qual das seguintes afirmações NÃO é um fator que contribui para avaliações bem-sucedidas?",
        opcoes: [
            "A) Os participantes devem dedicar tempo suficiente para a revisão.",
            "B) Dividir grandes projetos em partes menores para tornar o esforço necessário menos intenso.",
            "C) Os participantes devem evitar comportamentos que possam indicar tédio, exasperação ou hostilidade.",
            "D) As falhas encontradas devem ser reconhecidas, valorizadas e tratadas de forma objetiva."
        ],
        correta: "D",
        explicacao: "Durante as revisões de teste estático são encontrados defeitos nos produtos de trabalho, e não falhas. As falhas só se manifestam em testes dinâmicos com o código em execução."
    },
    {
        id: "q99",
        pergunta: "Qual das seguintes opções é uma característica das técnicas de teste baseadas na experiência?",
        opcoes: [
            "A) Os casos de teste são criados com base em informações detalhadas do projeto estrutural.",
            "B) Os itens testados na seção de código da interface são usados para medir a cobertura.",
            "C) As técnicas de teste dependem fortemente do conhecimento que o testador tem do software e do domínio de negócios.",
            "D) Os casos de teste são usados para identificar desvios em relação aos requisitos detalhados de especificação."
        ],
        correta: "C",
        explicacao: "As técnicas baseadas na experiência utilizam o conhecimento e a vivência do testador sobre o uso esperado do software, seu ambiente operacional, defeitos prováveis e sua distribuição."
    },
    {
        id: "q100",
        pergunta: "Você testa um formulário simplificado de busca de apartamentos com dois critérios: andar (térreo, primeiro andar ou segundo andar) e tipo de jardim (sem jardim, jardim pequeno ou jardim grande). Apartamentos no térreo possuem jardim; nos superiores não. O sistema impede buscas que violem essa regra. Qual o número mínimo de casos de teste para atingir 100% de cobertura de Partição de Equivalência (EP) para partições válidas?",
        opcoes: [
            "A) 3 casos de teste",
            "B) 4 casos de teste",
            "C) 5 casos de teste",
            "D) 6 casos de teste"
        ],
        correta: "B",
        explicacao: "Precisamos de dois casos para o térreo (cobrindo jardim pequeno e grande) e mais dois casos para o primeiro e segundo andares (ambos cobrindo a partição sem jardim), totalizando 4 casos de teste."
    },
        {
        id: "q101",
        pergunta: "Você está testando um sistema que calcula a nota final do curso: 0 a 50 (reprovado), 51 a 60 (razoável), 61 a 70 (satisfatório), 71 a 80 (bom), 81 a 90 (muito bom) e 91 a 100 (excelente). Seu conjunto de testes possui as notas: 91, 50, 81, 60, 70 e 80. Qual é a cobertura de Análise de Valor Limite (BVA) de dois valores alcançada por esse conjunto?",
        opcoes: [
            "A) 50% de cobertura.",
            "B) 60% de cobertura.",
            "C) 33,3% de cobertura.",
            "D) 100% de cobertura."
        ],
        correta: "A",
        explicacao: "Existem 12 valores de limite possíveis para este cenário (0, 50, 51, 60, 61, 70, 71, 80, 81, 90, 91 e 100). Os seus casos de teste cobrem exatamente 6 deles (91, 50, 81, 60, 70 e 80), o que resulta em 6/12 = 50% de cobertura."
    },
    {
        id: "q102",
        pergunta: "Uma loja de aluguel de bicicletas tem as regras: Qualquer pessoa pode alugar, mas membros ganham 20% de desconto. Se o prazo de devolução for perdido, o desconto não se aplica. Após 15 aluguéis, membros ganham uma camiseta de presente. Com base apenas nessas regras, qual situação descrita em uma tabela de decisão seria considerada IMPOSSÍVEL?",
        opcoes: [
            "A) Um membro que não cumpriu o prazo, realizou o 15º aluguel e ganhou a camiseta, mas perdeu o desconto.",
            "B) Um não-membro que cumpriu o prazo e recebeu o desconto de 20%.",
            "C) Um membro que cumpriu o prazo, realizou o 15º aluguel e ganhou o desconto e a camiseta.",
            "D) Um não-membro que não cumpriu o prazo e ganhou uma camiseta de presente."
        ],
        correta: "D",
        explicacao: "Apenas os membros têm direito a receber a camiseta de presente após 15 aluguéis. Além disso, não-membros não têm desconto de 20%, o que torna as ações para não-membros nessas regras impossíveis."
    },
    {
        id: "q103",
        pergunta: "Você testa um sistema cujo ciclo de vida possui os estados INIT, DEBUG MODE, IN OPERATION, ON HOLD e OFF. As transições válidas são: test (INIT->DEBUG), run (INIT->OPERATION), error (OPERATION->DEBUG), done (DEBUG->OFF), pause (OPERATION->HOLD), resume (HOLD->OPERATION) e done (HOLD->OFF). Qual o número MÍNIMO de casos de teste para obter 100% de cobertura de transições válidas?",
        opcoes: [
            "A) 4 casos de teste.",
            "B) 2 casos de teste.",
            "C) 7 casos de teste.",
            "D) 3 casos de teste."
        ],
        correta: "D",
        explicacao: "As transições 'test' e 'error' não podem ocorrer no mesmo caminho, assim como as duas transições 'done'. Mapeando os caminhos lógicos para cobrir todos os fluxos válidos sem repetição, precisamos de no mínimo 3 casos de teste independentes."
    },
    {
        id: "q104",
        pergunta: "Seu conjunto de testes dinâmicos atingiu 100% de cobertura de instruções (statement coverage). Qual é a consequência desse fato?",
        opcoes: [
            "A) Qualquer conjunto de testes que contenha mais casos de teste do que o seu também atingirá 100% de cobertura.",
            "B) Cada instrução no código que contém um defeito foi executada e avaliada pelo menos uma vez.",
            "C) Cada caminho lógico e cada desvio condicional do código foi executado pelo menos uma vez.",
            "D) Todas as combinações possíveis de valores de entrada foram testadas pelo menos uma vez."
        ],
        correta: "B",
        explicacao: "Atingir 100% de cobertura de instruções significa que todas as linhas executáveis do programa foram rodadas. Consequentemente, se houver um defeito em uma instrução, ela foi obrigatoriamente exercitada."
    },
    {
        id: "q105",
        pergunta: "Qual das seguintes afirmações NÃO é verdadeira ou representa uma limitação para as técnicas de teste caixa-branca?",
        opcoes: [
            "A) Durante os testes caixa-branca, toda a implementação estrutural do software é considerada.",
            "B) As métricas de cobertura de código-fonte podem ajudar a identificar a necessidade de testes adicionais.",
            "C) As técnicas de teste caixa-branca são estritamente dinâmicas e não podem ser usadas em revisões de teste estático.",
            "D) Os testes caixa-branca baseiam-se na estrutura do código, por isso têm dificuldade em identificar requisitos que foram totalmente omitidos na implementação."
        ],
        correta: "C",
        explicacao: "Esta afirmação é falsa (e, portanto, a resposta correta) porque as técnicas caixa-branca podem sim ser aplicadas em testes estáticos, como durante revisões de código de forma manual (execuções secas) ou através de modelagens de pseudocódigo."
    },
        {
        id: "q106",
        pergunta: "Qual das seguintes opções descreve MELHOR o conceito por trás do palpite errôneo (Adivinhação de Erros)?",
        opcoes: [
            "A) A detecção de erros envolve o uso do seu conhecimento e experiência com defeitos encontrados no passado e erros típicos cometidos por desenvolvedores.",
            "B) A tentativa de adivinhar erros envolve usar sua experiência pessoal em desenvolvimento e os erros que você cometeu como desenvolvedor.",
            "C) A adivinhação de erros exige que você imagine ser o usuário do objeto de teste e tente adivinhar os erros que ele poderia cometer ao interagir com o objeto.",
            "D) A detecção automática de erros exige que você reproduza rapidamente a tarefa de desenvolvimento para identificar os tipos de erros que um desenvolvedor poderia cometer."
        ],
        correta: "A",
        explicacao: "O conceito básico por trás da adivinhação de erros é que o testador tenta prever quais erros podem ter sido cometidos pelo desenvolvedor e quais defeitos podem estar presentes no objeto de teste com base na sua experiência anterior."
    },
    {
        id: "q107",
        pergunta: "No seu projeto, houve um atraso no lançamento de um aplicativo totalmente novo e a execução dos testes começou tarde, mas você possui um conhecimento detalhado do domínio e boas habilidades analíticas. A lista completa de requisitos ainda não foi compartilhada com a equipe, mas a gerência está solicitando a apresentação de alguns resultados de testes. Qual técnica de teste é a mais adequada para esta situação?",
        opcoes: [
            "A) Testes baseados em listas de verificação.",
            "B) Erro de adivinhação (Palpite errôneo).",
            "C) Testes exploratórios.",
            "D) Teste de ramificação."
        ],
        correta: "C",
        explicacao: "O teste exploratório é a abordagem mais útil e eficiente quando há poucas especificações conhecidas, documentação inadequada ou quando há uma forte pressão de tempo para a entrega de resultados."
    },
    {
        id: "q108",
        pergunta: "Qual das seguintes opções descreve MELHOR a forma como os critérios de aceite podem ser documentados?",
        opcoes: [
            "A) Realizar retrospectivas para determinar as reais necessidades dos stakeholders em relação a uma história de usuário.",
            "B) Utilizando o formato dado/quando/então para descrever uma condição de teste de exemplo relacionada a uma história de usuário.",
            "C) Utilizar a comunicação verbal para reduzir o risco de mal-entendidos sobre os critérios de aceite.",
            "D) Documentar os riscos relacionados a uma determinada história de usuário em um plano de testes."
        ],
        correta: "B",
        explicacao: "O formato Dado/Quando/Então (orientado a cenários) é a maneira padrão e mais amplamente recomendada na engenharia de software para documentar fisicamente os critérios de aceitação de uma história de usuário."
    },
    {
        id: "q109",
        pergunta: "Considere uma história de usuário onde o editor quer revisar e editar o conteúdo da página, adicionar comentários e salvar as alterações. Qual das seguintes opções é o MELHOR exemplo de um teste ATDD (Desenvolvimento Orientado por Testes de Aceite) para esta história de usuário?",
        opcoes: [
            "A) Teste se o editor consegue salvar o documento após editar o conteúdo da página.",
            "B) Teste se o proprietário do conteúdo consegue iniciar sessão e fazer atualizações no conteúdo.",
            "C) Teste se o editor consegue agendar a publicação automática do conteúdo editado após 48 horas.",
            "D) Teste se um novo usuário não cadastrado consegue criar uma conta de editor com e-mail válido."
        ],
        correta: "A",
        explicacao: "Para ser um teste ATDD relevante, o cenário deve validar diretamente os critérios de aceite descritos nas tarefas do papel da história de usuário (neste caso, a atividade de edição e salvamento do próprio editor)."
    },
    {
        id: "q110",
        pergunta: "Como os testadores agregam valor ao planejamento de iteração e lançamento (Sprint e Release Planning)?",
        opcoes: [
            "A) Os testadores determinam sozinhos a prioridade comercial das histórias de usuário a serem desenvolvidas.",
            "B) Os testadores se concentram apenas nos aspectos funcionais do sistema a ser testado, descartando os não funcionais.",
            "C) Os testadores participam da identificação e avaliação detalhada dos riscos das histórias de usuário.",
            "D) Os testadores garantem o lançamento de software de alta qualidade por meio do projeto antecipado de testes isolados."
        ],
        correta: "C",
        explicacao: "De acordo com o syllabus, a principal contribuição dos testadores nas reuniões de planejamento ágil é trazer sua perspectiva de qualidade para ajudar o time a identificar e avaliar detalhadamente os riscos das histórias de usuário."
    },
        {
        id: "q111",
        pergunta: "Quais das DUAS opções a seguir representam critérios de saída (exit criteria) típicos para testar um sistema?",
        opcoes: [
            "A) Preparação completa do ambiente de teste e liberação dos acessos de login.",
            "B) A densidade de defeitos estimada foi atingida e os testes de regressão chaves foram automatizados.",
            "C) Os requisitos do sistema foram traduzidos para o formato de cenários dado/quando/então.",
            "D) O código-fonte foi mesclado com sucesso na ramificação principal sem conflitos."
        ],
        correta: "B",
        explicacao: "Métricas de qualidade atingidas (como densidade de defeitos sob controle) e a automação de testes de regressão concluída medem a prontidão para encerramento do ciclo, sendo critérios de saída clássicos."
    },
    {
        id: "q112",
        pergunta: "Sua equipe utiliza a técnica de estimativa de três pontos para estimar o esforço de teste necessário para um novo recurso de alto risco: Estimativa mais otimista: 2 horas-pessoa; Estimativa mais provável: 11 horas-pessoa; Estimativa mais pessimista: 14 horas-pessoa. Qual é a estimativa final calculada pela fórmula PERT?",
        opcoes: [
            "A) 9 horas-pessoa.",
            "B) 14 horas-pessoa.",
            "C) 11 horas-pessoa.",
            "D) 10 horas-pessoa."
        ],
        correta: "D",
        explicacao: "A fórmula PERT é E = (Otimista + 4*Provável + Pessimista) / 6. Substituindo os valores do cenário: (2 + 4*11 + 14) / 6 = (2 + 44 + 14) / 6 = 60 / 6 = 10 horas-pessoa."
    },
    {
        id: "q113",
        pergunta: "Você está testando um aplicativo móvel de restaurantes. Considere a lista de testes, prioridades (número menor = prioridade maior) e dependências lógicas: TC001 (Prioridade 3, nenhuma); TC002 (Prioridade 2, depende de TC001); TC003 (Prioridade 1, depende de TC002); TC004 (Prioridade 2, depende de TC002); TC005 (Prioridade 3, depende de TC002). Qual caso de teste deve ser executado obrigatoriamente como o terceiro?",
        opcoes: [
            "A) TC003",
            "B) TC005",
            "C) TC002",
            "D) TC001"
        ],
        correta: "A",
        explicacao: "Para respeitar as dependências lógicas, você deve rodar TC001 (1º) e TC002 (2º). Uma vez que TC002 foi executado, os testes restantes (TC003, TC004 e TC005) são liberados. Seguindo a ordem de maior prioridade, o TC003 (prioridade 1) assume a 3ª posição da fila."
    },
    {
        id: "q114",
        pergunta: "De acordo com o modelo clássico de quadrantes de teste ágil, em qual quadrante se posiciona a atividade de testes de usabilidade e testes funcionais focados no negócio e na análise crítica do produto?",
        opcoes: [
            "A) Quadrante Q1 (voltado para a tecnologia, dando suporte à equipe).",
            "B) Quadrante Q2 (voltado para a tecnologia, análise crítica do produto).",
            "C) Quadrante Q3 (voltado para o negócio, análise crítica do produto).",
            "D) Quadrante Q4 (voltado para a tecnologia, avaliação de infraestrutura)."
        ],
        correta: "C",
        explicacao: "O quadrante Q3 é caracterizado por atividades voltadas para o negócio que analisam e criticam o produto sob a ótica da experiência real do usuário (como usabilidade, aceitação e testes exploratórios)."
    },
    {
        id: "q115",
        pergunta: "Durante a análise de risco do produto, identificou-se que o tempo de resposta do sistema é muito longo para gerar relatórios (Probabilidade: Média / Impacto: Alto). Em resposta, propôs-se que uma equipe independente execute testes de eficiência de desempenho. Que tipo de medida de gerenciamento de risco foi tomada?",
        opcoes: [
            "A) Aceite passivo do risco.",
            "B) Plano de contingência operacional.",
            "C) Mitigação de riscos.",
            "D) Transferência de risco."
        ],
        correta: "C",
        explicacao: "Planejar, modelar e executar atividades técnicas de testes com o objetivo de identificar fraquezas de desempenho antes de o sistema ir para a produção é uma ação clássica de mitigação de riscos de produto."
    },
        {
        id: "q116",
        pergunta: "Qual produto de trabalho pode ser usado de forma contínua por uma equipe ágil para demonstrar graficamente a quantidade de trabalho concluída e o total de esforço restante estimado para a iteração?",
        opcoes: [
            "A) Critérios de aceite.",
            "B) Relatório de encerramento de ciclo.",
            "C) Matriz de rastreabilidade de requisitos.",
            "D) Gráfico de Burndown."
        ],
        correta: "D",
        explicacao: "Os gráficos de burndown são representações gráficas que cruzam o trabalho restante com o tempo que falta para a sprint acabar, sendo atualizados diariamente para demonstrar o progresso."
    },
    {
        id: "q117",
        pergunta: "Você precisa atualizar um dos scripts de teste automatizados para atender a um novo requisito de negócio. Qual processo indica as diretrizes corretas para controlar as versões, baselines e histórico desse script no repositório?",
        opcoes: [
            "A) Gestão de rastreabilidade contínua.",
            "B) Testes de manutenção regulatória.",
            "C) Gerenciamento de configuração.",
            "D) Engenharia reversa de requisitos."
        ],
        correta: "C",
        explicacao: "O gerenciamento de configuração (CM) é responsável por manter a integridade, o histórico de modificações e o controle de versão de todos os itens de teste e testware produzidos no projeto."
    },
    {
        id: "q118",
        pergunta: "Um desenvolvedor rejeita um relatório de defeito enviado como 'não reproduzível'. O relatório detalha o erro fatal anexando logs e os dados inseridos ($ä) que travaram a tela. Qual informação crucial ficou FALTANDO no documento e que ajudaria o desenvolvedor a isolar o bug?",
        opcoes: [
            "A) A indicação do ambiente de teste e a versão exata do item de teste (build).",
            "B) O resultado esperado e o resultado real da tela.",
            "C) A referência direta ao caso de teste manual de origem.",
            "D) A prioridade e a severidade estimadas pelo Product Owner."
        ],
        correta: "A",
        explicacao: "Para conseguir replicar e investigar a falha com precisão, o desenvolvedor necessita saber obrigatoriamente sob qual arquitetura de hardware, sistema operacional, navegador e versão de build a falha se manifestou."
    },
    {
        id: "q119",
        pergunta: "As ferramentas de automação focadas em apoiar a modelagem, criação sintética, injeção e isolamento de massas de dados dão suporte a qual atividade técnica do processo de testes?",
        opcoes: [
            "A) Monitoramento e controle analítico de riscos.",
            "B) Análise abstrata de especificações de negócio.",
            "C) Projeto e implementação de testes.",
            "D) Conclusão e arquivamento final de testware."
        ],
        correta: "C",
        explicacao: "De acordo com o syllabus, ferramentas de preparação de dados operam diretamente na fase de projeto e implementação, que é onde os cenários conceituais ganham vida com roteiros e massas de dados."
    },
    {
        id: "q120",
        pergunta: "Qual das seguintes opções identifica corretamente um risco potencial ou desvantagem comum ao se introduzir e executar ferramentas de automação de testes em um projeto?",
        opcoes: [
            "A) Introduzir novos defeitos desconhecidos e regressões na produção.",
            "B) Subestimar o esforço e o custo contínuo exigidos para manter e atualizar o software de teste.",
            "C) Reduzir de forma drástica a confiabilidade geral das ferramentas associadas.",
            "D) Diminuir o tempo livre que a equipe possui para focar em testes manuais complexos."
        ],
        correta: "B",
        explicacao: "Um dos principais riscos da automação é a falsa crença de que ela não gera custos após criada. Se o software evolui e os scripts não recebem manutenção e esforço contínuos, eles perdem a utilidade e quebram."
    },
        {
        id: "q121",
        pergunta: "No contexto do ISTQB, qual a diferença conceitual exata entre Verificação e Validação?",
        opcoes: [
            "A) Verificação checa se o sistema atende aos requisitos especificados. Validação checa se ele atende às necessidades dos usuários em seu ambiente operacional.",
            "B) Verificação é realizada exclusivamente por ferramentas automáticas, enquanto a validação é um rito 100% manual.",
            "C) Validação busca defeitos no código-fonte (estático) e verificação busca falhas no ambiente integrado (dinâmico).",
            "D) Não há diferença; ambos são termos intercambiáveis aplicados ao Controle de Qualidade (QC)."
        ],
        correta: "A",
        explicacao: "A verificação foca na conformidade com as especificações escritas ('construir o produto corretamente'). A validação foca na adequação ao uso real do cliente ('construir o produto correto')."
    },
    {
        id: "q122",
        pergunta: "Um analista de testes rodou uma suíte automatizada e identificou que o sistema travou exibindo uma tela azul. De acordo com os fundamentos do teste, o travamento visível na tela é classificado como:",
        opcoes: [
            "A) Um equívoco ou erro humano de lógica.",
            "B) Uma causa-raiz latente na arquitetura.",
            "C) Um defeito inserido nas linhas de código.",
            "D) Uma falha operacional."
        ],
        correta: "D",
        explicacao: "A falha é a manifestação física, o desvio visível ou o comportamento incorreto do sistema durante sua execução ativa."
    },
    {
        id: "q123",
        pergunta: "O Princípio de Teste nº 4 (Os defeitos se agrupam) é uma ilustração direta de qual fenômeno amplamente conhecido na engenharia e estatística?",
        opcoes: [
            "A) O Paradoxo do Pesticida.",
            "B) O Princípio de Pareto (regra dos 80/20).",
            "C) A Falácia da Ausência de Defeitos.",
            "D) O Gráfico de Fluxo de Controle de decisão."
        ],
        correta: "B",
        explicacao: "O Princípio de Pareto no teste dita que um pequeno número de módulos ou componentes costuma concentrar a grande maioria dos defeitos descobertos no projeto."
    },
    {
        id: "q124",
        pergunta: "Qual das seguintes atividades do processo de teste responde diretamente à pergunta estratégica: 'Como testar?'",
        opcoes: [
            "A) Planejamento de testes.",
            "B) Análise de teste.",
            "C) Modelagem de teste (Test Design).",
            "D) Implementação de teste."
        ],
        correta: "C",
        explicacao: "A modelagem de teste elabora as condições em casos práticos e responde 'como testar', definindo itens de cobertura e requisitos de dados."
    },
    {
        id: "q125",
        pergunta: "Durante qual atividade do processo de teste os analistas criam, adquirem e organizam os procedimentos de teste em um cronograma de execução e conferem o ambiente?",
        opcoes: [
            "A) Análise de teste.",
            "B) Modelagem de teste.",
            "C) Implementação de teste.",
            "D) Conclusão de teste."
        ],
        correta: "C",
        explicacao: "A implementação reúne os scripts manuais e automáticos, organiza o cronograma de rodadas e valida se o ambiente está estável."
    },
        {
        id: "q126",
        pergunta: "O testware gerado como produto de trabalho de saída da atividade de modelagem de teste inclui obrigatoriamente:",
        opcoes: [
            "A) Planos de teste, cronogramas e registros formais de riscos mitigados.",
            "B) Casos de teste priorizados, cartas de teste, itens de cobertura e requisitos de dados e ambiente.",
            "C) Scripts automatizados prontos, stubs, drivers e virtualizações de serviços.",
            "D) Registros de logs de execução e relatórios de métricas de defeito."
        ],
        correta: "B",
        explicacao: "Cenários teóricos, dados esperados e cartas de sessão nascem no test design (modelagem), servindo como insumo para a fase de implementação."
    },
    {
        id: "q127",
        pergunta: "Por que estabelecer e manter uma rastreabilidade precisa entre a base de testes e o testware é considerado um fator de alto valor para o projeto?",
        opcoes: [
            "A) Porque ela substitui por completo a necessidade de executar testes dinâmicos de regressão.",
            "B) Permite medir a cobertura de forma objetiva, facilita auditorias e ajuda a avaliar o nível de risco residual.",
            "C) Garante de forma automatizada que o código-fonte fique livre de defeitos lógicos.",
            "D) Serve para monitorar a velocidade de digitação individual dos testadores da equipe."
        ],
        correta: "B",
        explicacao: "A rastreabilidade liga requisitos aos cenários e defeitos, permitindo analisar o impacto de mudanças e entender o progresso real frente aos objetivos."
    },
    {
        id: "q128",
        pergunta: "No desenvolvimento ágil de software, como o papel de gerenciamento de testes costuma se comportar na prática?",
        opcoes: [
            "A) Ele é descartado por completo, e nenhuma atividade de planejamento ou controle é executada.",
            "B) Algumas das tarefas de gestão são absorvidas organicamente pela própria equipe multidisciplinar ágil.",
            "C) É assumido exclusivamente pelo Product Owner de forma isolada e autocrática.",
            "D) Exige a contratação de uma consultoria externa de auditoria regulatória para cada sprint."
        ],
        correta: "B",
        explicacao: "No modelo ágil, as frentes de planejamento e controle locais são divididas entre os membros da squad, embora gerentes externos possam apoiar frentes corporativas."
    },
    {
        id: "q129",
        pergunta: "Qual das seguintes opções descreve uma desvantagem ou risco atrelado a um nível de independência de testes muito alto (como uma equipe externa isolada)?",
        opcoes: [
            "A) Os testadores tendem a compartilhar o mesmo viés cognitivo do autor do código.",
            "B) Pode levar ao isolamento da equipe, falhas de comunicação e criação de uma relação adversária com os desenvolvedores.",
            "C) Reduz drasticamente a capacidade de contestar ou refutar as suposições feitas no projeto.",
            "D) Elimina a possibilidade de usar ferramentas automáticas de análise estática."
        ],
        correta: "B",
        explicacao: "Equipes externas ganham em olhar crítico, mas se trabalharem isoladas correm o risco de virar um gargalo de comunicação ou gerar atritos na esteira."
    },
    {
        id: "q130",
        pergunta: "Como os modelos de desenvolvimento iterativos e incrementais (como o Scrum) impactam diretamente as atividades de teste de regressão?",
        opcoes: [
            "A) Reduzem a necessidade de regressão, pois o código antigo nunca é modificado.",
            "B) Exigem testes de regressão extensivos a cada incremento entregue, tornando esses testes fortes candidatos à automação.",
            "C) Substituem testes dinâmicos por revisões de código puramente estáticas.",
            "D) Limitam as frentes de teste de qualidade ao final do ano fiscal do projeto."
        ],
        correta: "B",
        explicacao: "Como novas fatias de código são acopladas ao sistema a cada sprint, o risco de quebra aumenta, exigindo uma malha robusta e automatizada de testes de regressão."
    },
        {
        id: "q131",
        pergunta: "Qual abordagem de desenvolvimento ágil expressa o comportamento desejado do software em linguagem natural simples, utilizando o formato Dado/Quando/Então?",
        opcoes: [
            "A) TDD (Test-Driven Development).",
            "B) ATDD (Acceptance Test-Driven Development).",
            "C) BDD (Behavior-Driven Development).",
            "D) DDD (Domain-Driven Design)."
        ],
        correta: "C",
        explicacao: "O BDD foca no comportamento do sistema sob a ótica de cenários legíveis em formato Dado/Quando/Então, facilitando a tradução em testes automatizados."
    },
    {
        id: "q132",
        pergunta: "No ecossistema DevOps, a prática de Integração Contínua (CI) apoia diretamente a abordagem de 'shift-left' ao incentivar qual comportamento?",
        opcoes: [
            "A) Que os desenvolvedores submetam códigos sem testes de componentes para acelerar o deploy.",
            "B) Que os desenvolvedores enviem códigos acompanhados de testes de unidade e análise estática automatizada.",
            "C) Que toda a atividade de Controle de Qualidade seja executada apenas no ambiente de produção.",
            "D) O descarte total de qualquer documentação ou critério de aceitação de histórias de usuário."
        ],
        correta: "B",
        explicacao: "A esteira de CI roda testes rápidos e estáticos assim que o código é submetido, dando feedback ágil e incentivando o envio de códigos com maior qualidade."
    },
    {
        id: "q133",
        pergunta: "Qual das seguintes opções constitui uma boa prática de 'shift-left' focada em características não funcionais de qualidade de software?",
        opcoes: [
            "A) Deixar para testar a performance do sistema apenas na véspera do lançamento comercial.",
            "B) Realizar testes não funcionais (como eficiência de desempenho e segurança) começando logo no nível de componente, sempre que possível.",
            "C) Ignorar testes de usabilidade até que os clientes reclamem na produção.",
            "D) Delegar a validação de segurança exclusivamente para os representantes de marketing."
        ],
        correta: "B",
        explicacao: "Antecipar testes de estresse ou segurança em módulos isolados evita retrabalhos arquiteturais caros que costumam travar projetos no final do ciclo."
    },
    {
        id: "q134",
        pergunta: "Qual nível de teste clássico do ISTQB concentra-se primordialmente em avaliar o comportamento geral e os recursos de todo um sistema completo, englobando requisitos funcionais e não funcionais?",
        opcoes: [
            "A) Teste de Componente.",
            "B) Teste de Integração de Componentes.",
            "C) Teste de Sistema.",
            "D) Teste de Integração de Sistemas."
        ],
        correta: "C",
        explicacao: "O teste de sistema opera sobre a aplicação ponta a ponta, validando se o produto consolidado atende às especificações globais projetadas."
    },
    {
        id: "q135",
        pergunta: "De acordo com a classificação internacional da norma ISO/IEC 25010, itens como Confiabilidade, Usabilidade, Segurança e Capacidade de Manutenção são considerados:",
        opcoes: [
            "A) Características funcionais de escopo.",
            "B) Características não funcionais de qualidade de software.",
            "C) Critérios de entrada do pipeline de DevOps.",
            "D) Elementos exclusivos de testes estáticos informais."
        ],
        correta: "B",
        explicacao: "A ISO 25010 define os pilares de 'quão bem' o sistema se comporta sob parâmetros operacionais, caracterizando a malha não funcional."
    },
        {
        id: "q136",
        pergunta: "No contexto de testes de manutenção, qual ferramenta analítica deve ser prioritariamente executada antes de aplicar uma alteração em produção para medir o impacto em outras áreas do sistema?",
        opcoes: [
            "A) Pirâmide de testes operacionais.",
            "B) Análise de impacto.",
            "C) Teste de transição de estado exaustivo.",
            "D) Inspeção de código automatizada."
        ],
        correta: "B",
        explicacao: "A análise de impacto mostra quais partes do software podem ser afetadas por uma modificação, ajudando a otimizar a extensão e os caminhos dos testes de regressão subsequentes."
    },
    {
        id: "q137",
        pergunta: "Se um sistema comercial em produção passa por um processo planejado de desativação (aposentadoria), qual atividade técnica de teste pode ser exigida pela governança?",
        opcoes: [
            "A) Testes de regressão de caixa-branca no código morto.",
            "B) Testes de arquivamento de dados e validação de procedimentos de restauração.",
            "C) Testes de aceitação alfa em ambientes de simulação de carga.",
            "D) Redesenho completo da matriz SWOT de processos de desenvolvimento."
        ],
        correta: "B",
        explicacao: "Quando um sistema é desativado, o syllabus prevê a necessidade de realizar testes de arquivamento de dados, bem como testar os procedimentos de restauração caso as informações sejam requeridas no futuro."
    },
    {
        id: "q138",
        pergunta: "Como o teste estático atua na modelagem ágil durante frentes como refinamento do backlog (backlog refinement) ou escrita de histórias de usuário?",
        opcoes: [
            "A) Ele executa scripts automatizados de caixa-preta diretamente no servidor.",
            "B) Através de revisões para garantir que as histórias de usuário atendam a critérios como a Definição de Pronto (DoR) e possuam critérios de aceite testáveis.",
            "C) Calculando o tempo médio até a falha (MTTF) dos mockups visuais do produto.",
            "D) Substituindo as tarefas de codificação da sprint por simulações matemáticas."
        ],
        correta: "B",
        explicacao: "Ao aplicar técnicas de revisão em reuniões de refinamento, os testadores exploram e desafiam as histórias de usuário, garantindo que elas estejam claras, completas e testáveis."
    },
    {
        id: "q139",
        pergunta: "Para que uma ferramenta de análise estática consiga realizar verificações automáticas e identificar problemas no código de forma eficiente, qual a principal pré-condição exigida do produto de trabalho?",
        opcoes: [
            "A) Ele deve ser um código compilado e estar rodando em um servidor de produção.",
            "B) O produto de trabalho precisa possuir uma estrutura ou sintaxe formal em relação à qual possa ser verificado.",
            "C) Deve ser um documento informal assinado digitalmente pelos clientes do negócio.",
            "D) Precisa ter sido desenhado exclusivamente através de testes exploratórios baseados em sessões."
        ],
        correta: "B",
        explicacao: "Para que ferramentas façam análise estática, os produtos de trabalho precisam de uma estrutura clara e padronizada (como código-fonte, modelos formais ou textos com regras de sintaxe rígidas)."
    },
    {
        id: "q140",
        pergunta: "Se o particionamento de equivalência (EP) divide um conjunto em partições válidas e inválidas, como uma partição inválida deve ser interpretada pelo time de engenharia?",
        opcoes: [
            "A) Como um grupo de dados que o sistema deve processar seguindo o fluxo feliz padrão.",
            "B) Como valores que devem ser rejeitados, ignorados ou para os quais nenhum processamento lícito foi definido na especificação.",
            "C) Como códigos de instrução inacessíveis identificados via análise estrutural.",
            "D) Como dados que provocam falhas de infraestrutura desconhecidas pelo desenvolvedor."
        ],
        correta: "B",
        explicacao: "As partições inválidas contêm dados que estão fora das regras normais esperadas do sistema. O teste deve checar se a aplicação trata esses cenários de erro de forma robusta e segura."
    },
        {
        id: "q141",
        pergunta: "No Particionamento de Equivalência (EP), quando lidamos com múltiplos conjuntos de partições (ex: vários parâmetros de entrada), qual o critério de cobertura mais simples que exige que cada partição de cada conjunto seja executada pelo menos uma vez, sem focar nas combinações?",
        opcoes: [
            "A) Cobertura de Transições Válidas (0-switch).",
            "B) Cobertura de Instrução Combinada.",
            "C) Cobertura de Cada Escolha (Each Choice Coverage - ECC).",
            "D) Cobertura Exaustiva de Caminhos."
        ],
        correta: "C",
        explicacao: "A cobertura de cada escolha (ECC) exige apenas que os casos de teste executem cada partição de cada conjunto pelo menos uma vez, sem levar em consideração as combinações entre as partições."
    },
    {
        id: "q142",
        pergunta: "Em relação à Análise de Valor de Limite (BVA), por que essa técnica se concentra especificamente nos valores mínimo e máximo das partições de equivalência?",
        opcoes: [
            "A) Porque os desenvolvedores têm maior probabilidade de cometer erros ou equívocos exatamente com esses valores de limite.",
            "B) Porque testar valores centrais costuma corromper a base de dados do sistema.",
            "C) Porque esses são os únicos valores aceitos em revisões formais de código.",
            "D) Porque ela visa descartar a necessidade de analisar partições de equivalência inválidas."
        ],
        correta: "A",
        explicacao: "A BVA foca nos limites porque a prática mostra que os desenvolvedores erram mais nas fronteiras das regras de decisão (ex: confundir '<=' com '<'), mal posicionando ou omitindo os limites."
    },
    {
        id: "q143",
        pergunta: "Qual o ponto forte principal e a justificativa para o uso de tabelas de decisão na modelagem de testes caixa-preta?",
        opcoes: [
            "A) Elas garantem que 100% das ramificações incondicionais do código sejam exercitadas.",
            "B) Permitem mapear de forma sistemática lógicas de negócios complexas, ajudando a identificar lacunas ou contradições nos requisitos.",
            "C) Reduzem o tempo de testes ao ignorar as pré-condições do sistema.",
            "D) Elas geram automaticamente stubs e drivers para testes de integração."
        ],
        correta: "B",
        explicacao: "O grande valor da tabela de decisão está em oferecer uma abordagem sistemática para registrar e testar combinações complexas de condições, revelando furos ou inconsistências na própria especificação de requisitos."
    },
    {
        id: "q144",
        pergunta: "No teste de transição de estado, qual critério de cobertura exige que os casos de teste executem todas as rotas lícitas e lógicas desenhadas no diagrama, sendo considerado o critério mais amplamente utilizado na prática?",
        opcoes: [
            "A) Cobertura de todos os estados.",
            "B) Cobertura de transições válidas (também chamada de cobertura de 0-switch).",
            "C) Cobertura de todas as transições (válidas e inválidas).",
            "D) Cobertura de código inalcançável."
        ],
        correta: "B",
        explicacao: "A cobertura de transições válidas (0-switch) exige que todas as transições permitidas sejam testadas ao menos uma vez. É o critério mais utilizado por ser mais rigoroso que a cobertura de estados e mais viável que a cobertura de todas as transições."
    },
    {
        id: "q145",
        pergunta: "No teste de ramificação (branch testing), o que constitui um item de cobertura e qual o objetivo principal dessa técnica caixa-branca?",
        opcoes: [
            "A) Os itens são os requisitos de negócio e o objetivo é esgotar as regras contratuais.",
            "B) Os itens são as instruções executáveis em linha reta e o objetivo é validar a velocidade do loop.",
            "C) Os itens são as ramificações (transferências de controle condicionais ou incondicionais) e o objetivo é cobrir a estrutura subjacente até um nível aceitável.",
            "D) Os itens são as anomalias do relatório e o objetivo é debugar a causa-raiz."
        ],
        correta: "C",
        explicacao: "No teste de ramificação, as ramificações (desvios lógicos condicionais ou trechos incondicionais no gráfico de fluxo) são os itens de cobertura. O objetivo é exercitá-los para cobrir a estrutura interna do código."
    },
        {
        id: "q146",
        pergunta: "Durante a implementação da técnica de suposição de erro, qual abordagem metódica exige que o testador crie ou adquira uma lista de falhas prováveis e modele testes focados em expor esses defeitos específicos?",
        opcoes: [
            "A) Ataques a falhas (Fault attacks).",
            "B) Teste baseado em sessões cronometradas.",
            "C) Cada Escolha (Each Choice Coverage).",
            "D) Análise de impacto regulatório."
        ],
        correta: "A",
        explicacao: "Os ataques a falhas constituem uma forma estruturada de aplicar a suposição de erro, onde listas de defeitos típicos servem de guia para modelar testes focados em quebrar o sistema."
    },
    {
        id: "q147",
        pergunta: "No teste exploratório baseado em sessões (session-based testing), qual artefato essencial é entregue ao testador contendo os objetivos da sessão para orientar a exploração sem engessar a execução?",
        opcoes: [
            "A) Script de teste automatizado linear.",
            "B) Carta de teste (Test charter).",
            "C) Tabela de decisão estendida.",
            "D) Registro de baselines de configuração."
        ],
        correta: "B",
        explicacao: "A carta de teste define os objetivos e o escopo da sessão exploratória, dando um guia e um propósito para o testador sem tirar a liberdade de exploração dinâmica."
    },
    {
        id: "q148",
        pergunta: "Conforme o modelo clássico dos '3Cs' proposto por Jeffries, quais são os três aspectos críticos que compõem de ponta a ponta uma história de usuário (user story)?",
        opcoes: [
            "A) Custo, Cronograma e Código.",
            "B) Componente, Cobertura e Conclusão.",
            "C) Cartão, Conversação e Confirmação.",
            "D) Critério, Caixa-preta e Causa-raiz."
        ],
        correta: "C",
        explicacao: "Os 3Cs correspondem ao Cartão (a descrição física), à Conversação (o alinhamento verbal e troca de ideias) e à Confirmação (os critérios de aceite que validam a entrega)."
    },
    {
        id: "q149",
        pergunta: "No processo de teste, qual atividade gerencial contínua se preocupa em monitorar a aderência das frentes técnicas em relação ao plano de testes e aplicar ações corretivas caso haja desvios?",
        opcoes: [
            "A) Planejamento de testes.",
            "B) Análise e modelagem de testware.",
            "C) Monitoramento e controle de teste.",
            "D) Implementação de massa de dados."
        ],
        correta: "C",
        explicacao: "O monitoramento checa o andamento real versus o planejado, enquanto o controle toma as decisões e ações necessárias para reenquadrar o projeto rumo aos objetivos."
    },
    {
        id: "q150",
        pergunta: "Qual técnica de estimativa de esforço de teste foca em coletar opiniões de especialistas da equipe através de rodadas iterativas e debates de cartas (Planning Poker) até que se atinja um consenso?",
        opcoes: [
            "A) Estimativa baseada em proporções históricas.",
            "B) Estimativa de três pontos (PERT).",
            "C) Estimativa baseada em equipes multifuncionais (Wideband Delphi).",
            "D) Análise de impacto estático estrutural."
        ],
        correta: "C",
        explicacao: "O Planning Poker é uma aplicação ágil baseada na técnica Delphi de banda larga (Wideband Delphi), onde especialistas debatem suas estimativas de forma iterativa até um consenso."
    },
        {
        id: "q151",
        pergunta: "No Gerenciamento de Risco, qual a diferença exata entre riscos do projeto e riscos do produto no contexto de teste de software?",
        opcoes: [
            "A) Riscos do projeto envolvem a possibilidade de falhas no software em produção. Riscos do produto envolvem problemas na entrega, como falta de pessoal ou prazos.",
            "B) Riscos do projeto afetam a qualidade intrínseca do objeto de teste. Riscos do produto são gerenciados exclusivamente pela diretoria corporativa.",
            "C) Riscos do projeto envolvem restrições e problemas operacionais que afetam a capacidade de entregar o projeto. Riscos do produto envolvem a possibilidade de o software não atender às expectativas ou conter defeitos.",
            "D) Não há diferença prática; ambos os termos referem-se à densidade de defeitos estimada para a sprint."
        ],
        correta: "C",
        explicacao: "Riscos do projeto estão ligados à gestão e execução (ex: falta de recursos, atrasos). Riscos do produto afetam diretamente a qualidade do que é entregue (ex: falhas de segurança, lentidão)."
    },
    {
        id: "q151",
        pergunta: "Durante o encerramento de um ciclo de engenharia de software (como o fim de uma iteração), qual atividade formal visa registrar o andamento consolidado, os desvios, os riscos residuais e as lições aprendidas?",
        opcoes: [
            "A) Monitoramento contínuo da esteira de CI.",
            "B) Emissão do Relatório de Conclusão do Teste.",
            "C) Análise quantitativa de valor de limite.",
            "D) Criação de stubs e drivers de configuração."
        ],
        correta: "B",
        explicacao: "O relatório de conclusão resume as atividades de teste, os resultados obtidos, o nível de qualidade e os riscos que permaneceram (residuais)."
    },
    {
        id: "q152",
        pergunta: "No contexto do ISTQB, qual a definição de 'Risco Residual' e qual o impacto dele para as decisões de negócio dos stakeholders?",
        opcoes: [
            "A) É o custo excedente que o projeto gastou além do orçamento estipulado no plano.",
            "B) É o risco que permanece após a aplicação de medidas de mitigação (como a execução de testes), servindo de insumo para a decisão de liberação do produto.",
            "C) É a quantidade de linhas de código morto que não puderam ser varridas por testes estáticos.",
            "D) Representa os defeitos que foram corrigidos, mas ainda necessitam de testes de confirmação."
        ],
        correta: "B",
        explicacao: "O risco residual indica o que não pôde ser mitigado ou testado plenamente. Mapeá-lo ajuda os stakeholders a decidir se o produto pode ir para produção."
    },
    {
        id: "q153",
        pergunta: "Uma ferramenta de teste que apoia o armazenamento de scripts, execução automatizada, geração de logs e checagem de resultados reais contra os esperados pertence a qual categoria?",
        opcoes: [
            "A) Ferramentas de gerenciamento e controle de testware.",
            "B) Ferramentas de execução de testes automatizados.",
            "C) Ferramentas de análise estática e verificação sintática.",
            "D) Ferramentas de colaboração e refinamento de histórias de usuário."
        ],
        correta: "B",
        explicacao: "Ferramentas de execução automatizada rodam os testes dinamicamente seguindo roteiros e registram os resultados de aprovação ou falha."
    },
    {
        id: "q154",
        pergunta: "Qual das seguintes opções constitui um benefício direto e real decorrente do uso adequado de Ferramentas de Gerenciamento de Configuração (CM) no ecossistema de testes?",
        opcoes: [
            "A) Garantir que nenhum bug lógico seja inserido no código pelo desenvolvedor.",
            "B) Manter o controle e a integridade de todas as versões de itens de teste e testware, permitindo recuperar configurações exatas de ambientes passados.",
            "C) Eliminar a necessidade de planejar ou estimar esforços em projetos ágeis.",
            "D) Automatizar em 100% a criação de dados sintéticos para o simulado."
        ],
        correta: "B",
        explicacao: "O gerenciamento de configuração assegura que todos os artefatos (código, testes, stubs) estejam versionados e sincronizados de forma íntegra."
    },
        {
        id: "q155",
        pergunta: "Se uma equipe de testes está repetindo exaustivamente o mesmo conjunto de testes automatizados de regressão em todas as builds de um incremento e nota que nenhum novo bug foi identificado há semanas, qual ação corretiva o syllabus sugere?",
        opcoes: [
            "A) Manter o conjunto exatamente como está, pois isso garante 100% de qualidade.",
            "B) Modificar os testes existentes, atualizar os dados de teste e criar novos cenários para superar o paradoxo do pesticida.",
            "C) Cancelar todas as atividades de automação de testes do projeto imediatamente.",
            "D) Delegar a execução dessa suíte exclusivamente para os usuários finais em ambiente beta."
        ],
        correta: "B",
        explicacao: "Conforme o Princípio 5 (Os testes se degradam), testes repetidos exaustivamente perdem a eficácia para pegar novos defeitos, necessitando de revisão periódica e novos focos de validação."
    },
    {
        id: "q156",
        pergunta: "Qual é a principal diferença prática nas atividades desempenhadas pelo papel de Gerenciamento de Testes em comparação com o papel de Testador em um projeto estruturado?",
        opcoes: [
            "A) O Gerenciamento de Teste codifica os testes automatizados, enquanto o Testador gerencia o orçamento e os custos.",
            "B) O Gerenciamento de Teste foca em planejar, monitorar, controlar e concluir as atividades, enquanto o Testador foca na análise, modelagem, implementação e execução técnica.",
            "C) O papel de Gerenciamento de Teste lida apenas com testes estáticos informais, enquanto o Testador opera apenas no ambiente produtivo.",
            "D) Não há diferença prática; ambos os papéis executam exatamente as mesmas tarefas diárias."
        ],
        correta: "B",
        explicacao: "O syllabus divide as atribuições em duas frentes complementares: o papel de gestão foca no direcionamento e monitoramento do ciclo, enquanto o papel de testador se concentra na engenharia técnica dos testes."
    },
    {
        id: "q157",
        pergunta: "No contexto de testes ágeis, o que preconiza o conceito de 'Abordagem de Equipe Completa' (Whole-Team Approach) em relação à responsabilidade pela qualidade do produto?",
        opcoes: [
            "A) A qualidade do produto é de responsabilidade única e exclusiva da equipe técnica de testes.",
            "B) Qualquer membro da equipe com o conhecimento necessário pode executar tarefas de qualidade, e todos compartilham a responsabilidade pelo produto.",
            "C) O Product Owner deve assumir todas as frentes de teste dinâmico para poupar tempo dos desenvolvedores.",
            "D) O processo dispensa a necessidade de aplicar qualquer rito de teste estático ou revisão de requisitos."
        ],
        correta: "B",
        explicacao: "Proveniente da Extreme Programming, a abordagem de equipe completa prega que a qualidade é uma meta de todos na squad, promovendo sinergia e aproveitando as diversas habilidades em prol do projeto."
    },
    {
        id: "q158",
        pergunta: "Qual é o principal benefício cognitivo de se contar com um certo grau de Independência dos Testes durante a validação de um artefato ou código de software?",
        opcoes: [
            "A) Garantir que os testadores concordem plenamente com todas as premissas e vieses do desenvolvedor.",
            "B) Permitir que os testadores identifiquem diferentes tipos de falhas e defeitos devido a formações, perspectivas e vieses cognitivos distintos dos autores.",
            "C) Acelerar o andamento da sprint ao eliminar a necessidade de comunicação verbal entre o time.",
            "D) Permitir a substituição de testes funcionais de caixa-preta por testes estruturais automatizados."
        ],
        correta: "B",
        explicacao: "O testador independente consegue verificar e contestar suposições ocultas que o próprio autor do código dificilmente perceberia devido ao viés de confirmação e à familiaridade com o próprio trabalho."
    },
    {
        id: "q159",
        pergunta: "Em um modelo de desenvolvimento sequencial (como o Modelo em V), em qual momento a atividade de análise e modelagem de um determinado nível de teste deve idealmente começar?",
        opcoes: [
            "A) Somente após o código-fonte estar 100% implementado e instalado no ambiente de homologação.",
            "B) Durante a fase de desenvolvimento correspondente no ciclo de vida de desenvolvimento de software (SDLC).",
            "C) Apenas na véspera do encerramento das frentes contratuais do projeto.",
            "D) Logo após a ocorrência da primeira falha crítica em ambiente de produção."
        ],
        correta: "B",
        explicacao: "Seguindo o princípio do teste antecipado e do shift-left, o design e o planejamento de um nível de teste (ex: teste de sistema) devem começar em paralelo com a criação da especificação correspondente."
    },
        {
        id: "q160",
        pergunta: "O que diferencia essencialmente o Teste de Componente do Teste de Integração de Componentes?",
        opcoes: [
            "A) O teste de componente é manual; o de integração é 100% automatizado por ferramentas de mercado.",
            "B) O teste de componente foca em módulos isolados; o de integração foca nas interfaces e interações entre eles.",
            "C) O teste de componente avalia a usabilidade geral; o de integração foca em segurança perimetral.",
            "D) Não há diferença prática, pois ambos são executados exclusivamente em ambiente produtivo."
        ],
        correta: "B",
        explicacao: "O teste de componente (unidade) foca em validar partes isoladas do sistema. O teste de integração de componentes avalia as interações e trocas de dados entre essas partes estruturadas."
    },
    {
        id: "q161",
        pergunta: "Qual nível de teste de aceitação é tipicamente realizado por usuários em potencial em um local externo da organização desenvolvedora para coletar feedback operacional antes do lançamento oficial do produto?",
        opcoes: [
            "A) Teste Alfa.",
            "B) Teste Beta.",
            "C) Teste de Integração de Sistemas.",
            "D) Teste de Caixa-Branca Estrutural."
        ],
        correta: "B",
        explicacao: "De acordo com o syllabus, o teste beta é uma forma de teste de aceite realizada externamente por usuários reais para coletar feedback antes do lançamento oficial do software."
    },
    {
        id: "q162",
        pergunta: "Qual é a principal característica que define o Teste Funcional segundo as boas práticas do ISTQB?",
        opcoes: [
            "A) Ele avalia o quão bem e quão rápido o sistema se comporta sob cargas severas.",
            "B) Baseia-se estritamente na análise da estrutura do código e na cobertura de instruções.",
            "C) Avalia as funções que o componente ou sistema deve executar ('o que' o objeto de teste deve fazer).",
            "D) É uma técnica puramente estática que dispensa a execução do código-fonte."
        ],
        correta: "C",
        explicacao: "O teste funcional foca no 'o que' o sistema faz. Ele avalia a integridade, a correção e a adequação funcional do software com base nas funções esperadas do objeto de teste."
    },
    {
        id: "q163",
        pergunta: "Qual das seguintes alternativas descreve de forma correta o objetivo principal do Teste Caixa-Branca (White-Box Testing)?",
        opcoes: [
            "A) Verificar o comportamento do sistema mapeando as telas puramente através de especificações externas.",
            "B) Avaliar a usabilidade da interface gráfica do usuário final de forma totalmente cega.",
            "C) Cobrir a estrutura interna e a implementação subjacente do sistema pelos testes até um nível aceitável.",
            "D) Analisar o mercado concorrente para otimizar os requisitos de negócio da aplicação."
        ],
        correta: "C",
        explicacao: "O teste caixa-branca baseia-se na estrutura interna e no processamento do objeto de teste (código, fluxo de dados, caminhos), visando garantir uma cobertura aceitável dessa estrutura."
    },
    {
        id: "q164",
        pergunta: "Qual é o papel principal de uma análise de impacto realizada no contexto de Testes de Manutenção?",
        opcoes: [
            "A) Garantir que nenhum desenvolvedor insira novas linhas de código morto no repositório.",
            "B) Mostrar quais partes do software podem ser afetadas por uma alteração, ajudando a otimizar a extensão dos testes de regressão.",
            "C) Fornecer o orçamento financeiro detalhado de gastos com ferramentas de automação na sprint.",
            "D) Medir o tempo total que o usuário final gasta navegando no menu principal do sistema."
        ],
        correta: "B",
        explicacao: "A análise de impacto é vital antes de aplicar alterações em sistemas ativos, pois ela mapeia as áreas potencialmente impactadas, permitindo direcionar e dimensionar a malha de testes de regressão de forma inteligente."
    },
        {
        id: "q165",
        pergunta: "Durante frentes de teste de manutenção, quais são os três principais fatores ou acionadores (triggers) que costumam determinar o escopo geral das validações?",
        opcoes: [
            "A) O modelo do console, o fuso horário da nuvem e o número de desenvolvedores seniores.",
            "B) O grau de risco da mudança, o tamanho do sistema existente e o tamanho da mudança realizada.",
            "C) A quantidade de termos no glossário técnico e a velocidade das buscas em tempo real.",
            "D) O orçamento financeiro da área e o número de licenças de ferramentas de teste estático."
        ],
        correta: "B",
        explicacao: "Segundo a seção 2.3 do syllabus, o escopo dos testes de manutenção é diretamente influenciado pela extensão e risco intrínseco da modificação, além da robustez do sistema atual."
    },
    {
        id: "q166",
        pergunta: "Qual é uma das principais limitações que diferencia o teste estático em relação às atividades executadas nos testes dinâmicos de um sistema?",
        opcoes: [
            "A) O teste estático exige a compilação do código em servidores de homologação isolados.",
            "B) O teste estático avalia produtos de trabalho sem a execução ativa do software, enquanto o teste dinâmico obrigatoriamente envolve execução.",
            "C) O teste estático foca apenas em medir o tempo médio de resposta e vazamentos de memória.",
            "D) O teste estático é ineficaz para mapear ambiguidades ou defeitos em requisitos."
        ],
        correta: "B",
        explicacao: "A linha divisória clara entre as duas abordagens está no processamento: testes estáticos leem e revisam artefatos textuais e estruturais, enquanto testes dinâmicos exigem que o código seja rodado."
    },
    {
        id: "q167",
        pergunta: "No processo estruturado de uma revisão formal (como a Inspeção), em qual atividade os revisores avaliam individualmente o artefato para listar anomalias, perguntas e recomendações?",
        opcoes: [
            "A) Atividade de Planejamento de Escopo.",
            "B) Atividade de Início da Revisão.",
            "C) Atividade de Revisão Individual.",
            "D) Atividade de Comunicação e Análise de Problemas."
        ],
        correta: "C",
        explicacao: "Na fase de revisão individual, cada membro do comitê analisa minuciosamente o documento e registra suas observações técnicas de forma independente antes de reuniões de debate."
    },
    {
        id: "q168",
        pergunta: "Qual das seguintes opções descreve de forma correta uma diferença marcante entre as técnicas de teste caixa-preta e as técnicas baseadas na experiência?",
        opcoes: [
            "A) Caixa-preta baseia-se na estrutura interna do código; baseadas na experiência dependem exclusivamente de ferramentas.",
            "B) Caixa-preta deriva testes com base no comportamento especificado do objeto de teste; baseadas na experiência utilizam o conhecimento e vivência do testador.",
            "C) Caixa-preta exige a compilação de stubs e drivers; baseadas na experiência mapeia apenas fluxos incondicionais.",
            "D) Não há diferença prática, pois ambas exigem o mapeamento exaustivo de gráficos de fluxo de controle."
        ],
        correta: "B",
        explicacao: "As técnicas caixa-preta traduzem as regras de especificações de forma sistemática. Já as baseadas na experiência aproveitam a intuição, o histórico de defeitos típicos e a vivência do profissional para caçar bugs."
    },
    {
        id: "q169",
        pergunta: "No Particionamento de Equivalência (EP), se um testador deseja obter 100% de cobertura de partições para um cenário simples, qual é a meta matemática a ser cumprida?",
        opcoes: [
            "A) Executar todas as combinações cruzadas possíveis entre todas as partições mapeadas.",
            "B) Garantir que os casos de teste executem cada partição identificada (válida e inválida) pelo menos uma vez.",
            "C) Rodar pelo menos um caso de teste para cada linha de instrução contida no loop.",
            "D) Validar apenas os valores limites ordenados localizados nas bordas das fatias."
        ],
        correta: "B",
        explicacao: "Para bater 100% de cobertura de EP, a malha de testes deve passar por todas as partições lícitas e ilícitas listadas, cobrindo cada partição ao menos uma vez."
    },
        {
        id: "q170",
        pergunta: "Qual é a principal diferença conceitual e prática entre a cobertura de 2 valores e a cobertura de 3 valores na Análise de Valor de Limite (BVA)?",
        opcoes: [
            "A) O BVA de 2 valores foca apenas em dados válidos, enquanto o de 3 valores inclui dados inválidos de infraestrutura.",
            "B) No BVA de 2 valores, testamos o limite e seu vizinho na partição adjacente. No de 3 valores, testamos o limite e seus dois vizinhos imediatos.",
            "C) O BVA de 3 valores exige o triplo de casos de teste para cada partição de equivalência não ordenada.",
            "D) A cobertura de 2 valores avalia apenas strings, enquanto a de 3 valores avalia apenas variáveis numéricas reais."
        ],
        correta: "B",
        explicacao: "O BVA de 3 valores é mais rigoroso por incluir o valor do limite, o vizinho logo abaixo e o vizinho logo acima, permitindo detectar defeitos em operadores relacionais que passariam pelo BVA de 2 valores."
    },
    {
        id: "q171",
        pergunta: "Em uma tabela de decisão, o que representa uma linha e o que representa uma coluna na estrutura padrão de modelagem caixa-preta?",
        opcoes: [
            "A) As linhas representam os dados de entrada de strings e as colunas representam os scripts automatizados.",
            "B) As linhas representam as condições e ações do sistema. Cada coluna corresponde a uma regra de decisão única.",
            "C) As linhas mapeiam os ciclos do loop de repetição e as colunas medem o tempo de resposta em segundos.",
            "D) As linhas detalham os riscos do projeto e as colunas listam os papéis técnicos da equipe."
        ],
        correta: "B",
        explicacao: "Na estrutura da tabela de decisão, as condições e as ações resultantes formam as linhas. Cada coluna cruza essas frentes para amarrar uma regra de negócio específica do sistema."
    },
    {
        id: "q172",
        pergunta: "No teste de transição de estado, as células vazias localizadas dentro de uma tabela de estados (state table) servem para indicar explicitamente qual cenário ao testador?",
        opcoes: [
            "A) Furos de cobertura estrutural de instrução no código-fonte.",
            "B) Estados finais onde o sistema encerra sua operação e faz o logoff.",
            "C) Transições inválidas, ou seja, eventos que não devem ocorrer ou ser permitidos naquele estado.",
            "D) Massa de dados nula gerada por ferramentas de simulação."
        ],
        correta: "C",
        explicacao: "Diferente do diagrama visual, a tabela de estados mapeia de forma explícita o que é proibido: as células vazias representam transições inválidas, ótimas para projetar testes de robustez."
    },
    {
        id: "q173",
        pergunta: "No teste de instrução (statement testing), se um conjunto de testes atinge 100% de cobertura, por que isso ainda não garante a ausência total de defeitos lógicos?",
        opcoes: [
            "A) Porque a cobertura de instruções não avalia as decisões do código, ignorando ramificações falsas ou caminhos alternativos.",
            "B) Porque as linhas executáveis de código morto são descartadas por essa técnica caixa-branca.",
            "C) Porque essa métrica lida apenas com a validação estática de histórias de usuário.",
            "D) Porque a técnica é restrita a validar a performance de APIs de terceiros."
        ],
        correta: "A",
        explicacao: "A cobertura de instruções garante que toda linha foi lida pelo menos uma vez, mas é uma métrica fraca que não testa os desvios condicionais das estruturas de decisão (como um bloco 'if' que nunca entra no 'else')."
    },
    {
        id: "q174",
        pergunta: "Qual das seguintes opções descreve uma desvantagem ou ponto fraco intrínseco compartilhado pelas técnicas de teste caixa-branca estruturais?",
        opcoes: [
            "A) Elas ignoram por completo a forma como o software foi implementado ou codificado pelo desenvolvedor.",
            "B) Se o software deixar de implementar um ou mais requisitos obrigatórios (omissão), o teste caixa-branca pode não detectar os defeitos resultantes.",
            "C) Exigem que o sistema seja testado exclusivamente por usuários finais em produção.",
            "D) São técnicas informais que dependem unicamente da intuição pessoal do analista de qualidade."
        ],
        correta: "B",
        explicacao: "Como o teste caixa-branca baseia-se no código que foi fisicamente escrito, ele analisa a estrutura existente. Se o desenvolvedor esqueceu de programar uma regra inteira, a técnica não tem como adivinhar o que falta."
    },
        {
        id: "q175",
        pergunta: "No contexto da técnica de suposição de erro (error guessing), qual das seguintes alternativas descreve de forma correta uma fonte de informação legítima para prever a ocorrência de defeitos?",
        opcoes: [
            "A) O fuso horário de execução das rotinas de compilação da infraestrutura em nuvem.",
            "B) Os tipos de erros que os desenvolvedores tendem a cometer e falhas históricas em aplicativos semelhantes.",
            "C) A quantidade de termos indexados na barra de busca do glossário dinâmico.",
            "D) O orçamento financeiro reservado para a aquisição de licenças de software de terceiros."
        ],
        correta: "B",
        explicacao: "A adivinhação de erros baseia-se na experiência acumulada pelo testador sobre como o aplicativo funcionou no passado, erros típicos de codificação de equipes e no histórico de falhas mapeadas."
    },
    {
        id: "q176",
        pergunta: "Ao planejar e estruturar uma abordagem de testes exploratórios baseados em sessões (session-based testing), o que o testador deve registrar em suas fichas de sessão para garantir a rastreabilidade?",
        opcoes: [
            "A) O número de linhas de código inalcançáveis varridas por ferramentas automáticas.",
            "B) As etapas seguidas, os caminhos explorados e as descobertas feitas durante o período de tempo definido.",
            "C) O percentual exato de cobertura de ramificações incondicionais obtido na esteira.",
            "D) A estimativa PERT ponderada de esforço calculada para a próxima grande iteração."
        ],
        correta: "B",
        explicacao: "Como o teste exploratório não segue um roteiro estrito pré-escrito, o preenchimento das fichas documenta a jornada percorrida pelo profissional e as evidências das anomalias encontradas."
    },
    {
        id: "q177",
        pergunta: "De acordo com o modelo INVEST proposto por Wake, qual pilar indica que uma história de usuário (user story) foi bem escrita e está pronta para entrar na sprint de desenvolvimento?",
        opcoes: [
            "A) Ela deve ser complexa e exigir o uso de ferramentas de automação de sistema.",
            "B) Deve ser Independente, Negociável, Valiosa, Estimável, Pequena (Small) e Testável.",
            "C) Precisa conter o mapeamento exaustivo de todas as transições inválidas da tabela.",
            "D) Deve focar única e exclusivamente nas características estruturais de caixa-branca."
        ],
        correta: "B",
        explicacao: "O acrônimo INVEST reúne as boas práticas de escrita de histórias. Se um time não sabe como testar uma história de usuário (pilar Testável), significa que ela ainda não está clara o suficiente."
    },
    {
        id: "q178",
        pergunta: "No processo de planejamento de iteração ágil, de que forma as estimativas de esforço de teste costumam ser refinadas e defendidas pelo time?",
        opcoes: [
            "A) Através da análise fria do histórico de velocidade de digitação dos testadores seniores.",
            "B) Utilizando técnicas iterativas baseadas em consenso como o Planning Poker para debater complexidades.",
            "C) Solicitando que o cliente final assine um termo de congelamento de escopo técnico.",
            "D) Baseando-se puramente na quantidade de stubs e drivers instalados no ambiente de homologação."
        ],
        correta: "B",
        explicacao: "O Planning Poker é uma aplicação ágil baseada em consenso (Wideband Delphi) onde a equipe debate discrepâncias de estimativas para chegar a um número realista de esforço para o card."
    },
    {
        id: "q179",
        pergunta: "No monitoramento de atividades de teste, qual produto de trabalho fornece aos stakeholders uma visão consolidada e resumida do status de qualidade, métricas alcançadas e riscos residuais ao atingir um marco?",
        opcoes: [
            "A) Matriz de fluxos condicionais da tabela de decisão.",
            "B) Carta de teste de sessão exploratória baseada em tempo.",
            "C) Relatório de Conclusão do Teste (Test Completion Report).",
            "D) Lista de verificação estática de conformidade sintática."
        ],
        correta: "C",
        explicacao: "O relatório de conclusão de teste sintetiza o ciclo, avalia se os critérios de saída foram cumpridos e expõe o nível de risco residual para apoiar a decisão corporativa de liberação (go/no-go)."
    }

];