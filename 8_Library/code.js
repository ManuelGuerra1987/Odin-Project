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
});




