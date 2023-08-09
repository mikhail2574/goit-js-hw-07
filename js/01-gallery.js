import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

let container = document.querySelector(".gallery");

const markup = galleryItems
  .map((item) => {
    const { preview, original, description } = item;
    return `<li class="gallery__item">
  <a class="gallery__link" href="${preview}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
  })
  .join("");

container.innerHTML = markup;

container.addEventListener("click", (onClick) => {
  if (!onClick.target.classList.contains("gallery__image")) {
    return;
  }
  onClick.preventDefault();
  const instance = basicLightbox.create(`
        <img src="${onClick.target.getAttribute("data-source")}" alt="${
    onClick.target.alt
  }" width="800" height="600">
    `);
  instance.show();
  if (instance.visible()) {
    container.addEventListener("keydown", (event) => {
      if (event.key == "Escape") {
        instance.close();
      }
    });
  }
});
