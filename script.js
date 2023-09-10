/**  
let nota;

let acumuladorDesaprobados= 0, acumuladorAprobados =0, acumuladorPromocionados=0;
let cantidadDesaprobados=0, cantidadAprobados=0, cantidadPromocionados=0;

let notaMinima, notaMaxima;

do {

  nota = parseInt(prompt("Ingrese una nota (1- 10)"));

  if(nota < 4){

    promedioDesaprobados += nota;
    cantidadDesaprobados ++;
    
  }
  else {
    promediosAprobados += nota;
    cantidadDesaprobados++;
    

    if(nota >=7){

      promediosPromocionados += nota;
      cantidadPromocionados++;
    }

    
  }


  
  
} while(confirm("Quiere cargar otra nota?"));

console.log(`El promedio de desaprobados es de ${acumuladorDesaprobados / cantidadDesaprobadors}`);
console.log(`El promedio de aprobados es de ${acumuladorAprobados / cantidadAprobadors}`);
console.log(`El promedio de promocionados es de ${acumuladorPromocionados / cantidadPromocionados}`);




let = n
let i = 55;


do {

  n = parseInt(prompt("Ingrese un numero (1 - 100"));

  if( n < i)
    console.log("El numero es menor")

  else( n > i)
    console.log("El numero es mayor")

  else if ( n === i)
    
  } while (confirm("Ingrese otro número"));



*/

// Generar un número aleatorio entre 1 y 100

/**  
        const numeroCorrecto = Math.floor(Math.random() * 100) + 1;

        // Número de intentos disponibles
        const intentosMaximos = 5;
        let intentosRealizados = 0;

        // Pedir al jugador que ingrese un número y jugar
        while (intentosRealizados < intentosMaximos) {
            // Pedir al jugador que ingrese un número
            const numeroElegido = parseInt(prompt("Intento " + (intentosRealizados + 1) + ": Ingrese un número entre 1 y 100"));

            // Validar si el jugador ingresó un número válido
            if (isNaN(numeroElegido) || numeroElegido < 1 || numeroElegido > 100) {
                alert("Por favor, ingrese un número válido entre 1 y 100.");
            } else {
                // Incrementar el número de intentos realizados
                intentosRealizados++;

                // Comparar el número elegido con el número correcto
                if (numeroElegido === numeroCorrecto) {
                    console.log("¡Correcto! ¡Has adivinado el número " + numeroCorrecto + " en " + intentosRealizados + " intentos! ¡Felicidades!");
                    intentosRealizados = intentosMaximos; // El jugador ha adivinado, se sale del bucle while
                } else {
                    // Si se alcanza el máximo de intentos sin adivinar, mostrar el número correcto
                    if (intentosRealizados === intentosMaximos) {
                        console.log("¡Lo siento! Se te han acabado los intentos. El número correcto era " + numeroCorrecto + ".");
                    } else {
                        // Proporcionar una pista al jugador sobre si el número es mayor o menor
                        const pista = (numeroElegido < numeroCorrecto) ? "El número es mayor que " + numeroElegido + "." : "El número es menor que " + numeroElegido + ".";
                        console.log("" + pista + " Inténtalo de nuevo.");
                    }

                }
            }
        }

        */

/* Calcule e informe los siguientes datos:

Promedio de edad general
Promedio de edad de las mujeres
Promedio de edad de los hombres
Porcentaje de mujeres menores a 21 años
Porcentaje de hombres mayores a 21 años
La mayor edad ingresada de las mujeres
La menor edad ingresada de los hombres
Los tres valores ingresados deben ser validados según corresponda

*/
/*let ciudad, sexo, edad;

let edadMujeres = 0, cantidadMujeres = 0;
let edadHombres = 0, cantidadHombres = 0;

let cantidadMujeresMenores21 =0; cantidadHombreMayore21 = 0;

let mayorEdadMujeres = 0, menorEdadHombres = 110;


  do {
      //Falta Validar
    ciudad = prompt("Ingrese ciudad");

    sexo = prompt("Ingrese seco: Mujer (M) u Hombre (H)");

    edad = parseInt(prompt("Ingrese edad entre 0 y 100"));
  
    // Verifico que los datos sean de una mujer
    if(sexo == "M"){

      //sumo la edad y el contador
      edadMujeres += edad;
      cantidadMujeres ++;

      if (edad < 21){
        cantidadMujeresMenores21++;
        
      }
        if (edad > mayorEdadMujeres){

      mayorEdadMujeres = edad;
      
    }

      
    }

    if (sexo == "H"){


      edadHombres += edad;
      cantidadHombres++;

    if(edad > 21){
      cantidadHombresMayores21++;
      
    }
      if (edad > menorEdadHombres){

      menorEdadHombres = edad;
      
    }

      
    }


  

  
} while(confirm("Quiere cargar mas datos?"));

//Calcular y mostrar promedios, porcentajes

*/

 const dato = parseInt(prompt("Ingrese un numero"));

if (dato == 0){
  alert("El numero es cero");
  
  
}

else if( dato % 2 == 0){
  alert("El numero es par");
  

  
}

else{
  alert("El numero es impar");
  
}


