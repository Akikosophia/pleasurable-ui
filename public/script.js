const bell = document.querySelector('svg')

bell.addEventListener('click', jumpHandler)
bell.addEventListener('animationend', jumpHandler)

function jumpHandler() {
 bell.classList.toggle('jump')
}