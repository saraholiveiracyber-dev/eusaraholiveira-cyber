/* =========================================================
   CASA, CAFÉ & CONTEÚDO
   SCRIPT.JS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ROLAGEM SUAVE
    ====================================================== */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", event => {

            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* =====================================================
       ANIMAÇÃO DOS ELEMENTOS AO ENTRAR NA TELA
    ====================================================== */

    const animatedElements = document.querySelectorAll(
        ".problem-card, .content-card, .audience-item, .benefit-list div, .included-list > div"
    );

    const observer = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    animatedElements.forEach(element => {

        element.classList.add("scroll-animation");

        observer.observe(element);

    });


    /* =====================================================
       RASTREAMENTO DOS BOTÕES DE COMPRA
    ====================================================== */

    document.querySelectorAll('a[href*="kiwify.com.br"]').forEach(button => {

        button.addEventListener("click", () => {

            console.log(
                "Clique no checkout:",
                button.href
            );

        });

    });


    /* =====================================================
       ANO AUTOMÁTICO
    ====================================================== */

    document.querySelectorAll(".current-year").forEach(element => {

        element.textContent = new Date().getFullYear();

    });


    /* =====================================================
       FAQ
    ====================================================== */

    const faqItems = document.querySelectorAll(".faq details");

    faqItems.forEach(item => {

        item.addEventListener("toggle", () => {

            if (item.open) {

                faqItems.forEach(otherItem => {

                    if (otherItem !== item) {
                        otherItem.removeAttribute("open");
                    }

                });

            }

        });

    });

});
