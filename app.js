const comback = document.querySelector('.comback')
const audio = document.querySelector('#my_audio')
const yes = document.querySelector('.yes')
const no = document.querySelector('.no')
const modal = document.querySelector('.modal')

// appear modal music
window.onload = () => {
    setTimeout(() => {
        modal.style.display = 'block'
    }, 2000)
}
// music
yes.onclick = () => {
    audio.play()
    modal.style.display = 'none'
}
no.onclick = () => {
    modal.style.display = 'none'
}

// appear button back to top
window.onscroll = () => {
    if (document.documentElement.scrollTop > 700){
        comback.style.display = 'block'
    } else {
        comback.style.display = 'none'
    }
}
// back to top
comback.onclick = () => {
    document.documentElement.scrollTop = 0
}
