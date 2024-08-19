import { Injectable } from '@nestjs/common';
import { Book, books } from './fakeDataBase';

@Injectable()
export class BooksService {
  getAllBooks(): Book[] {
    return books;
  }

  getById(bookId: number): Book | undefined {
    return books.find((book) => book.id === bookId);
  }

  addBook(book: Partial<Book>): Book {
    if (book.author && book.publicationYear && book.title) {
      const newId = books[books.length - 1].id + 1;
      const newBook: Book = {
        id: newId,
        author: book.author ?? '',
        title: book.title ?? '',
        publicationYear: book.publicationYear ?? 0,
      };
      books.push(newBook);

      return newBook;
    }
  }
}
