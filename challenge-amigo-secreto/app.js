//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
document.addEventListener("DOMContentLoaded", () => {
    const nomes = [];
    
    const inputNome = document.getElementById("amigo");
    const listaAmigos = document.getElementById("listaAmigos");
    const resultado = document.getElementById("resultado");

    function adicionarAmigo() {
        const nome = inputNome.value.trim();

        if (nome === "") {
            alert("Por favor, insira um nome válido.");
            return;
        }

        nomes.push(nome);
        atualizarLista();
        inputNome.value = "";
        inputNome.focus();
    }

    function atualizarLista() {
        listaAmigos.innerHTML = "";

        nomes.forEach((nome) => {
            const item = document.createElement("li");
            item.textContent = nome;
            item.classList.add("name-item");
            listaAmigos.appendChild(item);
        });
    }

    function sortearAmigo() {
        if (nomes.length === 0) {
            alert("A lista está vazia. Adicione pelo menos um nome antes de sortear.");
            return;
        }

        const sorteado = nomes[Math.floor(Math.random() * nomes.length)];
        resultado.innerHTML = `<li class="result-item">Amigo Secreto: <strong>${sorteado}</strong></li>`;
    }

    // Eventos dos botões
    document.querySelector(".button-add").addEventListener("click", adicionarAmigo);
    document.querySelector(".button-draw").addEventListener("click", sortearAmigo);
});