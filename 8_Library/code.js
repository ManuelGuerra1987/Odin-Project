const myLibrary = [];

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

  myLibrary.forEach((book) => {

    const bookDiv = document.createElement('div'); 
    bookDiv.className = 'book-card'; 

    const titleElement = document.createElement("p");
    titleElement.textContent = `Title: ${book.title}`;

    const authorElement = document.createElement("p");
    authorElement.textContent = `Author: ${book.author}`;

    const pagesElement = document.createElement("p");
    pagesElement.textContent = `Pages: ${book.pages}`;

    bookDiv.appendChild(titleElement);
    bookDiv.appendChild(authorElement);
    bookDiv.appendChild(pagesElement);
    
    booksContainer.appendChild(bookDiv);

  });

}

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




