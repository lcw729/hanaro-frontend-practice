import { LoginUser } from '../App.tsx';
import { forwardRef } from 'react';


type Props = {
  loginUser: LoginUser;
  logout: () => void;
};

export const Profile = forwardRef(
  ({loginUser, logout}: Props,) =>
{
  console.log('@@@Profile');
  return (
    <>
      <div>User Name: {loginUser?.name}</div>
      <button onClick={logout}>Logout</button>
    </>
  );
 }
);