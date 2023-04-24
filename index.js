
let arrayVacio = [];
let arrayNumeros = [0,1,2,3,4,5,6,7,8,9];
let arrayNumerosPares = [0,2,4,6,8];
let arrayBidimensional =  [[0,1,2],['a','b','c']];


function suma(a, b) {
    return a + b
}


function potenciacion(a, b) {
    return a**b
}


function potenciacion (a,b){
    let c = 1;
    for (i=0; i<b; i++){
        c = c * a; 
    }
    return c
}
console.log(potenciacion(2,4))


function repetirString(a,b){
    let repeat = "";
    for (i=0; i<b ;i++) {
        repeat = repeat + a
    } return repeat
}
console.log(repetirString("Hola",8))


let num = 67;
function esPrimo(num){
    let aux = [];
    let index = 0;
    let primo;
    for(i=1; i<=num ; i++){
        if (num%i== 0){
            aux[index]= i;
            index++;
        } 
    }
    if (aux.length>2){
        primo = false
    } else if (aux.length == 2){
        primo = true
    }
    return primo
}
console.log(esPrimo(num))



function separarPalabras(a){
    let aux = [];
    let j = 0;

    for (i=0; i<a.length; i++){
        if (aux[j] == undefined){
            aux[j] = a[i];
        } else if (a[i] == " "){
            j++;
        } else {
            aux[j] += a[i];
        }
    } return aux
}
console.log(separarPalabras("Me llamo Jorge"))


let n = [101, 101, 95, 96, 96, 99, 95, 93, 93, 98, 94, 99, 93, 99]
function ordenarArray(){
    for (i=0; i<n.length; i++){
        for(j=0; j<n.length; j++){
            if (n[j-1] > n[j]){
                let aux = n[j-1];
                n[j-1] = n[j];
                n[j] = aux;
            }
        }
    } return n
}
console.log(ordenarArray(n))


function obtenerPares(n){
    let even = [];
    let j = 0;
    for (i=0; i<n.length; i++){
        if (n[i]%2==0) {
            even[j] = n[i];
            j++;
        }
    } return even
}
console.log(obtenerPares(n))

function pintarArray(n){
    return "[" + `${n}` + "]"
}
console.log(pintarArray(n))



/*
function arrayMapi(arr, func){
    
    return arr.forEach((item) => {func})
}
*/


let m = [7,0,9,5,7,0,7,3,8,8,8,8,2,35,0,1,7];

function eliminarDuplicados(arr){
    let arr2 = [];
    let index = 0;

    for(i=0; i<m.length; i++){
        for(j=0; j<m.length; j++){
            if (m[i] == arr2[j]){
                break;
            } else if ((j == m.length-1) && (m[i] != arr2[arr2.length-1])){
                arr2[index] = m[i];
                index++;
            } 
        }
    }
    return arr2
}
console.log(eliminarDuplicados(m))


let arrayNumerosNeg = [0,-1,-2,-3,-4,-5,-6,-7,-8,-9];
let holaMundo = ["Hola","Mundo"];
let loGuardoTodo = ['hola', 'que', 23, 42.33, 'tal'];
let arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']];


function multiplicacion(a,b){
    for (i=b; i<b; i++){
        a += a;
    }
    return a
}


function division(a,b){
    result = 0;
    while (a>0){
        a -= b;
        result++
    }
    return result
}
console.log(division(84,2))


function esPar(a){
    return a%2==0
}
console.log(esPar(5))


function resta(a, b) {
    return a - b
}


let arrayFunciones = [suma(2,6),resta(8,1),multiplicacion(9,4)];
console.log(arrayFunciones);


function ordenarArray2(arr){
    for (j=0; j<arr.length; j++){
        for(i=0; i<arr.length;i++){
            if(arr[i-1]<arr[i]){
                let aux = arr[i-1];
                arr[i-1] = arr[i];
                arr[i] = aux; 
            }
        }
    }
    return arr
}
console.log(ordenarArray2(m))


function obtenerImpares(arr){
    let arr2 = [];
    let j = 0;
        for(i=0; i<arr.length;i++){
            if(arr[i]%2!=0){
                arr2[j] = arr[i];
                j++;
            }
        }
    return arr2
}
console.log(obtenerImpares(m))


function sumarArray(arr){
    let result = 0;
    for (i=0; i<arr.length; i++){
        result += arr[i];
    }
    return result
}
console.log(sumarArray([1, 2, 3]))


function multiplicarArray(arr){
    let result = 1;
    for (i=0; i<arr.length; i++){
        result *= arr[i];
    }
    return result
}
console.log(multiplicarArray([2, 3, 4]))








