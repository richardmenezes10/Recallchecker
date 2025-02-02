<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verificação de Recall</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin: 50px;
        }
        input {
            margin: 5px;
            padding: 10px;
            width: 250px;
        }
        button {
            padding: 10px 20px;
            cursor: pointer;
        }
        #resultado {
            margin-top: 20px;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <h2>Verificação de Recall</h2>
    <p>Insira o intervalo de chassis afetados e o chassi do seu veículo:</p>
    
    <input type="text" id="chassiInicial" placeholder="Chassi Inicial">
    <input type="text" id="chassiFinal" placeholder="Chassi Final">
    <br>
    <input type="text" id="chassiVeiculo" placeholder="Seu Chassi">
    <br>
    <button onclick="verificarRecall()">Verificar</button>
    
    <p id="resultado"></p>
    
    <script>
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
    </script>
</body>
</html>