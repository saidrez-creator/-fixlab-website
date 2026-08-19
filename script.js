document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const nav = document.getElementById("nav");

  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => nav.classList.toggle("open"));
    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => nav.classList.remove("open"));
    });
  }

  document.getElementById("year").textContent = new Date().getFullYear();

  // Replace this number with the FIXLAB WhatsApp number, including country code.
  const phone = "213602410264";
  const message = "Hola FIXLAB, necesito información sobre una reparación.";
  const whatsappBtn = document.getElementById("whatsappBtn");

  if (whatsappBtn) {
    whatsappBtn.href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  }
});
