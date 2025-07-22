export function throttle<T extends (...args: any[]) => void>(fn: T): T {
  let pending = false;
  return function(this: unknown, ...args: Parameters<T>) {
    if (pending) return;
    pending = true;
    requestAnimationFrame(() => {
      pending = false;
      fn.apply(this, args);
    });
  } as T;
}