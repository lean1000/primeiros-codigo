// Nivel Facil 1,2,3

// questao 1

var oneNumber = -2


   if ( oneNumber < 0 ) {
        console.log ( " numero e negativo " )
       } 
        
        else if ( oneNumber > 0 ) 
        console.log ( "numero e positivo " )

         else { oneNumber == 0 
        console.log ( "numero e igual a 0 " )
       }

console.log ("====================")

// questao 2

var year18 = 18


   if ( year18 < 18 ) {
        console.log ( " menor de 18 " )
       } 
        
        else if ( year18 > 18 ) 
        console.log ( " maior de 18 " )

         else { year18 == 18 
        console.log ( " possui 18 " )
       }

console.log ("====================")

// questao 3 

var numberEnd, numberPar, numberImper, numberEnd2
    numberPar = 36
    numberEnd = numberPar % 2
    numberImper = 27
    numberEnd2 = numberImper % 2

    if ( numberEnd == 0 ) {
        console.log ( " Esse numero e par " )
       }
    if ( numberImper > 0 ) {
        console.log ( " Esse numero e impar " )
       }

console.log ("====================")

// Nivel intermediario 4,5,6,7,8,9,10,11,12,13

// questao 4

var numberOne,numberTwo,numberThree
    numberOne = 1
    numberTwo = 2
    numberThree = 3

    if ( numberTwo > numberOne ) {
        console.log ( " o ", numberTwo, " e maior q ", numberOne )
       } 
    
    if ( numberThree > numberTwo ) 
        console.log ( " o ", numberThree, " e maior q ", numberTwo  )
        console.log ( " o numero ", numberThree, "e o maior numero ")

console.log ("====================")

// questao 5 

var letter = 't'
    

    if ( letter == 'a' ) {
         console.log ( " E uma vogal " )
       }
        else if ( letter == 'o' ) {
        console.log ( " E uma vogal " )
       }
        else if ( letter == 'e' ) {
        console.log ( " E uma vogal " )
       }
        else if ( letter == 'i' ) {
        console.log ( " E uma vogal " )
       }
        else if ( letter == 'u' ) {
        console.log ( " E uma vogal " )
       }
        else { 
              console.log ( " E uma consoante " )
             }
        

console.log ("====================") 

// questao 6 

var aluno = 6

    if ( aluno >= 7 ) {
        console.log ( " Esta aprovado " ) 
       }
        else if ( aluno >= 5 ) { 
        console.log ( " Esta em recuperacao " )
       }
        else { 
        console.log ( "Esta reprovado " )
       }

console.log ("====================")

 // questao 7 

 var Number23, Number12 
     Number23 = 23
     Number12 = 12
     
        console.log ( " 23 + 12 = " , Number23 + Number12 )
        console.log ( " 23 / 12 = " , Number23 / Number12 )
        console.log ( " 23 x 12 = " , Number23 * Number12 )
        console.log ( " 23 - 12 = " , Number23 - Number12 )

console.log ("====================")       

// questao 8 

var year = 2076

    if ( year % 4 == 0 ) {
        console.log ( " Esse ano e bisiestos " )
       }
        else ( " Esse ano nao e bisiestos " )

console.log ("====================")

// questao 9

// fico como desafio nao consegui fazer infeliz mente

// questao 10

var minhaaltura, meupeso, minhaalturax, meupesoi
    minhaaltura = 1.85
    meupeso = 95
    minhaalturax = minhaaltura * minhaaltura
    meupesoi = meupeso / minhaalturax
         
        if ( meupesoi <= 18.5 ) {
            console.log ( " Abaixo do peso " )
           }
            else if ( meupesoi >= 18.5 <= 24.9 ) {
            console.log ( " Peso ideal")
           }
            else ( meupesoi >= 24.9 , " Acima do peso " )

console.log ("====================")            

// questao 11

//ps: calendario 2024

var meses = "fevereiro"

    if ( meses == "março" || meses == "maio" || meses == "julho" || meses == "outubro" || meses == "dezenbro"  ) {
        console.log ( " Possui 31 Dias o mes de ", meses)
       }
        else if ( meses == "janeiro" || meses == "abril" || meses == "junho" || meses == "setembro novembro") { 
        console.log ( " Possui 30 Dias o mes de ", meses)
       }
        else { meses == "fevereiro"
            console.log ( meses, " mes possui 29 dias ")
       }

console.log ("====================")

// questao 12

var lado1, lado2 , lado3
    lado1 = 5
    lado2 = 5
    lado3 = 5

    if ( lado1 == lado2 && lado2 == lado3 ) {
        console.log ( " O triangulo e equilatero " )
       }
        else if ( lado1 == lado2 || lado2 == lado3 || lado3 == lado1 ) {
        console.log ( " O triangulo e isosceles")
       }
        else { lado1 != lado2 && lado2 != lado3 && lado3 != lado1
        console.log ( " O triangulo e escaleno")
       }        
        

console.log ("====================")

// questao 13

const numeroAleatorio = Math.floor ( Math.random () * 100) + 1;
let tentativas = 0;

console.log ( " Bem-vindo ao jogo de adivinhação! " );
console.log( " Tente adivinhar o número entre 1 e 100. " );

function iniciarJogo () {
while ( true ) {
let palpite = prompt( " Digite um número entre 1 e 100 ( ou 'sair' para sair do jogo ):" );
    if ( palpite.toLowerCase () === 'sair' ) {
        console.log ( " Você saiu do jogo. " ) ;
    break;
       }
var tentativa = parseInt ( palpite ) ;
    if ( !isNaN ( tentativa ) && tentativa >= 1 && tentativa <= 100) {
    tentativas++;
    if ( tentativa < numeroAleatorio ) {
        console.log( " Tente um número maior. " );
      } else if ( tentativa > numeroAleatorio ) {
        console.log( " Tente um número menor. " );
      } else {
        console.log ( ` Parabéns! Você acertou o número ${numeroAleatorio} em ${tentativas} tentativas.` ) ;
        break;
      }
    } else {
      console.log ( " Por favor, digite um número válido entre 1 e 100. " );
    }
  }
}

console.log ("====================")








