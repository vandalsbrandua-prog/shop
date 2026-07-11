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

const testimonialSwiper = new Swiper(".testimonial-slider",{

    loop:true,

    centeredSlides:true,

    grabCursor:true,

    spaceBetween:30,

    speed:700,

    slidesPerView:1.15,

    autoplay:{

        delay:3500,

        disableOnInteraction:false,

    },

    pagination:{

        el:".swiper-pagination",

        clickable:true,

    },

    navigation:{

        nextEl:".swiper-button-next",

        prevEl:".swiper-button-prev",

    },

    breakpoints:{

        768:{

            slidesPerView:1.6,

        },

        1200:{

            slidesPerView:2.2,

        }

    }

});
});
