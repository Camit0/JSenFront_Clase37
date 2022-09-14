const main = document.querySelector('main');
const h2 = document.querySelector('h2');
const a = document.querySelector('a');
const p = document.querySelectorAll('p');
console.log('h2')

const nombre = prompt('Ingrese su nombre');

h2.innerText += nombre || 'Invitado'

h2.style.textTransform = 'uppercase'

a.style.color = '#E51B3E'

const fondoDePantalla = confirm('¿Desea colocar un fondo de pantalla?')

if(fondoDePantalla){
    document.body.classList.add('fondo')
}

for(let i = 0; i < p.length; i++){
    if(i % 2 == 0){
        p[i].classList.add('destacadoPar')
    } else {
        p[i].classList.add('destacadoImpar')
    }
}

main.style.display = 'block'




