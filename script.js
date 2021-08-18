function CalcularPorcentaje(percent){
    let bill = document.getElementById('num').value;
    let numeroPersonas = document.getElementById('personas').value;

    // Total pago por persona
    let totalPersona = bill / numeroPersonas;

    //Total propina entre el número de personas
    let totalTip = (bill * percent) / numeroPersonas;

    document.getElementById('resultAmountPerson').value = totalPersona;

    document.getElementById('resultPerson').value = totalTip;
 
}

//Función reset
function reset(){
    document.getElementById('num').value = '';
    document.getElementById('personas').value = '1';
    document.getElementById('resultAmountPerson').value = '';
    document.getElementById('resultPerson').value = '';
}


//Personalizar valor de propina

function Custom(){
    
    let nuevoValor = prompt('ingresa un porcentaje');
    if(nuevoValor <= 0){
        let bill = document.getElementById('num').value;
        let numeroPersonas = document.getElementById('personas').value;
        let totalPersona = bill / numeroPersonas;
        document.getElementById('resultAmountPerson').value = totalPersona;
        document.getElementById('resultPerson').value = 0;

    }else {
        let bill = document.getElementById('num').value;
        let numeroPersonas = document.getElementById('personas').value;
        let totalPersona = bill / numeroPersonas;
        let totalTip = (bill * (nuevoValor/100)) / numeroPersonas;
        document.getElementById('resultAmountPerson').value = totalPersona;
        document.getElementById('resultPerson').value = totalTip;
    }

}