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
