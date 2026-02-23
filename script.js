function goTo(page) {
  window.location.href = page;
}

function openLightbox(event, src) {
  event.stopPropagation(); // جلوگیری از رفتن به صفحه
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightbox-img").src = src;
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function toggleText(el) {
  const slide = el.closest(".slide");
  const desc = slide.querySelector(".desc");

  desc.classList.toggle("show");
}
