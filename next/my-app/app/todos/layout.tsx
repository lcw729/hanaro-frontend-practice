import React, {PropsWithChildren} from "react";
import Todos from "@/app/todos/page";
import Link from "next/link";

export type Todo = {
    "userId": number,
    "id": number,
    "title": string,
    "completed": boolean,
};


export default async function TodoLayout({children}: PropsWithChildren) {
    const todos: Todo[] = await fetch('https://jsonplaceholder.typicode.com/todos').then((res) => res.json()) as Todo[];

    return <>
        <h1>Todos</h1>
        <div className="flex flex-row">
            <div className="border border-dotted border-red-500 w-1/2 flex flex-col">
                {
                    todos.map((todo: Todo) => (
                        <Link href={`/todos/${todo.id}`}>{todo.id}. {todo.title}</Link>
                    ))
                }
            </div>
            {children}
        </div>
    </>
}