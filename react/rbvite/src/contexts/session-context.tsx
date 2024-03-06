// context 생성
import { createContext, PropsWithChildren, useContext, useState } from 'react';

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
}

const SessionContext = createContext<sessionContextProps>({
  session: defaultSession,
  login: () => {
  },
  logout: () => {
  },
  removeItem: () => {
  },
});

// provider 생성
export const SessionProvider = ({ children }: PropsWithChildren) => {
  const [session, setSession] = useState<Session>(defaultSession);

  const login = (id: number, name: string) => {
    console.log('login func!')
    setSession({ ...session, loginUser: { id, name } });
  };

  const logout = () => {
    setSession(defaultSession);
  };

  const removeItem = (id: number) => {
    const newCart = session.cart.filter((item) => {item.id !== id});
    setSession({...session, cart: newCart});
  }

  return (
    <>
      <SessionContext.Provider value={{session, login, logout, removeItem}}>
        {children}
      </SessionContext.Provider>
    </>
  );
};

// context 사용
export const useSession = () => useContext(SessionContext);