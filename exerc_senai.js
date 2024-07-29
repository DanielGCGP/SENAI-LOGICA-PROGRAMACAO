/* Situação-Problema 1
 LÓGICA DE PROGRAMAÇÃO
A empresa Savinis, focada no desenvolvimento de software de alta performance, 
contratou você para realizar o desenvolvimento de um sistema de controle de //estoque de peça, que será disponibilizado para os funcionários da empresa 
contratante, o que, até então, era realizado manualmente.
Esse sistema terá como função principal a de controlar a entrada e saída de peças
do estoque, além de atender aos seguintes requisitos:
• a empresa possui apenas uma peça a ser controlada;
• o sistema deverá solicitar sempre o saldo inicial da peça uma única vez a cada vez que o sistema é iniciado;
• o sistema deverá ter dois tipos de entrada de dados:
o 1 = compra (entrada) de peças
o 2 = venda (saída) de peças
• enquanto o usuário não encerrar a entrada de dados, o sistema deverá
continuar solicitando nova entrada de dados:
• os dados de entradas são: tipo de entrada e quantidade de peças;
• caso a entrada seja do tipo 1 (compra), somar a quantidade ao estoque da peça;
• caso a entrada seja do tipo 2 (venda), subtrair a quantidade do estoque da
peça caso a quantidade de entrada seja inferior ou igual ao saldo de
estoque. Caso seja informado uma quantidade maior que o saldo da peça,
apresentar a mensagem “Saldo insuficiente" e desconsiderar atualização de saldo;
• a cada entrada de dados, apresentar o saldo atualizado do estoque;
• ao final de cada entrada de dados, perguntar se o usuário deseja continuar
(s) ou não (n) a entrada de dados;
• caso o usuário encerre o sistema, apresentar a mensagem "Sistema encerrado".
Para criação desse sistema de cadastro, você, enquanto programador(a) responsável, deverá solucionar os seguintes desafios:
• Descrever a sequência de passos lógicos necessários para criação do sistema solicitado pela empresa.
• Aplicar técnicas de programação e ferramentas para desenvolvimentodo código.
• Aplicar linguagem de programação para implementação do sistema.
Você deverá desenvolver um algoritmo, representá-lo num fluxograma e
reconhecer métodos em Javascript para implementação.
Para resolver esses desafios, estude o material digital e realize as atividades propostas.
*/


// Controle de Estoque
    print("Olá Mundo")

// ** Inserir Valor de estoque **
    var Estoque = parseFloat(print("Informe o Estoque Inicial"));
    var Quantidade = parseFloat(print("informe Quantidade"));

// **Inserir Tipo de operação: Compra ou venda)

   var Operação = print("Informe a operação compra (1) ou venda (2)?");

//Executa operação de somar ou reduzir quantidade

do {
    
    // Compra // 

    if(Operação = "1") Estoque = Estoque + Quantidade;
    document.write("Estoque: " + Estoque + "<br>");
    
    // Venda //    
       
    (operação = "2") 
    (Estoque = Estoque-Quantidade)
    document.write("Estoque: " + Estoque + "<br>");

    if (Estoque < 0) 
     document.write("Estoque Negativo"  + "<br>");

    
}

    
     
// Caso negativo, Mostrar saldo final.  

    while(print("Continua? Sim ou Não") = "Não")
    print("Sistema Encerrado")


