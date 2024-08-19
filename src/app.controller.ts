import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BooksService } from './app.service';
import { Book } from './fakeDataBase';

@Controller('books')
export class BooksController {
  constructor(private readonly bookService: BooksService) {}

  @Get('getAllBooks')
  getAllBooks(): Book[] {
    return this.bookService.getAllBooks();
  }

  @Get('getBookById/:id')
  getBookById(@Param('id') id: string): Book | undefined {
    const bookId = +id;
    return this.bookService.getById(bookId);
  }

  @Post('newBook')
  createBook(@Body() book: Partial<Book>): Book {
    const data = book;

    if (!book.author || !book.title || !book.publicationYear) return undefined;

    return this.bookService.addBook(data);
  }
}
