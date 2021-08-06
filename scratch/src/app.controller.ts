import { Controller, Get } from "@nestjs/common";

@Controller('/app')
export class AppController {
  @Get('/a1')
  getRootRoute() {
    return 'hi~';
  }

  @Get('/bye')
  getByeThere() {
    return 'bye there!';
  }
}
