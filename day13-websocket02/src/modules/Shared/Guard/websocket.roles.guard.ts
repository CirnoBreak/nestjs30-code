import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable} from 'rxjs';
import { Reflector } from '@nestjs/core';

@Injectable()
export class WebSocketRolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(
    context: ExecutionContext
  ): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    const data = context.switchToWs().getData();
    if (!roles) {
      return true;
    }
    const hasRole = () => !!data.roles.find((role) => !!roles.find((item) => item === role));
    return data && data.roles && hasRole();
  }
}