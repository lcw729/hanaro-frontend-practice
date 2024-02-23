import { useReducer } from 'react';

export const useToggle = (defaultFlag: boolean = false) => {
  // const [flag, set] = useState(defaultFlag);
  // const makeToggle = () => set(!flag);

  const [flag, makeToggle] = useReducer((pre) => !pre, defaultFlag);

  return [flag, makeToggle] as const;
}