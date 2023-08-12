import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:3001',
    methods: ['GET,PUT,POST,DELETE,UPDATE,OPTIONS,PATCH'],

    credentials: true,
  });
  const config = new DocumentBuilder()
    .setTitle('Google forms example')
    .setDescription('The google form API description')
    .setVersion('1.0')
    .addBearerAuth()
    .addTag('google form')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
