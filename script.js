// Navbar

const nav = document.getElementById("navbar");

window.addEventListener("scroll", function () {
    if (this.window.pageYOffset > 100) {
        nav.classList.add("navbar-background", "shadow");
    } else {
        nav.classList.remove("navbar-background", "shadow");
    }
});

// AOS Initialize
AOS.init({
    once: true,
    duration: 1000,
    delay: 300,
});

//Typing animation

let i = 0,
    text;
text = "Jangan pernah berhenti belajar karena dunia akan selalu mengajarmu";
function typing() {
    if (i < text.length) {
        document.getElementById("animate-typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 50);
    }
}

typing();
