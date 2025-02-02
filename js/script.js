function verificarRecall() {
    let chassiInicial = document.getElementById('chassiInicial').value.toUpperCase();
    let chassiFinal = document.getElementById('chassiFinal').value.toUpperCase();
    let chassiVeiculo = document.getElementById('chassiVeiculo').value.toUpperCase();
    
    if (!chassiInicial || !chassiFinal || !chassiVeiculo) {
        document.getElementById('resultado').innerText = "Preencha todos os campos!";
        return;
    }
    
    // Pegando os últimos 8 caracteres do chassi do veículo
    let ultimos8ChassiVeiculo = chassiVeiculo.slice(-8);
    
    if (ultimos8ChassiVeiculo >= chassiInicial && ultimos8ChassiVeiculo <= chassiFinal) {
        document.getElementById('resultado').innerText = "Seu veículo está dentro da campanha de recall!";
        document.getElementById('resultado').style.color = "red";
    } else {
        document.getElementById('resultado').innerText = "Seu veículo NÃO está na campanha de recall.";
        document.getElementById('resultado').style.color = "green";
    }
}