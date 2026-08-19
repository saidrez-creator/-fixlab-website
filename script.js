document.addEventListener("DOMContentLoaded", function () {
    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    const menuButton = document.querySelector(".menu-button");
    const nav = document.querySelector("nav");

    if (menuButton && nav) {
        menuButton.addEventListener("click", function () {
            nav.classList.toggle("active");
        });
    }

    const whatsappButtons = document.querySelectorAll(".whatsapp");

    whatsappButtons.forEach(function (button) {
        button.addEventListener("click", function (event) {
            event.preventDefault();

            const phone = "213XXXXXXXXX";
            const message = "hola FIXLAB, quiero consultar sobre un servicio o producto.";

            window.open(
                "https://wa.me/" +
                phone +
                "?text=" +
                encodeURIComponent(message),
                "_blank"
            );
        });
    });
});
