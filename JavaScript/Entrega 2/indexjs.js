let contador= 1;

const valor = document.querySelector("#contador"); 
const botones = document.querySelectorAll(".boton")
let numero = valor.innerHTML
console.log(numero);
botones.forEach (boton => {

boton.addEventListener ("click", function(e) {

const estilos = e.currentTarget.classList;

if(estilos.contains("disminuir")&&contador > 1) {
contador--;
}
else if(estilos.contains("aumentar")) {
contador++;
}
else {

contador= 1;
}
valor.textContent = contador;
}) 
})


