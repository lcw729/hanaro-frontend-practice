import { useCallback, useRef } from 'react';

export  default function myUseTimeout(
  callback: (...args: unknown[])=> void,
  delay: number,
  dependencies: unknown[]
  ){
  const timer = useRef<ReturnType<typeof setTimeout>>();
  const cb = useRef(callback);
  cb.current = callback;
  const dy = useRef(delay);
  dy.current = delay;

  const setup = useCallback(() => {
    console.log(delay, dy.current);
    timer.current = setTimeout(cb.current,dy.current);
  }, [...dependencies]);

  const reset = useCallback(() => {
    console.log("타이머 종료!");
    reset();
    setup();
  }, []);

  const clear = useCallback(() => {
    console.log("타이머 클리어!");
    clearTimeout(timer.current);
  }, [reset, setup]);

  return [...dependencies, reset, clear];
}