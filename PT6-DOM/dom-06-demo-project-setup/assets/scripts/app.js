// const addMovieModal = document.querySelector('#add-modal')
// const addMovieModal = document.body.children[1];
const addMovieModal = document.getElementById('add-modal'); // better performance and ID should be used
// accessing the first button
const startAddMovieButton = document.querySelector('header button');
// const startAddMovieButton = document.querySelector('header').lastElementChild // when ever we change will not work because js will select wrong element if we change content on page
const backDrop = document.getElementById('backdrop');
// access to cancel movie button on line 30
const cancelAddMoiveButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMoiveButton.nextElementSibling;
// want to access all the input data from user, returns array like objects
const userInputs = addMovieModal.querySelectorAll('input');
// const userInputs = addMovieModal.getElementsByTagName('input')
const entryTextSection = document.getElementById('entry-text');
const deleteMovieModal = document.getElementById('delete-modal');

// will store the userInputs
const movies = [];
// to cover up the page with movies displayed
const updateUi = () => {
	if (movies.length === 0) {
		entryTextSection.style.display = 'block';
	} else {
		entryTextSection.style.display = 'none';
	}
};

const deleteMovie = (movieId) => {
	let movieIndex = 0;
	for (const movie of movies) {
		if (movie.id === movieId) {
			break;
		}
		movieIndex++;
	}
	// want to remove from movie array and the next element in the array will move up in its place
	movies.splice(movieIndex, 1);
	const listRoot = document.getElementById('movie-list');
	listRoot.children[movieIndex].remove();
};

const closeMovieDeletionModal = () => {
	toggleBackDrop();
	deleteMovieModal.classList.remove('visible');
};

const deleteMovieHandler = (movieId) => {
	deleteMovieModal.classList.add('visible');
	toggleBackDrop();
	// deleteMovie(movieId);
};
const renderNewMovieElement = (id, title, imageUrl, rating) => {
	const newMovieElement = document.createElement('li');
	newMovieElement.className = 'movie-element';
	newMovieElement.innerHTML = `
    <div class="movie-element__image">
      <img src="${imageUrl}" alt="${title}">
    </div>
    <div class="movie-element__info">
      <h2>${title}</h2>
      <p>${rating}/5 stars</p>
    </div>
  `;
	newMovieElement.addEventListener('click', deleteMovieHandler.bind(null, id));
	const listRoot = document.getElementById('movie-list');
	listRoot.append(newMovieElement);
};

const toggleBackDrop = () => {
	// will toggle backdrop and we can use it anywhere
	backDrop.classList.toggle('visible');
};

const closeMovieModal = () => {
	addMovieModal.classList.remove('visible');
};

const showMovieModal = () => {
	// checks if a class is on the element and if it is it removes and if its not it will add it
	addMovieModal.classList.add('visible');
	toggleBackDrop();
};
const clearMovieInput = () => {
	// userInputs[0].value = ''
	for (const data of userInputs) {
		data.value = '';
	}
};

const cancelAddmovieHandler = () => {
	closeMovieModal();
	// want to toggle movie modal so we can get out of the add movie modal
	clearMovieInput();
};

const addMovieHandler = () => {
	// want to select all the values that were inputed by the user, validate them(checking if empty), then add movie object
	const titleValue = userInputs[0].value; // title input
	const imgUrlValue = userInputs[1].value; // title input
	const ratingValue = userInputs[2].value; // title input
	// trim removes whitespace
	if (
		titleValue.trim() === '' ||
		imgUrlValue.trim() === '' ||
		ratingValue.trim() === '' ||
		+ratingValue < 1 ||
		+ratingValue > 5
	) {
		alert('Please enter valid values (rating between 1 and 5).');
		return;
	}
	const newMovie = {
		id: Math.random().toString(),
		title: titleValue,
		image: imgUrlValue,
		rating: ratingValue
	};
	// will store the new movie object into the movies array
	movies.push(newMovie);
	console.log(movies);
	closeMovieModal();
	toggleBackDrop();
	clearMovieInput();
	renderNewMovieElement(
		newMovie.id,
		newMovie.title,
		newMovie.image,
		newMovie.rating
	);
	updateUi();
};

const backDropClickHandler = () => {
	closeMovieModal();
	closeMovieDeletionModal();
};

startAddMovieButton.addEventListener('click', showMovieModal);
// addEventListner on backdrop so we can exit out of the backdrop
backDrop.addEventListener('click', backDropClickHandler);
cancelAddMoiveButton.addEventListener('click', cancelAddmovieHandler);
confirmAddMovieButton.addEventListener('click', addMovieHandler);
