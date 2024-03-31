import { useEffect, useRef, useState } from 'react';

export default function Effect() {
  const [isShow, setShow] = useState<boolean>(false);
  const hRef = useRef<HTMLHeadingElement>(null);
  const [firstName, setFirstName] = useState<String>('');
  const [lastName, setLastName] = useState<String>('');
  const fullName = `${firstName} ${lastName}`;

  /*
  useEffect(() => {
    setFullName(`${firstName} ${lastName}`);
  }, [firstName, lastName]);
   */

  // const [pos, setPos] = useState(0);
  /*
  const [r, rerender] = useState(0);
  const [badSec, setBadSec] = useState(0);
  const [goodSec, setGoodSec] = useState(0);
  // cnt를 변경한다고, Obj의 주소가 바뀌지는 않는다.
  const [obj] = useState({cnt: 0});

  console.log('***********');

  useEffect(() => {
    setInterval(() => setBadSec((p) => p + 1), 1000);
  }, [obj.cnt]);

  useEffect(() => {
    const intl = setInterval(() => setGoodSec((p) => p + 1), 1000);

    return () => clearInterval(intl);
  }, [r]);
   */

  /*
  useEffect(() => {
    console.log(r);
    return () => {console.log("clean-up!")}
  }, [r]);
  */

  /*
  const primitive = 123;
  useEffect(() => {
    console.log('effect primitive!!!');

    return () => console.log('clean-up primitive');
  }, [primitive]);

  const array = [1,2,3];
  useEffect(() => {
    console.log('effect Array!!!');
  }, [array]);
  */

  useEffect(() => {
    if(!hRef.current) return;

    const newPos = hRef.current.getBoundingClientRect().top + 100;
    hRef.current.style.top = `${newPos}px`;
  }, [isShow]);

  return <>
    {/*<h3>{badSec} :: {goodSec}</h3>*/}
    {/*<input type="text" onChange={() => rerender((p) => p + 1)} />*/}
    <h2>{fullName}</h2>
    <input type="text" onChange={(e) => setFirstName(e.currentTarget.value)}/>
    <input type="text" onChange={(e) => setLastName(e.currentTarget.value)}/>
    <button onClick={() => setShow(!isShow)}>Show Effect</button>
    { isShow && <h1 ref={hRef}>Article!!!</h1>}
  </>;
}