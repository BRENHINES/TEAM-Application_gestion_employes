// Initialisation des variables
let Container = document.getElementById('Container');
let OverlayCon = document.getElementById('OverlayCon');
let OverlayBtn = document.getElementById('OverlayBtn');

// Animations de la Page de Chargement
gsap.fromTo('.Loading__Page', {opacity:1}, {
    opacity:0,
    display: "none",
    duration: 2,
    delay: 3.5,
});

gsap.fromTo('.Loading__Logo', {opacity:0}, {
    opacity:1,
    duration: .5,
    delay: 1.5,
});

gsap.fromTo('.Logo', {opacity:0}, {
    opacity:1,
    duration: 1.5,
    delay: 1.70,
});

gsap.fromTo('.Name', {
    y: 50,
    opacity: 0,
}, {
    y: 0,
    opacity:1,
    duration: 1.5,
    delay: .5,
});


// Animations de la page de Connexion
OverlayBtn.addEventListener('click', () => {
    Container.classList.toggle('panel--active');
});

// Animations pour les Formulaires de Connexion
function HidePassword1() {
    var Field = document.getElementById("PasswordField1");
    var HideIcon = document.getElementById("PasswordHide1");
    var VisibleIcon = document.getElementById("PasswordVisible1");

    if(Field.type === 'password') {
        Field.type = "text";
        HideIcon.style.display = "none";
        VisibleIcon.style.display = "block";
    }
    else {
        Field.type = "password";
        HideIcon.style.display = "block";
        VisibleIcon.style.display = "none";
    }
}

function HidePassword2() {
    var Field = document.getElementById("PasswordField2");
    var HideIcon = document.getElementById("PasswordHide2");
    var VisibleIcon = document.getElementById("PasswordVisible2");

    if(Field.type === 'password') {
        Field.type = "text";
        HideIcon.style.display = "none";
        VisibleIcon.style.display = "block";
    }
    else {
        Field.type = "password";
        HideIcon.style.display = "block";
        VisibleIcon.style.display = "none";
    }
}