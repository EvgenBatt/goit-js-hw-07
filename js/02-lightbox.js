import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const imageCard = galleryItems.reduce((acc, { preview, original, description }) => {
  return (acc += `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`);
}, "");

gallery.insertAdjacentHTML("afterbegin", imageCard);

const galleryLightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionsPosition: "bottom",
  captionDelay: 250,
});

console.log(galleryItems);
