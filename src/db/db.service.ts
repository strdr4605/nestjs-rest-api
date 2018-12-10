import { Injectable } from '@nestjs/common';
import { createConnection, getMongoManager } from 'typeorm';
import { BookModel } from 'src/models/entity/BookModel';

@Injectable()
export class DbService {
  
  async newConnection(): Promise<any> {
    return await createConnection();
  }

  create(): void {
      const book = new BookModel();
      book.createdAt = new Date();
      book.updatedAt = new Date();
      book.author = 'Dragos Strainu';
      book.iban = '4605';
      book.publishedAt = new Date('2015-03-25');
      book.title = 'You don\'t know Nodejs'

  
      getMongoManager('default').getMongoRepository(BookModel).save(book);
      console.log("book has been saved: ", book);

  }

  read(): Promise<any> {
    return new Promise(async (resolve) => {
      let bookRepository = getMongoManager('default').getMongoRepository(BookModel);
      const allBooks = await bookRepository.find();
      console.log("Loaded genericModels from the database: ", allBooks);
      resolve(allBooks);
    });
  }

  update(id): Promise<any> {
    return new Promise( async (resolve) => {
      let bookRepository = getMongoManager('default').getMongoRepository(BookModel);
      let bookToUpdate = await bookRepository.findOne(id);
      bookToUpdate.author = 'Tudor Strainu';
      await bookRepository.save(bookToUpdate);
      console.log("Loaded genericModels from the database: ", bookToUpdate);
      resolve(bookToUpdate);
    });
  }

  delete(id): Promise<any> {
    return new Promise( async (resolve) => {
      let bookRepository = getMongoManager('default').getMongoRepository(BookModel);
      let bookToRemove = await bookRepository.findOne(id);
      await bookRepository.remove(bookToRemove);
      console.log("Loaded genericModels from the database: ", bookToRemove);
      resolve(bookToRemove);
    });
  }
}
