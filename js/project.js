const icon = document.querySelector(".fa-bars");
const menu = document.querySelector("#menu");
var cards = document.querySelectorAll(".project-card");

icon.addEventListener("click", () => {
    menu.classList.toggle("active");
});
cards.forEach((card) => {
    gsap.to(card, {
        x: -30,
        duration: 1,
        stagger: 0.2
    });
});


