const h1 =document.querySelector('h1')
const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')
const btn = document.querySelector('#btnCalcular')
const pResult = document.querySelector('#result')
const form = document.querySelector('#formulario')


/* form.addEventListener('submit', btnOnClick) //Cuando trabajamos con formulario

function btnOnClick(event) {
    event.preventDefault() //Para que al oprimir el boton no se refresque la pagina
    let a = Number(input1.value) //Cambiar de string a number
    let b = Number(input2.value)
    let result = a + b
    pResult.innerText = `Resultado: ${result}` //Mostrar el resultado en p
    console.log(a + b) //Se va a concatenar lo que pongamos en los inputs al hacer clic al boton
} */

//Otra solucion para que no se refresque la pagina: ponerle un type:button a nuestro boton
btn.addEventListener('click', btnOnClick) //Funcion sin parentesis

function btnOnClick(event) {
    //event.preventDefault() //Para que al oprimir el boton no se refresque la pagina
    let a = Number(input1.value) //Cambiar de string a number
    let b = Number(input2.value)
    let result = a + b
    pResult.innerText = `Resultado: ${result}` //Mostrar el resultado en p
    console.log(a + b) //Se va a concatenar lo que pongamos en los inputs al hacer clic al boton
}
