const pedra = document.getElementById('pedra')
const papel = document.getElementById('papel')
const tesoura = document.getElementById('tesoura')
const result = document.getElementById('result')
const opponent = document.getElementById('opponent')
const retry = document.getElementById('retry')

function pedrar() {
    pedra.onclick = ''
    pedra.style.opacity = '20%'
    papel.onclick = ''
    papel.style.opacity = '20%'
    tesoura.onclick = ''
    tesoura.style.opacity = '20%'
    let res = Math.floor(Math.random() * 3);
    switch(res) {
        case 0: {
            imgpedra.style.display = 'none'	
            imgpapel.style.display = 'none'	
            imgtesoura.style.display = 'none'	

            resultText.innerText = 'Empate!'
            result.style.backgroundColor = 'yellow'
            imgpedra.style.display = 'block'
            break;
        }
        case 1: {
            imgpedra.style.display = 'none'	
            imgpapel.style.display = 'none'	
            imgtesoura.style.display = 'none'

            resultText.innerText = 'Perdeu!'
            result.style.backgroundColor = 'red'
            imgpapel.style.display = 'block'
            break;
        }
        case 2:{
            imgpedra.style.display = 'none'	
            imgpapel.style.display = 'none'	
            imgtesoura.style.display = 'none'

            resultText.innerText = 'Venceu!'
            result.style.backgroundColor = 'green'
            imgtesoura.style.display = 'block'
            break;
        }
    }   
}
function papelar() {
    pedra.onclick = ''
    pedra.style.opacity = '20%'
    papel.onclick = ''
    papel.style.opacity = '20%'
    tesoura.onclick = ''
    tesoura.style.opacity = '20%'
    let res = Math.floor(Math.random() * 3);
    switch(res) {
        case 0: {
            imgpedra.style.display = 'none'	
            imgpapel.style.display = 'none'	
            imgtesoura.style.display = 'none'	

            resultText.innerText = 'Venceu!'
            result.style.backgroundColor = 'green'
            imgpedra.style.display = 'block'
            break;
        }
        case 1: {
            imgpedra.style.display = 'none'	
            imgpapel.style.display = 'none'	
            imgtesoura.style.display = 'none'

            resultText.innerText = 'Empate!'
            result.style.backgroundColor = 'Yellow'
            imgpapel.style.display = 'block'
            break;
        }
        case 2:{
            imgpedra.style.display = 'none'	
            imgpapel.style.display = 'none'	
            imgtesoura.style.display = 'none'

            resultText.innerText = 'Perdeu!'
            result.style.backgroundColor = 'red'
            imgtesoura.style.display = 'block'
            break;
        }
    }
}
function tesourar() {
    pedra.onclick = ''
    pedra.style.opacity = '20%'
    papel.onclick = ''
    papel.style.opacity = '20%'
    tesoura.onclick = ''
    tesoura.style.opacity = '20%'
    let res = Math.floor(Math.random() * 3);
    switch(res) {
        case 0: {
            imgpedra.style.display = 'none'	
            imgpapel.style.display = 'none'	
            imgtesoura.style.display = 'none'	

            resultText.innerText = 'Perdeu!'
            result.style.backgroundColor = 'red'
            imgpedra.style.display = 'block'
            break;
        }
        case 1: {
            imgpedra.style.display = 'none'	
            imgpapel.style.display = 'none'	
            imgtesoura.style.display = 'none'

            resultText.innerText = 'Venceu!'
            result.style.backgroundColor = 'green'
            imgpapel.style.display = 'block'
            break;
        }
        case 2:{
            imgpedra.style.display = 'none'	
            imgpapel.style.display = 'none'	
            imgtesoura.style.display = 'none'

            resultText.innerText = 'Empate!'
            result.style.backgroundColor = 'yellow'
            imgtesoura.style.display = 'block'
            break;
        }
    }
}
/*function recomecar(){
    
    pedra.onclick = 'pedrar()'
    pedra.style.opacity = '100%'
    papel.onclick = 'papelar()'
    papel.style.opacity = '100%'
    tesoura.onclick = 'tesourar()'
    tesoura.style.opacity = '100%'
    result.style.backgroundColor = 'white'
    resultText.innerText = ''
    imgpedra.style.display = 'none'	
    imgpapel.style.display = 'none'	
    imgtesoura.style.display = 'none'
} */