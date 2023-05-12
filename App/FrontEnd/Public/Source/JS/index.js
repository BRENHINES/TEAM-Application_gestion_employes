//let container = document.getElementById('container');
//let overlayCon = document.getElementById('overlayCon');
//let overlayBtn = document.getElementById('overlayBtn');

// Sidebar switchable tabs
function _class(name) {
    return document.getElementsByClassName(name);
}

let tabs = _class("sidebar")[0].getElementsByTagName("a");

for(let i=0; i<tabs.length; i++){
    tabs[i].addEventListener("click", function(){
        _class("sidebar")[0].getElementsByClassName("active")[0].classList.remove("active");
        tabs[i].classList.add("active");
    })
}


