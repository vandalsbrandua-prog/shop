const header=document.querySelector(‘.header’);

window.addEventListener(‘scroll’,()=>{ if(window.scrollY>40){
header.classList.add(‘header-scroll’); }else{
header.classList.remove(‘header-scroll’); } });

const hero=document.querySelector(‘.hero-object’);

document.addEventListener(‘mousemove’,e=>{ if(!hero) return;

    const x=(e.clientX/window.innerWidth-.5)*20;
    const y=(e.clientY/window.innerHeight-.5)*20;

    hero.style.transform=
        `rotateY(${x}deg) rotateX(${-y}deg) translateY(-6px)`;

});

document.querySelectorAll(‘.product-card’).forEach(card=>{

    card.addEventListener('mousemove',e=>{

        const r=card.getBoundingClientRect();

        const x=e.clientX-r.left-r.width/2;
        const y=e.clientY-r.top-r.height/2;

        card.style.transform=
            `rotateX(${-y/25}deg) rotateY(${x/25}deg) translateY(-12px)`;

    });

    card.addEventListener('mouseleave',()=>{
        card.style.transform='';
    });

});

if(window.gsap){

    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.hero-left>*',{
        opacity:0,
        y:80,
        duration:1,
        stagger:.15,
        ease:"power3.out"
    });

    gsap.from('.hero-object',{
        opacity:0,
        scale:.8,
        rotate:15,
        duration:1.5,
        ease:"power4.out"
    });

    gsap.utils.toArray('.section-title').forEach(el=>{

        gsap.from(el,{
            scrollTrigger:{
                trigger:el,
                start:"top 80%"
            },
            opacity:0,
            y:60,
            duration:1
        });

    });

    gsap.utils.toArray('.product-card').forEach(card=>{

        gsap.from(card,{
            scrollTrigger:{
                trigger:card,
                start:"top 90%"
            },
            opacity:0,
            y:80,
            duration:.8
        });

    });

    gsap.to('.hero-glow',{
        scale:1.15,
        duration:4,
        repeat:-1,
        yoyo:true,
        ease:"sine.inOut"
    });

}

document.querySelectorAll(‘a[href=“#”]’).forEach(a=>{
a.addEventListener(‘click’,e=>e.preventDefault()); });

console.log(“VANDALS 2026 Loaded”);
