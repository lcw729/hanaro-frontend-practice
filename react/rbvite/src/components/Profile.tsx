import { useSession } from '../contexts/session-context.tsx';

export const Profile = () => {
  const {session: {loginUser}, logout} = useSession();
  return <>
    <div>
      <h3>{loginUser?.name}</h3>
      <button onClick={logout}>SignOut</button>
    </div>
  </>
};