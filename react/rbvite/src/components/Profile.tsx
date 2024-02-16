import { LoginUser } from '../App.tsx';


type Props = {
  loginUser: LoginUser;
  logout: () => void;
};

export const Profile = ({loginUser, logout}: Props) => {
  console.log('@@@Profile');
  return (
    <>
      <div>User Name: {loginUser?.name}</div>
      <button onClick={logout}>Logout</button>
    </>
  );
};