// Função calcular
function calcularIMC(peso, altura) {
    // Verificar se a altura está em centímetros e converter para metros, se necessário
    if (altura > 3) { // Assumindo que a altura maior que 3 está em centímetros
        altura = altura / 100;
    }
    
    
    let imc = peso / (altura * altura);
    imc = imc.toFixed(2); 
    
    
    let classificacao;
    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        classificacao = "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        classificacao = "Sobrepeso";
    } else {
        classificacao = "Obesidade";
    }
    
    // Retornar o resultado 
    return `IMC: ${imc} - Classificação: ${classificacao}`;
}

function mostreIMC() {
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;

    // Verificação para garantir que os campos não estão vazios
    if (peso === "" || altura === "") {
        document.getElementById('resultado').textContent = "Por favor, preencha ambos os campos de peso e altura.";
        return;
    }

    // Convertendo para números
    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura);

    // Verificação para garantir que os valores inseridos são números válidos
    if (isNaN(pesoNum) || isNaN(alturaNum)) {
        document.getElementById('resultado').textContent = "Por favor, insira valores numéricos válidos.";
        return;
    }

    const resultado = calcularIMC(pesoNum, alturaNum);
    document.getElementById('resultado').textContent = resultado;
}

// Testes com diferentes valores
console.log(calcularIMC(60, 1.75));
console.log(calcularIMC(50, 1.60));
console.log(calcularIMC(80, 1.70));
console.log(calcularIMC(100, 1.80));
