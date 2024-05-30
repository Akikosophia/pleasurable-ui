const bell = document.querySelector("svg.custom-bell")

bell.addEventListener('click', jumpBell)
bell.addEventListener('animationend', jumpBell)

function jumpBell() {
 bell.classList.toggle('jump')
}