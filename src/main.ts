import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as bodyParser from 'body-parser';
import * as path from 'path';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {});

  app.enableCors({origin: "https://loyalty-systemm.netlify.app/",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    })
  );

  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

  // ✅ Serve /public as before
  app.useStaticAssets(path.join(__dirname, '..', 'public'), {
    prefix: '/api/public',
  });

  // ✅ Serve /uploads as public so images are accessible
  app.useStaticAssets(join(__dirname, '..', 'uploads'), {
    prefix: '/uploads',
  });

  app.setGlobalPrefix('/api');

  const PORT = process.env.PORT || 3001;
  await app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
}

bootstrap();