import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import request from 'superagent';

export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();

    return request.session.userId;
  }
}
