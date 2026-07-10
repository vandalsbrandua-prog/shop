const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {
        header.classList.add("header-scroll");
    } else {
        header.classList.remove("header-scroll");
    }

});

const hero = document.querySelector(".hero-object");

document.addEventListener("mousemove",(e)=>{

    if(!hero) return;

    const x=(e.clientX-window.innerWidth/2)/40;
    const y=(e.clientY-window.innerHeight/2)/40;

    hero.style.transform=
    `translate(${-x}px,${-y}px)`;

});
