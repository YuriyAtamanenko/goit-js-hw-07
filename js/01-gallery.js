import { galleryItems } from "./gallery-items.js";
// Change code below this line

const ImgsContainer = document.querySelector(".gallery");

ImgsContainer.addEventListener("click", onOpenOriginalImg);

const createImgMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img loading="lazy"
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
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
  onCreateModal(evt.target.dataset.source);
}

function onCreateModal(original) {
  const instance = basicLightbox.create(`
    <div class="modal">
        <img 
           src="${original}"
        />
    </div>
`);
  instance.show();

  window.addEventListener("keydown", onEscCloseModal);
  function onEscCloseModal(evt) {
    if (evt.code === "Escape") {
      instance.close();
    }
  }

  const modal = document.querySelector(".modal");
  modal.addEventListener("click", onClickCloseModal);
  function onClickCloseModal() {
    instance.close();
  }
}
