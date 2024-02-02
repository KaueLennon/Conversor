//Selecionar os elementos
const InputElement = document.querySelector("#input"); 
const fromElement = document.querySelector("#from"); 
const toElement = document.querySelector("#to"); 
const outputElement = document.querySelector("#output"); 
const convertButton = document.querySelector("#convert-btn"); 
const messageElement = document.querySelector("#message"); 

//Função para converter as unidades
function convert() {
    const fromValue = fromElement.value;
    const toValue = toElement.value;

    if(fromValue === toValue){
        outputElement.value = InputElement.value;
        messageElement.textContent = "";
        return;
    }

    //Metodo para converter todas as unidades de entradas para metros (para facilitar a conversão final)
    let meters
    switch(fromValue){
        case "m":
            meters = InputElement.value;
            break;
        case "km":
            meters = InputElement.value * 1000;
            break;               
        case "cm":
            meters = InputElement.value / 100;
            break;              
        case "mm":
            meters = InputElement.value / 1000;
            break;              
    }

    //Converter os metros (convertidos anteriormente) para a unidade de saida
    let result
    switch(toValue){
        case "m":
            result = meters;
            break;
        case "km":
            result = meters / 1000;
            break;               
        case "cm":
            result = meters * 100;
            break;              
        case "mm":
            result = meters * 1000;
            break;              
    }

    //Exibir resultado no output
    output.value = result.toFixed(1);

    //Exibir resultado no console log
    const fromLabel = fromElement.options[fromElement.selectedIndex].text;
  const toLabel = toElement.options[toElement.selectedIndex].text;
  const message = `${
    inputElement.value
  } ${fromLabel} equivalem a ${result.toFixed(1)} ${toLabel}`;
  messageElement.textContent = message;
}

convertButton.addEventListener("click", convert);