import './App.css';
import Hello from './components/Hello.tsx';
import { My } from './components/My.tsx';
import { useCounter } from './contexts/counter-context.tsx';

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

function App() {
  const {count, plusCount} = useCounter();
  console.log('Declare-Area');

  return (
    <>
      {/* <Effect /> */}
      <h1 style={{color: 'white', backgroundColor: 'red'}}>Vite + React</h1>
      <div style={{border: '1px margin'}}>
        <Hello>
          <div>
            children!
          </div>
        </Hello>
      </div>
      <div className='card'>
        <button onClick={
          () => {
            for (let i=0; i < 10; i++) {
              console.log('index ->',i)
              // setCount(count + 1) --> throttle은 계속 호출하면 그냥 return => + 1
              // plusCount() // callback은 this.state값을 계속해서 바꿔준다. --> + 10
              plusCount();
            }
          }
        }>
          count is {count}
        </button>
      </div>
      <My/>
    </>
  );
}

export default App;