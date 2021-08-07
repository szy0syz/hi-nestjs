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

### File Naming Conventions

- One class per file (some exceptions)
- Class names should include the kind of thing we are creating
- Name of class and name of file should always match up
- Filename template: name.type_of_thing.ts

### Messages Project

- `npm i -g @nestjs/cli`
- `nest new messages`
- remove all app.*.ts
- `nest generate module messages`
- `nest generate controller messages/messages --flat`
- `yarn add class-validator class-transformer`

### Validating Request Data with Pipes

> 通过管道验证请求数据

![001](/images/001.png)
