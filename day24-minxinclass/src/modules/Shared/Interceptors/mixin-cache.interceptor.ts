import { mixin } from '@nestjs/common';
import { CacheInterceptor } from './cache.interceptors';

export function mixinCacheInterceptor(isCached: () => boolean) {
  return mixin(class extends CacheInterceptor {
    protected readonly isCached = isCached;
  })
}