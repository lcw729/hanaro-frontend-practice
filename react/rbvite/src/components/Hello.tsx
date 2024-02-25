// import { PropsWithChildren } from 'react';

type Props = {
  name: string,
  age: number,
  plusCount: () => void;
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
                 age,
                 plusCount,
                 children,
               }
) => {
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