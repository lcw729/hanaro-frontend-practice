
type Props = {
  loginUser: LoginUser,
  logout: () => void
}
export const Profile = ({loginUser, logout}: Props) => {
  return <>
    <div>
      <h3>{loginUser.name}</h3>
      <button onClick={logout}>SignOut</button>
    </div>
  </>
};