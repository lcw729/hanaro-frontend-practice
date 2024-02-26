// import { PropsWithChildren } from 'react';

import { useCounter } from '../contexts/counter-context.tsx';

type Props = {
  name: string,
  children: React.ReactNode
}
// export const Hello = ({
//                         name,
//                         age,
//                         plusCount,
//                         children} : PropsWithChildren<Props>) => {

// const Hello = ({
//                                   name,
//                                   age,
//                                   plusCount,
//                                   children,
//                                 }: Props,
// ) => {
const Hello: React.FC<Props> = ({
                 name,
                 children,
               }
) => {
  const {count: age, plusCount} = useCounter();
  return (
    <div style={{ border: '1px solid green' }}>
      <h3>
        Hello, {name} ({age})
      </h3>
      <button onClick={plusCount}>Plus Age</button>
      {children}
    </div>
  );
};

export default Hello;