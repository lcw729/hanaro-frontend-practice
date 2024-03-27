// context 생성
import { createContext, PropsWithChildren, useContext, useReducer } from 'react';

type props = {
  count: number;
  plusCount: () => void;
  minusCount: (payload?: number) => void;
}

type ReducerAction = {
  type: string,
  payload?: number
};

const defaultProps: props = {
  count: 0,
  plusCount: () => {},
  minusCount: () => {}
};

const CounterContext = createContext<props>(defaultProps);

const reducer = (count: number, { type, payload = 1 }: ReducerAction) => {
  if (type === 'plus') {
    return count + 1;
  }

  if (type === 'minus') {
    console.log(count, payload);
    return count - payload;
  }

  return count;
};

// provider 생성
export const CounterProvider = ({ children }: PropsWithChildren) => {
  /*
    const [count, setCounter] = useState<number>(0);

    const plusCount = () => setCounter(counter => counter + 1);
    const minusCount = () => setCounter(counter => counter - 1);
  */

    const [count, dispatch] = useReducer(reducer, 0);
    const plusCount = () => dispatch({type: 'plus'});
    const minusCount = (payload: number = 1) => dispatch({type: 'minus', payload});

    return (
      <>
        <CounterContext.Provider value={{ count, plusCount, minusCount }}>
          {children}
        </CounterContext.Provider>
      </>
    );
  }
;

// context 사용
export const useCounter = () => useContext(CounterContext);