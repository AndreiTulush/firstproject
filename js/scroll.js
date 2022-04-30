const navLink = document.querySelectorAll('.nav__link');


navLink.forEach(item => {
    item.addEventListener('click', e => {
        e.preventDefault();

        const id = item.getAttribute('href').substring(1);
        const section = document.getElementById(id);


        if (section) {
            seamless.scrollIntoView(section, {
                behavior: "smooth",
                block: "center",
                inline: "center",
            });
        };

    });
});
