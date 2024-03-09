import React, {PropsWithChildren} from "react";
import Todos from "@/app/todos/page";
import Link from "next/link";

export type Todo = {
    "userId": number,
    "id": number,
    "title": string,
    "completed": boolean,
};

const getTodos = async (userId = 1) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);

    return res.json();
}

export default async function TodoLayout({children}: PropsWithChildren) {
    const todos: Todo[] = await getTodos(1);

    return <>
        <h1>Todos</h1>
        <div className="flex flex-row">
            <div className="border border-dotted border-red-500 w-1/2 flex flex-col">
                <ul>
                    {
                        todos.map((todo: Todo) => (
                            <li>
                                <Link href={`/todos/${todo.id}`}>
                                    {todo.id}. {todo.title}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
            {children}
        </div>
    </>
}