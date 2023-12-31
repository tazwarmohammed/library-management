const libraryContainer = document.querySelector('#library-container');

const formContainer = document.querySelector('#form-container');

const formOpenBtn = document.querySelector('.add-book');

const deleteAllBtn = document.querySelector('.delete-all');

const formCloseBtn = document.querySelector('.form-cancel');


let myBooks = [
    {title: 'Tazwar', author: 'Mohammed', pages: 366, read: true},
    {title: 'Tazwar', author: 'Mohammedsdsdsdsdsdsdsd', pages: 36, read: true},
    {title: 'Tazwar', author: 'Mohammedsdsdsdsdsdsdsd', pages: 366, read: false},
];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

function displayBooks() {

  libraryContainer.innerHTML = '';

  myBooks.forEach((book, index) => {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    bookCard.innerHTML = `
        <button class="close-button" onclick="removeBook(${index})">&times;</button>
        <p><b>Title:</b> ${book.title}</p>
        <p><b>Author:</b> ${book.author}</p>
        <p><b>Pages:</b> ${book.pages}</p>
        <button class="read-status" style="background-color: ${book.read ? 'lightgreen' : 'palevioletred'}">${book.read ? 'Read' : 'Unread'}</button>
    `;
    libraryContainer.appendChild(bookCard);
  });

  document.querySelectorAll('.read-status').forEach((button, index) => {
    button.addEventListener('click', (e) => {
      toggleReadStatus(e, index);
    });
  });

  document.querySelectorAll('.read-status').forEach((button, index) => {
    button.addEventListener('mouseover', (e) => {
      overReadStatus(e, index);
    });
  });
  
  document.querySelectorAll('.read-status').forEach((button, index) => {
    button.addEventListener('mouseout', (e) => {
      outReadStatus(e, index);
    });
  });
}

function addBook(event) {
  const titleInput = document.getElementById('title');
  const authorInput = document.getElementById('author');
  const pagesInput = document.getElementById('pages');
  const readInput = document.getElementById('read');

  const book = new Book(
    titleInput.value,
    authorInput.value,
    parseInt(pagesInput.value),
    readInput.checked
  );

  myBooks.push(book);
  displayBooks();

  titleInput.value = '';
  authorInput.value = '';
  pagesInput.value = '';
  readInput.checked = false;
}

function removeBook(index) {
  myBooks.splice(index, 1);
  displayBooks();
}

function toggleReadStatus(e, index) {
  myBooks[index].read = !myBooks[index].read;
  if(myBooks[index].read) {
    e.target.style.backgroundColor = 'lightgreen';
    e.target.innerText = 'Read';
  } else {
    e.target.style.backgroundColor = 'palevioletred';
    e.target.innerText = 'Unread';
  }
}

function overReadStatus(e, index) {
  if(myBooks[index].read) {
    e.target.style.cssText = 'background: rgb(117, 192, 117);';
  } else {
    e.target.style.cssText = 'background: rgb(167, 88, 114);';
  }
}

function outReadStatus(e, index) {
  if(myBooks[index].read) {
    e.target.style.backgroundColor = 'lightgreen';
  } else {
    e.target.style.backgroundColor = 'palevioletred';
  }
}

formOpenBtn.addEventListener('click', () => {
  formContainer.showModal();
});

formCloseBtn.addEventListener('click', () => {
  formContainer.close();
});

deleteAllBtn.addEventListener('click', () => {
  myBooks.length = 0;
  libraryContainer.innerHTML = '';
});

// Initial display of books
displayBooks();

