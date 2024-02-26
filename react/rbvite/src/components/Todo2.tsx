import React, { useState, useEffect, useRef } from 'react';

function Debounce2() {
  const [inputValue, setInputValue] = useState('');
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  console.log('Declare-Area!!!!')

  useEffect(() => {
    if(timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = window.setTimeout(() => {
      console.log('debounce... done', inputValue);
    }, 500); // 예시로 500ms 디바운스 시간 설정

    // 컴포넌트 언마운트 또는 다음 useEffect 실행 전 clearTimeout 실행
    return () => {
      if(timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [inputValue]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type='number' value={inputValue} onChange={handleChange} />
        <button type='submit'>Debounce</button>
      </form>
    </>
  );
}

export default Debounce2;
