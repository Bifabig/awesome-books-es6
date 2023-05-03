import BookList from './modules/bookList.js';
import { DateTime } from './modules/luxon.js';

const bookList = new BookList();
const title = document.getElementById('title');
const author = document.getElementById('author');
const form = document.querySelector('.add-book');

bookList.previousBookList();
bookList.displayBookList();
form.addEventListener('submit', (e) => {
  e.preventDefault();
  bookList.addBookList(title, author);
});
form.reset();

const now = DateTime.now().toFormat('MMMM dd, yyyy');
document.getElementById('date-time').innerHTML = now;
