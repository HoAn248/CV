document.addEventListener('DOMContentLoaded', () => {
    let audio = document.querySelector('#audio')
    let setVolume = document.querySelector('.volume')
    let check = true
    setVolume.onclick = () => {
        if (check) {
            setVolume.src = './icon/sound.png'
            check = false
            audio.play()
        }
        else {
            audio.pause()
            setVolume.src = './icon/mute.png'
            check = true
        }
    }
    setTimeout(title,1000)
    function title(){
        alert('Muốn nghe nhạc, hãy nhấn vào chiếc loa bên phải phía trên màn hình')
    }
})
