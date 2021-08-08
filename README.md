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

![002](/images/002.png)

![003](/images/003.png)

### Services and Repositories

![004](/images/004.png)

![005](/images/005.png)

IOC & DI

- IOC (Inversion of Control): 其思想是反转资源获取的方向
  - 传统的资源查找方向要求组件向容器发起请求查找资源，作为回应，容器适时的返回资源
  - 而应用了IOC之后，则是 **容器主动地将资源推送给它所管理的组件，组件索要做的仅是选择一种合适的方式来接受资源**
  - 这种行为也被称为查找的被动形式
- DI(Dependency Injection) —— IOC的另一种表述方式：即 **组件以一些预先定义好的方式(例如:setter方法)接受来自如容器的资源注入**
  - 相对与IOC而言，这种表述更直接

IOC的前生与今世

- 分离接口与实现

> 在远古时代，一个原始人需要一把斧头，他不但需要知道斧头的 **形状(接口)**，而且还需要会手工打造一把斧头，这个要求就很高。

![006](/images/006.png)

- 采用工厂设计模式

> 到了封建时代，一个猎人同样需要一把斧头，他只需要到铁匠铺给老板银子定制一把斧头，这样要求就降低了。

![007](/images/007.png)

- 采用反转控制

> 到了当今时代，我们可以做到按需分配，我们只需要在自家院子里的箩筐里贴上标签，告诉政府需要一把什么样的斧头，到了特定时候就会自动获得一把斧头。

![008](/images/008.png)

- 这个时候的 `Service`，对外依赖只剩下一条线，而且连接的是个接口类，大大降低了耦合度

![009](/images/009.png)

- At startup, register all classes with container
  - 启动时，容器注册所有的类
- Container will figure out what each dependency each class has
  - 容器将会理清楚每个类到底有哪些依赖
- We then ask the container to create an instance of a class for us
  - 然后我们要求容器为我们创建一个类的实例
- Container creates all required dependencies and gives us the instance
  - 容器会创建所有必须的依赖，并给我们提供实例
- Container will hold onto the created dependency instances and reuse them if needed
  - 容器将会保留所有创建的依赖的实例，并在需要的时候重新使用它们
  - 这个如何证明呢？如下代码所示：

### Modules and Dependency Injection

> 🚀🚀🚀 Quick side project to understand Modules and Dependency Injection

![010](/images/010.png)

![011](/images/011.png)

- `nest new di`
- `nest g module computer`
- `nest g module cpu`
- `nest g module disk`
- `nest g module power`
- `nest g service cpu`
- `nest g service power`
- `nest g service disk`
- `nest g controller computer`

![012](/images/012.png)

![013](/images/013.png)

### Big Project

Used Car Pricing API

- Users sign up with email/password
- Users get an estimate for how much their car is worth based on the make/model/year/mileage
- Users can report what they sold their vehicles for
- Admins have to apporve reportde sales

![015](/images/015.png)

![016](/images/016.png)

- `nest g module users`
- `nest g module reports`
- `nest g controller users`
- `nest g controller reports`
- `nest g service users`
- `nest g service reports`
