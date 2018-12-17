import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { BooksModule } from './books/books.module';
import { AuthorsModule } from './authors/authors.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const booksOptions = new DocumentBuilder()
    .setTitle('Books API')
    .setDescription('The Books API description')
    .setVersion('1.0')
    .addTag('books')
    .addBearerAuth()
    .setBasePath('api/v1')
    .build();
  const bookDocument = SwaggerModule.createDocument(app, booksOptions, { include: [BooksModule]});
  SwaggerModule.setup('api/books', app, bookDocument);

  const authorsOptions = new DocumentBuilder()
    .setTitle('Authors API')
    .setDescription('The authors API description')
    .setVersion('1.0')
    .addTag('authors')
    .addBearerAuth()
    .setBasePath('api/v1')
    .build();
  const authorDocument = SwaggerModule.createDocument(app, authorsOptions, { include: [AuthorsModule]});
  SwaggerModule.setup('api/authors', app, authorDocument);
  app.setGlobalPrefix('api/v1');
  await app.listen(3000);
}
bootstrap();
