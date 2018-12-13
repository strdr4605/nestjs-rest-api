import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('Node REST API')
    .setDescription('The Books, Authors API description')
    .setVersion('1.0')
    .addTag('books')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document);
  app.setGlobalPrefix('api/v1');
  await app.listen(3000);
}
bootstrap();
