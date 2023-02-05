import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

const start = async () => {
  try {
    dotenv.config();
    const PORT = process.env.PORT || process.env.USER_PORT || 5000;
    const app = await NestFactory.create(AppModule)
    app.enableCors();

    await app.listen(PORT, () => console.log(`Server has been started on port ${PORT}`));
  } catch (e) {
    console.log(e)
  }
}

start();
