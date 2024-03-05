import {Todo} from "@/app/todos/page";

type Props = {
    params: { todoid: number }
}

export default async function TodoDetail({params}: Props) {
    const todo = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.todoid}`).then((res) => res.json()) as Todo;

    return <>
        <div className="border border-dotted border-red-500 w-1/2 items-start p-10">
            <h1 className="text-lg">{todo.id}. {todo.title}</h1>
            <p>{todo.userId}</p>
            {todo.completed
                ? <div>작업을 완료하였습니다.</div>
                : <div>수행하지않은 작업입니다.</div>
            }
        </div>
    </>
}