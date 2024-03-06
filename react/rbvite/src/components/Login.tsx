import { useState } from 'react';
import { useCounter } from '../contexts/counter-context.tsx';
import { useSession } from '../contexts/session-context.tsx';

export const Login = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState('');
  const {login} = useSession();
  const {count} = useCounter();

  return<>
    <div>{count}</div>
    <form>
      <div>LoginID: {' '}
        <input type={'text'} onChange={(e) => setId(+e.currentTarget.value)}/>
      </div>
      <div>LoginName: {' '}
        <input type={'text'} onChange={(e) => setName(e.currentTarget.value)}/>
      </div>
      <button onClick={() => login(id, name)}>SignIn</button>
    </form>
  </>
}