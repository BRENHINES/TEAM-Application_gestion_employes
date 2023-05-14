let modal = null
let stats_card = document.querySelectorAll(".Main__Stastistics--Card")
let Emp_List = document.querySelectorAll("tr")
let Project_List = document.querySelectorAll(".Project")
let Meet_List = document.querySelectorAll(".item")
let text = gsap.timeline();

// FEAT: Fonction pour la gestion des Modal
let openModal = function (e) {
    e.preventDefault();
    const target = document.querySelector(e.target.getAttribute('href'));
    target.style.display = null
    target.removeAttribute('aria-hidden')
    target.setAttribute('aria-modal', 'true')
    modal = target
    modal.addEventListener('click', closeModal)
    modal.querySelector('js-modal-close').addEventListener('click', closeModal)
    modal.querySelector('js-modal-stop').addEventListener('click', stopPropagation)
}

let closeModal = function (e) {
    if (modal === null) return 
    e.preventDefault()
    window.setTimeout(function () {
        modal.style.display = "none"
        modal = null
    }, 500)
    modal.setAttribute('aria-hidden', 'true')
    modal.removeAttribute('aria-modal')
    modal.removeEventListener('click', closeModal)
    modal.querySelector('js-modal-close').removeEventListener('click', closeModal)
    modal.querySelector('js-modal-stop').removeEventListener('click', stopPropagation)
}

const stopPropagation = function (e) {
    e.stopPropagation()
}

document.querySelectorAll('.js-modal').forEach(a => {
    a.addEventListener('click', openModal)
})

// FEAT: Fonction pour la gestion des onglets clickables
function _class(name) {
    return document.getElementsByClassName(name);
}

let tabs = _class("Sidebar__Main")[0].getElementsByTagName("a");

for(let i=0; i<tabs.length; i++){
    tabs[i].addEventListener("click", function(){
        _class("Sidebar__Main")[0].getElementsByClassName("active")[0].classList.remove("active");
        tabs[i].classList.add("active");
    })
}

// FEAT: Animations sur les cards du dashboard
gsap.from([stats_card, ".Main__Projects > div", "table"], {
    duration: 4,
    scale: 0.1,
    opacity: 0,
    delay: 0.6,
    stagger: 0.2,
    ease: "elastic",
    force3D: true
});

gsap.from([Emp_List, Project_List, Meet_List], {
    duration: 3,
    scale: 0.8,
    opacity: 0,
    delay: 0.3,
    stagger: 0.1,
    ease: "elastic"
});

text.from(".Part__Title", 1.8, {
    y: -20,
    ease: "power4.out",
    delay: 1,
    opacity: 0,
    stagger: {
        amount: 0.3
    }
})

