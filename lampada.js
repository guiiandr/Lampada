const on = document.getElementById('on');     //puxar id do html 
const off = document.getElementById('off');
const lamp = document.getElementById('lamp');


function lampOn() {                      // função após clicar no botão  
    if (!isLampBroken()) {               // condição, se não estiver quebrada então executar!

        lamp.src = './IMG/ligada.jpg';
    }
}

function lampOff() {

    if (!isLampBroken()) {

        lamp.src = './IMG/desligada.jpg';

    }

}

function lampBroken() {                       

    lamp.src = './img/quebrada.jpg';

}

function isLampBroken() {

    return lamp.src.indexOf('quebrada') > -1


}


on.addEventListener('click', lampOn);               //adicionar um evento, se eu clicar / função x.
off.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn);           // se eu passar o mouse, função x.
lamp.addEventListener('mouseleave', lampOff);        // se eu tirar o mouse, função x.
lamp.addEventListener('dblclick', lampBroken);        // se eu der dois cliques, função x.