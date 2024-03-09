import { Profile } from './Profile.tsx';
import { Login } from './Login.tsx';
import { useSession } from '../contexts/session-context.tsx';
import { forwardRef, Ref } from 'react';
//
// type Props = {
//   session: Session;
//   login: (id: number, name: string) => void;
//   logout: () => void;
//   removeItem: (itemId: number) => void;
// };
export const My = forwardRef((_: unknown, ref: Ref<HTMLButtonElement>) => {
  const { session, removeItem } = useSession();
  const { loginUser, cart } = session;
  // const removeItem = (id: number) => {
  //   cart.pop(id)
  // }
  return <>
    {loginUser ? (
      <Profile ref={ref} />
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