class Book {
  constructor(title, author) {
    this.id = Math.random() * 1000;
    this.title = title;
    this.author = author;
  }

  storeBook() {
    let book = {};
    // add form validation
    if (this.title && this.author !== '') {
      book = {
        id: this.id,
        title: this.title,
        author: this.author,
      };
    }

    return book;
  }

  addBook() {
    const bookItem = document.createElement('tr');
    bookItem.setAttribute('id', this.id);
    const titlePara = document.createElement('td');
    titlePara.textContent = `"${this.title}" by ${this.author}`;

    const books = document.querySelector('.books');

    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('type', 'button');
    deleteButton.setAttribute('class', 'delete');
    deleteButton.textContent = 'Remove';

    titlePara.appendChild(deleteButton);
    bookItem.appendChild(titlePara);
    deleteButton.addEventListener('click', () => this.removeBook());

    return books.appendChild(bookItem);
  }

  removeBook() {
    const bookList = JSON.parse(localStorage.getItem('booksList'));
    const val = bookList.filter((book) => this.id !== book.id);
    localStorage.setItem('booksList', JSON.stringify(val));
    const booksId = document.getElementById(this.id);
    return booksId.remove();
  }
}

export default Book;
