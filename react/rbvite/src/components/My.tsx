import { Session, Cart } from '../App.tsx';
import { Profile } from './Profile.tsx';
import { Login } from './Login.tsx';

type Props = {
  session: Session;
  login: () => void;
  logout: () => void;
}
export const My = ({session: {loginUser, cart}, login, logout}: Props) => {
  return <>
    {loginUser? (
    <Profile loginUser={loginUser} logout={logout}/>
    ) : (
      <Login login={login}/>
    )}
    <ul>
      {cart.map((item: Cart) => (
        <li key={item.id}>
          {item.name}({item.price.toLocaleString()}원)
        </li>
      ))}
    </ul>
  </>;
};