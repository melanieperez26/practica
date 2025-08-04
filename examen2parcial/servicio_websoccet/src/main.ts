import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  
  // Habilitar CORS para el cliente WebSocket
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
  
  // Servir archivos estáticos desde la carpeta public
  app.useStaticAssets(join(__dirname, '..', 'public'));
  
  const port = process.env.PORT || 3001; // Usar puerto 3001 para evitar conflictos
  await app.listen(port);
  console.log(`Servidor escuchando en http://localhost:${port}`);
  console.log(`Cliente WebSocket disponible en http://localhost:${port}/index.html`);
}

bootstrap();
