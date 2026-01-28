const temporizador = document.getElementById('temporizador').value;

temporizador.addEventListener('submit',() =>{

    const tempo = document.getElementById('tempo').value;
    const numero = document.getElementById('numero').value;
    
    function diminuirTempo() {
        timer = setInterval(() => {
            console.log(tempo);
            tempo--;

            if (tempo < 0) {
                color = "green"
                pararTempo();
            }
        }, 1000)
    }

    function pararTempo() {
        setTimeout(() =>{
        clearInterval(timer)
        color = "red"
        console.log("Tempo acabou")
        mostrarNumeor("Tempo acabou")
    }, 0)
    
}

    function mostrarNumeor(recebido,color){
        document.getElementById('numero').textContent = recebido;
        document.style.color = color === "red" ? "var(--error)" : "#10b981"
    }

    diminuirTempo(numero)
})
