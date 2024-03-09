import { Profile } from './Profile.tsx';
import { Login } from './Login.tsx';
import { useSession } from '../contexts/session-context.tsx';
import { createRef, forwardRef, Ref, useImperativeHandle, useState } from 'react';
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
}
export const My = forwardRef((_: unknown, ref: Ref<colorHandlerProp>) => {
  const { session, removeItem } = useSession();
  const { loginUser, cart } = session;
  const [color, onColor] = useState<boolean>(false);
  const logoutBtnRef = createRef<HTMLButtonElement>();

  const colorHandler: colorHandlerProp = {
    turnOn: () => {
      onColor(true);
      console.log(color);
    },
    turnOff: () => onColor(false),
    signOut: () => logoutBtnRef.current?.click(),
  };

  useImperativeHandle(ref, () => colorHandler);
  // const removeItem = (id: number) => {
  //   cart.pop(id)
  // }

  return <>
    {
      <div className={`${color ? 'bg-pink-500' : 'bg-black'} text-white font-bold p-5`}>
        myColor
      </div>
    }
    {loginUser ? (
      <Profile ref={logoutBtnRef} />
    ) : (
      <Login />
    )}
    <ul>
      {cart.map(({ id, name, price }: Cart) => (
        <li key={id}>
          {name} ({price.toLocaleString()}원)
          <button title={`removeItem ${id}`} onClick={() => removeItem(id)}>X</button>
        </li>
      ))}
    </ul>
  </>;
});

My.displayName = 'My';