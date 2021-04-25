export default async function addFavourites(videos) {
  // console.log(videos, 'Antes de la promesa');
  const favourites = JSON.parse(localStorage.getItem('videosFavourites'));
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (videos) {
        // console.log(favourites, 'Antes de...');
        favourites.push(videos);
        // console.log(favourites, 'Después de...');
        localStorage.setItem('videosFavourites', JSON.stringify(favourites));
        return resolve(JSON.parse(localStorage.getItem('videosFavourites')));
      }
      return reject(new Error(`Don't add favourite`));
    }, 500);
  });
}
