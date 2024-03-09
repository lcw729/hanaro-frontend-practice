import { useSession } from '../contexts/session-context.tsx';
import { forwardRef, Ref } from 'react';

export const Profile = forwardRef((_: unknown, ref: Ref<HTMLButtonElement>) => {
  const {session: {loginUser}, logout} = useSession();
  return <>
    <div>
      <h3>{loginUser?.name}</h3>
      <div>
        <button onClick={logout} ref={ref}>SignOut</button>
      </div>
    </div>
  </>
});

Profile.displayName = 'Profile';