import {createContext, PropsWithChildren, useCallback, useContext, useState} from "react";

type User = {
  name: string;
  age: number;
};

const DefaultUser: User = { name: 'Guest', age: 0 };

type ContextValue = {
  current: User;
  setName: (name: string) => void;
  setAge: (age: number) => void;
}

const OutletContext = createContext<ContextValue | undefined>(undefined);

export function OutletProvider({children}: PropsWithChildren) {
  const [user, setUser] = useState<User>(DefaultUser);

  const setName = useCallback((name: string) => {
    console.log('name : ', name);
    setUser((currentUser) => ({...currentUser, name}));
  }, [setUser])

  const setAge = useCallback((age: number) => {
    console.log('age : ', age);
    setUser((currentUser) => ({...currentUser, age}));
  }, [setUser]);

  const contextValue: ContextValue = {
    current: user,
    setName,
    setAge
  };

  return (
    <OutletContext.Provider value={contextValue}>
      {children}
    </OutletContext.Provider>
  );
}

export const useOutletContext = () => useContext(OutletContext);