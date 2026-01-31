const roles = [
    "Frontend Developer",
    "Java Developer",
    "Software Engineer"
];

const roleText = document.getElementById("role");
let index = 0;

function changeRole() {
    gsap.to(roleText, {
        opacity: 0,
        y: -10,
        duration: 0.4,
        onComplete: () => {
            roleText.textContent = roles[index];
            index = (index + 1) % roles.length;

            gsap.to(roleText, {
                opacity: 1,
                y: 0,
                duration: 0.4
            });
        }
    });
}

setInterval(changeRole, 2000);
