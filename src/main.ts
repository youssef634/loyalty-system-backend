import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
//import { PrismaClientExceptionFilter } from './middlewares/prisma.handler.errors';
import * as dotenv from 'dotenv'
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as bodyParser from 'body-parser';
import * as path from 'path';

async function bootstrap() {
  dotenv.config()
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {})
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true
  }))
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
  
  app.useStaticAssets(path.join(__dirname, '..', 'public') , 
  {
    prefix: '/api/public',
  });

  app.useStaticAssets(join(__dirname, "../uploads"))
  const { httpAdapter } = app.get(HttpAdapterHost);

  // app.useGlobalFilters(
  //   new PrismaClientExceptionFilter(httpAdapter),
  // )
  app.setGlobalPrefix("/api")

  const PORT = process.env.PORT || 3001
  await app.listen(PORT, () => {
    console.log(`server in on port: ${PORT}`)
  });
}
bootstrap();