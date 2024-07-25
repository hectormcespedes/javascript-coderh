let nombre = ""
do{
    nombre = prompt ("Ingrese su nombre")
} while (nombre === "" || nombre === null)

let dni = ""
do{
    dni = prompt ("Ingese su DNI")
} while (dni === "" || dni === null)

function examen(){
let nota = parseInt(prompt("Nota del examen"))

if(nota >= 7){
    alert("Felicidades,aprobaste el examen")
} else if(isNaN(nota)){
    alert("Por favor ingrese un tipo de dato valido")
} else if(nota<0){
    alert("Las notas son numeros positivos")
}
 else {
    alert("Lo lamento,tu nota no alcanza el minimo")
}
}
examen()
