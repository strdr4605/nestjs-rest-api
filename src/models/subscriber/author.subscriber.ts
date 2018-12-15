import { EntitySubscriberInterface, InsertEvent, EventSubscriber } from "typeorm";
import { AuthorModel } from "../entity/author.entity";

@EventSubscriber()
export class AuthorModelSubscriber implements EntitySubscriberInterface<AuthorModel> {
  listenTo() {
    return AuthorModel;
  }

  beforeInsert(event: InsertEvent<AuthorModel>) {
    event.entity.createdAt = new Date();
    event.entity.updatedAt = new Date();
  }

  beforeUpdate(event: InsertEvent<AuthorModel>) {
    event.entity.updatedAt = new Date();
  }
}