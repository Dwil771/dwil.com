/* ==========================
   MENU MOBILE
========================== */

const menuBtn = document.getElementById("menuBtn");

const nav = document.querySelector(".navbar nav");

if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}


/* ==========================
   SCROLL
========================== */

function scrollToSection(id) {

    const section = document.getElementById(id);

    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }

}


/* ==========================
   MENU ATIVO DO PERFIL
========================== */

const profileLinks = document.querySelectorAll(".profile-menu a");

const profileSections = document.querySelectorAll("main section[id]");

const profileObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            const activeId = entry.target.getAttribute("id");

            profileLinks.forEach(link => {
                const isActive = link.getAttribute("href") === `#${activeId}`;
                link.classList.toggle("active", isActive);
            });
        });
    },
    {
        threshold: 0.45
    }
);

profileSections.forEach(section => profileObserver.observe(section));

profileLinks.forEach(link => {
    link.addEventListener("click", () => {
        profileLinks.forEach(item => item.classList.remove("active"));
        link.classList.add("active");
    });
});


/* ==========================
   ANIMAÇÃO DAS HABILIDADES
========================== */

const progressBars =
    document.querySelectorAll(".progress-bar");


const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    const width =
                        entry.target.dataset.width;

                    entry.target.style.width =
                        width;

                }

            });

        },

        {
            threshold: 0.5
        }

    );


progressBars.forEach(bar => {

    observer.observe(bar);

});


/* ==========================
   FORMULÁRIO
========================== */

const form =
    document.getElementById("contactForm");


if (form) {
    form.addEventListener("submit", function(event) {

        event.preventDefault();

        alert(
            "Mensagem preparada! Em breve vamos ligar este formulário ao backend."
        );

        form.reset();

    });
}


/* ==========================
   ANIMAÇÃO DOS CARDS
========================== */

const cards =
    document.querySelectorAll(
        ".about-card, .project-card, .skill"
    );


const cardObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                }

            });

        },

        {
            threshold: 0.15
        }

    );


cards.forEach(card => {

    card.classList.add("reveal");

    cardObserver.observe(card);

});

/* ==========================
   ANIMAÇÃO DAS SEÇÕES
========================== */

const sections = document.querySelectorAll(".section");

const sectionObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    },
    {
        threshold: 0.15
    }
);

sections.forEach(section => {
    section.classList.add("reveal");
    sectionObserver.observe(section);
});