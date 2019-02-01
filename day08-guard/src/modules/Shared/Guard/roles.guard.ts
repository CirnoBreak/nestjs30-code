import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}
  
  canActivate(
    context: ExecutionContext,
  ): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return true;
    }
    const req = context.switchToHttp().getRequest();
    req.user = {
      "account": "Ted",
      "roles": [
        "general"
      ]
    };
    const user = req.user;
    const hasRole = () => !!user.roles.find((role) => !!roles.find((item) => {
      return item === role;
    }));
    return user && user.roles && hasRole();
  }
}