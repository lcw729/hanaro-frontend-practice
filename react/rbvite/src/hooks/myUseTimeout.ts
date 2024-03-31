import {useEffect, useRef} from 'react';

export  default function myUseTimeout(callback: (...args: unknown[])=> void, delay: number){
  const timer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    console.log('타이머 시작!')
    timer.current = setTimeout(callback,delay);
    return () => {
      console.log("타이머 종료!")
      clearTimeout(timer.current);
    }
  }, []);
}