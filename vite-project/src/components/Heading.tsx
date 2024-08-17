import { ReactNode } from "react";

type HeadingProps = {
    count: number;
}

function Heading({ count }: HeadingProps) {
    return (
        <h1>{count}</h1>
    )
}

export default Heading