let Profile_Card_Left = document.querySelector("Profile__Content--left")
let Profile_Card_Right = document.querySelector("Profile__Content--right")

function _class(name) {
    return document.getElementsByClassName(name);
}

let tabs_ = _class("Profile__Tabs")[0].getElementsByTagName("a");

for(let i=0; i<tabs_.length; i++){
    tabs_[i].addEventListener("click", function(){
        _class("Profile__Tabs")[0].getElementsByClassName("active")[0].classList.remove("active");
        tabs_[i].classList.add("active");
    })
}

gsap.from(".Profile__Content--left", {
    duration: 4,
    scale: 0.9,
    opacity: 0,
    delay: 0.6,
    stagger: 0.2,
    ease: "elastic",
    force3D: true
})

gsap.from(".Profile__Content--right", {
    duration: 4,
    scale: 0.9,
    opacity: 0,
    delay: 0.8,
    stagger: 0.2,
    ease: "elastic",
    force3D: true
})