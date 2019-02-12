import { Injectable, NestInterceptor, ExecutionContext } from '@nestjs/common';
import { Observable, of } from 'rxjs';

@Injectable()
export abstract class CacheInterceptor implements NestInterceptor {
  protected abstract readonly isCached: () => boolean;
  intercept(): Observable<any> {
    if (this.isCached()) {
      return of([{ "data": "isCached true" }]);
    }
    return of([{ "data": "isCached false" }]);
  }
}