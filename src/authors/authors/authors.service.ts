import { Injectable } from '@nestjs/common';
import { getMongoManager } from 'typeorm';
import { AuthorModel } from 'src/models/entity/author.model';

@Injectable()
export class AuthorsService {

  create(newAuthor: AuthorModel): AuthorModel {
    getMongoManager('default').getMongoRepository(AuthorModel).save(newAuthor);
    console.log("author has been saved: ", newAuthor);
    return newAuthor;
  }

  read(): Promise<AuthorModel[]> {
    return new Promise(async (resolve) => {
      let authorRepository = getMongoManager('default').getMongoRepository(AuthorModel);
      const allAuthors = await authorRepository.find();
      console.log("Loaded authorsModels from the database: ", allAuthors);
      resolve(allAuthors);
    });
  }

  update(id): Promise<AuthorModel> {
    return new Promise( async (resolve) => {
      let authorRepository = getMongoManager('default').getMongoRepository(AuthorModel);
      let authorToUpdate = await authorRepository.findOne(id);
      authorToUpdate.firstName = 'Tudor';
      await authorRepository.save(authorToUpdate);
      console.log("Loaded authorsModels from the database: ", authorToUpdate);
      resolve(authorToUpdate);
    });
  }

  delete(id): Promise<AuthorModel> {
    return new Promise( async (resolve) => {
      let authorRepository = getMongoManager('default').getMongoRepository(AuthorModel);
      let bookToRemove = await authorRepository.findOne(id);
      await authorRepository.remove(bookToRemove);
      console.log("Loaded genericModels from the database: ", bookToRemove);
      resolve(bookToRemove);
    });
  }
}
