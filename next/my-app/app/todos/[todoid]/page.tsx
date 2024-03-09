import {Todo} from "@/app/todos/page";
import CheckBox from "@/components/CheckBox";

type Props = {
    params: { todoid: number }
}

const getTodo = async (todoId: number)  => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
  return res.json();
};

export default async function TodoDetail({params}: Props) {
    const {id, title, completed} : Todo = await getTodo(params.todoid);
    const checkedId = `todos-${id}`;

    return <>
        <div className="border border-dotted border-red-500 w-1/2 items-start p-10">
            <h1 className="text-lg">{id}. {title}</h1>
            <CheckBox checked={completed} label={title}/>
        </div>
    </>
}