import {ReactNode} from "react";
import Link from "next/link";

const TIMES = ['morning', 'afternoon', 'evening'];
export default function HiLayout({children}: {children: ReactNode}) {
    return <>
        <h1>Hi~</h1>
        <ul className="grid grid-cols-3 text-blue">
            {TIMES.map((time) => (
                <li key={time}>
                    <Link href={`/hi/${time}`}>{time}</Link>
                </li>
            ))}
        </ul>
        <div>{children}</div>
    </>
}