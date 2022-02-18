document.addEventListener('DOMContentLoaded', () => {
    // var audio = new Audio();
    // audio.src = './audio/HeatWaves.mp3'
    // audio.loop = true
    // console.log(audio.src);
    // audio.play()
    
    const audio = document.querySelector('audio')
    const setVolume = document.querySelector('.volume')
    let check = true
    setTimeout(()=>{
    audio.play()
    },2000)
    setVolume.onclick = () => {
        if (check) {
            setVolume.src = './icon/mute.png'
            check = false
            audio.volume = 0
        }
        else {
            setVolume.src = './icon/sound.png'
            check = true
            audio.volume = 1
        }
    }
})
