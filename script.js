document.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = 0;
    let fadeEffect = setInterval(() => {
        if (parseFloat(document.body.style.opacity) < 1) {
            document.body.style.opacity = parseFloat(document.body.style.opacity) + 0.05;
        } else {
            clearInterval(fadeEffect);
        }
    }, 100);
    
});

function playMusic(){
    const music = document.getElementById('music')
    music.muted = false;
    music.play();
}
 
