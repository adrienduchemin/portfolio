import LazyLoad, { ILazyLoadInstance } from 'vanilla-lazyload';

function initLazyload(): ILazyLoadInstance | undefined {
  return process.browser
    ? new LazyLoad({
        elements_selector: '.lazy',
      })
    : undefined;
}

export const lazyLoadInstance = initLazyload();
