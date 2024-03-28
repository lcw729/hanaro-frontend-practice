import { forwardRef, Ref, useEffect, useImperativeHandle, useRef } from 'react';
import { useCounter } from '../contexts/counter-context.tsx';
import { useSession } from '../contexts/session-context.tsx';

export type LoginHandler = {
  noti: (msg: string) => void;
  focusId: () => void;
  focusName: () => void;
}

export const Login = forwardRef((_: unknown, ref: Ref<LoginHandler>) => {
  const idRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const { login } = useSession();
  const { count,plusCount, minusCount } = useCounter();

  useEffect(() => {
    plusCount();
    console.log("로그인 => ", count);
    return () => {
      console.log("clean-up");
      minusCount();
      console.log("로그인 => ", count);
    }
  }, []);

  const loginHandler: LoginHandler = {
    noti: (msg: string) => {
      alert(msg);
      console.log(msg)
    },
    focusId: () => idRef.current?.focus(),
    focusName: () => nameRef.current?.focus(),
  };

  useImperativeHandle(ref, () => loginHandler);

  const onLogin = () => {
    if (!idRef.current?.value)
      alert('ID를 입력하세요.');
    else if (!nameRef.current?.value)
      alert('이름을 입력하세요.');
    else
      login(Number(idRef.current.value), nameRef.current.value);
  };

  return <>
    <div>{count}</div>
    <form>
      <div>LoginID: {' '}
        <input type={'number'} ref={idRef} />
      </div>
      <div>LoginName: {' '}
        <input type={'text'} ref={nameRef} />
      </div>
      <button onClick={() => onLogin()}>SignIn</button>
    </form>
  </>;
});

Login.displayName = 'Login';