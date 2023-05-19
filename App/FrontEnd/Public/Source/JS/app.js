let text = gsap.timeline();
let Card_Departemnt = document.querySelectorAll(".Section__Card--Departemnt")
let Card_Employe = document.querySelectorAll(".Section__Card--Employee")
let Card_Service = document.querySelectorAll(".Service__List--item")

let PopupCardOpen = document.querySelector(".Section__Card--Departemnt > div")

// Initialisation des Popups
let Btn__PopupOpen = document.querySelector(".Btn__PopupOpen")
let Popup = document.querySelector(".Popup")
let PopupClose = document.querySelector(".Btn__Close")
let PopupCancel = document.querySelector(".Cancel")
let PopupCard = document.querySelector(".Card__Popup")
let PopupMod = document.querySelector(".PopupMod")

let Cancel = document.querySelector(".Cancel--Card")
let Close = document.querySelector(".Close--Card")

let Pen = document.querySelector(".bxs-pen")
let Trash = document.querySelector(".bxs-trash")

Btn__PopupOpen.addEventListener("click", function() {
    Popup.classList.add("active");
})

PopupClose.addEventListener("click", function() {
    Popup.classList.remove("active");
})

PopupCancel.addEventListener("click", function() {
    Popup.classList.remove("active");
})

Close.addEventListener("click", function() {
    PopupCard.classList.remove("active")
})

Cancel.addEventListener("click", function() {
    PopupCard.classList.remove("active")
})

PopupCardOpen.addEventListener("click", function() {
    PopupCard.classList.add("active");
})


// FEAT: Animations GSAP sur les composents
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