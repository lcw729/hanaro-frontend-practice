import { useState } from 'react';

export const useToggle = (defaultFlag: boolean = false) => {
  const [flag, set] = useState(defaultFlag);
  const makeToggle = () => set(!flag);

  return [flag, makeToggle] as const;
}