import Heading from './components/Heading';
import Button from './components/Button';
import Counter from './components/Counter';
import { useState } from "react";

function App() {
    const [count, setCount] = useState<number>(0);
    const handleIncreaseCount = () => {
        setCount(count + 1);
    };
    const handleDecreaseCount = () => {
        setCount(count - 1);
    };
    return (
        <>
            <Counter
                setCount={setCount}
                handleIncreaseCount={handleIncreaseCount}
                handleDecreaseCount={handleDecreaseCount}
            >
                Count = {count}
            </Counter>
            <Heading count={count}></Heading>

        </>
    );
}

export default App;
