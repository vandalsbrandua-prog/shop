// 1. Хедер при скролі
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
        header.classList.add("header-scroll");
    } else {
        header.classList.remove("header-scroll");
    }
});

// 2. Паралакс для об'єкта
const hero = document.querySelector(".hero-object");
let mouseX = 0;
let mouseY = 0;

document.addEventListener("mousemove", (e) => {
    mouseX = (e.clientX - window.innerWidth / 2) / 40;
    mouseY = (e.clientY - window.innerHeight / 2) / 40;
});

function animate() {
    if (hero) {
        hero.style.transform = `translate(${-mouseX}px, ${-mouseY}px)`;
    }
    requestAnimationFrame(animate);
}

if (hero) {
    animate();
}
