document.addEventListener("DOMContentLoaded",function(){
  const phone="213XXXXXXXXX"; // بدّل X برقم WhatsApp تاعك بلا + ولا مسافات
  const message="سلام FIX LAB، حاب نسقسي على منتوج أو خدمة.";
  document.querySelectorAll("[data-whatsapp]").forEach(function(el){
    el.href="https://wa.me/"+phone+"?text="+encodeURIComponent(message);
    el.target="_blank";
    el.rel="noopener";
  });
  const btn=document.querySelector(".menu-btn"),nav=document.querySelector(".nav");
  if(btn&&nav){btn.addEventListener("click",()=>nav.classList.toggle("open"));nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));}
  const y=document.getElementById("year"); if(y)y.textContent=new Date().getFullYear();
});
