import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthorModel } from '../../models/entity/author.entity';

@Injectable()
export class AuthorsService {
  constructor(
    @InjectRepository(AuthorModel)
    private readonly authorsRepository: Repository<AuthorModel>
  ){}

  async create(newAuthor: AuthorModel): Promise<AuthorModel> {
    return await this.authorsRepository.save(newAuthor);
  }

  async read(): Promise<AuthorModel[]> {
    return await this.authorsRepository.find();
  }

  async update(id: string, newAuthor): Promise<AuthorModel> {
    const authorToUpdate = await this.authorsRepository.findOne(id);
    // if (!authorToUpdate) return;
    const updatedAuthor = {...authorToUpdate, ...newAuthor};
    return await this.authorsRepository.save(updatedAuthor);
  }

  async delete(id: string): Promise<AuthorModel | undefined> {
    const authorToRemove = await this.authorsRepository.findOne(id);
    if (authorToRemove) return await this.authorsRepository.remove(authorToRemove);
  }
}
