import React from "react";
import Link from "next/link";

export default function IC3() {
    return <>
        <h1>IC3 Page</h1>
        <div className="flex flex-row border border-red-500 justify-around">
            <Link href='/hello'>hello</Link>
            <Link href='/intercept/ic2'>IC2</Link>
        </div>
    </>;
}