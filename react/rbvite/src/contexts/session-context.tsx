// context 생성
import { createContext, PropsWithChildren, useContext, useReducer } from 'react';
import { LoginUser } from '../App.tsx';

type Session = {
  loginUser: LoginUser | null;
  cart: Cart[]
}

const defaultSession: Session = {
  loginUser: null,
  cart: [
    { id: 1, name: '라면', price: 1000 },
  ],
};

type sessionContextProps = {
  session: Session;
  login: (id: number, name: string) => void;
  logout: () => void;
  removeItem: (id: number) => void;
  saveItem: (name: string, price: number) => void;
}

const SessionContext = createContext<sessionContextProps>({
  session: defaultSession,
  login: () => {
  },
  logout: () => {
  },
  removeItem: () => {
  },
  saveItem: () => {
  },
});

type ReducerAction = {
  action: 'login' | 'logout',
  payload: LoginUser | null
} | {
  action: 'removeItem',
  payload: number
} | {
  action: 'saveItem',
  payload: Cart
}

/*
괄호를 넣어야할 때, isCartType과 같이 payload 타입체크로 묶어 주기도 한다.
function isCartType(data: Cart | number): data is Cart {
  return typeof data !== 'number';
}
 */

const reducer = (session: Session, { action, payload }: ReducerAction): Session => {
  let newSession: Session;
  switch (action) {
    case 'login':
    case 'logout':
      return { ...session, loginUser: payload };
    case 'removeItem':
      newSession = { ...session, cart: session.cart.filter((item) => payload !== item.id) };
      return newSession;
    case 'saveItem': {
      const { cart } = session;
      // strictMode로 두번 실행된다. => 해결하기 위해서 메모리에 직접 접근
      const {name, price } = payload;
      const maxId = Math.max(...session.cart.map((item) => item.id), 0);
      // const item: Cart = { id: maxId + 1, name, price };
      // 문제 발생 !! 얕은 복사로 newCart와 session.cart의 주소가 같다.
      // strictMode로 두번 실행 시, 아이템이 두개씩 추가되는 문제가 발생한다.
      // const newCart = session.cart;

      // 깊은 복사로 매번 새로운 값을 추가하고, 기존의 Heap에 존재하는 cart는 건들지 못하도록 한다.
      const newCart = session.cart.map((item) => {
        return { ...item };
      });
      console.log(session.cart === newCart); // false
      // newCart.push(item);
      newSession = { ...session, cart: [...cart, { id: maxId + 1, name, price }] };
      return newSession;
    }
  }
};

// provider 생성
export const SessionProvider = ({ children }: PropsWithChildren) => {
  // const [session, setSession] = useState<Session>(defaultSession);
  const [session, dispatch] = useReducer(reducer, defaultSession);

  const login = (id: number, name: string) => {
    dispatch({ action: 'login', payload: { id, name } });
  };

  const logout = () => {
    dispatch({ action: 'logout', payload: null });
  };

  const removeItem = (id: number) => {
    dispatch({ action: 'removeItem', payload: id });
  };


  const saveItem = (name: string, price: number) => {
    dispatch({ action: 'saveItem', payload: { name, price } as Cart });
  };

  return (
    <>
      <SessionContext.Provider value={{ session, login, logout, removeItem, saveItem }}>
        {children}
      </SessionContext.Provider>
    </>
  );
};

// context 사용
export const useSession = () => useContext(SessionContext);