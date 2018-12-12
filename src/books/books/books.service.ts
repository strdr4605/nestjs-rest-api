import { Injectable } from '@nestjs/common';
import { getMongoManager } from 'typeorm';
import { BookModel } from 'src/models/entity/book.model';

@Injectable()
export class BooksService {

  create(newBook: BookModel): any {
    // const book = new BookModel();
    // book.createdAt = new Date();
    // book.updatedAt = new Date();
    // book.author = newBook.author || 'Dragos Strainu';
    // book.iban = newBook.iban || '4605';
    // book.publishedAt = new Date(newBook.publishedAt) || new Date('2015-03-25');
    // book.title = newBook.title || 'You don\'t know Nodejs';


    getMongoManager('default').getMongoRepository(BookModel).save(newBook);
    console.log("book has been saved: ", newBook);
    return newBook;
  }

  read(): Promise<BookModel[]> {
    return new Promise(async (resolve) => {
      let bookRepository = getMongoManager('default').getMongoRepository(BookModel);
      const allBooks = await bookRepository.find();
      console.log("Loaded genericModels from the database: ", allBooks);
      resolve(allBooks);
    });
  }

  update(id): Promise<BookModel> {
    return new Promise( async (resolve) => {
      let bookRepository = getMongoManager('default').getMongoRepository(BookModel);
      let bookToUpdate = await bookRepository.findOne(id);
      bookToUpdate.author = 'Tudor Strainu';
      await bookRepository.save(bookToUpdate);
      console.log("Loaded genericModels from the database: ", bookToUpdate);
      resolve(bookToUpdate);
    });
  }

  delete(id): Promise<BookModel> {
    return new Promise( async (resolve) => {
      let bookRepository = getMongoManager('default').getMongoRepository(BookModel);
      let bookToRemove = await bookRepository.findOne(id);
      await bookRepository.remove(bookToRemove);
      console.log("Loaded genericModels from the database: ", bookToRemove);
      resolve(bookToRemove);
    });
  }
}
