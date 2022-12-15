function tocaSom(idElementoAudio) {
    const elemento = document.querySelector(idElementoAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    } else {
        console.log('Elemento não encontrado!');
    }
}

const listaTeclas = document.querySelectorAll('.tecla');

let i;

for (i = 0; i < listaTeclas.length; i++) {

    const tecla = listaTeclas[i];    
    const instrumento = tecla.classList[1]; // classList pega a lista da classe utilizada no button
    const idAudio = `#som_${instrumento}`; //template string ${}

    tecla.onclick = function () {
        tocaSom(idAudio);
    };

    tecla.onkeydown = (event) => {
        if (event.code === 'Space' || event.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = () => {
        tecla.classList.remove('ativa');
    }
}

