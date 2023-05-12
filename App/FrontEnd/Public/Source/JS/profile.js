function _class(name) {
    return document.getElementsByClassName(name);
}


let tabs_ = _class("profile-tabs")[0].getElementsByTagName("a");

for(let i=0; i<tabs_.length; i++){
    tabs_[i].addEventListener("click", function(){
        _class("profile-tabs")[0].getElementsByClassName("active")[0].classList.remove("active");
        tabs_[i].classList.add("active");
    })
}