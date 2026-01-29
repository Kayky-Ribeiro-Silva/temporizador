document.addEventListener('DOMContentLoaded', () => {
    const temporizador = document.getElementById('temporizador');
    const botao = document.getElementById('btn-comecar');

    temporizador.addEventListener('submit', (event) => {
        event.preventDefault();

        let tempo = Number(document.getElementById('tempo').value);
        let timer;

        botao.disabled = true; 

        function diminuirTempo() {
            timer = setInterval(() => {
                if (tempo <= 0) {
                    pararTempo();
                } else {
                    mostrarNumero(tempo, "green");
                    tempo--;
                }
            }, 1000);
        }

        function pararTempo() {
            clearInterval(timer);
            mostrarNumero("Acabou o tempo", "red");
            botao.disabled = false; 
        }

        function mostrarNumero(valor, cor) {
            const numero = document.getElementById("numero");
            numero.textContent = valor;
            numero.style.color = cor === "red" ? "red" : "#10b981";
        }

        diminuirTempo();
    });
});