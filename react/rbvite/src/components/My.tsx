import { Profile } from './Profile.tsx';
import { Login, LoginHandler } from './Login.tsx';
import { useSession } from '../contexts/session-context.tsx';
import { createRef, forwardRef, Ref, useImperativeHandle, useRef, useState } from 'react';
//
// type Props = {
//   session: Session;
//   login: (id: number, name: string) => void;
//   logout: () => void;
//   removeItem: (itemId: number) => void;
// };
export type colorHandlerProp = {
  turnOn: () => void;
  turnOff: () => void;
  signOut: () => void;
  loginHandler: LoginHandler
}
export const My = forwardRef((_: unknown, ref: Ref<colorHandlerProp>) => {
  const { session, removeItem, saveItem } = useSession();
  const { loginUser, cart } = session;
  const [color, onColor] = useState<boolean>(false);
  const logoutBtnRef = createRef<HTMLButtonElement>();
  const loginRef = createRef<LoginHandler>();
  const itemName = useRef<HTMLInputElement>(null);
  const itemPrice = useRef<HTMLInputElement>(null);


  const colorHandler: colorHandlerProp = {
    turnOn: () => {
      onColor(true);
      console.log(color);
    },
    turnOff: () => onColor(false),
    signOut: () => logoutBtnRef.current?.click(),
    loginHandler: {
      // 객체가 새로 생성될 때마다 힙의 주소가 바뀌기 때문에 callback 함수 형태로 전달한다.
      noti: (msg: string) => loginRef.current?.noti(msg),
      focusId: () => loginRef.current?.focusId(),
      focusName: () => loginRef.current?.focusName(),
    },
  };

  const onSaveItem = () => {
    if (!itemName.current?.value) {
      alert("상품명을 입력하세요.")
      return;
    }

    if (!itemPrice.current?.value) {
      alert("상품가격을 입력하세요.")
      return;
    }

    saveItem(itemName.current.value, Number(itemPrice.current.value));
  }

  useImperativeHandle(ref, () => colorHandler);

  return <>
    {
      <div className={`${color ? 'bg-pink-500' : 'bg-black'} text-white font-bold p-5`}>
        myColor
      </div>
    }
    {loginUser ? (
      <Profile ref={logoutBtnRef} />
    ) : (
      <Login ref={loginRef} />
    )}
    <div>
      <label>
        상품명 :
        <input ref={itemName} type="text" />
      </label>
      <label>
        상품가격 :
        <input ref={itemPrice} type="number" />
      </label>
      <button onClick={() => onSaveItem()}>추가하기</button>
    </div>
      <ul>
        {cart.map(({ id, name, price }: Cart) => (
        <li key={id}>
          {id} {name} ({price.toLocaleString()}원)
          <button title={`removeItem ${id}`} onClick={() => removeItem(id)}>X</button>
        </li>
      ))}
    </ul>
  </>;
});

My.displayName = 'My';