function portamisteriosa() {
    alert('Você abriu a porta e entrou na sala.')
    alert('Ao entrar, havia um baú misterioso e nele haviam 3 itens: uma Catana longa e muito afiada, uma Armadura prateada e reluzente, e um morango estranho cheio de pelos.')
    
    let escolhaItem = prompt('Qual item você gostaria de pegar primeiro: \n1 - Catana longa e muito afiada \n2 - Armadura prateada e reluzente \n3 - Morango estranho cheio de pelos.')
    
    while (escolhaItem < 1 || escolhaItem > 3) {
        escolhaItem = prompt('Escolha uma das opções: \n1 - Catana longa e muito afiada \n2 - Armadura prateada e reluzente \n3 - Morango estranho cheio de pelos.')
    }
    
    alert('Ao escolher o item, todo o baú se fecha e você não consegue mais abrir ele.')
    
    return parseInt(escolhaItem); // Convertendo para inteiro
}

function corredorEscuro(atq, defesa, vida) {
    alert('Você decidiu seguir o corredor absolutamente escuro. Seguindo o corredor, você vê uma figura misteriosa, um Goblin. Ele te vê e começa a gritar: "VOU TE PEGAR, VEM AQUI".')
    alert('Um combate começa em que o mais forte vence.');

    // Valores iniciais para Goblin.
    let atqGoblin = 15;
    let defGoblin = 15;
    let vidaGoblin = 10;

    while (vida > 0 && vidaGoblin > 0) {
        // Calcula o dano causado por você
        let dano = Math.max(0, atq - defGoblin);
        vidaGoblin -= dano;
        
        if (dano > 0) {
            alert(nome + ' deu ' + dano + ' de dano no Goblin.');
        } else {
            alert(nome + ' não conseguiu dar dano no Goblin.');
        }

        if (vidaGoblin <= 0) {
            alert(nome + ' derrotou o Goblin.');
            return { vida, atq, defesa }; // Retorna os valores atualizados
        }

        // Calcula o dano causado pelo Goblin.
        dano = Math.max(0, atqGoblin - defesa);
        vida -= dano;

        if (dano > 0) {
            alert('O Goblin deu ' + dano + ' de dano em ' + nome + '.');
        } else {
            alert('O Goblin não conseguiu dar dano em ' + nome + '.');
        }

        if (vida <= 0) {
            alert(nome + ' foi derrotado pelo Goblin.');
            return { vida, atq, defesa }; // Retorna os valores atualizados
        }
    }
}

let nome = '';
let atq = 15;
let defesa = 10;
let vida = 30;

nome = prompt('Olá jovem aventureiro, me diga como se chama.')

alert(nome + ' Seja bem-vindo à Caverna Do Dragão...')
alert('Você caiu em um buraco. Ao se levantar, deparou-se com a seguinte escolha: ao seu lado direito, você nota uma porta grande de madeira avermelhada e com aspecto de velha caindo aos pedaços. Do lado esquerdo, você nota um corredor longo e escuro, sem conseguir ver o final.')

function seguirDecisao(escolha) {
    if (escolha == '1') {
        let item = portamisteriosa();

        if (item == 1) {
            atq += 5;
            alert('Ao segurar a Catana, você sente uma vontade assassina.');
        } else if (item == 2) {
            defesa += 10;
            alert('Ao vestir a Armadura, você sente uma aura em volta do seu corpo.');
        } else if (item == 3) {
            vida += 30;
            alert('Ao consumir o Morango, você sente como se tivesse ganhado anos de vida a mais.');
        }

        alert('Você sente sua força aumentando: Ataque: ' + atq + ', Defesa: ' + defesa + ', Vida: ' + vida);
        alert('Como não há mais salas para seguir, você volta ao corredor escuro.');
    }
    // Continuar no corredor escuro após interagir com o baú
    ({ vida, atq, defesa } = corredorEscuro(atq, defesa, vida));
}

// Primeira decisão do jogador
let escolha = prompt('Qual vai ser sua decisão: \n1 - Você escolhe seguir à direita (Porta Vermelha) \n2 - Você escolhe seguir à esquerda (Corredor Escuro)')

if (escolha == '1' || escolha == '2') {
    seguirDecisao(escolha);
} else {
    alert('Escolha inválida. O jogo terminará agora.');
}
