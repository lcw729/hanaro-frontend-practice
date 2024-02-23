import { useLayoutEffect, useState } from 'react';

type Position = {
  x : number,
  y : number
}

export const MouseCapture = () => {

  const [position, setPosition] = useState({x: 0, y: 0});
  const catchPosition = ({ x, y }: Position) => {
    setPosition({x, y});
  }

  useLayoutEffect(() => {
    window.addEventListener('mousemove', catchPosition);

    return () => window.removeEventListener('mousemove', catchPosition);
  });

  return <>
    <div>
      <small>{JSON.stringify(position)}</small>
    </div>
  </>
}