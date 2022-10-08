const d = document
const $boxesContainer = d.getElementById('boxes')
const $btn = d.getElementById('btn')

$btn.addEventListener('click', () => $boxesContainer.classList.toggle('big'))

function createBoxes(){
    for(let i=0; i<4; i++){
        for(let j=0; j<4; j++){
            const $box = d.createElement('div')
            $box.classList.add('box')
            $box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`
            $boxesContainer.appendChild($box)
        }
    }
}

createBoxes()