// import { PropsWithChildren } from 'react';

import { useCounter } from '../contexts/counter-context.tsx';
import { PropsWithChildren } from 'react';
import { useSession } from '../contexts/session-context.tsx';
//
// type Props = {
//   name: string,
//   children: React.ReactNode
// }
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
const Hello = ({
                 children,
               }: PropsWithChildren) => {
  const { session } = useSession();
  const name = session.loginUser?.name || 'Guest';
  const {count: age, plusCount, minusCount} = useCounter();
  return (
    <div style={{ border: '1px solid green' }}>
      <h3>
        Hello, {name} ({age})
      </h3>
      <button onClick={plusCount}>Plus Age</button>
      <button onClick={() => minusCount()}>Minus Age</button>
      {children}
    </div>
  );
};

export default Hello;