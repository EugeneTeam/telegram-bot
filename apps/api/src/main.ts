import { NestFactory } from '@nestjs/core';
import { ApiModule } from './api.module';
import { join } from 'path';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const url: string = process.env.API_URL;
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    ApiModule,
    {
      transport: Transport.GRPC,
      options: {
        url,
        package: 'proto',
        protoPath: join(__dirname, 'proto/index.proto'),
      },
    },
  );

  await app.listen();
}
bootstrap();
