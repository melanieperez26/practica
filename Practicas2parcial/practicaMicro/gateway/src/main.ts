import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RpcCustomExceptionFilter } from './common/exceptions/rpc-custom-exceptions.filter';
import { Logger } from '@nestjs/common';
import { ValidationPipe } from '@nestjs/common';
import { envs } from './config/envs';


async function bootstrap() {
  const logger = new Logger('Gateway');
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    })
  )
  app.useGlobalFilters(new RpcCustomExceptionFilter());
  await app.listen(envs.PORT);
  logger.log(`Gateway escuchando en el puerto ${envs.PORT}`);
}
bootstrap();
