// Selecionando os elementos
const voltageInput = document.getElementById("voltage");
const resistanceInput = document.getElementById("resistance");
const currentValue = document.getElementById("currentValue");

// Função para calcular a corrente
function calculateCurrent() {
    const voltage = parseFloat(voltageInput.value); // Valor da tensão
    const resistance = parseFloat(resistanceInput.value); // Valor da resistência

    // Verifica se os valores são válidos
    if (voltage > 0 && resistance > 0) {
        const current = (voltage / resistance).toFixed(2); // Calcula I = V / R
        currentValue.textContent = current; // Atualiza o valor da corrente
    } else {
        currentValue.textContent = "—"; // Mostra um traço se os valores forem inválidos
    }
}

// Adicionando eventos para calcular sempre que o valor mudar
voltageInput.addEventListener("input", calculateCurrent);
resistanceInput.addEventListener("input", calculateCurrent);

// Inicializando com valores padrão
calculateCurrent();
