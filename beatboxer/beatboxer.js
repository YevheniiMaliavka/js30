
function handleKeyDown(e){
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    const div = document.querySelector(`.key[data-key='${e.keyCode}']`);
    if(!audio){
        return;
    }
    div.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

function removeTransition(e){
    if(e.propertyName === 'transform'){
        this.classList.remove('playing');
    }
}

const keys = document.querySelectorAll('.key');
keys.forEach( key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', handleKeyDown);