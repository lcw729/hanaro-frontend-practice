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
    console.log(id);
    const newCart = session.cart.filter((item: Cart) => id !== item.id
    );
    newCart.map((item) => {console.log(item.name)});
    setSession({...session, cart: newCart});
  }


  const saveItem = (name: string, price: number) => {
    let max = 0;
    let newCart: Cart[] = session.cart;
    newCart.forEach((current: Cart) =>  {
      if (current.id > max)
        max = current.id;
    })
    newCart.push({id: max + 1, name: name, price: price});
    setSession({...session, cart: newCart})
  }

  return (
    <>
      <SessionContext.Provider value={{session, login, logout, removeItem, saveItem}}>
        {children}
      </SessionContext.Provider>
    </>
  );
};

// context 사용
export const useSession = () => useContext(SessionContext);