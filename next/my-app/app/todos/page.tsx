import React from "react";
import Link from "next/link";
import {useRouter} from "next/navigation";

export type Todo = {
    "userId": number,
    "id": number,
    "title": string,
    "completed": boolean,
};

export default async function Todos() {
    return <></>
}