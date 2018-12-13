import { Injectable } from '@nestjs/common';
import { Repository, ObjectID } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthorModel } from '../../models/entity/author.model';

@Injectable()
export class AuthorsService {
  constructor(
    @InjectRepository(AuthorModel)
    private readonly authorsRepository: Repository<AuthorModel>
  ){}

  async create(newAuthor: AuthorModel): Promise<AuthorModel> {
    newAuthor.createdAt = new Date();
    newAuthor.updatedAt = new Date();
    return await this.authorsRepository.save(newAuthor);
  }

  async read(): Promise<AuthorModel[]> {
    return await this.authorsRepository.find();
  }

  async update(id: ObjectID, newAuthor): Promise<AuthorModel> {
    let authorToUpdate = await this.authorsRepository.findOne(id);
    if (!authorToUpdate) return;
    let updatedAuthor = {...authorToUpdate, ...newAuthor, updatedAt: new Date()};
    return await this.authorsRepository.save(updatedAuthor);
  }

  async delete(id: ObjectID): Promise<AuthorModel> {
    let authorToRemove = await this.authorsRepository.findOne(id);
    if (!authorToRemove) return;
    return await this.authorsRepository.remove(authorToRemove);
  }
}
