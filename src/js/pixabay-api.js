export const fetchImages = ({ query }) => {
  return fetch(
    `https://pixabay.com/api/?key=18172942-eab38dca32c93699ea5d62826&q=${encodeURI(
      query
    )}&image_type=photo&orientation=horizontal&safesearch=true`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(images => {
      return images.hits.map(
        ({
          comments,
          downloads,
          likes,
          views,
          largeImageURL,
          webformatURL,
          tags,
        }) => ({
          comments,
          downloads,
          likes,
          views,
          largeImageURL,
          webformatURL,
          tags,
        })
      );
    })
    .catch(e => console.log(e));
};
