import { PropsWithChildren } from 'react';

type props = {
  name: string,
  age: number,
  plusCount: () => void,
  // children: React.ReactNode
};
export const Hello = ({name, age, plusCount, children}: PropsWithChildren<props>) => {
  return (
    <div style={{border: '1px solid green'}}>
      <h3>
        Hello, {name} {age}
      </h3>
      <button onClick={plusCount}>Plus Age</button>
      <div>{children}</div>
    </div>
  );
};

