/*function areaCircunferencia (radio) {
    const pi = 3.1415169;
    const resultado =pi * radio * radio;
    return resultado;
}
const result = areaCircunferencia(324)
const result1 = areaCircunferencia(143)
const result2 = areaCircunferencia(567)
const result3 = areaCircunferencia(785)
console.log(result)
console.log(result1)
console.log(result2)
console.log(result3)

function mayorDeDosNumeros(ingresoUno, ingresoDos){
    if(ingresoUno > ingresoDos){
        return ingresoUno + " Es mayor que " + ingresoDos;
    } else {
        return ingresoDos + " Es mayor que " + ingresoUno;
    }
}
const resultado = mayorDeDosNumeros(40, 391)
console.log(resultado + "")
mayorDeDosNumeros(698, 391)*/

let mensaje = "Hola clase de javascript Ada School";
    /* mensaje.length
     console.log(mensaje.indexOf)*/

function containsWord(mensaje, texto) {
    const resultado = mensaje.indexOf("texto");
if(resultado !== -1){
    console.log("La palabra" + texto + "se encuentra en el mensaje")
    }else{
    console.log("no encuentra en el mensaje")

  }
}
/* console.log(resultado)
    console.log(texto)*/

    containsWord("Hola clase de javascript Ada School" , "1")
