async function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  // try {
  //   const response = await fetch('https://anapioficeandfire.com/api/books');
  //   if (!response.ok) {
  //     throw new Error('Network response was not ok');
  //   }
  //   const books = await response.json();
  //   renderBooks(books);
  // } catch (error) {
  //   console.error('Error fetching books:', error);
  // }
  fetch("https://anapioficeandfire.com/api/books")
  .then((resp) => resp.json())
  .then((json) => console.log(json));

}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

// document.addEventListener('DOMContentLoaded', function() {
//   fetchBooks();
// });



module.exports = {
  fetchBooks
};

