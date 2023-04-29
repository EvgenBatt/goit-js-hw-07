import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const imageCard = galleryItems.reduce((acc, { preview, original, description }) => {
  return (acc += `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`);
}, "");

gallery.insertAdjacentHTML("afterbegin", imageCard);

let instance;

gallery.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.classList.contains("gallery__image")) {
    const imageSrc = event.target.dataset.source;
    instance = basicLightbox.create(`<img src="${imageSrc}" width="1280">`);
    instance.show();
  }
});

const closeInstance = (event) => {
  if (event.code === "Escape") {
    instance.close();
  }
};

document.addEventListener("keydown", closeInstance);

if (instance) {
  instance.element().addEventListener("click", () => {
    document.removeEventListener("keydown", closeInstance);
  });
}

console.log(galleryItems);
