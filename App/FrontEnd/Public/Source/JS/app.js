let modal = null
let text = gsap.timeline();
let Card_Departemnt = document.querySelectorAll(".Section__Card--Departemnt")
let Card_Employe = document.querySelectorAll(".Section__Card--Employee")
let Card_Service = document.querySelectorAll(".Service__List--item")

let openModal = function (e) {
    e.preventDefault()
    const target = document.querySelector(e.target.getAttribute('href'))
    target.style.display = null
    target.removeAttribute('aria-hidden')
    target.setAttribute('aria-modal', 'true')
    modal = target
    modal.addEventListener('click', closeModal)
    modal.querySelector('js-modal-close').addEventListener('click', closeModal);
    modal.querySelector('js-modal-stop').addEventListener('click', stopPropagation);
}

const closeModal = function (e) {
    if (modal === null) return 
    e.preventDefault()
    window.setTimeout(function () {
        modal.style.display = "none"
        modal = null
    }, 500)
    modal.setAttribute('aria-hidden', 'true')
    modal.removeAttribute('aria-modal')
    modal.removeEventListener('click', closeModal)
    modal.querySelector('js-modal-close').removeEventListener('click', closeModal);
    modal.querySelector('js-modal-stop').removeEventListener('click', stopPropagation);
}

const stopPropagation = function (e) {
    e.stopPropagation()
}

document.querySelectorAll('.js-modal').forEach(a => {
    a.addEventListener('click', openModal)
})

window.addEventListener('keydown', function (e) {
    if (e.key === "Escape" || e.key === "Esc") {
        closeModal(e)
    }
})

text.from(".Section__Title", 1.8, {
    y: -20,
    ease: "power4.out",
    delay: 1,
    opacity: 0,
    stagger: {
        amount: 0.3
    }
})

gsap.from(Card_Departemnt, {
    duration: 4,
    scale: 0.1,
    opacity: 0,
    delay: 0.6,
    stagger: 0.2,
    ease: "elastic",
    force3D: true
});

gsap.from(Card_Employe, {
    duration: 4,
    scale: 0.1,
    opacity: 0,
    delay: 0.6,
    stagger: 0.2,
    ease: "elastic",
    force3D: true
});

gsap.from(Card_Service, {
    duration: 4,
    scale: 0.1,
    opacity: 0,
    delay: 0.6,
    stagger: 0.2,
    ease: "elastic",
    force3D: true
});