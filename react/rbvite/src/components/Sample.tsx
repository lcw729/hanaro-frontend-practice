import { ChangeEvent, useState } from 'react';

const CITIES = ['서울', '대전', '대구', '부산', '창원']

export default function Sample() {
  const [nickname, setNickname] = useState('Hong');
  const [address, setAddress] = useState('서울');
  const [age, setAge] = useState(0);
  const changeNickname = (e: ChangeEvent<HTMLInputElement>) => setNickname(e.currentTarget.value);
  const changeAddress = (e: ChangeEvent<HTMLInputElement>) => setAddress(e.currentTarget.value);
  return <>
    <div>
      <h1>Sample</h1>
      <h5>Nickname: {nickname}({age}세) - {address}</h5>
      <input
        type={'text'}
        value={nickname}
        onChange={changeNickname}
      />
      <input
        type={'number'}
        value={age}
        onChange={(e) => setAge(+e.currentTarget.value)}
      />
      <input
        type={'text'}
        value={address}
        onChange={changeAddress}
      />
      <select onChange={(e) => setAddress(e.currentTarget.value)}>
        {CITIES.map((item: string) => (
            <option key={item} value={item}>
              {item}
            </option>
          )
        )}
      </select>
    </div>
  </>;
}