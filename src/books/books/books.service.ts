import { Injectable } from '@nestjs/common';
import { Repository, ObjectID } from 'typeorm';
import { BookModel } from 'src/models/entity/book.model';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(BookModel)
    private readonly booksRepository: Repository<BookModel>
  ){}

  async create(newBook: BookModel): Promise<BookModel> {
    newBook.createdAt = new Date();
    newBook.updatedAt = new Date();
    newBook.publishedAt = new Date(newBook.publishedAt);
    return await this.booksRepository.save(newBook);
  }

  async read(): Promise<BookModel[]> {
    return await this.booksRepository.find();
  }

  async update(id: ObjectID, newBook: BookModel): Promise<BookModel> {
    let bookToUpdate = await this.booksRepository.findOne(id);
    if (!bookToUpdate) return;
    let updatedBook = {...bookToUpdate, ...newBook, updatedAt: new Date()};
    return await this.booksRepository.save(updatedBook);
  }

  async delete(id: ObjectID): Promise<BookModel> {
    let bookToRemove = await this.booksRepository.findOne(id);
    if (!bookToRemove) return;
    return await this.booksRepository.remove(bookToRemove);
  }
}
