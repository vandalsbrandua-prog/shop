/* ===========================
   VANDALS 2026
=========================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ===========================
       HEADER
    =========================== */

    const header = document.querySelector(".header");

    const updateHeader = () => {
        header?.classList.toggle("header-scroll", window.scrollY > 30);
    };

    updateHeader();

    window.addEventListener("scroll", updateHeader);


    /* ===========================
       SMOOTH SCROLL
    =========================== */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", e => {

            const target = document.querySelector(link.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    /* ===========================
       HERO PARALLAX
    =========================== */

    const hero = document.querySelector(".hero-right");

    document.addEventListener("mousemove", e => {

        if (!hero) return;

        const x = (e.clientX - window.innerWidth / 2) / 45;
        const y = (e.clientY - window.innerHeight / 2) / 45;

        hero.style.transform =
            `translate3d(${x}px, ${y}px, 0)`;

    });


    /* ===========================
       TILT PRODUCTS
    =========================== */

    document.querySelectorAll(".product").forEach(card => {

        card.addEventListener("mousemove", e => {

            const rect = card.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const rotateY = ((x / rect.width) - .5) * 12;
            const rotateX = ((y / rect.height) - .5) * -12;

            card.style.transform =
                `perspective(900px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-10px)`;

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform =
                "perspective(900px) rotateX(0) rotateY(0)";

        });

    });


    /* ===========================
       CATEGORY HOVER
    =========================== */

    document.querySelectorAll(".category-card").forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform = "translateY(-10px) scale(1.02)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "";

        });

    });


    /* ===========================
       FADE IN
    =========================== */

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            entry.target.classList.add("show");

        });

    }, {
        threshold: .15
    });


    document.querySelectorAll(
        ".hero-left, .category-card, .product, .section-title"
    ).forEach(el => {

        el.classList.add("hidden");

        observer.observe(el);

    });


    /* ===========================
       BLOBS
    =========================== */

    const blobs = document.querySelectorAll(".morph-blob");

    let angle = 0;

    function animate() {

        angle += 0.003;

        blobs.forEach((blob, index) => {

            const radius = 18 + index * 8;

            const x = Math.cos(angle + index) * radius;
            const y = Math.sin(angle + index) * radius;

            blob.style.translate = `${x}px ${y}px`;

        });

        requestAnimationFrame(animate);

    }

    animate();

});
