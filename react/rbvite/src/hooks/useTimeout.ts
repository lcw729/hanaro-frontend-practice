import { useCallback, useEffect, useRef } from 'react';

// const { timer, reset, cancel } = useTimeout(() => console.log('X=', count), 1000);
export const useTimeout = (
  cb: (...args: unknown[]) => void,
  delay: number,
  dependencies: unknown[] = []
) => {
  // const [tmout, setTmout] = useState<ReturnType<typeof setTimeout>>(0);

  const timerRef = useRef<ReturnType<typeof  setTimeout>>();

  // callback함수가 계속 바뀌어서 들어가기 때문에 매번 set하지 않기 위해서
  // ref 값을 가져와서 current값만 변경
  const cbRef = useRef(cb);
  cbRef.current = cb;
  const delayRef = useRef(delay);
  delayRef.current = delay;
  // const cbRef = useRef(cb); // callback이 메모리에 들어가 있기 때문에 isShow값이 바뀌어도 알지못함.

  useEffect(() => {
    setup();

    return clear;
  }, dependencies);

  // 어차피 매번 cb, delay 값은 변경되기 때문에, useCallback을 사용하게된 이유가 없어짐
  // useRef를 이용해서 효율성을 높이자.
  const setup = useCallback(() => {
    console.log('set-up!!', delay, delayRef.current);
    timerRef.current = setTimeout(cbRef.current, delayRef.current);
  },[]);

  const clear = useCallback(() => {
      clearTimeout(timerRef.current);
  }, []);

  const reset = useCallback(() => {
    console.log('리셋 함수 호출');
    clear();
    setup();
  }, [setup, clear]);

  return { clear, reset };
};

