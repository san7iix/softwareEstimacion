//Funcion para primer elemento



let boton_ldc = document.getElementById("calcular_ldc")
let boton_cocomo = document.getElementById("calcular_cocomo")
let boton_puntos_funcion = document.getElementById("calcular_puntos_funcion")


boton_ldc.addEventListener('click', ()=>{
    let valor = document.getElementById("valor")
    let input = document.getElementById("linea_codigo_form_input").value

    let ecuacion = 5.2*(input)^0.91

    valor.innerHTML = `Valor: $${ecuacion} COP`

})

boton_cocomo.addEventListener('click', ()=>{
    let valor = document.getElementById("valor_cocomo")
    let ai = document.getElementById("cocomo_form_ai").value
    let ldc = document.getElementById("cocomo_form_ldc").value
    let bi = document.getElementById("cocomo_form_bi").value
    let fae = document.getElementById("cocomo_form_fae").value

    let ecuacion = ai*((ldc)^bi)*fae

    valor.innerHTML = `Valor: $${ecuacion} COP`

})

boton_puntos_funcion.addEventListener('click', ()=>{
    let valor = document.getElementById("valor_puntos_funcion")
    let puntos_funcion = document.getElementById("puntos_de_funcion_input").value

    let ecuacion = -12.88 + 0.405*(puntos_funcion) 
    valor.innerHTML = `Valor: $${ecuacion.toFixed(2)} COP`

})