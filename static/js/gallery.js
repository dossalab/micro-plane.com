import PhotoSwipeLightbox from '/js/photoswipe-lightbox.esm.min.js';
import PhotoSwipe from '/js/photoswipe.esm.min.js';

const lightbox = new PhotoSwipeLightbox({
  gallery: '.click-to-enlarge-gallery',
  children: 'a',
  pswpModule: PhotoSwipe
});

lightbox.init();
