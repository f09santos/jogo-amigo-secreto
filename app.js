let arrayAmigos = [];
let listaDeAmigos = document.querySelector('#listaAmigos');
let resultado = document.querySelector("#resultado");


// Adicionar o nome digitado dentro do array amigos
 function adicionarAmigo() {
    let nomeAmigo = document.querySelector('#amigo');
    if(nomeAmigo.value === '') {
         alert('Favor inserir um nome para o sorteio')
         return
     }
     arrayAmigos.push(nomeAmigo.value);
     nomeAmigo.value = '';
     atualizarLista()
    }
// Atualizar a lista de Amigos para o sorteio
    function atualizarLista() {
       listaDeAmigos.innerHTML= '';
       for(i = 0; i < arrayAmigos.length; i++) {
        let nome = document.createElement('li');
       nome.textContent = arrayAmigos[i];
        listaDeAmigos.appendChild(nome);
       }
    }
// Função para sortear um amigo
    function sortearAmigo() {
        if(arrayAmigos.length < 2) {
            alert('Atenção! Favor adicionar pelo menos 2 amigos para o sorteio')
            return;
        }

        let numeroGerado = parseInt(Math.random() * arrayAmigos.length);
        resultado.innerHTML = `Atenção! O Amigo(a) sorteado foi: ${arrayAmigos[numeroGerado]}`;

    }
    








