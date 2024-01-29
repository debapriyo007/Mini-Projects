const toggleButton = document.getElementById('menu-toggle')

const activenavLinks = document.getElementById('active-links')

toggleButton.addEventListener('click', ()=>{
    activenavLinks.classList.toggle('active')
})