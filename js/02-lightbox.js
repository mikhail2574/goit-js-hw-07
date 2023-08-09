import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
let container = document.querySelector(".gallery");

const markup = galleryItems
  .map((item) => {
    const { preview, original, description } = item;
    return `<li class="gallery__item">
   <a class="gallery__link" href="${preview}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
  })
  .join("");

container.innerHTML = markup;

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
