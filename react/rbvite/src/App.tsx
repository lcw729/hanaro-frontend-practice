import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Hello } from './components/Hello.tsx';
import { My } from './components/My.tsx';

const myStyle = {backgroundColor: 'red'};

function H5() {
  return <h5>h5555</h5>
}

export type LoginUser = { id: number; name: string };
export type Cart = { id: number; name: string; price: number };
export type Session = {
  loginUser: LoginUser | null;
  cart: Cart[];
};

const SampleSession = {
  // loginUser: null,
  loginUser: { id: 1, name: 'Hong' },
  cart: [{ id: 100, name: '라면', price: 3000 }, { id: 101, name: '컵라면', price: 2000 }, { id: 200, name: '파', price: 5000 }],
};

function App() {
  const [count, setCount] = useState(0);
  const [session, setSession] = useState<Session>(SampleSession);

  const plusCount = () => setCount(count + 1);
  const login = () => {};
  const logout = () => {
    setSession({cart: [...session.cart], loginUser: null});
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 style={myStyle}>Vite + React</h1>
      <H5/>
      <My session={session} login={login} logout={logout}></My>
      <Hello name={'이채원'} age={count + 30} plusCount={plusCount}>
        Hello-children!!!!
      </Hello>
      <div className="card">
        <button onClick={() => {
                setCount((count) => count + 1);
            }
        }>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
