let myLibrary = [
    {title: 'Tazwar', author: 'Mohammed', pages: 366, read: true},
    {title: 'Tazwar', author: 'Mohammed', pages: 366, read: true},
    {title: 'Tazwar', author: 'Mohammed', pages: 366, read: true},
    {title: 'Tazwar', author: 'Mohammed', pages: 366, read: true},
    {title: 'Tazwar', author: 'Mohammed', pages: 366, read: true},
    {title: 'Tazwar', author: 'Mohammed', pages: 366, read: true},
    {title: 'Tazwar', author: 'Mohammed', pages: 366, read: true},
    {title: 'Tazwar', author: 'Mohammed', pages: 366, read: true},
    {title: 'Tazwar', author: 'Mohammed', pages: 366, read: true},
    {title: 'Tazwar', author: 'Mohammed', pages: 366, read: true},
    {title: 'Tazwar', author: 'Mohammed', pages: 366, read: true},
    {title: 'Tazwar', author: 'Mohammed', pages: 366, read: true},
    {title: 'Tazwar', author: 'Mohammed', pages: 366, read: true},
    {title: 'Tazwar', author: 'Mohammed', pages: 366, read: true},
    {title: 'Tazwar', author: 'Mohammed', pages: 366, read: true},
    {title: 'Tazwar', author: 'Mohammed', pages: 366, read: true},
    {title: 'Tazwar', author: 'Mohammed', pages: 366, read: true},
    {title: 'Tazwar', author: 'Mohammed', pages: 366, read: true},
    {title: 'Tazwar', author: 'Mohammed', pages: 366, read: true},
    {title: 'Tazwar', author: 'Mohammedsdsdsdsdsdsdsd', pages: 366, read: true},
    {title: 'Tazwar', author: 'Mohammedsdsdsdsdsdsdsd', pages: 366, read: true},
];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayBooks() {
  const libraryContainer = document.getElementById('library-container');
  libraryContainer.innerHTML = '';

  myLibrary.forEach((book, index) => {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    bookCard.innerHTML = `
        <button class="closeButton" onclick="removeBook(${index})">X</button>
        <p><strong>Title:</strong> ${book.title}</p>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Pages:</strong> ${book.pages}</p>
        <p><strong>Read:</strong> ${book.read ? 'Yes' : 'No'}</p>

    `;
    libraryContainer.appendChild(bookCard);
  });
}

function addBook(event) {
  event.preventDefault();

  const titleInput = document.getElementById('title');
  const authorInput = document.getElementById('author');
  const pagesInput = document.getElementById('pages');
  const readInput = document.getElementById('read');

  const newBook = new Book(
    titleInput.value,
    authorInput.value,
    parseInt(pagesInput.value),
    readInput.checked
  );

  addBookToLibrary(newBook);
  displayBooks();

  // Reset the form
  titleInput.value = '';
  authorInput.value = '';
  pagesInput.value = '';
  readInput.checked = false;

  // Hide the form
  const formContainer = document.getElementById('form-container');
  formContainer.style.display = 'none';
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  displayBooks();
}

function toggleReadStatus(index) {
  myLibrary[index].read = !myLibrary[index].read;
  displayBooks();
}

function showForm() {
  const formContainer = document.getElementById('form-container');
  formContainer.style.display = 'block';
}

// Initial display of books
displayBooks();