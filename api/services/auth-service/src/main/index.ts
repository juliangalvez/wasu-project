import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Habilitamos la validación global
  app.useGlobalPipes(new ValidationPipe());
  
  // Obtenemos la configuración del puerto
  const configService = app.get(ConfigService);
  const port = configService.get('PORT') || 3001;
  
  // Iniciamos la aplicación
  await app.listen(port);
  console.log(`Auth service running on port ${port}`);
}

bootstrap();
