'use client';
import React, {useReducer} from "react";
import Link from "next/link";
import Login from "@/app/parallel/@login/page";

export default function ParallelLayout({
                                           children,
                                           profile,
                                           login,
                                       }: {
    children: React.ReactNode;
    profile: React.ReactNode;
    login: React.ReactNode;
}) {
    const [isLogin, toogleLogin] = useReducer((pre) => !pre, false);
    return (
        <>
            <h1>
                ParallelLayout
                <button onClick={toogleLogin}>
                    Toggle Login
                </button>
            </h1>
            <div className="border border-dotted flex justify-around">
                <div>{profile}</div>
                <div>{login}</div>
            </div>
            {children}
            {isLogin ? (
                <div className="border border-dotted border-red-500 flex justify-around">
                    <Link href='/parallel/aaa'>Login/AAA</Link>
                    <Link href='/parallel/bbb'>Profile/BBB</Link>)
                    <Link href='/parallel/ccc'>Login/CCC</Link>
                    <Link href='/parallel/ddd'>Profile/DDD</Link>
                </div>
            ) : Login
            }
            <Link href='/parallel/xxx'>XXX</Link>
        </>
    );
};