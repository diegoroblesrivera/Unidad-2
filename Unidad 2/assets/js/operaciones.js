function realizarOperacion(operacion) {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var resultado;

    switch (operacion) {
        case 'sumar':
            resultado = sum(num1, num2);
            document.getElementById("resultado").innerText = "La suma es: " + resultado;
            break;
        case 'restar':
            resultado = res(num1, num2);
            document.getElementById("resultado").innerText = "La resta es: " + resultado;
            break;
        case 'multiplicar':
            resultado = mult(num1, num2);
            document.getElementById("resultado").innerText = "La multiplicación es: " + resultado;
            break;
        case 'dividir':
            resultado = div(num1, num2);
            document.getElementById("resultado").innerText = "La división es: " + resultado;
            break;
    }
}

function sum(a, b) {
    return a + b;
}

function res(a, b) {
    return a - b;
}

function mult(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

function sumatoria(num1,num2){
    resul=num1+num2;
    document.getElementById("lol").innerHTML=resul
    return resul;
}
// console.log(sumatoria(9,9));



function multi() {
    var n = parseFloat(document.getElementById("mul").value);
    for (let i = 1; i <=10; i++) {
    
    console.log(n+"x"+i+"="+i*n);
    }
}

function varSumativa(){
    var textej="";
    
        for (let i = 1; i <=9; i++) {
            textej+="<img src='images/pic0"+i+".jpg '>";
            
        }
        
    
    document.getElementById("sumativa").innerHTML=textej;
    return textej;
}

console.log(varSumativa());