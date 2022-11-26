const d = document;
const displayText = d.querySelector('.display__text');
let operando1 = 0
let operando2 = 0;


const borrarDisplay = () => displayText.textContent = '';
const sumarCantidades = () => {
    if(!operando1){
        operando1 = parseFloat(displayText.textContent);
        borrarDisplay();
        console.log(operando1);
    }else{
        operando2 += parseFloat(displayText.textContent);

    }
};

const OPERACIONES = {
    'DEL': borrarDisplay,
    '+': sumarCantidades
}

const leerBoton = () => {
    d.addEventListener('click', e => {
        if(!isNaN(e.target.textContent)){
            const numero = parseFloat(e.target.textContent);
            displayText.textContent += numero.toString();
        }else{
            const operacion = e.target.textContent;
            console.log(operacion);
            OPERACIONES[operacion]();
        }
    });
}



d.addEventListener('DOMContentLoaded', e => {
    leerBoton();
});