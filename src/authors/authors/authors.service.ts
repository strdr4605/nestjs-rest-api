import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthorModel } from 'src/models/entity/author.entity';

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

  async update(id: string, newAuthor): Promise<AuthorModel> {
    let authorToUpdate = await this.authorsRepository.findOne(id);
    if (!authorToUpdate) return;
    let updatedAuthor = {...authorToUpdate, ...newAuthor, updatedAt: new Date()};
    return await this.authorsRepository.save(updatedAuthor);
  }

  async delete(id: string): Promise<AuthorModel> {
    let authorToRemove = await this.authorsRepository.findOne(id);
    if (!authorToRemove) return;
    return await this.authorsRepository.remove(authorToRemove);
  }
}
