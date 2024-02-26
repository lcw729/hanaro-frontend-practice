import { FormEvent, useCallback, useReducer, useRef } from 'react';

type Todo = {
  todos: string[]
};

const initialState: Todo = {
  todos: []
};

type Action = {
  type: 'addTodo',
  payload: string,
}
const reducer = (state: Todo, {type, payload}: Action) => {
  switch (type) {
    case 'addTodo':
      return {todos: [...state.todos, payload]};
  }
}

function Todo() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const newTodoRef = useRef<HTMLInputElement | null>(null);
  const addTodo = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('addTodo!');
    if (!newTodoRef.current?.value) {
      alert('TODO를 작성해주세요.')
    } else {
      dispatch({ type: 'addTodo', payload: newTodoRef.current?.value });
    }
  }, [])

  return <>
    {/*<form onSubmit={() => addTodo}>*/}
    <form onSubmit={(e) => addTodo(e)}>
      <input type="text" ref={newTodoRef}/>
      <button type='submit'>Add Todo</button>
    </form>
    <ul>
      {
        state.todos.map((item: string, index: number) => (
            <li key={index} value={item}>{item}</li> // index를 key로 사용하면 안된다.
          )
        )
      }
    </ul>
  </>
}

export default Todo;