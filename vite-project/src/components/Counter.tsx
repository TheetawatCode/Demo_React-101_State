import { ReactNode, useState } from "react";

type CounterProps = {
    setCount: React.Dispatch<React.SetStateAction<number>>
    children: ReactNode
    handleIncreaseCount: () => void;
    handleDecreaseCount: () => void;
};

function Counter({
    setCount,
    children,
    handleIncreaseCount,
    handleDecreaseCount
}: CounterProps) {
    return (
        <>
            <h1>Counter</h1>
            <div>{children}</div>
            <button onClick={handleIncreaseCount}>Increase</button>
            <button onClick={handleDecreaseCount}>Decrease</button>
            
        </>
    )
}

export default Counter