import { Profile } from './Profile.tsx';
import { Login } from './Login.tsx';

type Props = {
  session: Session;
  login: (id: number, name: string) => void;
  logout: () => void;
  removeItem: (itemId: number) => void;
};
export const My = ({ session : {loginUser, cart}, login, logout, removeItem }: Props) => {
  // const removeItem = (id: number) => {
  //   cart.pop(id)
  // }
  return<>
    {loginUser? (
      <Profile loginUser={loginUser} logout={logout}/>
    ) : (
      <Login login={login}/>
    )}
    <ul>
      {cart.map(({id, name, price}: Cart) => (
        <li key={id}>
          {name} ({price.toLocaleString()}원)
          <button title={`removeItem ${id}`} onClick={() => removeItem(id)}>X</button>
        </li>
      ))}
    </ul>
  </>
};