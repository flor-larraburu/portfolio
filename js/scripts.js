document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const images = carousel.querySelectorAll("img");
  const symbols = document.querySelectorAll(".symbol");

  let index = 0;
  const totalImages = images.length;

  function showImage() {
    images.forEach((img) => (img.style.display = "none"));
    images[index].style.display = "block";
  }

  function nextImage() {
    index = (index + 1) % totalImages;
    showImage();
  }

  function prevImage() {
    index = (index - 1 + totalImages) % totalImages;
    showImage();
  }

  symbols.forEach((symbol) => {
    symbol.addEventListener("click", function () {
      if (this.classList.contains("prev")) {
        prevImage();
      } else if (this.classList.contains("next")) {
        nextImage();
      }
    });
  });

  showImage(); // Mostrar la primera imagen al cargar la página
});
