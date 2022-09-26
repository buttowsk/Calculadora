const body = document.body;
const main = document.createElement("main");
const visor = document.createElement("output");
const primeiroNumero = document.createElement("input");
const segundoNumero = document.createElement("input");
const mais = document.createElement('button')
const menos = document.createElement('button')
const vezes = document.createElement('button')
const dividido = document.createElement('button')

let styleSheet = null;
dynamicAnimation = (name,styles) => {
// Creating a style element
// To add the keyframes
if (!styleSheet){
  styleSheet = document.createElement('style');
  styleSheet.type = 'text/css';
  document.head.appendChild(styleSheet);
}
// Adding The Keyframes
styleSheet.sheet.insertRule(`@keyframes ${name} {${styles}}`,
styleSheet.length
);
}


mais.innerText = '+'
menos.innerText = '-'
vezes.innerText = '×'
dividido.innerText = '÷'
visor.innerText = 'Resultado'


primeiroNumero.setAttribute('placeholder', 'Primeiro Valor')
primeiroNumero.setAttribute('type', 'number')
segundoNumero.setAttribute('placeholder', 'Segundo Valor')
segundoNumero.setAttribute('type', 'number')
body.appendChild(main);
main.appendChild(visor);
main.appendChild(primeiroNumero);
main.appendChild(segundoNumero);
main.appendChild(mais)
main.appendChild(menos)
main.appendChild(vezes)
main.appendChild(dividido)

///// Styles /////

// Body //
body.style.display = 'flex';
body.style.alignItems = 'center';
body.style.justifyContent = 'center';
body.style.background = 'rgb(238,174,202)';
body.style.background = 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)';
body.style.fontFamily = 'cursive';
//////////

// Main //
main.style.display = 'grid';
main.style.justifyContent = 'center';
main.style.alignItems = 'center';
main.style.marginTop = '10vh';
main.style.border = '1px solid #937DC2';
main.style.padding = '50px 70px'
main.style.backgroundColor = '#C689C6'
main.style.borderRadius = '12px 12px 12px 12px'
//////////

// Input //
primeiroNumero.style.margin = '2px 2px 2px 2px';
primeiroNumero.style.padding = '4px'
primeiroNumero.style.backgroundColor = '#FFE6F7';
primeiroNumero.style.fontFamily = 'cursive';
primeiroNumero.style.fontSize = 'larger'
primeiroNumero.style.border = '1px solid #937DC2'
primeiroNumero.style.borderRadius = '20px 20px 20px 20px'
primeiroNumero.style.textAlign = 'center'
segundoNumero.style.margin = '2px 2px 2px 2px';
segundoNumero.style.padding = '4px'
segundoNumero.style.backgroundColor = '#FFE6F7';
segundoNumero.style.fontFamily = 'cursive';
segundoNumero.style.fontSize = 'larger'
segundoNumero.style.border = '1px solid #937DC2'
segundoNumero.style.borderRadius = '20px 20px 20px 20px'
segundoNumero.style.textAlign = 'center'
////////////

// Botões //
mais.style.padding = '16px'
mais.style.border = '0'
mais.style.borderRadius = '30px 10px 30px 10px'
mais.style.fontSize = '1.4rem'
mais.style.fontWeight = '500'
mais.style.cursor = 'pointer'
mais.style.margin = '20px 0'
mais.style.backgroundColor = '#FFABE1'
mais.style.color = '#FFE6F7'

menos.style.padding = '16px'
menos.style.margin = '20px 0'
menos.style.border = '0'
menos.style.borderRadius = '10px 30px 10px 30px'
menos.style.fontSize = '1.4rem'
menos.style.fontWeight = '500'
menos.style.cursor = 'pointer'
menos.style.backgroundColor = '#FFABE1'
menos.style.color = '#FFE6F7'

vezes.style.padding = '16px'
vezes.style.margin = '20px 0'
vezes.style.border = '0'
vezes.style.borderRadius = '30px 10px 30px 10px'
vezes.style.fontSize = '1.4rem'
vezes.style.fontWeight = '500'
vezes.style.cursor = 'pointer'
vezes.style.backgroundColor = '#FFABE1'
vezes.style.color = '#FFE6F7'

dividido.style.padding = '16px'
dividido.style.margin = '20px 0'
dividido.style.border = '0'
dividido.style.borderRadius = '10px 30px 10px 30px'
dividido.style.fontSize = '1.4rem'
dividido.style.fontWeight = '500'
dividido.style.cursor = 'pointer'
dividido.style.backgroundColor = '#FFABE1'
dividido.style.color = '#FFE6F7'

/////////////////////

// Visor //
visor.style.border = '1px solid #937DC2'
visor.style.padding = '22px'
visor.style.margin = '20px 0'
visor.style.borderRadius = '14px 14px 14px 14px'
visor.style.fontWeight = '700'
visor.style.fontSize = '1.4rem'
visor.style.backgroundColor = '#FFE6F7'
visor.style.textAlign = 'center'
visor.style.color = '#C689C6'
////////////
/*
	https://colorhunt.co/palette/937dc2c689c6ffabe1ffe6f7
	*/
//////////////////////////////////////

///// Operações /////
mais.addEventListener('click', () => {
	let resultado = parseInt(primeiroNumero.value) + parseInt(segundoNumero.value);
	visor.innerHTML = resultado
	segundoNumero.value = ''
	primeiroNumero.value = ''
})

menos.addEventListener('click', () => {
	let resultado = parseInt(primeiroNumero.value) - parseInt(segundoNumero.value);
	visor.innerHTML = resultado;
	segundoNumero.value = ''
	primeiroNumero.value = ''
})

vezes.addEventListener('click', () => {
	let resultado = parseInt(primeiroNumero.value) * parseInt(segundoNumero.value);
	visor.innerHTML = resultado;
	segundoNumero.value = ''
	primeiroNumero.value = ''
})

dividido.addEventListener('click', () => {
	if(segundoNumero.value != 0) {
		let resultado = parseInt(primeiroNumero.value) / parseInt(segundoNumero.value);
		visor.innerHTML = resultado;
		segundoNumero.value = ''
		primeiroNumero.value = ''
	} else {
		visor.innerHTML = 'É impossivel dividir por 0'
		segundoNumero.value = ''
		primeiroNumero.value = ''
	}
	
})




