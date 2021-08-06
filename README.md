# hi-nestjs

## Notes

- `npm init -y`
- `yarn add @nestjs/common@7.6.17 @nestjs/core@7.6.17 @nestjs/platform-express@7.6.17 reflect-metadata@0.1.13 typescript@4.3.2`

```json
{
  "dependencies": {
    "@nestjs/common": "7.6.17",
    "@nestjs/core": "7.6.17",
    "@nestjs/platform-express": "7.6.17",
    "reflect-metadata": "0.1.13",
    "typescript": "4.3.2"
  }
}
```

```json
{
  "compilerOptions": {
    "module": "CommonJS",
    "target": "ES2017",
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  }
}
```

- `npx ts-node-dev src/main.ts`

```ts
// main.ts [mini system]
import { Controller, Get, Module } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

@Controller()
class AppController {
  @Get()
  getRootRoute() {
    return 'hi~';
  }
}

@Module({
  controllers: [AppController],
})
class AppModule {}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.listen(3000);
}

bootstrap();
```
