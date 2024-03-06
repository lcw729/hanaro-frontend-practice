// context 생성
import { createContext, PropsWithChildren, useContext, useState } from 'react';

type props = {
  count: number;
  plusCount: () => void;
}

const defaultProps: props = {
  count: 0,
  plusCount: () => {
  },
};

const CounterContext = createContext<props>(defaultProps);

// provider 생성
export const CounterProvider = ({ children }: PropsWithChildren) => {
    const [count, setCounter] = useState<number>(0);
    const plusCount = () => setCounter(counter => counter + 1);

    return (
      <>
        <CounterContext.Provider value={{ count, plusCount }}>
          {children}
        </CounterContext.Provider>
      </>
    );
  }
;

// context 사용
export const useCounter = () => useContext(CounterContext);