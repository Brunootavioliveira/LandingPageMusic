function playSound() {
    var audio = document.getElementById('meuAudio');
    audio.play();
    alert('Som ativado!');
}

function pauseSound() {
    var audio = document.getElementById('meuAudio');
    audio.pause();
    alert('Som pausado!');
}