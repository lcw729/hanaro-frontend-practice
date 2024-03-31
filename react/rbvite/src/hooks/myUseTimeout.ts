import { useCallback, useRef } from 'react';

export  default function myUseTimeout(
  callback: (...args: unknown[])=> void,
  delay: number,
  dependencies: unknown[]
  ){
  const timer = useRef<ReturnType<typeof setTimeout>>();
  // const cb = useRef(callback);

  /*
  useEffect(() => {
    console.log('타이머 시작!')
    timer.current = setTimeout(callback,delay);
    return () => {
      console.log("타이머 종료!")
      clearTimeout(timer.current);
    }
  }, dependencies);
   */

  const setup = useCallback(() => {
    timer.current = setTimeout(callback,delay);
  }, [...dependencies, callback, delay]);

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