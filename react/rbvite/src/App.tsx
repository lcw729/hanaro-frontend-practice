import './App.css';
import Hello from './components/Hello.tsx';
import { colorHandlerProp, My } from './components/My.tsx';
import { useCounter } from './contexts/counter-context.tsx';
import { createRef, forwardRef, LegacyRef } from 'react';
import myUseTimeout from './hooks/myUseTimeout.ts';
import { useToggle } from './hooks/useToggle.ts';

export type LoginUser = { id: number, name: string };
export type Cart = { id: number, name: string, price: number };
export type Session = {
  loginUser: LoginUser | null;
  cart: Cart[];
};

// const SampleSession: Session = {
//   loginUser: { id: 1, name: 'Hong' },
//   cart: [
//     { id: 100, name: '라면', price: 3000 },
//     { id: 101, name: '컵라면', price: 2000 },
//     { id: 102, name: '파', price: 5000 },
//   ],
// };

const H5 = forwardRef((
  { title }: { title: string },
  ref: LegacyRef<HTMLInputElement>) => {
  return (
    <>
      <h3>{title}</h3>
      <input type="text" ref={ref} placeholder="child" />
    </>
  );
});

H5.displayName = 'H5';

function App() {
  const { count, plusCount } = useCounter();
  const childInputRef = createRef<HTMLInputElement>();
  // const logoutBtnRef = createRef<HTMLButtonElement>();
  const colorBtnRef = createRef<colorHandlerProp>();
  const [isShow, toggle] = useToggle();
  console.log('Declare-Area');
  myUseTimeout(()=> console.log('X'), 1000);
  myUseTimeout(()=> console.log('Hello'), 1000);

  return (
    <>
      <H5 title="forwardRef" ref={childInputRef} />
      <button onClick={() => toggle()}
        style={{ background: isShow ? 'blue' : 'pink' }}>
        {isShow ? 'HIDE' : 'SHOW'}
      </button>
      <br/>
      <button onClick={() => {
        if (childInputRef.current) {
          childInputRef.current.focus();
          childInputRef.current.value = 'XXX';
          colorBtnRef.current?.loginHandler.noti('안녕하세요.');
        }
      }}>
        Call H5 Button
      </button>

      <button onClick={() => colorBtnRef.current?.signOut()}>
        SignOut
      </button>

      <h1 style={{ color: 'white', backgroundColor: 'red' }}>Vite + React</h1>
      <div style={{ border: '1px margin' }}>
        <Hello>
          <div>
            children!
          </div>
        </Hello>
      </div>
      <div className="flex flex-row justify-center">
        <button className="m-5"
                onClick={() => colorBtnRef.current?.turnOn()}>
          TurnOn
        </button>
        <button className="m-5"
                onClick={() => colorBtnRef.current?.turnOff()}>
          TurnOff
        </button>
      </div>
      <div className="card">
        <button onClick={
          () => {
            for (let i = 0; i < 10; i++) {
              console.log('index ->', i);
              // setCount(count + 1) --> throttle은 계속 호출하면 그냥 return => + 1
              // plusCount() // callback은 this.state값을 계속해서 바꿔준다. --> + 10
              plusCount();
            }
          }
        }>
          count is {count}
        </button>
      </div>
      <My ref={colorBtnRef} />
    </>
  );
}

export default App;