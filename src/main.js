import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';

import 'izitoast/dist/css/iziToast.min.css';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchImages } from './js/pixabay-api.js';
import { renderMarkup, createGalleryMarkup } from './js/render-functions.js';

document.addEventListener('DOMContentLoaded', () => {
  const refs = {
    form: document.querySelector('.search-form'),
    gallery: document.querySelector('.gallery'),
    spinner: document.querySelector('.spinner'),
  };

  const toggleLoading = () => {
    refs.gallery.classList.toggle('loading');
    refs.spinner.classList.toggle('loading');
  };

  const showError = (
    message = 'Sorry, there are no images matching your search query. Please try again!'
  ) => {
    iziToast.error({
      message,
      position: 'topRight',
    });
  };

  const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
  });

  refs.form.addEventListener('submit', e => {
    e.preventDefault();
    const query = refs.form.query.value.trim();

    if (!query) {
      showError('Please enter a valid search query.');
      return;
    }

    refs.gallery.innerHTML = '';
    toggleLoading();

    fetchImages({ query })
      .then(images => {
        if (images.length) {
          renderMarkup({
            ref: refs.gallery,
            markup: createGalleryMarkup(images),
          });

          lightbox.refresh();
        } else {
          showError();
        }

        toggleLoading();
      })
      .catch(e => {
        showError(
          'An error occurred while fetching the images. Please try again later.'
        );
        toggleLoading();
      });
  });
});
