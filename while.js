// Atividade 1

let numero = 5
let multiplicador = 1

while ( multiplicador <= 10 ) {
  
  console.log ( numero , " x " , multiplicador , " = " , ( numero * multiplicador ) )
  
    multiplicador++
}

//-----------------------------------------------------------------------------------------

// Atividade 2

let resultado = 0      
let numero = 1    
while (numero <= 100) {  
    resultado += numero
    numero++      
}

console.log("A soma dos números de 1 a 100 é:", resultado)

//-----------------------------------------------------------------------------------------

// Atividade 3

function somadedigitos() {
    let resultado = 0

    while (true) {
        let num_user = prompt('Digite um número:')
        
        if (num_user == 0) {
            break
        }

        console.log('Valor atual de resultado: ' + resultado)
        resultado = resultado + parseInt(num_user)
        console.log('Valor atual de resultado + num_user: ' + resultado)
    }

    alert('A soma dos números digitados é: ' + resultado)
}

somadedigitos()

//-----------------------------------------------------------------------------------------

// Atividade 4

let numero1 = 0
let numero2 = 1
let count = 0

while (count < 10) { 
    console.log(numero1) 
    let nextNum = numero1 + numero2 
    numero1 = numero2 
    numero2 = nextNum
    count++     
}

//-----------------------------------------------------------------------------------------

// Ativida 5

let str = prompt("Digite uma string:")
let invertedStr = ""

let iniciar = str.length - 1

while (iniciar >= 0) {
    invertedStr += str[iniciar]
    iniciar--
}

console.log("A string invertida é:", invertedStr)

//-----------------------------------------------------------------------------------------

// Atividade 1 em function

function tabuada (numero) {

 multiplicador = 1

 while ( multiplicador <= 10 ) {
   
 console.log ( numero + " x " + multiplicador + " = " + ( numero * multiplicador ) )
  
multiplicador++
}
}
// console.log ( tabuada (5))

//-----------------------------------------------------------------------------------------

// Atividade 2 em function

function calcularSoma(nun1) {
    let resultado = 0    
    let numero = 1   
    while (numero <= nun1) {  
        resultado += numero
        numero++     
    }
    return resultado
}
let soma = calcularSoma(100)

// console.log("A soma dos números de 1 a 100 é:", soma)

//-----------------------------------------------------------------------------------------

// Atividade 3 em function

function somaDigitos(){
 resultado = 0
  while (true) {
       num_user = prompt(" digite um numero: ")
if (num_user == 0){
break
}
 
console.log( 'valor atual de resultado:' + resultado ) 
resultado = resultado + parseInt (num_user)
console.log("valor atual de resultado + numero usuarios:" + resultado)
 }
alert (resultado)
}
somaDigitos()

//-----------------------------------------------------------------------------------------

// Atividade 4 em function

function gerarFibonacci(limite) {
    let numero1 = 0
    let numero2 = 1
    let count = 0

    while (count < limite) {
        console.log(numero1)
        let nextNum = numero1 + numero2
        numero1 = numero2
        numero2 = nextNum
        count++
    }
}

// gerarFibonacci(10)

//-----------------------------------------------------------------------------------------

// Atividade 5 em function

function inverterString() {
    let str = prompt("Digite uma string:")
    let invertedStr = ""
    let iniciar = str.length - 1

    while (iniciar >= 0) {
        invertedStr += str[iniciar]
        iniciar--
    }

    console.log("A string invertida é:", invertedStr)
}

inverterString()

// Atividade 6 em function

let options
let result1 = ( tabuada (5))
let result2 = soma
let result3 = somaDigitos()
let result4 = gerarFibonacci(10)
let result5 = inverterString()

function menu() {
    options = '' 
  
    while (options !== '6') {
        options = prompt("Escolha uma opção:\n1 - Imprimir resultado da primeira questão\n2 - Imprimir resultado da segunda questão\n3 - Imprimir resultado da terceira questão\n4 - Imprimir resultado da quarta questão\n5 - Imprimir resultado da quinta questão\n6 - Fechar o menu")

        if (options === '1') {
            console.log(result1)
        } else if (options === '2') {
            console.log(result2)
        } else if (options === '3') {
            console.log(result3)
        } else if (options === '4') {
            console.log(result4)
        } else if (options === '5') {
            console.log(result5)
        } else if (options === '6') {
            console.log("Menu fechado")
        } else {
            console.log("Opção inválida, tente novamente")
        }
    }
}

menu()
