function gestionarFormulario(evento){

    evento.preventDefault()


    let valor1 = Number(document.getElementById('valor1').value)
    let valor2 = Number(document.getElementById('valor2').value)

    const resultado = document.getElementById('resultado')

    let sumar, restar, dividir, multiplicar

    sumar = document.getElementById('suma').checked
    restar = document.getElementById('resta').checked
    dividir = document.getElementById('division').checked
    multiplicar = document.getElementById('multiplicacion').checked

    console.log(sumar)

    if(sumar){
        resultado.innerHTML =`<p>Suma entre ${valor1} y ${valor2} es: ${valor1+valor2}</p>`
    }
    else if(restar){
        resultado.innerHTML =`<p>Resta entre ${valor1} y ${valor2} es: ${valor1-valor2}</p>`
    }
    else if(dividir){
        if(valor2 === 0) alert('No se puede realizar una divisi&oacute;n con 0')
        else resultado.innerHTML =`<p>Divisi&oacute;n entre ${valor1} y ${valor2} es: ${valor1/valor2}</p>`
    }
    else if(multiplicar){
        resultado.innerHTML =`<p>Multiplicaci&oacute;n entre ${valor1} y ${valor2} es: ${valor1*valor2}</p>`
    }
}

let formulario = document.getElementById('calculadora')

formulario.onsubmit = gestionarFormulario