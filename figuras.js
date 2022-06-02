
//CUADRADO
console.group("Cuadrados");
    const ladoCuadrado = 5;
    console.log ("Los lados del cuadrado miden: " + ladoCuadrado + " m");


    const perimetroCuadrado = ladoCuadrado * 4;
    console.log ("El perímetro del cuadrado es: " + perimetroCuadrado + " m");

    const areaCuadrado = ladoCuadrado * ladoCuadrado;
    console.log ("El área del cuadrado es de: " + areaCuadrado + " m2");

console.groupEnd();

//TRIANGULO
console.group("Triangulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

    console.log (
    "Los lados del triangulo miden: "
     + ladoTriangulo1 +"cm," 
     + ladoTriangulo1 +"cm,"
     + baseTriangulo +"cm"
     );

    const alturaTriangulo = 5.5;
    console.log("la altura del triangulo es de: " + alturaTriangulo + "cm");

    const perimetroTriangulo = ladoTriangulo1+ladoTriangulo2+baseTriangulo;
    console.log("El perimetro del triangulo es de: " + perimetroTriangulo + "cm");


    const areaTriangulo  =  (baseTriangulo*alturaTriangulo)/2;
    console.log("El area del triangulo es de: " + areaTriangulo + "cm2");

console.groupEnd();

//CIRCULO
console.group("Circulos");

    //radio
    const radioCirculo = 4;
    console.log("El radio del circulo es de: " + radioCirculo + " cm");

    //diametro
    const diametroCirculo = radioCirculo * 2;
    console.log("El diametro del circulo es de: " + diametroCirculo + " cm");
    //PI
    const PI = Math.PI;
    console.log("El valor de Pi es " + PI);
     
    //Circunferencia
    const perimetroCirculo = diametroCirculo * PI;
    console.log("El perimetro del circulo es de: " + perimetroCirculo + " cm");

    //area
    const areaCirculo = (radioCirculo*radioCirculo) * PI;
    console.log("El área del circulo es de: " + areaCirculo + " cm");



console.groupEnd();
