import Book from './book.js';

class BookList {
  constructor() {
    this.booksList = [];
  }

  previousBookList() {
    const previousBookList = JSON.parse(localStorage.getItem('booksList'));
    if (previousBookList) {
      this.booksList = [...previousBookList];
    }
    return this.booksList;
  }

  addBookList(title, author) {
    // add the item to localstorage

    const myBook = new Book(title.value, author.value);
    const msg = document.querySelector('small');

    //   e.preventDefault();
    this.previousBookList();

    myBook.storeBook();

    if (title.value && author.value !== '') {
      myBook.addBook();
      this.booksList.push(myBook);
      msg.innerText = '';
    } else {
      msg.innerText = '* Title and Author required';
    }

    localStorage.setItem('booksList', JSON.stringify(this.booksList));
  }

  displayBookList() {
    const books = document.querySelector('.books');
    this.booksList.forEach((book) => {
      const currentBooks = document.createElement('tr');

      const currentBook = document.createElement('td');
      const deleteButton = document.createElement('button');
      deleteButton.setAttribute('type', 'button');
      deleteButton.setAttribute('class', 'delete');
      currentBooks.setAttribute('id', `${book.id}`);
      deleteButton.textContent = 'Remove';
      deleteButton.addEventListener('click', () => {
        const newBooksList = this.booksList.filter(
          (newBook) => newBook.id !== book.id,
        );
        localStorage.setItem('booksList', JSON.stringify(newBooksList));
        this.booksList = [...newBooksList];
        document.getElementById(book.id).remove();
      });
      currentBook.textContent = `"${book.title}" by ${book.author}`;
      currentBook.append(deleteButton);
      currentBooks.append(currentBook);
      books.append(currentBooks);
    });
  }
}

export default BookList;
