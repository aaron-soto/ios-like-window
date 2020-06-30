const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

const fullModalButtons = document.querySelectorAll('[data-full-button]')

openModalButtons.forEach(button => {
    button.addEventListener('click', ()=> {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal);
    })
})

overlay.addEventListener('click', ()=> {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal=> {
        closeModal(modal);
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', ()=> {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

fullModalButtons.forEach(button => {
    button.addEventListener('click', ()=> {
        const modal = button.closest('.modal')
        fullModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

function fullModal(modal) {
    if (modal == null) return
    modal.classList.toggle('fullscreen')
    overlay.classList.toggle('active')
}

function smallModal(modal) {
    if (modal == null) return
    modal.classList.remove('fullscreen')
    overlay.classList.remove('active')
}