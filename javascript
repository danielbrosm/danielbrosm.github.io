
<script>
const a=5; // const necesita asignación
var b; //declarción de a
  b=10;  //asignación de b
  
const A1=4; 

console.log(A1);
console.log('text');
//console.log(a1) >> Uncaught ReferenceError: a1 is not defined
  
var gato;
console.log(gato); // undefined
let oso;
console.log(oso); // undefined
  
//const A1=6; No se puede redeclarar
//let oso = "oso"; let no permite redeclarar 
var gato = "gato"; // var sí deja redeclara
console.log(gato);
gato = 10;
console.log(gato);
var gato;
console.log(gato); // se queda con el valor de 10 y por eso no hay que utilizar var
  
let _hola = "hola";
console.log(_hola);
  
let ad$os = 80;
console.log(ad$os);
  
let precioSinIva = 50.50;
let precio_sin_iva = 40.30;

</script>
