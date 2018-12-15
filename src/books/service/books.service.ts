import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { BookModel } from 'src/models/entity/book.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(BookModel)
    private readonly booksRepository: Repository<BookModel>
  ){}

  async create(newBook: BookModel): Promise<BookModel> {
    return await this.booksRepository.save(newBook);
  }

  async read(): Promise<BookModel[]> {
    return await this.booksRepository.find();
  }

  async update(id: string, newBook: BookModel): Promise<BookModel> {
    const bookToUpdate = await this.booksRepository.findOne(id);
    if (!bookToUpdate) return;
    const updatedBook = {...bookToUpdate, ...newBook};
    return await this.booksRepository.save(updatedBook);
  }

  async delete(id: string): Promise<BookModel> {
    const bookToRemove = await this.booksRepository.findOne(id);
    if (!bookToRemove) return;
    return await this.booksRepository.remove(bookToRemove);
  }
}
