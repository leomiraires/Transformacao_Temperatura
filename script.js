var t1 = document.querySelector('body div#buttons select#escalas_in');
var t2 = document.querySelector('body div#buttons select#escalas_out');
var v1 = document.querySelector('body div#buttons input#valor_in');

function calculo(v1, t1, t2) {
    var temp1 = t1.value;
    var temp2 = t2.value;
    var valor = Number(v1.value);
    
    if (temp1 == 'Celsius_in' && temp2 == 'Fahrenheit_out') {
        var resultado = (((9/5)*valor)+32);
        var temp = ' °F';

    }else if (temp1 == 'Fahrenheit_in' && temp2 == 'Celsius_out') {
        var resultado = ((5/9)*(valor-32));
        var temp = ' °C';

    } else if (temp1 == 'Celsius_in' && temp2 == 'Kelvin_out') {
        var resultado = valor + 273.15;
        var temp = ' K';
    }else if (temp1 == 'Kelvin_in' && temp2 == 'Celsius_out') {
        var resultado = valor - 273.15;
        var temp = ' °C';

    }else if (temp1 == 'Fahrenheit_in' && temp2 == 'Kelvin_out'){
        var c = ((5/9)*(valor-32));
        var resultado = c + 273.15;
        var temp = ' K';

    }else if (temp1 == 'Kelvin_in' && temp2 == 'Fahrenheit_out'){
        var c = valor - 273.15;
        var resultado = (((9/5)*c)+32);
        var temp = ' °F';   
    }else{
        alert('Ops... não há necessidade de calcular. Escalas iguais.');
    }
    var resultado = parseFloat(resultado.toFixed(2));
    return resultado + temp;
    
}


 