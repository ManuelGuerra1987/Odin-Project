//Array for book storing
const myLibrary = [];

//book constructor
function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = false;
  this.info = function() {
    if (this.read){
      return `${this.title} by ${this.author}, ${this.pages} pages, already read`;
    }
    else {
      return `${this.title} by ${this.author}, ${this.pages} pages, not read yet`;
    }
  }
}


function addBookToLibrary(book) {

  myLibrary.push(book);
  
}


function showBooks() {

  const booksContainer = document.querySelector("#books-container");
  booksContainer.innerHTML = "";

  myLibrary.forEach((book, index) => {

    const bookDiv = document.createElement('div'); 
    bookDiv.className = 'book-card'; 

    const titleElement = document.createElement("p");
    titleElement.textContent = `Title: ${book.title}`;

    const authorElement = document.createElement("p");
    authorElement.textContent = `Author: ${book.author}`;

    const pagesElement = document.createElement("p");
    pagesElement.textContent = `Pages: ${book.pages}`;

    const button = document.createElement('button');
    button.textContent = "Remove";
    button.setAttribute('data-index', index);
    button.className = 'remove-button';

    button.addEventListener('click', function(){

      const index = button.getAttribute('data-index');
      myLibrary.splice(index, 1);
      showBooks();

    });

    const buttonRead = document.createElement('button');

    if (book.read){
      buttonRead.textContent = "Mark as not read";
      buttonRead.setAttribute('data-index', index);
      buttonRead.className = 'read-button';

      buttonRead.addEventListener('click', function(){

        const index = buttonRead.getAttribute('data-index');
        myLibrary[index].read = false;
        showBooks();
  
      });
    }

    else{
      buttonRead.textContent = "Mark as read";
      buttonRead.setAttribute('data-index', index);
      buttonRead.className = 'not-read-button';

      buttonRead.addEventListener('click', function(){

        const index = buttonRead.getAttribute('data-index');
        myLibrary[index].read = true;
        showBooks();
  
      });
    }



    bookDiv.appendChild(titleElement);
    bookDiv.appendChild(authorElement);
    bookDiv.appendChild(pagesElement);
    bookDiv.appendChild(button);
    bookDiv.appendChild(buttonRead);
    
    booksContainer.appendChild(bookDiv);

  });

}

//Add book
document.querySelector("#submit-button").addEventListener("click", () => {

  const title = document.querySelector("#form-title").value;
  const author = document.querySelector("#form-author").value;
  const pages = document.querySelector("#form-pages").value;

  const book = new Book(title, author, pages);

  addBookToLibrary(book);

  document.querySelector("#form-title").value = "";
  document.querySelector("#form-author").value = "";
  document.querySelector("#form-pages").value = "";

  console.log(myLibrary);
  showBooks();
});

