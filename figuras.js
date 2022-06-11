
//CUADRADO
console.group("Cuadrados");

    /* const ladoCuadrado = 5;
    console.log ("Los lados del cuadrado miden: " + ladoCuadrado + " cm"); */

    function perimetroCuadrado (lado){
        return lado * 4;
    } 
    /* console.log ("El perímetro del cuadrado es: " + perimetroCuadrado + " cm"); */

    function areaCuadrado(lado) {
        return lado*lado;
    }
    /* console.log ("El área del cuadrado es de: " + areaCuadrado + " cm2"); */

console.groupEnd();

//TRIANGULO
/* console.group("Triangulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

    console.log (
    "Los lados del triangulo miden: "
     + ladoTriangulo1 +"cm," 
     + ladoTriangulo1 +"cm,"
     + baseTriangulo +"cm"
     ); */

   /*   alturaTriangulo = 5.5; */
    /* console.log("la altura del triangulo es de: " + alturaTriangulo + "cm"); */

    function perimetroTriangulo(lado1,lado2,base){
      return (Number(lado1) + Number(lado2) + Number(base));
    } 
   /*  console.log("El perimetro del triangulo es de: " + perimetroTriangulo + "cm"); */


    function areaTriangulo(base,altura){
        return (Number(base)*Number(altura))/2;
    }  
    /* console.log("El area del triangulo es de: " + areaTriangulo + "cm2"); */

console.groupEnd();

//CIRCULO
console.group("Circulos");

    //radio
    /* const radioCirculo = 4; */
    /* console.log("El radio del circulo es de: " + radioCirculo + " cm"); */

    //diametro
    function diametroCirculo (radio) {
        return radio * 2;
    } 
    /* console.log("El diametro del circulo es de: " + diametroCirculo + " cm"); */

    //PI
    const PI = Math.PI;
    /* console.log("El valor de Pi es " + PI); */
     
    //Circunferencia
    function perimetroCirculo (radio) {
        const diametro = diametroCirculo(radio);
        return diametro * PI;
    } 

    /* console.log("El perimetro del circulo es de: " + perimetroCirculo + " cm"); */

    //area
    function areaCirculo (radio) {
        return (radio*radio) * PI;
    } 
    /* console.log("El área del circulo es de: " + areaCirculo + " cm"); */

console.groupEnd();


function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value; 
    const area = areaCuadrado(value);
    alert(area);
}

//----------------------------------------

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputLado1");
    const lado1 = input1.value;

    const input2 = document.getElementById("InputLado2");
    const lado2 = input2.value;

    const input3  = document.getElementById("InputBase");
    const base = input3.value;

    const perimetro = perimetroTriangulo(lado1,lado2,base);

    alert (perimetro);
}

function calcularAreaTriangulo(){
    const input1  = document.getElementById("InputBase");
    const base = input1.value;
    
    const input2  = document.getElementById("InputAltura");
    const altura = input2.value;

    const area = (Number(base)*Number(altura)/2);
    alert (area);
}


function calcularPerimetroCirculo(){
    const input  = document.getElementById("radio");
    const radio = input.value;
    perimetro = perimetroCirculo (radio);

    alert(perimetro);
}

function calcularAreaCirculo(){
    const input  = document.getElementById("radio");
    const radio = input.value;
    area = areaCirculo (radio);

    alert(area);
}