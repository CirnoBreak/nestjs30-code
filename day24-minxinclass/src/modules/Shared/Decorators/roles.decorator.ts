import { ReflectMetadata } from '@nestjs/common';

// 实现一个@Role装饰器
export const Roles = (...roles: string[]) => ReflectMetadata('roles', roles);