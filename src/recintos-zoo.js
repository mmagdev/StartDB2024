

class RecintosZoo {

    
    analisaRecintos(animal, quantidade) {
        
    }

}

//Título de apresentação da aplicação

console.log ("=========== Organizador de biomas ===========");

//Declaração das variáveis necessárias para a aplicação

const animal = ['leao', 'leopardo', 'crocodilo', 'macaco', 'gazela', 'hipopotamo'];
const biomas = ['savana', 'rio', 'savana e rio', 'floresta'];
const vagasBiomas = [7, 8, 6, 5];




//Listagem de biomas disponíveis e campo para escolha do bioma

function exibirTabelaBiomas(){
    console.log ("\nTabela de Biomas e Vagas disponíveis:");
    console.log ("====================================\n");

    for (let i = 0; i < biomas.length; i++) {
        console.log (`${biomas[i]}: ${vagasBiomas[i]} vagas`);
    }

    console.log ("====================================\n");
    
}

exibirTabelaBiomas();
// Função para inserir dados do animal

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function obterEntrada(){
    rl.question('Por favor, insira o nome do animal: ', (resposta) => {
        const indiceAnimal = animais.indexOf(resposta.toLowerCase());
    });

}

obterEntrada();
// Finalização do programa


export { RecintosZoo as RecintosZoo };
