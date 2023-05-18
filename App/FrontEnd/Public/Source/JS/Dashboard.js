let stats_card = document.querySelectorAll(".Main__Stastistics--Card")
let Emp_List = document.querySelectorAll("tr")
let Project_List = document.querySelectorAll(".Project")
let Meet_List = document.querySelectorAll(".item")
let text = gsap.timeline();
let LogOut = document.querySelector(".LogOut")
let DashPopup = document.querySelector(".Dashboard__Popup")
let DashPopupClose = document.querySelector(".Btn__Close")
let DashPopupCancel = document.querySelector(".Cancel")

// Initialisation des Sections
let Dashboard = document.querySelector(".Dash")

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

// FEAT: Popup de déconnexion
LogOut.addEventListener("click", function() {
    DashPopup.classList.add("active")
})

DashPopupClose.addEventListener("click", function() {
    DashPopup.classList.remove("active")
    LogOut.classList.remove("active")
    Dashboard.classList.add("active")
})

DashPopupCancel.addEventListener("click", function() {
    DashPopup.classList.remove("active")
    LogOut.classList.remove("active")
    Dashboard.classList.add("active")
})

