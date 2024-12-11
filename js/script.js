const categories = document.querySelectorAll('.category')
const books = document.querySelectorAll('.bookCover')
const menuBtn = document.getElementById('menuBtn')
const menu = document.getElementById('menu')

Array.from(categories).concat(Array.from(books)).map(el => {
    el.addEventListener('click', () => {
        window.location.href = './catalog.html'
    })
})

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden')
})

menu.addEventListener('click', () => {
    menu.classList.toggle('hidden')
})
