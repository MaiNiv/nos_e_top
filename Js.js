// Selecionando os elementos
const voltageSlider = document.getElementById("voltage");
const resistanceSlider = document.getElementById("resistance");
const voltageValue = document.getElementById("voltageValue");
const resistanceValue = document.getElementById("resistanceValue");
const currentValue = document.getElementById("currentValue");

// Função para calcular a corrente
function calculateCurrent() {
    const voltage = parseFloat(voltageSlider.value);
    const resistance = parseFloat(resistanceSlider.value);
    const current = (voltage / resistance).toFixed(2); // Calcula I = V / R

    // Atualiza os valores na interface
    voltageValue.textContent = voltage;
    resistanceValue.textContent = resistance;
    currentValue.textContent = current;
}

// Adicionando eventos
voltageSlider.addEventListener("input", calculateCurrent);
resistanceSlider.addEventListener("input", calculateCurrent);

// Inicializando com valores padrão
calculateCurrent();