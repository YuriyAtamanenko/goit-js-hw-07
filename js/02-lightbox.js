import { galleryItems } from "./gallery-items.js";
// Change code below this line

const ImgsContainer = document.querySelector(".gallery");

ImgsContainer.addEventListener("click", onOpenOriginalImg);

const createImgMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" />
   </a>
</li>`;
  })
  .join("");

ImgsContainer.innerHTML = createImgMarkup;

function onOpenOriginalImg(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  const lightbox = new SimpleLightbox(".gallery a");
}
