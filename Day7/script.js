const keys = document.querySelectorAll(".white, .black");

function playSound(key) {
    const soundNumber = key.dataset.sound;
    const audio = new Audio(`sounds/${soundNumber}.mp3`);
    audio.currentTime = 0;
    audio.play();
}

function pressKey(key) {
    key.classList.add("pressed");
    setTimeout(()=> key.classList.remove("pressed"),150);
}

keys.forEach(key => {
    key.addEventListener("click",() => {
        playSound(key);
        pressKey(key);
    });
});