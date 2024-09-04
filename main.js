const operacion = prompt("para el promedio 1, para el sueldo 2")

console.log(operacion)
switch(operacion){
    case "1":
        primedio()
        break;
        case "2":
            tusueldo()
            break;

    default:
        alert("el numero no es correcto")
        break
}

function primedio() {
    const nu1 = prompt("ingresa el numero 1")
    const nu2 = prompt("ingresa el numero 2")
    const nu3 = prompt("ingresa el numero 3")

    const nu1Int = Number(nu1)
    const nu2Int = Number(nu2)
    const nu3Int = Number(nu3)

    const resultado = nu1Int + nu2Int + nu3Int

    const promedio = resultado / 3

    alert("Promedio de los 3 numeros es: " + promedio)


}

function tusueldo(){
    const preciohora = prompt("ingresa el precios de tus horas")
    const horastrabajadas = prompt("ingresa las horas trabajadas")

    const preciohoraInt = Number(preciohora)
    const horastrabajadasInt = Number(horastrabajadas)
    
    const sueldo = preciohoraInt * horastrabajadasInt
    alert("tu sueldo este mes de: " + sueldo + "DOP")
}


