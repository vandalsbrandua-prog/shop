const header = document.querySelector(".header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>30){

        header.classList.add("header-scroll");

    }else{

        header.classList.remove("header-scroll");

    }

});

const philosophyItems = document.querySelectorAll(".philosophy-item");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("active");

        }

    });

},{
    threshold:.35
});

philosophyItems.forEach(item=>observer.observe(item));

philosophyItems.forEach(item=>observer.observe(item));

const track = document.querySelector(".testimonial-track");

const slides = document.querySelectorAll(".testimonial");

const next = document.querySelector(".next");

const prev = document.querySelector(".prev");

let index = 0;

function updateSlider(){

    track.style.transform = `translateX(-${index * 100}%)`;

}

next.addEventListener("click",()=>{

    index++;

    if(index>=slides.length){

        index=0;

    }

    updateSlider();

});

prev.addEventListener("click",()=>{

    index--;

    if(index<0){

        index=slides.length-1;

    }

    updateSlider();

});

setInterval(()=>{

    index++;

    if(index>=slides.length){

        index=0;

    }

    updateSlider();

},5000);

document.querySelectorAll(".faq-question").forEach(btn=>{

    btn.onclick=()=>{

        const item=btn.parentElement;

        document.querySelectorAll(".faq-item").forEach(el=>{

            if(el!==item){

                el.classList.remove("active");

            }

        });

        item.classList.toggle("active");

    }

});
