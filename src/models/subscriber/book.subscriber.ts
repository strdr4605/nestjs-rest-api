import { EntitySubscriberInterface, InsertEvent, EventSubscriber } from "typeorm";
import { BookModel } from "../entity/book.entity";

@EventSubscriber()
export class BookModelSubscriber implements EntitySubscriberInterface<BookModel> {
  listenTo() {
    return BookModel;
  }

  beforeInsert(event: InsertEvent<BookModel>) {
    event.entity.createdAt = new Date();
    event.entity.updatedAt = new Date();
    event.entity.publishedAt = new Date(event.entity.publishedAt);
  }

  beforeUpdate(event: InsertEvent<BookModel>) {
    event.entity.updatedAt = new Date();
  }
}