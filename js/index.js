const btnOpenIdioms = document.getElementById('btnOpenIdioms'),
    submenuIdioms = document.getElementById('submenuIdioms')
    iconTheme = document.getElementById('iconTheme')
    section = document.getElementById('section')
    
btnOpenIdioms.addEventListener('click', () => {
    submenuIdioms.classList.toggle('active')

})

submenuIdioms.addEventListener('mouseleave', () => {
    submenuIdioms.classList.remove('active')
})

iconTheme.addEventListener('click', () => {
    section.classList.toggle('light')
})