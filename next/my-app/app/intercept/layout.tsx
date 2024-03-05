import {PropsWithChildren} from "react";
import Link from "next/link";

export default function InterceptLayout({children}: PropsWithChildren) {
    return <>
        <div className="flex flex-row border border-red-500 justify-around">
            <Link href='/intercept/ic1'>IC1</Link>
            <Link href='/intercept/ic2'>IC2</Link>
            <Link href='/intercept/ic3'>IC3</Link>
        </div>
        {/*parallel route*/}
        <div>{children}</div>
    </>
}